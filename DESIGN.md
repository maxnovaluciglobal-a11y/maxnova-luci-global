---
name: Maxnova & Luci Global
description: Red en operación. The company shown as a network a telecom engineer runs and measures. Grey technical plan, ink rack panels, gold traces from the real logo, live checks.
colors:
  ground: "#e6e8e4"
  ground-raised: "#f1f2ee"
  ink: "#101416"
  ink-raised: "#1a1f22"
  text: "#171c1f"
  text-soft: "#4a5257"
  on-ink: "#eef0ec"
  on-ink-soft: "#a9b0b1"
  line: "#c3c7c1"
  line-strong: "#80878a"
  line-ink: "#33393d"
  gold: "#d9a441"
  gold-deep: "#7d5a12"
  live: "#1fa35b"
  live-on-ink: "#46d188"
  fault: "#d4483b"
  fault-on-ink: "#ff8a7d"
  idle: "#6d7478"
typography:
  sans: "'Schibsted Grotesk Variable', system-ui, sans-serif"
  mono: "'Martian Mono Variable', ui-monospace, monospace"
  h1: "clamp(2.375rem, 1.6rem + 2.9vw, 4rem) / 1.03, 700, -0.034em"
  h2: "clamp(1.75rem, 1.35rem + 1.6vw, 2.75rem) / 1.08, 700, -0.028em"
  h3: "1.25rem / 1.2, 700"
  body: "1.0625rem / 1.6, 400"
  small: "0.8125rem–0.9375rem"
radius: "2px controls, 3px panels"
---

# Design

## World
The corporate site is a network operations plan, not a startup landing page. The founder is a telecom engineer; the company is shown the way he runs it: a core (the LLC and its Florida registration) linked to the products, each one measured.

- **Ground:** grey technical plan `#e6e8e4`, with a 24px dot grid only behind page heads and the hero.
- **Rack panels:** ink `#101416` for the parts that are live or operational: the network map, the two doors, the engagement steps, the contact form and the footer.
- **Gold `#d9a441`:** comes from the real logo (gold monogram on black). It draws traces, primary actions on ink, measurements and the steps rail. On light ground, use `gold-deep` for text.
- **Green is a fact, not a color choice:** it appears only after `/api/status` measured an answer. Before that, nodes are grey with "No data". A failed check is red.

## Type
- Schibsted Grotesk for everything readable, display included.
- Martian Mono only for measurements and registry data: latency, check time, document number, log dates. Never for labels or headings.

## Signature
`src/components/Network.astro` + `src/scripts/status.ts` + `api/status.js`.
- Desktop: orthogonal gold traces from the core to each product; dashed grey traces to what is not operating (Amazon account, medical product).
- Mobile (≤760px): a vertical bus from the core with a stub per row, same solid/dashed rule.
- When a check returns, a pulse travels each trace. Travel time = 500 ms + measured latency (max 2.4 s). `prefers-reduced-motion` disables it. This is the only motion on the site besides small hovers.
- The same status module feeds the "Status now" row on `/products/`.

## Components
- **Buttons:** `btn--ink` (primary on light), `btn--line` (secondary), `btn--signal` (gold, primary on ink). 3rem tall, 2px radius.
- **Links:** underlined, 2.75rem minimum hit area.
- **Facts and ledger:** label/value rows with hairlines. Used for product facts, company details and the registry strip.
- **Log table:** mono date, product, text.
- **Screens:** product images framed by a 1px line, 16:10, top-left crop, always with an honest caption (real demo screen vs public home page, and capture date).

## Rules
- Never invent customers, numbers or testimonials. The products page says plainly that the company is early.
- Every product keeps its own logo and colors.
- No eyebrows above headings, no gradient text, no glass, no glow.
- Light theme only: the use scene is an office, a bank officer or a client during the day.
