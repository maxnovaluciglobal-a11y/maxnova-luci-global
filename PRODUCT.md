# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack
Astro (static output) on Vercel, with the existing `api/contact.js` serverless function (Resend). Chosen by Walter on 2026-10-18 when he approved `docs/prompt-maestro.md`.

## Users
- **B2B clients** (primary, with investors): companies, mostly in Latin America, evaluating a partner to build AI software, enter the US market, or sell on Amazon. They arrive from a referral or a search and decide whether to write.
- **Investors and partners** (primary): people assessing whether the company is real and operating.
- **Banks and platforms** (secondary): the company bank, Stripe, Amazon, suppliers. They verify that the legal entity exists, what it does and how to reach it.
- **Talent** (tertiary): builders who might want to join.

## Product Purpose
Corporate site of MAXNOVA & LUCI GLOBAL LLC, a Florida LLC that builds and operates software products and offers consulting based on that experience. Success = a qualified visitor sends the contact form and the message reaches `maxnovaluciglobal@gmail.com`.

## Positioning
An operator, not an agency: its claims are its own products, live and clickable (DypOS, MOY IQ, Esmalia), plus an active Amazon FBA operation. A consultancy without products cannot copy that.

## Operating Context
- Products (in production, checked 2026-11-03): DypOS (restaurants, https://www.dypos.app, public demo without login), MOY IQ (personal finance, https://moyiq.app, demo asks for name and email), Esmalia (dental clinics, https://esmalia.com, demo asks for name and email). DypOS and Esmalia have no paying customers yet: never claim traction. Also in the company: an Amazon Seller Central account (open, no sales yet) and a medical-practice product in development (provisional name: never shown, no logo).
- Services (decided by Walter 2026-11-03): AI software and SaaS; US market entry support. Telecom, China sourcing and Amazon are no longer offered. US market entry is operating experience only: never prepare formation documents or give legal or tax advice (Florida unauthorized-practice risk; a Florida attorney should review that page). Priced per project after a diagnostic call.
- Languages: English (default) and Spanish.

## Capabilities and Constraints
- Contact form → Resend → company Gmail. Domain: `maxnovaluci.com` (Cloudflare registrar and DNS, DNS-only records to Vercel; connected 2026-11-02). `www` and the `.vercel.app` URL 308 to the apex (Vercel domain settings).
- Vercel team is on Pro; commits must still be authored by `maxnovaluciglobal@gmail.com` or deploys are blocked.
- Public repo: anything committed is published. Never commit account numbers, EIN or tax data.
- Public registry: Florida document number L26000222229, filed 2026-04-20, effective 2026-04-21 (Sunbiz). Sunbiz lists two managers: never write 'sole owner' or 'sole founder'.
- Undecided / pending from Walter: publishing the Doral address, public phone, usage figures, a founder portrait, LinkedIn (his profile reveals his employer: never link it or use it in sameAs).

## Brand Commitments
- Legal name exactly "MAXNOVA & LUCI GLOBAL LLC" (Sunbiz capitalisation); brand name "Maxnova & Luci Global".
- The monogram `logo-mark.svg` (vectorised real mark) is kept.
- Each product appears with its own logo and colours inside its own entry.

## Evidence on Hand
- Live product sites (screenshots of their public landing pages may be used).
- Logos: DypOS `01 - DypOS/04 - Marca y Diseno/logo/`, Esmalia `04 - Esmalia/04 - Marca y Diseno/guia-logo-2026-10-09/`.
- Founder: Walter La Madriz, telecommunications engineer, 15 years in telecom (engineering, product, B2B carrier sales) in Venezuela and Chile. No usable portrait yet: `2026-06-28-foto-perfil.png` is the gold logo, and the event photos could reveal the employer. His current employer is **not** named on this site (personal brand and company are kept separate).
- **Absent, never fabricate:** client testimonials, case-study figures, customer counts, revenue, press.

## Product Principles
1. Every claim is clickable or verifiable.
2. Products are the proof; consulting is the offer.
3. A bank officer must find the legal identity and contact in seconds.
4. Say less, link more.

## Accessibility & Inclusion
WCAG 2.2 AA. Respect `prefers-reduced-motion`. All content visible without JavaScript.
