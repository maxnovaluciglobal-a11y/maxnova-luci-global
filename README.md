# maxnova-luci-global

Corporate site of MAXNOVA & LUCI GLOBAL LLC. Astro (static) + one Vercel serverless function for the contact form. English at `/`, Spanish at `/es/`.

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
| Portfolio entries (name, sector, market, status, link) | `holdings` in `src/i18n/content.ts` |
| Product screenshots | `src/assets/shots/` (1440×720 PNG; Astro converts to AVIF/WebP) |
| Product logos | `src/assets/logos/` |
| Layout and sections | `src/components/Home.astro` |
| Colours, type, spacing | `src/styles/global.css` (tokens at the top) |
| `<head>`, SEO, hreflang, Open Graph | `src/layouts/Base.astro` |
| JSON-LD | `src/components/schema.ts` (keep it equal to what the page shows) |
| robots, sitemap, llms.txt, icons, OG images | `public/` |
| Security headers | `vercel.json` |

## Contact form

`api/contact.js` sends through Resend. Set these in Vercel → Project → Settings → Environment Variables (never in the repo):

- `RESEND_API_KEY` (required; without it the form answers 500 and the page shows the email as fallback)
- `CONTACT_TO_EMAIL` (optional, default `maxnovaluciglobal@gmail.com`)
- `CONTACT_FROM_EMAIL` (optional; until a domain is verified in Resend, the default `onboarding@resend.dev` only delivers to the Resend account owner's email)

## Deploy

Vercel project `maxnova-luci-global` (team `maxnovaluci-global`, Hobby). Push to a branch → preview; merge to `main` → production.
Commits must be authored by `maxnovaluciglobal@gmail.com` (set in this repo's local git config), or Vercel blocks the deploy.

## When the domain is bought

Replace `https://maxnova-luci-global.vercel.app` in `astro.config.mjs`, `src/i18n/content.ts` (`SITE_URL`), `public/robots.txt`, `public/sitemap.xml` and `public/llms.txt`; add the domain in Vercel with a 301 from the `.vercel.app` URL; verify it in Search Console.
