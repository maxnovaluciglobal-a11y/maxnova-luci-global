---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: ["src/pages/es/index.astro"]
---

## Scope
Home page, `/` (EN) and `/es/` (ES), plus 404 and /sent/. Visitor mode: **Persuade**. Build path: code-led (no image generation).

## Audience, action, proof
B2B clients and investors first; banks second (Company block); talent in the footer. Action: send the contact form. Proof: live products, linked, with real screenshots. No testimonials, no invented figures, no invented dates.

## Direction contract
THESIS: A tech-premium product page in the Launch UI language (Stripe/Linear register Walter asked for), where the "product" is the holding itself: the hero mockup is a mosaic of the three live companies' real screens. Refuses a generic SaaS page with invented dashboards and fake metrics.
OWN-WORLD: Zinc-950 ground (#09090b), Inter, white primary buttons, glass surfaces (border-top brighter than bottom, 5% white gradient), product mockups inside soft 8px frames with deep shadow, one warm brand glow (orange #fb923c / #fdba72) behind the hero mockup and the contact block, green status dots for live companies. Radius 10px family.
STORY: Visitor understands in one viewport that this company runs three live products, clicks one, reads services and how we work, meets the founder, checks the company data, writes in the glass form.
FIRST VIEWPORT: Sticky blurred navbar (monogram + name, links, ES, white "Talk to us"). Centered badge "Florida holding · 3 products live → See them", H1 "We build and run software companies." up to 5.5rem, muted lead, white primary + glow secondary buttons, then the framed mosaic (DypOS large left, MOY IQ and Esmalia stacked right) rising into the warm glow, faded at the bottom.
FORM: Launch UI open-source edition (MIT, github.com/launch-ui/launch-ui @ b0d4d5b), chosen by Walter on 2026-10-18 after reviewing 21st.dev templates with the constraint "must be free". Ported to Astro + plain CSS; notice in THIRD_PARTY_NOTICES.md. Supersedes the departures-board world (seed a5e59273) and the cobalt world.
SIGNATURE: Launch UI "appear" on load (translate + small blur, staggered), mosaic tiles with live status pills linking to each company, scroll-rise of feature screens; static under reduced motion and without JS.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Unresolved
Postal address, phone, usage figures, LinkedIn URLs, founder photo, own domain.
