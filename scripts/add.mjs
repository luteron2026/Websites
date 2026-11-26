// Register a website in clients.json with fresh secret codes.
//   npm run add -- "Client Name" sites/client/option-2 "Option 2" "Short subtitle"
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { code, slugify } from './codes.mjs'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const FILE = path.join(ROOT, 'clients.json')
const [name, folder, title, subtitle = ''] = process.argv.slice(2)
if (!name || !folder) {
  console.log('Usage: npm run add -- "Client Name" sites/<client>/<option-folder> ["Option title"] ["Subtitle"]')
  process.exit(1)
}
if (!fs.existsSync(path.join(ROOT, folder))) { console.error(`Folder not found: ${folder}`); process.exit(1) }

const cfg = JSON.parse(fs.readFileSync(FILE, 'utf8'))
const used = new Set(cfg.clients.flatMap((c) => c.options.map((o) => o.id)))
let client = cfg.clients.find((c) => c.name.toLowerCase() === name.toLowerCase())
if (!client) {
  client = { name, slug: slugify(name), code: code(4), intro: '', options: [] }
  cfg.clients.push(client)
  console.log(`New client: ${name}`)
}
let id; do id = code(6); while (used.has(id))
const opt = { id, title: title || `Option ${client.options.length + 1}`, subtitle, notes: '', path: folder.replace(/\\/g, '/').replace(/\/$/, '') }
client.options.push(opt)
fs.writeFileSync(FILE, JSON.stringify(cfg, null, 2) + '\n')
console.log(`Added "${opt.title}" for ${client.name}`)
console.log(`Client link: /${client.slug}-${client.code}/`)
