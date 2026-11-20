---
name: Maxnova & Luci Global
description: Bento vivo. The products are the pitch; a cool grey board of white cells where three products run live sample-data demos, one electric cobalt owns whole fields, and every claim of operation is measured.
colors:
  ground: "#f6f7f9"
  surface: "#ffffff"
  ink: "#0d1117"
  ink-raised: "#161c25"
  text-soft: "#2b323c"
  muted: "#5b6472"
  line: "#e2e5ea"
  line-strong: "#cdd2d9"
  cobalt: "#1f4bff"
  cobalt-deep: "#1236d1"
  cobalt-tint: "#e8edff"
  cobalt-ink: "#0a1a66"
  on-cobalt-soft: "#dfe5ff"
  on-ink-link: "#7d9bff"
  ok: "#12a150"
  ok-text: "#0b7a3b"
  fault: "#d4483b"
  dypos: "#ff7a00"
  dypos-night: "#0f161d"
  moyiq: "#5b21d6"
  moyiq-night: "#1e1044"
  moyiq-lime: "#d4f25a"
  esmalia: "#c8102e"
  esmalia-porcelain: "#eef1f2"
typography:
  display:
    fontFamily: "'Bricolage Grotesque Variable', 'Schibsted Grotesk Variable', system-ui, sans-serif"
    fontSize: "clamp(2.875rem, 1.2rem + 5.4vw, 5.75rem)"
    fontWeight: 700
    lineHeight: 0.96
    letterSpacing: "-0.035em"
    fontVariation: "'opsz' 96"
  poster:
    fontFamily: "'Bricolage Grotesque Variable', 'Schibsted Grotesk Variable', system-ui, sans-serif"
    fontSize: "clamp(3rem, 0.8rem + 7.6vw, 8.25rem)"
    fontWeight: 800
    lineHeight: 0.9
    letterSpacing: "-0.035em"
    fontVariation: "'opsz' 96"
  page-title:
    fontFamily: "'Bricolage Grotesque Variable', 'Schibsted Grotesk Variable', system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 1.2rem + 4.4vw, 4.75rem)"
    fontWeight: 700
    lineHeight: 0.98
    letterSpacing: "-0.035em"
    fontVariation: "'opsz' 96"
  headline:
    fontFamily: "'Bricolage Grotesque Variable', 'Schibsted Grotesk Variable', system-ui, sans-serif"
    fontSize: "clamp(2.125rem, 1.4rem + 2.6vw, 3.375rem)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.03em"
  title:
    fontFamily: "'Bricolage Grotesque Variable', 'Schibsted Grotesk Variable', system-ui, sans-serif"
    fontSize: "1.5625rem"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  cell-title:
    fontFamily: "'Bricolage Grotesque Variable', 'Schibsted Grotesk Variable', system-ui, sans-serif"
    fontSize: "1.3125rem"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.01em"
  lead:
    fontFamily: "'Schibsted Grotesk Variable', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "1.1875rem"
    fontWeight: 400
    lineHeight: 1.5
  body:
    fontFamily: "'Schibsted Grotesk Variable', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "'Schibsted Grotesk Variable', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 500
    lineHeight: 1
  figure:
    fontFamily: "'Schibsted Grotesk Variable', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 700
    lineHeight: 1
    fontFeature: "'tnum' 1"
rounded:
  sm: "10px"
  demo: "12px"
  md: "16px"
  pill: "999px"
spacing:
  gap: "16px"
  gap-mobile: "12px"
  cell: "22px"
  card: "30px"
  gutter: "32px"
  gutter-mobile: "16px"
  section: "104px"
  section-mobile: "72px"
  wrap: "1312px"
components:
  button-primary:
    backgroundColor: "{colors.cobalt}"
    textColor: "{colors.surface}"
    rounded: "{rounded.pill}"
    padding: "0 22px"
    height: "46px"
  button-primary-hover:
    backgroundColor: "{colors.cobalt-deep}"
  button-line:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0 22px"
    height: "46px"
  button-line-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.surface}"
  button-light:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.cobalt-ink}"
    rounded: "{rounded.pill}"
    padding: "0 22px"
    height: "46px"
  button-light-hover:
    backgroundColor: "{colors.cobalt-tint}"
  cell:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "22px"
  cell-cobalt:
    backgroundColor: "{colors.cobalt}"
    textColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: "22px"
  card-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: "30px"
  card-tint:
    backgroundColor: "{colors.cobalt-tint}"
    textColor: "{colors.cobalt-ink}"
    rounded: "{rounded.md}"
    padding: "30px"
  status-pill:
    backgroundColor: "#f1f3f5"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 12px"
    height: "30px"
  chip:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0 16px"
    height: "38px"
  chip-pressed:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.surface}"
  input-on-ink:
    backgroundColor: "{colors.ink-raised}"
    textColor: "{colors.surface}"
    rounded: "{rounded.demo}"
    padding: "0 14px"
    height: "46px"
  footer-band:
    backgroundColor: "{colors.cobalt}"
    textColor: "{colors.surface}"
    typography: "{typography.poster}"
    padding: "72px 0 32px"
---

# Design System: Maxnova & Luci Global

## Overview

**Creative North Star: "Bento vivo"**

The corporate site is a board of working cells, not an agency landing page. A visitor uses a slice of each product before reading a claim: a DypOS kitchen ticket moves across columns, a moyiq expense typed in plain words is categorised and subtracted, an Esmalia appointment gets confirmed over WhatsApp. All three run on sample data and say so. Around them, the company proves it operates: status pills measured by `/api/status`, a dated log, the Florida registry strip.

The ground is a cool, quiet grey with white cells; the whole board is light and calm so the products can be loud. Maxnova itself speaks in one colour, an electric cobalt that never decorates: it takes over entire fields (the AI service cell, the first log stat, the closing footer band with its poster-scale claim) or marks the one primary action. Product colours are guests: each one appears only inside its own product's cell, demo, tag or page section, and a product cell floods with its brand colour on hover or focus.

Depth is flat. Cells are separated by a 16px gap and a hairline, not by shadows. The only motion is functional: the demos animate the step a user just took, status dots pulse when a measurement lands, the "Check again" icon spins while re-measuring. `prefers-reduced-motion` turns all of it off.

**Key Characteristics:**
- 12-column bento of white 16px-radius cells on a cool grey ground.
- One electric cobalt that owns whole fields, never sprinkled.
- Product cells take their own brand colour on hover; guest colours stay inside their product.
- Live, honest signals: grey until measured, green only after a real answer.
- Bricolage Grotesque display at optical size 96, Schibsted Grotesk for everything readable.
- Light theme only.

## Colors

A cool grey and white board, near-black ink, one electric cobalt for the company, and three guest palettes that belong to the products.

### Primary
- **Electric Cobalt** (`cobalt`): the company's only voice. Primary buttons, links, the accented words of the hero H1, the AI service cell, the first log stat, the "today" dot of the timeline, the Company tag in the log, focus rings, selection, and the closing footer band. `cobalt-deep` is its hover. `cobalt-tint` is the quiet field (money card, early-stage note, open FAQ mark, menu hover) with `cobalt-ink` text on it. `on-cobalt-soft` is secondary text on cobalt; `on-ink-link` is the link and focus colour on ink.

### Neutral
- **Cool Mist** (`ground`): the page ground and the translucent sticky nav.
- **Cell White** (`surface`): every cell and card.
- **Graphite Ink** (`ink`): text, the registry strip, the contact form card, the verify card, pressed chips, the line button's hover. `ink-raised` fills inputs on ink.
- **Slate Text** (`text-soft`) for leads and body on white; **Steel** (`muted`) for captions, dates and secondary lines.
- **Hairline** (`line`) borders cells and divides rows; **Hairline Strong** (`line-strong`) draws dashed "in preparation" outlines, chip and FAQ borders, and the timeline axis.

### Status
- **Measured Green** (`ok`, text `ok-text`) appears only after `/api/status` returned an answer. **Fault Red** (`fault`) only after a failed check. Before any measurement the dot is neutral grey and the label says "No data".

### Guest colours (product-owned)
- **DypOS:** orange `dypos` with night `dypos-night`; dark ink text on orange.
- **moyiq:** violet `moyiq`, night `moyiq-night`, lime `moyiq-lime`.
- **Esmalia:** red `esmalia` on porcelain `esmalia-porcelain`.

These come from each product's own brand guide. They are used only inside that product's cell, demo, log tag, timeline dot, price row marker or page section. Each product keeps its own logo and colours; Maxnova never recolours a product.

### Named Rules
**The Whole Field Rule.** Cobalt either owns an entire surface (a cell, a stat, the footer band) or marks a single action or link. It is never a thin decorative accent, gradient or glow.

**The Guest Colour Rule.** A product colour may appear only where that product is the subject. Outside its own cell or section, a product is named in ink or represented by its own logo.

**The Measured Green Rule.** Green is a fact, not a colour choice. Nothing turns green until a real measurement says so.

**The No Ochre Rule.** Maxnova's colours are vivid and high-impact. It never uses ochre, bronze or dull gold. When a vivid colour cannot carry white text at contrast, the text goes in ink on the full colour (DypOS orange takes dark text), the colour is never dulled.

## Typography

**Display Font:** Bricolage Grotesque Variable, optical size axis set to 96 on the largest sizes (with Schibsted Grotesk, system-ui fallback)
**Body Font:** Schibsted Grotesk Variable (with system-ui, -apple-system, Segoe UI fallback)

**Character:** Bricolage brings a compact, slightly quirky grotesque with tight negative tracking for headlines that feel built, not typeset; Schibsted is a sober, newsy grotesque that keeps every sentence plain. No mono face.

### Hierarchy
- **Display** (700, `display` clamp, 0.96, opsz 96): the home hero H1 only.
- **Poster** (800, `poster` clamp up to 8.25rem, 0.9, opsz 96, max 13ch): the closing claim on the cobalt footer band.
- **Page title** (700, `page-title` clamp, 0.98, opsz 96, max 18ch): inner page H1s.
- **Headline** (700, `headline` clamp, 1.02): section H2s.
- **Title** (700, 1.375 to 1.625rem, 1.1): card H2s and service cell H3s; **Cell title** (700, 1.3125rem) for product cells.
- **Lead** (400, 1.1875rem, 1.5, max 46 to 60ch) under H1s.
- **Body** (400, 1.0625rem, 1.55); cell copy at 1rem/1.45, max 44ch.
- **Label** (500 to 600, 0.8125 to 0.9375rem): pills, nav links, captions, form labels. Uppercase with tracking only for log month group headings and inside the product demos, where it mirrors the products' own UI.

### Named Rules
**The Tabular Only Where Numbers Line Up Rule.** Tabular figures are switched on only for clocks, latency, demo counters and log stats. Schibsted's tabular set widens punctuation, so prose and prices keep proportional figures.

**The No Eyebrow Rule.** No small label, kicker or eyebrow sits above a heading. A heading opens its block.

## Layout

A centred container of 1312px plus a 32px gutter each side (16px under 760px). The home is a 12-column bento with a 16px gap (12px on mobile): DypOS spans 7, moyiq 5, Esmalia 5, AI service 4, US entry 3, and a full-width dashed "in preparation" row. Heads (hero, bento head, section head) use asymmetric two-column grids (7.4/4.6 or 5/7) with the heading left and the lead right, bottom- or baseline-aligned. Sections sit 104px apart (72px on mobile). Paired cards use 5/7 splits.

Breakpoints: at 1120px every two-column split collapses to one column and the bento goes to 12 / 6+6; at 900px the nav links fold into a menu disclosure and service cards stack; at 760px every cell spans 12, the DypOS kitchen columns stack, card padding drops from 30px to 20px and the footer grid becomes one column. The status summary line reserves two lines so the layout never moves while checks run.

## Elevation & Depth

Flat by default. Depth comes from the grey ground under white cells, hairline borders, and fields that flip to ink or cobalt. Shadows appear only on things that float or are meant to read as a physical object inside a product: the open nav menu, the active DypOS ticket, product screenshots on their brand-night panel, and a soft ring around an online status dot.

### Shadow Vocabulary
- **Menu float** (`box-shadow: 0 18px 40px -12px rgb(13 17 23 / 0.25)`): the mobile nav disclosure panel.
- **Screenshot lift** (`box-shadow: 0 22px 50px -24px rgb(0 0 0 / 0.55)`): product screenshots on the products page.
- **Active ticket** (`box-shadow: 0 6px 18px rgb(0 0 0 / 0.35)`): the ticket being worked inside the DypOS demo.
- **Live ring** (`box-shadow: 0 0 0 3px rgb(18 161 80 / 0.16)`): around a measured-online dot.

### Named Rules
**The Flat Board Rule.** Cells never carry a resting shadow. If a cell needs emphasis, it changes field (white to cobalt, ink or tint), not elevation.

## Shapes

One radius: 16px for every cell, card, strip and band corner. Pills (999px) for every control: buttons, chips, status pills, tags, the language switch. A 10px small radius for logo squares, menu items and ticket cards inside demos, and 12px for demo frames, inputs and chat bubbles. Borders are 1px hairlines on cells and 1.5px on controls. Dashed 1.5px outlines mean "not operating yet" (the in-preparation row, its placeholder squares, the products page "other" card, disclaimers, a pending appointment).

## Components

### Buttons
- **Shape:** full pill (999px), 46px tall (40px small), 600 weight, a 14px arrow that nudges 2px right on hover.
- **Primary:** cobalt with white text; hover deepens to `cobalt-deep`.
- **Line:** 1.5px ink outline, transparent; hover fills ink with white text.
- **Light:** white with `cobalt-ink` text, used on cobalt and ink fields; hover goes to `cobalt-tint`.
- **Text link:** cobalt, underlined at 35% opacity that goes solid on hover; 2.75rem minimum hit area.

### Status pill and live summary
A grey pill (30px) with an 8px dot, the label and the measured latency in bold tabular figures. Neutral grey until `/api/status` answers; green with a live ring when online, red when a check fails; the dot pulses once when a new measurement lands. The hero summary shows one dot per product, "N of N products answering · checked at HH:MM UTC" and a "Check again" text button whose icon spins while re-measuring.

### Product cell (signature)
White cell with the product's logo, audience line and status pill on top, a live demo in the middle, and description, price and an "Open" pill outline at the foot. On hover or focus-within the whole cell floods with the product's brand colour (DypOS orange with dark ink text, moyiq violet and Esmalia red with white text); wide logos invert to white where needed; status pills go near-white.

### Live demos
Three sample-data mini-products, each labelled "Sample data", each in its own palette: the DypOS kitchen board on `dypos-night` with received / in-the-kitchen / ready columns and an orange action; the moyiq expense card with a violet header, lime progress bar and natural-language input; the Esmalia agenda on porcelain with a pending appointment and a WhatsApp confirmation exchange. They animate only the change the user caused.

### Cards / Containers
- **Corner Style:** 16px.
- **Background:** white with a hairline by default; cobalt for the AI service and first log stat; ink for registry, contact and verify; `cobalt-tint` for the money and early-stage notes.
- **Shadow Strategy:** none (see Elevation).
- **Internal Padding:** 22px in bento cells, 30px in cards, 20px on mobile.

### Inputs / Fields
On the ink contact card: `ink-raised` fill, 1.5px `#3a4350` stroke, 12px radius, 46px tall. Focus shifts the stroke to `on-ink-link` with a 3px soft ring. Status messages are green on success and coral on error.

### Navigation
Sticky, translucent `ground` with blur and a hairline bottom. Monogram in cobalt plus the name in display 700. Links in `text-soft`, cobalt on hover; the current page is cobalt with a 2px underline offset 8px. Language switch is a small outlined pill. Under 900px the links fold into a pill "Menu" disclosure opening a white floating panel.

### Log
Entries grouped by month: a month heading followed by rows of date, product tag (pill in the product's colour, cobalt for Company) and text. The log page adds three stats, a timeline since the filing date where each entry is a dot in its product colour stacked by month (ink start dot, cobalt today dot), and filter chips (pill, outlined; pressed fills ink).

### Footer band
Full-bleed cobalt band closing every page: the poster-scale claim in white, then link columns on a 30% white hairline, monogram in white.

## Do's and Don'ts

### Do:
- **Do** keep cells white on the `ground`, 16px radius, 16px gap, hairline border, no resting shadow.
- **Do** let cobalt own a whole field or a single action; use `cobalt-tint` with `cobalt-ink` for the quiet variant.
- **Do** keep product colours, logos and demos inside their own product cell or section.
- **Do** show a status as grey "No data" until a real measurement returns, then green or red.
- **Do** label every demo and screenshot honestly (sample data, real demo screen or public page, capture date).
- **Do** use pills for every control and tabular figures only for clocks, latency and counters.
- **Do** keep vivid colours vivid: put ink text on a colour that cannot carry white.

### Don't:
- **Don't** invent customers, numbers or testimonials; the site says plainly that the company is early.
- **Don't** put a kicker or eyebrow above a heading.
- **Don't** recolour a product or borrow a product's colour for Maxnova surfaces.
- **Don't** use ochre, bronze or dull gold anywhere.
- **Don't** add a dark theme; the site is light only.
- **Don't** use gradient text, glass cards or glow; the sticky nav's blur is the only translucency.
- **Don't** introduce a third typeface or a mono face.
