// Builds every website listed in clients.json and generates the showcase pages.
//
// Output (dist/):
//   index.html, 404.html        neutral "private" page, lists nothing
//   <admin>/                    your dashboard with every client (secret link)
//   <slug>-<code>/              one page per client, contains ONLY that client's options
//   v/<id>/                     each built website, under an unguessable id
//
// Usage: node scripts/build.mjs            (build everything)
//        node scripts/build.mjs --pages    (skip site builds, regenerate pages only)
import { execSync } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const OUT = path.join(ROOT, 'dist')
const SHOW = path.join(ROOT, 'showcase')
const pagesOnly = process.argv.includes('--pages')
const cfg = JSON.parse(fs.readFileSync(path.join(ROOT, 'clients.json'), 'utf8'))

const read = (f) => fs.readFileSync(path.join(SHOW, f), 'utf8')
const GUARD = `<script>${read('guard.js')}</script>`
const NOINDEX = '<meta name="robots" content="noindex, nofollow, noarchive" />'
const esc = (s = '') => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]))
const json = (o) => JSON.stringify(o).replace(/</g, '\\u003c')
const clientDir = (c) => `${c.slug}-${c.code}`

function write(rel, content) {
  const f = path.join(OUT, rel)
  fs.mkdirSync(path.dirname(f), { recursive: true })
  fs.writeFileSync(f, content)
}

// Add noindex + the copy-protection guard to every HTML file of a built site.
function protect(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const f = path.join(dir, e.name)
    if (e.isDirectory()) protect(f)
    else if (e.name.endsWith('.html')) {
      let h = fs.readFileSync(f, 'utf8')
      if (h.includes('data-showcase-guard')) continue
      h = /<head[^>]*>/i.test(h)
        ? h.replace(/<head[^>]*>/i, (m) => `${m}\n${NOINDEX}\n${GUARD}`)
        : `${NOINDEX}\n${GUARD}\n${h}`
      fs.writeFileSync(f, h)
    }
  }
}

function buildSite(opt) {
  const src = path.join(ROOT, opt.path)
  const dest = path.join(OUT, 'v', opt.id)
  if (!fs.existsSync(src)) throw new Error(`Missing folder for ${opt.title}: ${opt.path}`)
  fs.rmSync(dest, { recursive: true, force: true })
  if (fs.existsSync(path.join(src, 'package.json'))) {
    // A project with a build step (Vite, React, etc.)
    console.log(`\n▸ Building ${opt.path}`)
    const sh = (cmd) => execSync(cmd, { cwd: src, stdio: 'inherit' })
    if (!fs.existsSync(path.join(src, 'node_modules'))) sh(fs.existsSync(path.join(src, 'package-lock.json')) ? 'npm ci' : 'npm install')
    sh('npm run build')
    fs.cpSync(path.join(src, opt.outDir || 'dist'), dest, { recursive: true })
  } else {
    // A plain HTML/CSS/JS site: copied as-is
    console.log(`\n▸ Copying ${opt.path}`)
    fs.cpSync(src, dest, { recursive: true, filter: (f) => !/(^|[/\\])(\.git|node_modules)([/\\]|$)/.test(f) })
  }
  protect(dest)
}

function page(file, { title, data, base }) {
  return read(file)
    .replace('<!--HEAD-->', `${NOINDEX}\n<link rel="stylesheet" href="${base}showcase.css" />\n${GUARD}`)
    .replaceAll('%TITLE%', esc(title))
    .replace('/*DATA*/null', json(data))
    .replace('<!--SCRIPT-->', `<script src="${base}showcase.js"></script>`)
}

// ---------- build ----------
if (!pagesOnly) fs.rmSync(OUT, { recursive: true, force: true })
fs.mkdirSync(OUT, { recursive: true })

const ids = new Set()
const codes = new Set([cfg.admin])
for (const c of cfg.clients) {
  if (codes.has(clientDir(c))) throw new Error(`Duplicate client link: ${clientDir(c)}`)
  codes.add(clientDir(c))
  for (const o of c.options) {
    if (ids.has(o.id)) throw new Error(`Duplicate option id: ${o.id}`)
    ids.add(o.id)
    if (!pagesOnly) buildSite(o)
  }
}

write('showcase.css', read('showcase.css'))
write('showcase.js', read('showcase.js'))
write('robots.txt', 'User-agent: *\nDisallow: /\n')
write('.nojekyll', '')
// Root and 404 are self-contained (no external CSS), so they work at any path.
const blank = read('private.html').replace('<!--HEAD-->', `${NOINDEX}\n${GUARD}`)
write('index.html', blank)
write('404.html', blank)

// Each client page gets ONLY its own options baked in: nothing about other clients ships to it.
const strip = (c) => ({ name: c.name, intro: c.intro || '', options: c.options.map(({ id, title, subtitle, notes }) => ({ id, title, subtitle: subtitle || '', notes: notes || '' })) })
for (const c of cfg.clients) {
  write(`${clientDir(c)}/index.html`, page('client.html', { title: `${c.name} · Website options`, data: strip(c), base: '../' }))
}

write(`${cfg.admin}/index.html`, page('admin.html', {
  title: 'All websites',
  data: cfg.clients.map((c) => ({ ...strip(c), link: clientDir(c) })),
  base: '../',
}))

console.log('\n✓ Showcase built in dist/')
console.log(`  Your dashboard:  /${cfg.admin}/`)
for (const c of cfg.clients) console.log(`  ${c.name.padEnd(28)} /${clientDir(c)}/`)
