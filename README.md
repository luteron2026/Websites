# Website showcase

Private previews of client websites. Each client gets a short secret link that shows **only their** options; your dashboard link shows everything.

| Page | Path | Who sees it |
|---|---|---|
| Dashboard (all clients) | `/<admin code>/` (in `clients.json` → `admin`) | Only you |
| Client page | `/<slug>-<code>/`, e.g. `/gilsulate-bkub/` | That client |
| Website itself | `/v/<id>/` (random id, opened from the client page) | That client |
| Root `/` and anything unknown | "This page is private" | Everyone else |

Client pages contain only their own client's data, so nothing in one client's page points to another client. All pages are `noindex`, and `robots.txt` blocks search engines.

## Folder layout

```
clients.json                 the list of clients, links and options
sites/<client>/<option>/     each website's source (a Vite/React project or plain HTML)
showcase/                    the showcase pages (dashboard, client page, viewer)
scripts/                     build + helper scripts
.github/workflows/deploy.yml builds everything and publishes to GitHub Pages
```

## Adding a website

1. Put the site in its own folder, e.g. `sites/gilsulate/option-2/`. It can be either:
   - a project with a `package.json` and a `build` script that outputs to `dist/` (Vite: set `base: './'` in `vite.config.js`), or
   - plain files with an `index.html` (copied as-is). Use relative paths (`img/a.jpg`, not `/img/a.jpg`).
2. Register it (this generates the secret codes for you):
   ```bash
   npm run add -- "Gilsulate International" sites/gilsulate/option-2 "Option 2" "Light and clean"
   ```
   A new client name creates a new client with its own link. You can edit titles, subtitles, notes and the intro text in `clients.json` afterwards.
3. Commit and push to `main`. GitHub builds and publishes it automatically.

See every link:
```bash
npm run links -- https://luteron2026.github.io/Websites
```

Open pages update themselves: each build changes `version.json`, and the client page, dashboard and sites check it when opened, when you return to the tab and once a minute. They reload when it changes, unless someone has typed into a form.

Preview locally:
```bash
npm run build && npm run serve
```

## One-time GitHub setup

Repo **Settings → Pages → Build and deployment → Source: GitHub Actions**.

## About privacy (please read)

- **Make this repository private.** If it's public, anyone can read `clients.json` and every client's source code on github.com. Publishing Pages from a private repo needs GitHub Pro (or Team). The free alternative is Cloudflare Pages, which can deploy from a private repo with the same build (`node scripts/build.mjs`, output `dist`).
- Links are secret, not password-protected. Anyone a client forwards their link to can see it.
- Copy protection is a deterrent only: right-click, Save (Ctrl/⌘+S), View Source (Ctrl/⌘+U), dev-tools shortcuts and printing are blocked, and the code is minified. A browser has to download a page to show it, so a technical person can still get the files.
- To revoke a client's access, change their `code` (or an option's `id`) in `clients.json` and push. The old link stops working.
