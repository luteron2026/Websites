// Preview the built showcase locally: npm run build && npm run serve
import http from 'node:http'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
const DIR = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'dist')
const T = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.json': 'application/json', '.woff2': 'font/woff2', '.txt': 'text/plain' }
const port = Number(process.env.PORT || 4321)
http.createServer((req, res) => {
  let p = path.join(DIR, decodeURIComponent(req.url.split('?')[0]))
  if (!p.startsWith(DIR)) return res.writeHead(403).end()
  if (fs.existsSync(p) && fs.statSync(p).isDirectory()) {
    if (!req.url.split('?')[0].endsWith('/')) return res.writeHead(301, { Location: req.url + '/' }).end()
    p = path.join(p, 'index.html')
  }
  if (!fs.existsSync(p)) { res.writeHead(404, { 'Content-Type': 'text/html' }); return res.end(fs.readFileSync(path.join(DIR, '404.html'))) }
  res.writeHead(200, { 'Content-Type': T[path.extname(p)] || 'application/octet-stream' })
  fs.createReadStream(p).pipe(res)
}).listen(port, () => console.log(`Showcase at http://localhost:${port}/`))
