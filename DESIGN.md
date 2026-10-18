---
name: Maxnova & Luci Global
description: The operator's annual report. A cobalt cover, a cool paper interior, one family at two widths.
colors:
  cobalt: "#1c31ad"
  cobalt-deep: "#14247f"
  cobalt-ink: "#c9d1fb"
  paper: "#f3f4f2"
  paper-2: "#e8eae6"
  sheet: "#ffffff"
  ink: "#101318"
  ink-2: "#474e5b"
  rule: "rgb(16 19 24 / 0.16)"
  rule-strong: "rgb(16 19 24 / 0.55)"
  rule-cover: "rgb(243 244 242 / 0.28)"
typography:
  display:
    fontFamily: "'Archivo Variable', 'Archivo', system-ui, sans-serif"
    fontSize: "clamp(2.6rem, 1.6rem + 4.6vw, 5.6rem)"
    fontWeight: 700
    lineHeight: 1.04
    letterSpacing: "-0.03em"
    fontVariation: "'wdth' 118"
  headline:
    fontFamily: "'Archivo Variable', 'Archivo', system-ui, sans-serif"
    fontSize: "clamp(2rem, 1.6rem + 1.8vw, 3.125rem)"
    fontWeight: 700
    lineHeight: 1.04
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 118"
  title:
    fontFamily: "'Archivo Variable', 'Archivo', system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 1.3rem + 0.9vw, 2rem)"
    fontWeight: 700
    lineHeight: 1.04
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 118"
  numeral:
    fontFamily: "'Archivo Variable', 'Archivo', system-ui, sans-serif"
    fontSize: "clamp(2rem, 1.6rem + 1.8vw, 3.125rem)"
    fontWeight: 300
    lineHeight: 1
    fontVariation: "'wdth' 118"
    fontFeature: "'tnum'"
  lead:
    fontFamily: "'Archivo Variable', 'Archivo', system-ui, sans-serif"
    fontSize: "clamp(1.1875rem, 1.1rem + 0.4vw, 1.375rem)"
    fontWeight: 400
    lineHeight: 1.45
  body:
    fontFamily: "'Archivo Variable', 'Archivo', system-ui, sans-serif"
    fontSize: "clamp(1rem, 0.97rem + 0.15vw, 1.0625rem)"
    fontWeight: 400
    lineHeight: 1.55
    fontFeature: "'tnum'"
  label:
    fontFamily: "'Archivo Variable', 'Archivo', system-ui, sans-serif"
    fontSize: "clamp(0.8125rem, 0.79rem + 0.1vw, 0.875rem)"
    fontWeight: 600
    lineHeight: 1.4
    fontFeature: "'tnum'"
rounded:
  none: "0"
  product-tile: "9px"
spacing:
  gutter: "clamp(1rem, 0.5rem + 2.5vw, 2.5rem)"
  s: "0.75rem"
  m: "1.5rem"
  l: "clamp(2.5rem, 2rem + 2.5vw, 4rem)"
  xl: "clamp(4.5rem, 3rem + 6vw, 9rem)"
components:
  button-paper:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.cobalt-deep}"
    rounded: "{rounded.none}"
    padding: "0.95rem 1.4rem"
  button-paper-hover:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.cobalt-deep}"
  button-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "0.95rem 1.4rem"
  button-ink-hover:
    backgroundColor: "{colors.cobalt}"
    textColor: "{colors.paper}"
  button-sm:
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.55rem 0.9rem"
  text-link:
    textColor: "{colors.cobalt}"
    typography: "{typography.body}"
  text-link-on-cobalt:
    textColor: "{colors.paper}"
  field-on-cobalt:
    backgroundColor: "transparent"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "0.6rem 0"
  ledger-row:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    padding: "0.8rem 0.6rem 0.8rem 0.5rem"
  ledger-row-hover:
    backgroundColor: "{colors.paper-2}"
  ledger-row-current:
    backgroundColor: "{colors.cobalt}"
    textColor: "{colors.paper}"
  footer:
    backgroundColor: "{colors.cobalt-deep}"
    textColor: "{colors.cobalt-ink}"
    typography: "{typography.label}"
---

# Design System: Maxnova & Luci Global

> **Approved by Walter on 2026-10-18** ("Apruebo el look cobalto/Archivo tal como está"). This world supersedes `docs/prompt-maestro.md` §4–§5 on display type (Archivo expanded, not a serif), ground (cool paper, not warm light) and hero (schedule table, not a device-screen stack). The Company map is dropped.

## Overview

**Creative North Star: "The Operator's Annual Report"**

The site reads like the printed annual report of a holding company: a full-bleed cobalt cover, interior pages on cool paper that file each operating company as a schedule entry with its facts and a real screen, a founder's letter on a slightly darker sheet, a company-information back page, and a back cover in the cover's cobalt. Proof lives in tables and figures, never in promotional devices.

Density is that of a well-set report: generous section air (up to 9rem between sections), tight rows inside schedules, hairline rules doing the work that boxes and shadows do elsewhere. One family, Archivo variable, carries everything: expanded and heavy for headings, normal width for reading. Figures are tabular everywhere.

Cobalt is the house colour and the only chroma the system owns. Each product brings its own colour only inside its own entry, through its logo and its screenshot.

**Key Characteristics:**
- Cobalt cover and back cover, cool paper interior; no other brand hue.
- Archivo at two widths: 118% for headings, 100% for text.
- Schedules, ledgers and definition rows instead of cards.
- A 2px ink rule opens every list; 1px hairlines separate its rows.
- Square status marks: solid = live, half = active, outline = in development.
- Square corners throughout; the only radius belongs to product logo tiles.
- Real product screenshots in bordered figure plates with numbered report captions.

## Colors

One committed brand hue on a cool, nearly neutral paper, with near-black ink.

### Primary
- **Report Cobalt** (`cobalt`): the cover field, the contact back cover, the current row of the portfolio ledger, status marks on paper, text links on paper, the ink button's hover, focus outlines on paper, selection and caret.
- **Deep Cobalt** (`cobalt-deep`): the footer band, the blind-embossed monogram on the cover (at 0.55 opacity), text on paper buttons, the 404 numeral.
- **Cover Ink** (`cobalt-ink`): secondary text on cobalt: leads, nav links, schedule sector and header cells, form underlines, footer text. Measures 6.7:1 on cobalt and 8.8:1 on deep cobalt.

### Neutral
- **Cool Paper** (`paper`): the interior ground and the type colour on cobalt.
- **Second Sheet** (`paper-2`): the founder's letter band and ledger row hover; tonal layering, not elevation.
- **Sheet White** (`sheet`): behind screenshots inside figure plates and as the hover state of paper buttons. Never a page ground.
- **Ink** (`ink`): body text, headings and the 2px rule that opens a schedule.
- **Ink Secondary** (`ink-2`): intros, sector lines, definition terms, captions. 7.6:1 on paper.
- **Hairline** (`rule`, ink at 16%): row dividers and section separators on paper.
- **Plate Rule** (`rule-strong`, ink at 55%): the 1px border of a screenshot plate.
- **Cover Hairline** (`rule-cover`, paper at 28%): row dividers and the top bar rule on cobalt.

### Named Rules
**The One Hue Rule.** Cobalt is the only colour the house owns. Product colours appear only inside that product's entry (logo, screenshot). Status, success and error are expressed with marks, weight and rules, not with green or red.

**The Two Grounds Rule.** A surface is either cobalt (cover, back cover, 404, sent page) or paper. On cobalt, text is paper or cover ink; on paper, text is ink or ink secondary. Nothing mid-tone in between.

## Typography

**Display Font:** Archivo Variable at `wdth` 118 (with Archivo, system-ui, sans-serif)
**Body Font:** Archivo Variable at `wdth` 100
**Label/Mono Font:** none; labels are Archivo at the small step, tabular figures on.

**Character:** One grotesque stretched for authority and relaxed for reading, so the voice of the cover and the voice of the schedule are the same voice at different widths.

### Hierarchy
- **Display** (700, fluid 2.6rem to 5.6rem, 1.04, -0.03em, width 118%): the cover H1 only, held to about 13ch.
- **Headline** (700, fluid 2rem to 3.125rem, 1.04, -0.02em, width 118%): section H2s, the contact heading, the sent-page message.
- **Title** (700, fluid 1.5rem to 2rem, 1.04 to 1.1, -0.02em, width 118%): holding names, service names, the process title, 404 column heads.
- **Numeral** (300, headline size, width 118%, cobalt): process step numbers; the only light weight in the system.
- **Lead** (400, fluid 1.19rem to 1.375rem, 1.45 to 1.55): cover lead, section intros, holding summaries, the letter body. 46 to 62ch.
- **Body** (400, fluid 1rem to 1.0625rem, 1.55): running text, 58 to 62ch max.
- **Label** (500 to 650, fluid 0.8125rem to 0.875rem): nav, schedule cells, field labels, captions, footer, status lines. Sentence case.

Question rows in the FAQ use Lead size at normal width and 600 weight: they are entries, not headings in the report's display voice.

### Named Rules
**The Two Widths Rule.** Width carries hierarchy. Headings at 118%, reading text at 100%; buttons sit between at 108%. No second family, no italics as display.

**The Tabular Rule.** `font-variant-numeric: tabular-nums` is set on the body and inherited everywhere; figures line up in every schedule.

**The Sentence Case Rule.** Nothing in the system is set in uppercase or letter-spaced caps. Table heads, labels and captions are sentence case at label size.

## Layout

A centred column of `min(100% - 2 × gutter, 84rem)` with a fluid gutter (1rem to 2.5rem). Composition is on a 12-part grid expressed as fractions: the cover splits 7 / 5 with the schedule bottom-aligned on the right; section heads, the letter, company information, FAQ and contact split 5 / 7 (title left, content right); the portfolio splits 3 / 9 (sticky ledger, holdings).

Rhythm comes from four steps: `s` 0.75rem, `m` 1.5rem, `l` 2.5rem to 4rem, `xl` 4.5rem to 9rem. Sections pad by `xl`; heads sit `l` above their content; holdings stack `xl` apart.

The cover is at least `min(100svh, 58rem)` on desktop and content-height on mobile.

Responsive behaviour: at 1000px and below every split collapses to one column, the sticky ledger is removed (the cover schedule already indexes the holdings), and the four process steps become two by two. At 720px and below the nav keeps only Company, the language switch and the button; the schedule drops its sector column; process steps stack. At 480px the wordmark hides and the monogram remains.

### Named Rules
**The Schedule Rule.** Collections are rows, never tiles. A list opens with a 2px ink rule (2px paper rule on cobalt) and its rows are divided by hairlines.

## Elevation & Depth

Flat. No surface casts a shadow. Depth is conveyed by ground change (cobalt to paper, paper to second sheet), by rule weight (2px opener, 1px hairline, 55% plate border) and by one blind emboss: the monogram set very large in deep cobalt on the cover field.

The only `box-shadow` in the build is a 1px solid line under focused form fields, used as a thicker underline, not as elevation.

### Named Rules
**The Printed Page Rule.** Nothing floats. If something needs separation, it gets a rule or a different sheet, never a shadow or blur.

## Shapes

Square everywhere: buttons, fields, textarea, figure plates, ledger rows and status marks all have 0 radius. The arrow is drawn with square line caps. The single exception is the 40px product logo tile (9px radius), because the logo belongs to the product, not to the house.

Status marks are 0.62em squares with a 1.5px border in the current colour: filled for live, half-filled left for active, empty for in development.

## Components

### Buttons
Blunt, square and solid; the arrow moves, the button does not lift.
- **Shape:** square (0).
- **Paper (on cobalt):** paper ground, deep-cobalt text, 0.95rem × 1.4rem, weight 650 at width 108%. Hover goes to sheet white.
- **Ink (on paper):** ink ground, paper text; hover turns cobalt. On the cobalt back cover the submit button renders as the paper button.
- **Small:** 0.55rem × 0.9rem at label size; used for the header "Talk to us".
- **Hover / Focus:** 180ms colour change on the house ease `cubic-bezier(0.16, 1, 0.3, 1)`; the trailing arrow slides 3px; active presses down 1px. Focus is a 2px outline, offset 3px, cobalt on paper and paper on cobalt.
- **Text link:** weight 600 with a trailing arrow; cobalt on paper, paper on cobalt; underline 1px, 2px on hover, offset 0.22em.

### Arrow
One authored 16px stroke arrow for the whole site: right for actions, down for in-page jumps, up-right (rotated −45°) for links that leave the site.

### Cover schedule (signature)
A real table on the cobalt cover: a label-size title over a 2px paper rule, header cells in cover ink, company names at body size weight 650, sector in cover ink, status in paper with a square mark. The whole row is the link target; hover tints the row with paper at 6%.

### Portfolio ledger (signature)
The cover schedule repeated as a sticky index beside the holdings. Rows carry mark, name and sector under a 2px ink opener. Hover uses the second sheet; the holding in view fills its row with cobalt (`aria-current`), sector switching to cover ink. Removed below 1000px.

### Holding entry
A report filing, not a card: head row with optional product logo tile, title-size name and status line, closed by a 2px ink rule; a facts strip of definition pairs (sector, market, outbound link) closed by a hairline; a lead-size summary; then a figure plate.

### Figure plate
Screenshot in a 2:1 window on sheet white with a 1px plate rule; caption beneath at label size in ink secondary after a hairline, numbered as a report figure. With scroll-driven animation support and motion allowed, the plate unveils from a 22% bottom clip and the screenshot drifts 7% inside its window.

### Definition rows
Services, company information and FAQ share one pattern: 2px ink opener, hairline-divided rows, term in ink secondary or display title on the left, value at weight 550 or body copy on the right. FAQ rows are native `details` with a drawn plus that rotates to a minus in 240ms.

### Inputs / Fields
- **Style:** on cobalt only: transparent ground, paper text, 1px cover-ink underline, square. The textarea is a full 1px cover-ink box. Selects use a drawn chevron.
- **Focus:** underline turns paper and thickens to 2px via a 1px line beneath; the textarea gets an inset 1px paper line.
- **Status:** the result message appears in paper, weight 600, behind a 2px left rule, for both success and error.

### Navigation
Label-size links in cover ink on the cobalt bar, paper and underlined on hover, with the paper small button last. The bar is closed by a cover hairline. The footer is a deep-cobalt band at label size.

## Do's and Don'ts

### Do:
- **Do** set every collection as a schedule: a 2px ink rule (paper on cobalt) over hairline-divided rows.
- **Do** keep headings at width 118% and weight 700, and reading text at width 100%.
- **Do** mark status with the square: solid live, half active, outline in development.
- **Do** put every product screenshot in a figure plate with a numbered caption.
- **Do** keep product colour inside the product's own entry (logo tile, screenshot).
- **Do** use the house ease `cubic-bezier(0.16, 1, 0.3, 1)` for state changes, and leave all content visible without JavaScript or with reduced motion.

### Don't:
- **Don't** introduce a second brand hue, including green or red for form states.
- **Don't** wrap content in filled, rounded or shadowed cards; separate with rules and sheets.
- **Don't** round corners on house elements; only the product logo tile is rounded.
- **Don't** set uppercase, letter-spaced labels or eyebrows above headings.
- **Don't** add a second type family or a serif display face without Walter confirming the brief over this build.
- **Don't** cast shadows or blur surfaces for depth.
