# QA — holding redesign (branch `feat/holding-redesign`)

Date: 2026-10-18. Local build served with `astro preview`; Chrome 1xx headless and the Claude desktop browser pane.

## Lighthouse (mobile emulation, local)

| Page | Performance | Accessibility | Best practices | SEO | LCP | CLS | TBT |
|---|---|---|---|---|---|---|---|
| `/` | 100 | 100 | 96 | 100 | 1.7 s | 0 | 0 ms |
| `/es/` | 100 | 100 | 96 | 100 | 0.9 s | 0 | 0 ms |

Best practices < 100 only because `/_vercel/insights/script.js` 404s locally (it exists on Vercel once Web Analytics is enabled). Lab data, not field data.

## Checks

- [x] 1440×900: H1, lead, primary CTA and the full schedule fit in the first viewport.
- [x] 375 px (pane, ES) and 390 px (capture): no horizontal overflow (`scrollWidth === innerWidth`).
- [x] Content visible without JS (`html.no-js`; animations only move, never hide).
- [x] `prefers-reduced-motion`: entrances, scroll-driven parallax and smooth scroll off.
- [x] One H1 per page; title, description, canonical, hreflang en/es/x-default, OG 1200×630 per language.
- [x] JSON-LD Organization, WebSite and FAQPage built from the same content as the visible page.
- [x] Impeccable detector: no findings.
- [ ] Contact form end to end: pending `RESEND_API_KEY` in Vercel (Walter). Test on the preview after it is set.
- [ ] Keyboard pass and zoom 200 % on the deployed preview.
- [ ] 768 px tablet capture.

## Pending content (Walter)

Postal address, public phone, usage figures per product, LinkedIn URLs, a real founder photo, own domain.
