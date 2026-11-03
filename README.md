# maxnova-luci-global

Corporate site of MAXNOVA & LUCI GLOBAL LLC on https://maxnovaluci.com. Astro (static) + two Vercel functions: `api/contact.js` (form → Resend) and `api/status.js` (live product checks for the network map). English at `/`, Spanish under `/es/` with translated slugs.

The brief this site was built from: [`docs/prompt-maestro.md`](docs/prompt-maestro.md). Product truth: [`PRODUCT.md`](PRODUCT.md). Test report: [`docs/QA.md`](docs/QA.md).

## Commands (verified 2026-10-18, Node 24)

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # static output in dist/
npm run preview   # serve dist/ locally (the /api function does not run locally)
```

## Where to change things

| What | Where |
|---|---|
| All text, both languages (cover, portfolio, services, FAQ, form labels) | `src/i18n/content.ts` |
| Products, prices, demos, what is still missing | `products` in `src/i18n/content.ts` |
| Shipping log (dated, public-safe facts only) | `log` in `src/i18n/content.ts` |
| Routes and sitemap dates | `routes` and `lastmod` in `src/i18n/content.ts` (the sitemap is generated) |
| Live network map | `src/components/Network.astro` + `api/status.js` |
| Product screens | `src/assets/screens/` (1440×900 at 2x; Astro converts to AVIF/WebP) |
| Product logos | `src/assets/logos/` |
| Page layouts | `src/views/*.astro`; shell (nav, footer, head) in `src/layouts/Base.astro` |
| Colours, type, spacing | `src/styles/global.css` (tokens at the top) |
| `<head>`, SEO, hreflang, Open Graph | `src/layouts/Base.astro` |
| JSON-LD | `src/components/schema.ts` (keep it equal to what the page shows) |
| robots, llms.txt, icons, OG images | `public/` |
| Security headers | `vercel.json` |

## Contact form

`api/contact.js` sends through Resend. Set these in Vercel → Project → Settings → Environment Variables (never in the repo):

- `RESEND_API_KEY` (required; without it the form answers 500 and the page shows the email as fallback)
- `CONTACT_TO_EMAIL` (optional, default `maxnovaluciglobal@gmail.com`)
- `CONTACT_FROM_EMAIL` (optional; set `Maxnova & Luci Global <web@maxnovaluci.com>` once maxnovaluci.com is verified in Resend. The `onboarding@resend.dev` default only delivers to the Resend account owner's email)

Abuse protection: the handler rejects foreign `Origin` headers and has a honeypot; the real limit is the Vercel Firewall rule "Contact form rate limit" (5 POSTs per IP per 10 minutes on `/api/contact`).

## Deploy

Vercel project `maxnova-luci-global` (team `maxnovaluci-global`, Pro). Push to a branch → preview; merge to `main` → production.
Commits must be authored by `maxnovaluciglobal@gmail.com` (set in this repo's local git config), or Vercel blocks the deploy.

## Domain

Canonical: `https://maxnovaluci.com` (set in `astro.config.mjs`, `src/i18n/content.ts`, `public/robots.txt`, `public/sitemap.xml`, `public/llms.txt`). DNS lives in Cloudflare with DNS-only A records to Vercel (`76.76.21.21`); keep the proxy off. `www` and `maxnova-luci-global.vercel.app` 301 to the apex through domain-level 308 redirects in Vercel (Project → Settings → Domains). Host rules in `vercel.json` did not fire here; don't move them back.
