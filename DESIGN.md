---
name: Maxnova & Luci Global
description: The holding as a split-flap departures board. Matte black enamel, flap modules split by a seam, paper-white glyphs, amber lamps as the only accent.
colors:
  amber: "#f2b33d"
  amber-hover: "#ffc552"
  amber-ink: "#1a1206"
  lamp-off: "#3a3226"
  board: "#0b0c0e"
  board-2: "#111215"
  module: "#17191c"
  module-hi: "#1d1f23"
  module-hover: "#22252a"
  seam: "#050506"
  rule: "#24272c"
  rule-strong: "#3a3d43"
  glyph: "#ece8df"
  text: "#c9c6be"
  muted: "#8f9399"
  paper: "#ece8df"
  paper-ink: "#16171a"
  paper-ink-2: "#4a4b4f"
typography:
  display:
    fontFamily: "'Barlow Semi Condensed', 'Arial Narrow', sans-serif"
    fontSize: "clamp(2rem, 0.9rem + 4.3vw, 4.6rem)"
    fontWeight: 600
    lineHeight: 1
  headline:
    fontFamily: "'Barlow Semi Condensed', 'Arial Narrow', sans-serif"
    fontSize: "clamp(1.875rem, 1.5rem + 1.7vw, 3rem)"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "0.01em"
  headline-flap:
    fontFamily: "'Barlow Semi Condensed', 'Arial Narrow', sans-serif"
    fontSize: "clamp(1.5rem, 1.15rem + 1.5vw, 2.6rem)"
    fontWeight: 600
    lineHeight: 1
  title:
    fontFamily: "'Barlow Semi Condensed', 'Arial Narrow', sans-serif"
    fontSize: "clamp(1.375rem, 1.2rem + 0.8vw, 1.875rem)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "0.02em"
  board-data:
    fontFamily: "'Barlow Semi Condensed', 'Arial Narrow', sans-serif"
    fontSize: "clamp(1rem, 0.97rem + 0.15vw, 1.0625rem)"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "0.04em"
  lead:
    fontFamily: "'Barlow', system-ui, sans-serif"
    fontSize: "clamp(1.125rem, 1.05rem + 0.35vw, 1.3125rem)"
    fontWeight: 400
    lineHeight: 1.5
  body:
    fontFamily: "'Barlow', system-ui, sans-serif"
    fontSize: "clamp(1rem, 0.97rem + 0.15vw, 1.0625rem)"
    fontWeight: 400
    lineHeight: 1.6
    fontFeature: "'tnum' 1"
  label:
    fontFamily: "'Barlow Semi Condensed', 'Arial Narrow', sans-serif"
    fontSize: "clamp(0.8125rem, 0.79rem + 0.1vw, 0.875rem)"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0.08em"
  label-micro:
    fontFamily: "'Barlow Semi Condensed', 'Arial Narrow', sans-serif"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0.1em"
rounded:
  none: "0px"
spacing:
  slot: "4px"
  gutter: "clamp(1rem, 0.5rem + 2.5vw, 2.5rem)"
  m: "1.5rem"
  l: "clamp(2.25rem, 1.8rem + 2.2vw, 3.75rem)"
  xl: "clamp(4rem, 2.8rem + 5.5vw, 8rem)"
components:
  key:
    backgroundColor: "{colors.amber}"
    textColor: "{colors.amber-ink}"
    typography: "{typography.board-data}"
    rounded: "{rounded.none}"
    padding: "1rem 1.35rem"
  key-hover:
    backgroundColor: "{colors.amber-hover}"
    textColor: "{colors.amber-ink}"
  key-sm:
    backgroundColor: "{colors.amber}"
    textColor: "{colors.amber-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.6rem 0.9rem"
  textlink:
    textColor: "{colors.glyph}"
    typography: "{typography.label}"
  module:
    backgroundColor: "{colors.module}"
    textColor: "{colors.text}"
    typography: "{typography.board-data}"
    rounded: "{rounded.none}"
    padding: "0.5rem 0.85rem"
    height: "2.6rem"
  module-name:
    backgroundColor: "{colors.module}"
    textColor: "{colors.glyph}"
    rounded: "{rounded.none}"
    padding: "0.5rem 0.85rem"
  module-hover:
    backgroundColor: "{colors.module-hover}"
  lamp-lit:
    backgroundColor: "{colors.amber}"
    size: "0.6em"
  lamp-off:
    backgroundColor: "{colors.lamp-off}"
    size: "0.6em"
  flap-tile:
    backgroundColor: "{colors.module-hi}"
    textColor: "{colors.glyph}"
    rounded: "{rounded.none}"
    width: "0.74em"
    height: "1.16em"
  route-name:
    backgroundColor: "{colors.module}"
    textColor: "{colors.glyph}"
    typography: "{typography.title}"
    padding: "1.2rem 1.3rem"
  route-detail:
    backgroundColor: "{colors.board-2}"
    textColor: "{colors.text}"
    typography: "{typography.body}"
    padding: "1.2rem 1.3rem"
  ledger-row:
    backgroundColor: "{colors.module}"
    textColor: "{colors.glyph}"
    padding: "0.85rem 1rem"
  notice:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.paper-ink}"
    rounded: "{rounded.none}"
    padding: "clamp(1.75rem, 1rem + 3vw, 3.5rem)"
  field-input:
    backgroundColor: "{colors.module}"
    textColor: "{colors.glyph}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "0.8rem 0.9rem"
  field-input-focus:
    backgroundColor: "{colors.module-hi}"
  nav-link:
    textColor: "{colors.muted}"
    typography: "{typography.label}"
---

<!-- World chosen by Walter on 2026-10-18 (direction contract .impeccable/surfaces/src-pages-index-astro.md, seed key a5e59273). It supersedes the earlier cobalt/Archivo "annual report" world and the visual direction in docs/prompt-maestro.md §4–§5. Where those sources disagree with this file, this file and the shipped code win. -->

# Design System: Maxnova & Luci Global

## Overview

**Creative North Star: "The Departures Board"**

The site is a Solari split-flap board in a terminal hall. The whole page sits on matte black enamel. Every company is a line in service, set in flap modules: a lighter upper leaf and a darker lower leaf, split by a black seam. Paper-white glyphs carry names and data in condensed uppercase signage. Amber lamps are the only colour the board itself produces. They mark live status and the one action that matters, so a lit lamp always means "in service" or "press here".

Density is that of a real board: tight slots separated by 4px of black, data in fixed columns, nothing decorative between rows. Reading text (leads, summaries, the FAQ) drops out of signage into a plain humanist sans so it reads as prose rather than board data. One object is not part of the board: the founder's note, a sheet of printed paper pinned to it. That is the only light surface and the only lifted object. The board flips its tiles once on load, lights its lamps in sequence, and then stays still.

Product logos and product screenshots keep their own colours inside their gates. The board frames them; it does not restyle them.

**Key Characteristics:**
- Matte black ground (board) for the full page; depth by tone steps, never by glow or gradient fields.
- Split-flap modules: two-tone leaves with a 1px black seam at the midline.
- Paper-white condensed uppercase for signage, warm off-white humanist sans for reading.
- Amber is the only accent: live-status lamps, primary keys, focus, selection.
- Square corners everywhere; 4px black slot gaps instead of borders or shadows.
- One flap cascade on load, never looping, fully static under reduced motion and without JS.

## Colors

A near-neutral black-and-paper board with one warm signal colour.

### Primary
- **Platform Amber** (amber): the lamp colour. Lit status lamps, the primary key ("Talk to us", "Send message"), focus outlines, text selection, caret and form accent colour. Its rarity is what makes a lit row readable at a glance.
- **Amber Struck** (amber-hover): the key under the pointer, slightly hotter. Hover only.
- **Lamp Ink** (amber-ink): text and arrows on amber. Never used on the board itself.
- **Dead Lamp** (lamp-off): an unlit lamp: dark brown, so an off lamp still reads as a lamp. Used for SCHEDULED status and the idle form-status indicator.

### Neutral
- **Enamel Black** (board): the ground of every page, header, section and footer; also `theme-color`.
- **Back Panel** (board-2): one step up for recessed zones: the notice section, the contact desk, route detail cells, screenshot frames.
- **Lower Leaf** (module): the bottom half of every flap module, and the flat fill of ledger rows, process steps and form fields.
- **Upper Leaf** (module-hi): the top half of a flap module; also focused-field fill.
- **Struck Leaf** (module-hover): top leaf on row hover, when the whole line shifts up one tone.
- **Seam** (seam): the 1px midline that splits every flap. It is drawn as a line and never used as a fill.
- **Rule** (rule): 1px hairlines between page-level zones (header bar, section to section, FAQ items, footer, screenshot frames).
- **Hard Rule** (rule-strong): the stronger stroke: field bottom borders, the ring around product logos, the scrollbar thumb.
- **Flap White** (glyph): headings, flap glyphs, company names, data values, lit status text. Roughly 16:1 on board.
- **Reading Grey** (text): body and lead text. Roughly 11:1.
- **Board Grey** (muted): column heads, labels, nav at rest, unlit status, captions. Roughly 6:1. Do not go lower than this.
- **Notice Paper** (paper): the founder's note sheet and the native select option list. The same stock as the glyphs, on purpose: it is the board's white, printed large.
- **Print Ink** / **Print Ink Soft** (paper-ink, paper-ink-2): text on paper; the soft ink is for the signature line only.

### Named Rules
**The One Lamp Rule.** Amber is the only accent the board produces. It marks verified live status, the primary key, focus and selection. It is never used for decoration, headings or a second kind of meaning.

**The Verified Lamp Rule.** A lamp lights only for a status that has been verified. Anything unconfirmed shows SCHEDULED with the lamp off.

**The Guest Colour Rule.** Product logos and product screenshots keep their own colours inside their gate. That colour belongs to the product, not to the board palette, and never spreads outside the gate.

## Typography

**Display Font:** Barlow Semi Condensed (with Arial Narrow, sans-serif)
**Body Font:** Barlow (with system-ui, sans-serif)

**Character:** One family at two widths. The semi-condensed cut is the board's signage: uppercase, tracked, set in tiles and modules. The regular width is the voice of a person explaining, set in sentence case. Numerals are tabular site-wide so board data aligns.

### Hierarchy
- **Display** (600, clamp 2–4.6rem, line-height 1): the board H1 only, set as flap tiles across up to three lines, occupying about two-thirds of the width on wide screens.
- **Headline** (600, clamp 1.875–3rem, 1.05, uppercase, 0.01em): plain section H2s and the /sent/ confirmation.
- **Headline Flap** (600, clamp 1.5–2.6rem, 1): section H2s set as flap tiles (Portfolio, Services, Company, FAQ, Contact). It is smaller than plain headlines because each tile adds width.
- **Title** (600, clamp 1.375–1.875rem, 1.1, uppercase, 0.02em): gate names, service route names, the process heading, the notice heading.
- **Board Data** (500, body size, 1.1, uppercase, 0.04em): cell text inside modules; company names step up to 600 at lead size in Flap White. Key labels use the same face at 600 with 0.05em.
- **Lead** (Barlow 400, clamp 1.125–1.3125rem, 1.5): the one reading line under the H1 (max 40ch), section intros (max 52ch), the notice body.
- **Body** (Barlow 400, clamp 1–1.0625rem, 1.6): summaries, route text, FAQ answers; 46–62ch measure.
- **Label** (Semi Condensed 500, clamp 0.8125–0.875rem, 0.08em, uppercase): nav, field labels, ledger keys, text links (600, 0.06em).
- **Label Micro** (Semi Condensed 500, 0.75rem, 0.1em, uppercase): table column heads and gate fact keys. This is the floor; nothing smaller.

### Named Rules
**The Whole Word Rule.** A flap word never breaks across tiles or lines. Words wrap as units, and inline flap names in modules do not wrap at all; long cells truncate with an ellipsis rather than spilling a tile.

**The Two Voices Rule.** Signage (names, labels, data, keys) is condensed uppercase. Anything read as a sentence is Barlow in sentence case. FAQ questions are sentences, so they are set in Barlow.

**The Real Text Rule.** Flap tiles are decoration over real text. The full string is always present for assistive tech, and the tiles are `aria-hidden`.

## Layout

A centred column, `min(100% − 2 × gutter, 84rem)`, with a fluid gutter (spacing.gutter). Vertical rhythm comes from three steps: m for inner gaps, l between a section head and its content, xl between sections and between gates. Sections are separated by a 1px rule, never by a background band, except the two recessed zones (notice, desk) on Back Panel.

The first viewport is the board: a header bar (monogram + name, nav, small amber key) over a body grid. The H1 spans the full row. Below it, a 4:8 split puts the lead and actions on the left and the departures table on the right. The board fills at most `min(100svh, 60rem)`. Deeper sections use 5:7 splits (head to intro, title to ledger, title to FAQ, contact intro to form). Gates use 4:8 (facts and summary to screenshot).

**The Slot Rule.** Board cells sit in a 4px black slot grid: `border-spacing: 4px` in the departures table, a 4px gap in routes, ledger, process steps and gate heads. Adjacent modules are always separated by the slot gap, never by a border.

Responsive behaviour drops columns rather than squeezing glyphs. Below 1360px the Market column leaves the board. Below 1000px every split stacks to one column, the H1 takes full width, and process steps go 2-up. Below 720px the Sector column leaves too, so the board shows company and status only. The nav keeps Company, the language switch and the key; form rows, steps and ledger rows go single-column. Below 480px the wordmark hides and only the monogram remains.

## Elevation & Depth

The board is flat. Depth comes from tone: Enamel Black ground, Back Panel recesses, and the two leaves of a module, split by the seam. Hover raises a module one tone, never with a shadow. Lines between zones are 1px rules.

Three physical exceptions belong to the world's own materials and are the only shadows in the system:

### Shadow Vocabulary
- **Lamp glow** (`box-shadow: 0 0 0.6em rgb(242 179 61 / 0.45)`): only on a lit amber lamp (status lamps, the sent-form indicator). A lit bulb glows; nothing else does.
- **Key lip** (`box-shadow: inset 0 -2px 0 rgb(0 0 0 / 0.25)`): the inner bottom edge of an amber key, so it reads as a physical push key. On press it drops 1px.
- **Pinned paper** (`box-shadow: 0 2px 2px rgb(0 0 0 / 0.3), 0 24px 48px -24px rgb(0 0 0 / 0.7)`): the founder's notice only, a sheet of paper resting on the board.

### Named Rules
**The Seam, Not Shadow Rule.** Board elements separate by seams, slots and tone steps. A shadow appears only where the physical object would cast or emit one: a lit lamp, a push key, a pinned sheet.

## Shapes

Every corner is square (rounded.none): keys, modules, tiles, lamps, fields, the notice, screenshot frames, logo rings. The lamp is a small square (0.6em), not a dot. The recurring silhouette is the flap leaf: a rectangle split horizontally at its midline. It appears on H1 and section tiles, departure modules, gate heads, service route names and process step numbers.

Product screenshots sit in a 2:1 gate frame with a 1px rule border, cropped from the top.

## Components

### Keys (buttons)
Push keys on a control desk: blunt, amber, uppercase.
- **Shape:** square (0px).
- **Primary key:** Platform Amber fill, Lamp Ink label in Semi Condensed 600 uppercase at 0.05em, padding 1rem × 1.35rem, followed by the site arrow.
- **Small key:** the header CTA, label size, padding 0.6rem × 0.9rem.
- **Hover / Active:** fill moves to Amber Struck and the arrow slides 3px forward. On press the key drops 1px. Disabled keys go to 60% opacity with a progress cursor.
- **Focus:** a 2px amber outline, offset 3px (site-wide).

### Text links
Secondary actions: Semi Condensed 600 uppercase label in Flap White, underlined (1px, offset 0.24em), with the arrow. The underline thickens to 2px on hover. Links that leave the site point the arrow up-right; the in-page portfolio link points it down.

### The Arrow
One authored 16px stroke arrow (1.6 stroke, square caps) for the whole site, rotated for direction. No icon set, no other glyph icons.

### Departures board (signature)
The first-viewport table of companies. Columns: Company, Sector, Market, Status, with Label Micro column heads in Board Grey and the table titled in label caps above. Each cell is a flap module (Upper Leaf over Lower Leaf, seam behind the text). Company names are inline flap tiles in Flap White; the status cell carries a lamp plus IN SERVICE (lit, Flap White) or SCHEDULED (dark lamp, Board Grey). The whole row is one link to its gate. On hover every module steps up one tone, and on focus the full row gets the amber outline.

### Flap tiles
The board's signature type treatment, used for the H1, section H2s and the 404 code. Each character gets its own tile (0.74em × 1.16em) with a seam at the midline. Words are kept whole, with 0.32em between words and 0.05em between tiles. On load each tile flips in once from rotateX(−75deg) and 55% brightness over 520ms, staggered 24ms per tile. Inside a module the tiles drop their own backgrounds and sit flush, because the module is the slot.

### Status lamp
The single shared status glyph: a 0.6em square before the status text. Lit amber with glow when in service, Dead Lamp when scheduled. On the board, lit lamps switch on in sequence after the flap cascade (140ms per row, starting at 900ms). The contact form reuses the same lamp for its status line.

### Gates (portfolio entries)
One per company. The head is a pair of modules: name (title size, with the product's own 32px logo in a Hard Rule ring) and status (lamp + label). Below, facts (Label Micro keys, Flap White values), a summary and an "Open" text link sit beside the product screenshot in its gate frame with a numbered caption. Companies without a public screen use a single-column line layout. When scroll-driven animation is supported, screenshots rise into their frame as they enter the viewport.

### Routes and steps
Services are routes: a flap module with the service name in title caps, next to a Back Panel cell holding who it is for (Board Grey) and what it covers. Process steps are flat Lower Leaf cells, each with a small flap-tile numeral, a title and muted text.

### Ledger and FAQ
Company data is a ledger of Lower Leaf rows: label-caps key in Board Grey, value in Flap White that wraps anywhere (emails, legal names). The FAQ is a ruled list of disclosures. Questions are set in Barlow 500 at lead size, and a hand-drawn plus turns into a minus when open.

### The notice
The founder's note: a Notice Paper sheet (max 50rem) on a Back Panel section, set in Print Ink. It has a title-caps heading, lead-size body and a signature in Semi Condensed caps over a Print Ink Soft role line. Selection and focus invert to ink on paper. It is the only light surface in the system.

### Inputs / Fields
- **Style:** Lower Leaf fill, no visible side borders, a Hard Rule bottom border, square corners, Barlow body text in Flap White. Labels sit above in label caps, Board Grey; the "(optional)" note is sentence case.
- **Focus:** the border turns amber and the fill steps up to Upper Leaf, with no glow.
- **Select:** a custom chevron in Flap White; the native option list is printed on paper.

### Navigation
A header bar ruled underneath: monogram (inverted to near-white) plus the name in Semi Condensed 600 caps, then nav links in label caps (Board Grey, turning Flap White on hover, no underline), a two-letter language switch, and the small amber key. Utility pages (404, /sent/) reuse the bar with the brand only.

## Do's and Don'ts

### Do:
- **Do** keep Enamel Black (board) as the ground of every page, including 404 and /sent/.
- **Do** build any new data display from flap modules in the 4px slot grid (spacing.slot), with Board Grey label-micro heads.
- **Do** reserve amber for verified live status, the primary key, focus and selection.
- **Do** keep the flap cascade a single pass on load, staggered per tile, and render everything static and fully visible under `prefers-reduced-motion` and without JS.
- **Do** drop columns on narrow screens before shrinking board glyphs; on mobile the board shows company and status only.
- **Do** keep product logos and screenshots in their own colours, framed inside their gate.
- **Do** use the single site arrow for every directional affordance.

### Don't:
- **Don't** round any corner; the lamp is square too.
- **Don't** add shadows to board elements; separate them with seams, slots and tone steps. The only shadows are the lamp glow, the key lip and the pinned notice.
- **Don't** introduce a second accent colour, gradient fields or a centred SaaS hero over a gradient with a card row.
- **Don't** light a lamp for a status, date or figure that has not been verified; show SCHEDULED or omit the field.
- **Don't** loop the flap or lamp animation or replay it on scroll.
- **Don't** break a word across flap tiles, or let a module cell wrap.
- **Don't** set reading prose in condensed caps, or signage in sentence-case Barlow.
- **Don't** set text below 0.75rem or use a grey dimmer than Board Grey on the board.
