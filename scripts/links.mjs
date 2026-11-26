// Print every link. Pass your site address to get full URLs:
//   npm run links -- https://luteron2026.github.io/Websites
import fs from 'node:fs'
const cfg = JSON.parse(fs.readFileSync(new URL('../clients.json', import.meta.url), 'utf8'))
const base = (process.argv[2] || '').replace(/\/$/, '')
console.log(`Dashboard (all websites):  ${base}/${cfg.admin}/`)
for (const c of cfg.clients) console.log(`${c.name.padEnd(26)} ${base}/${c.slug}-${c.code}/   (${c.options.length} option${c.options.length === 1 ? '' : 's'})`)
