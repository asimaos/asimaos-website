# Asima OS website

The website of Asima OS: a static site made with [Astro](https://astro.build), published on
Cloudflare Pages (free plan) at `https://asimaos.pages.dev`. No server code, no cookies, no
third-party scripts.

## Where things are

| What | Where |
| --- | --- |
| **Every name, address and release fact** | `site.config.mjs`: the only place to change them |
| Pages | `src/pages/` (start page, features, apps, download, about, credits, community, security, privacy, search, 404) |
| Guides | `src/content/guides/`, **imported** from the OS's `docs/guides` (their one home): `scripts/import-guides.py` |
| Credits | `src/credits/credits.md`, **imported** from the `CREDITS.md` of the OS, of Asima Hub and of this website (each its own list's home): `scripts/import-credits.py` |
| News | `src/content/news/` (Markdown; the RSS feed and Asima Hub's news are made from it) |
| Asima Hub's feed | `public/feed/feed.json` and its signature, made by `scripts/make-feed` from the news and `feed/` (releases, app groups, links) |
| App screenshots | `src/assets/screens/`, **imported** from the renders of the OS and of Asima Hub: `scripts/import-screenshots.sh` |
| Look | `src/styles/global.css`: the apps' Asima UI colours, light and dark |
| Security headers | `src/lib/headers.mjs` writes `dist/_headers` (Content-Security-Policy and the rest) |
| Preview picture and PNG icons | `public/og.png`, `public/*.png`, made by `scripts/make-images.mjs` |

In Markdown, write names as tokens: `%os%` (Asima OS), `%oslinux%` (Asima OS Linux), `%updater%`,
`%maintenance%`, `%manager%`, `%gaming%`, `%dev%`, `%hub%`, `%rescue%`. They are filled in from
`site.config.mjs` when the site is built.

## Building

Everything runs in a rootless Podman container (`scripts/run.sh`); nothing is installed on the PC.

```bash
scripts/run.sh npm ci                 # the packages, exactly as in package-lock.json
scripts/run.sh npm run build          # the site in dist/, with the search index
scripts/run.sh npm run preview        # see it at http://localhost:4321
scripts/run.sh npm run dev            # live editing at http://localhost:4321
```

Packages are pinned exactly, and were installed with `npm install --before=<date two weeks back>`,
so nothing brand-new (and possibly compromised) gets in. Update them the same way.

After the guides or the apps change in the OS (the OS's folder, `../asimaos` by default, or the path
given):

```bash
scripts/import-guides.py [OS]         # docs/guides → src/content/guides
scripts/import-screenshots.sh [OS [HUB]]   # asimaos/apps/screenshots, asimaos-hub/screenshots → src/assets/screens
scripts/import-credits.py [OS [HUB]]       # the three CREDITS.md → src/credits/credits.md
```

## Asima Hub's feed

Asima Hub reads one signed feed from this site. After a news post or a release, run
`scripts/make-feed`: it writes `public/feed/feed.json` from the news posts and `feed/` (add a
published version to `feed/releases.json`: version, channel, date, notes, and the update file and
the ISO, each with its https address, size and SHA-256), signs it with the feed key
(`FEED_KEY`, default `../asimaos/build/keys/feed`) and checks the signature. Commit both files. The
feed key never goes into a repository; its public half is built into Asima Hub.

## Publishing on Cloudflare Pages

1. Cloudflare dashboard → Workers & Pages → Create → Pages → connect the repository
   (`asimaos/asimaos-website`).
2. Build command `npm run build`, output folder `dist`, environment variable `NODE_VERSION=24`.
3. Each push to `main` publishes the site; other branches get preview addresses, which search
   engines are told not to index.

Optional, all free: Cloudflare Web Analytics (no cookies; then set `analytics: true` in
`site.config.mjs`), and a name of our own such as `asimaos.eu.org` (then change `site.url`, and
redirect `asimaos.pages.dev` to it). Register the site in Google Search Console and Bing Webmaster
Tools; the sitemap is `/sitemap-index.xml`.

## The first public release

`release.public` in `site.config.mjs` is `false`: the Download page says the release is being
tested and shows no download buttons. When the ISO is on SourceForge, fill in the release's
details there and set it to `true`.

## License

GPL-3.0-or-later, like Asima OS.
