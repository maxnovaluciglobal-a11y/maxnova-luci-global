---
name: Maxnova & Luci Global
description: A holding presented as a tech-premium product page. Dark zinc ground, Inter, glass surfaces, real product screens in soft frames, one warm glow. Adapted from Launch UI (MIT).
colors:
  background: "#09090b"
  foreground: "#fafafa"
  muted: "#27272a"
  muted-foreground: "#a1a1aa"
  prose-ink: "#d4d4d8"
  input: "#27272a"
  ring: "#a1a1aa"
  border: "rgb(216 216 221 / 0.1)"
  border-top: "rgb(216 216 221 / 0.2)"
  border-bottom: "rgb(216 216 221 / 0.05)"
  brand: "#fdba72"
  brand-foreground: "#fb923c"
  primary-ink: "#18181b"
  primary-hover: "#e4e4e7"
  status-idle: "#52525b"
  status-live: "#4ade80"
  status-error: "#f87171"
typography:
  display:
    fontFamily: "'Inter Variable', 'Inter', system-ui, -apple-system, sans-serif"
    fontSize: "clamp(2.5rem, 1rem + 6.2vw, 5.5rem)"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "'Inter Variable', 'Inter', system-ui, -apple-system, sans-serif"
    fontSize: "clamp(2rem, 1.3rem + 2.6vw, 3.25rem)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.025em"
  title-lg:
    fontFamily: "'Inter Variable', 'Inter', system-ui, -apple-system, sans-serif"
    fontSize: "clamp(1.75rem, 1.3rem + 1.6vw, 2.5rem)"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.025em"
  title:
    fontFamily: "'Inter Variable', 'Inter', system-ui, -apple-system, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  lead:
    fontFamily: "'Inter Variable', 'Inter', system-ui, -apple-system, sans-serif"
    fontSize: "clamp(1.0625rem, 1rem + 0.4vw, 1.25rem)"
    fontWeight: 500
    lineHeight: 1.6
  body:
    fontFamily: "'Inter Variable', 'Inter', system-ui, -apple-system, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    fontFeature: "'cv11', 'ss01'"
  label:
    fontFamily: "'Inter Variable', 'Inter', system-ui, -apple-system, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1
  caption:
    fontFamily: "'Inter Variable', 'Inter', system-ui, -apple-system, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.4
rounded:
  sm: "8px"
  md: "10px"
  lg: "14px"
  xl: "16px"
  full: "999px"
spacing:
  gutter: "clamp(1rem, 0.5rem + 2.5vw, 2rem)"
  section: "clamp(4rem, 2.5rem + 6vw, 8rem)"
  block: "clamp(4rem, 3rem + 4vw, 7rem)"
  card: "clamp(1.4rem, 1rem + 1.5vw, 2rem)"
  stack: "1rem"
components:
  button-primary:
    backgroundColor: "{colors.foreground}"
    textColor: "{colors.primary-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "0 1rem"
    height: "2.25rem"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
  button-primary-lg:
    backgroundColor: "{colors.foreground}"
    textColor: "{colors.primary-ink}"
    rounded: "{rounded.sm}"
    padding: "0 1.4rem"
    height: "2.75rem"
  button-glow:
    textColor: "{colors.foreground}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "0 1rem"
    height: "2.25rem"
  pill:
    textColor: "{colors.muted-foreground}"
    typography: "{typography.caption}"
    rounded: "{rounded.full}"
    padding: "0.2rem 0.6rem"
  pill-live:
    textColor: "{colors.foreground}"
  card-glass:
    textColor: "{colors.foreground}"
    rounded: "{rounded.lg}"
    padding: "{spacing.card}"
  input:
    backgroundColor: "{colors.input}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.sm}"
    padding: "0.6rem 0.75rem"
  nav:
    textColor: "{colors.muted-foreground}"
    typography: "{typography.label}"
    height: "4rem"
  mockup-frame:
    rounded: "{rounded.xl}"
    padding: "0.5rem"
---

# Design System: Maxnova & Luci Global

<!-- Provenance: visual language adapted from Launch UI open-source edition (MIT, (c) 2024 Mikolaj Dobrucki, github.com/launch-ui/launch-ui @ b0d4d5b), chosen by Walter on 2026-10-18 from 21st.dev with the constraint "must be free". Ported to Astro + plain CSS; license in THIRD_PARTY_NOTICES.md. This system supersedes the departures-board world (seed a5e59273), the cobalt/Archivo world, and the art-direction and motion guidance in docs/prompt-maestro.md §4 and §5. Tokens are normative in src/styles/global.css :root. -->

## Overview

**Creative North Star: "The Holding as a Product Launch"**

The site presents the company the way a well-funded product presents itself: a dark zinc stage, one clear sentence in large Inter, a white call to action, and the product itself rising out of a warm glow. The twist is that the product is the holding. The hero mockup is a mosaic of the three live companies' real screens, each tile labelled with a live status dot and linking to its entry. Everything after the hero is calm and evidential: alternating feature rows with framed screenshots, divided rows for services, a glass letter from the founder, a glass table of company data, an accordion of questions, and a glass contact form sitting in the second glow.

Density is generous and quiet. Hierarchy comes from size, weight and tracking in a single family, and from a two-step neutral system (foreground white for what matters, muted zinc for everything that supports it). Depth comes from light, not from shadow: glass surfaces have a brighter top edge than bottom, and the only heavy shadow sits under product screens. Color is almost absent; the warm orange exists as light, and green exists only as a truthful status signal.

The language is Launch UI's, adapted. It is a register (Stripe/Linear-class product page), not a template to fill with invented dashboards: every screen shown is a real capture of a live product.

**Key Characteristics:**
- Dark zinc ground (`background`), white primary actions, muted zinc supporting copy.
- Inter only, 600 for headings with negative tracking, 500 for leads and labels.
- Glass surfaces with a lit top edge and a 5% white top-down gradient.
- Real product screenshots in soft, nested frames with a deep ambient shadow.
- One warm radial glow, behind the hero mockup and the contact block only.
- Green status dots for live companies; muted dots for anything not live.
- "Appear" entrance on load (short rise plus small blur) and scroll-rise on screens; static without JS and under reduced motion.

## Colors

A near-monochrome zinc system with one warm light source and one functional green.

### Primary
- **Paper White** (`foreground`): headings, primary button fill, the active state of links and pills. White, not orange, is the action color.
- **Ink on White** (`primary-ink`): text on the white primary button. **White Pressed** (`primary-hover`) is its hover fill.

### Secondary
- **Ember Glow** (`brand-foreground`): the inner hue of the radial glow and the browser `accent-color`. Lives as light, never as a fill.
- **Apricot Light** (`brand`): the outer hue of the glow, step numerals in the process list, text selection tint and caret.

### Tertiary
- **Live Green** (`status-live`): status dots and pills for companies verifiably live, and the success state of the contact form. Carries a soft 8px green halo.
- **Error Coral** (`status-error`): error dot of the contact form status only.

### Neutral
- **Zinc Night** (`background`): page ground, `theme-color`, nav and form backdrops at reduced opacity.
- **Zinc Muted** (`muted`, `input`): field borders, and the oversized 404 numeral.
- **Zinc Mist** (`muted-foreground`, `ring`): leads, descriptions, nav links at rest, captions, dt labels, focus ring (7.7:1 on background).
- **Prose Ink** (`prose-ink`): long-form reading text in the founder's letter, one step brighter than muted for comfortable paragraphs.
- **Hairline** (`border`, with `border-top` and `border-bottom`): every divider and container edge; the top/bottom pair builds the lit-edge glass.
- **Idle Dot** (`status-idle`): status dot for anything not live.

### Named Rules
**The Warm Light Rule.** Orange exists as light: the two-ellipse radial glow behind the hero mockup and the contact block, plus tiny marks (step numerals, selection, caret). It is never a button fill, a text block, a border, or a background panel.

**The White Action Rule.** The primary action is a white button with near-black text. There is exactly one primary per view region; the secondary is the glow button.

**The Truthful Green Rule.** Green appears only when something is verifiably live or a form has actually been accepted by the server. It is never decorative.

## Typography

**Display Font:** Inter Variable (self-hosted via @fontsource-variable/inter, optical-size axis), with Inter, system-ui, -apple-system, sans-serif
**Body Font:** the same family
**Label/Mono Font:** none; numerals use `tabular-nums` where they count

**Character:** One neutral, precise grotesque carries everything. Large sizes are pulled tight (negative tracking) so headlines read as a single shape; body text uses Inter's alternate `cv11` and `ss01` forms for a slightly more open, product-grade texture.

### Hierarchy
- **Display** (600, `display` clamp up to 5.5rem, 1.05): the hero H1 only, max 15ch, centered, with a faint 25px drop-shadow for lift off the glow.
- **Headline** (600, `headline` clamp up to 3.25rem, 1.1): section H2s, centered in a 48rem heading block, or left-aligned in split layouts.
- **Title Large** (600, `title-lg` clamp up to 2.5rem): product names in feature rows.
- **Title** (600, 1.25rem): card titles and service names.
- **Lead** (500, `lead` clamp up to 1.25rem, 1.6): hero lead and section intros, always in muted-foreground, max 46rem.
- **Body** (400, 1rem, 1.6): paragraphs; descriptions capped at 42–62ch.
- **Label** (500, 0.875rem): buttons, nav links, field labels, small headings above logo rows.
- **Caption** (500, 0.75rem): pills, figure captions, dt labels in fact lists.

### Named Rules
**The One Family Rule.** Inter is the only typeface. Hierarchy is made with size, weight (400/500/600) and tracking, never with a second family, italics as display, or uppercase tracking.

**The Muted Support Rule.** Anything that explains a heading (lead, intro, description, caption) is set in muted-foreground; only headings, names, values and actions are full white.

## Layout

A single centered column capped at a 1280px container with fluid gutters (`spacing.gutter`). Sections are separated by fluid vertical padding (`spacing.section`, 4–8rem); major groups inside a section by `spacing.block`.

- **Hero:** centered stack (gap 1.6rem): H1, lead, two buttons, then the framed mosaic. The section is masked to fade to transparent at the bottom 18%.
- **Mosaic:** 2fr / 1fr grid, two rows, 3:1 aspect; the first company spans both rows. At 720px and below it becomes one column of 2:1 tiles.
- **Feature rows:** 5fr text / 7fr media, alternating sides; collapse to one column at 1000px.
- **Split sections** (company data, FAQ): 4fr heading / 8fr content; one column at 1000px.
- **Services:** divided rows, 4fr term / 8fr description; one column at 720px.
- **Process steps:** four columns divided by vertical hairlines; two columns at 1000px, one at 720px, with hairlines turning horizontal.
- **Cards:** two-column grid with 1rem gap; one column at 720px.
- Breakpoints observed: 1000px, 720px, 480px (brand name hides, mark stays).

## Elevation & Depth

Depth is made with light and translucency, not stacked shadows. Glass surfaces are flat panels with a lit top edge, a dimmer bottom edge and a 5%-to-0 white gradient. The sticky nav and the contact form use a 12px backdrop blur over the zinc ground at 60–70% opacity. The only strong shadow sits under product screens, where it reads as a real object resting on the page.

### Shadow Vocabulary
- **Screen** (`box-shadow: -12px 16px 48px rgb(0 0 0 / 0.53)`): product screenshots inside frames and mosaic tiles.
- **Primary lift** (`box-shadow: 0 1px 2px rgb(0 0 0 / 0.3)`): white primary button.
- **Glow button** (`box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.13), 0 2px 4px -2px rgb(0 0 0 / 0.13)`): the secondary glass button.
- **Live halo** (`box-shadow: 0 0 8px rgb(74 222 128 / 0.6)`): live status dots only.
- **Field focus** (`box-shadow: 0 0 0 3px rgb(161 161 170 / 0.25)`): inputs on focus.

### Named Rules
**The Lit Edge Rule.** A raised surface shows its depth through a brighter top border than bottom border, never through a drop shadow. Heavy shadow is reserved for product screens.

## Shapes

Soft, nested rounded rectangles in a 10px family. Controls (buttons, inputs) sit at 8px (`rounded.sm`); glass cards, letter and form at 14px (`rounded.lg`); the hero frame at 16px (`rounded.xl`) with the smaller feature frame at 14px; screenshots inside frames at 8px. Pills, status dots and the mosaic label are fully round. Logos sit in 6–9px rounded squares. Focus outlines are 2px with a 4px radius and 2px offset.

**The Nested Radius Rule.** A frame's radius equals its inner screen's radius plus its padding (16px frame, 8px padding, 8px screen). Never put a sharper corner outside a softer one.

## Components

### Buttons
Product-grade, compact and quiet; the arrow is the only flourish.
- **Shape:** gently rounded (8px), heights 2rem (small), 2.25rem (default), 2.75rem (large).
- **Primary:** white fill, near-black label, 500 weight, subtle 1px lift shadow.
- **Glow (secondary):** translucent white top-down gradient (10% to 5%), hairline border with a brighter top edge and no bottom border, white label.
- **Hover / Focus:** primary fill steps to `primary-hover`; glow gradient brightens to 15%. The authored arrow nudges 2px right over 220ms. Press moves the button down 1px. Focus shows the global 2px zinc ring.
- **Arrow:** a single authored 16px stroke SVG (1.6 stroke, square caps), rotated -45deg for links that leave the site.

### Chips (Status pills)
- **Style:** fully round, hairline border, 0.75rem/500, with a 6px leading dot. Default text and dot are muted.
- **State:** live turns the text white and the dot green with its halo. Used beside every company name, never as a heading label.

### Cards / Containers
- **Corner Style:** 14px.
- **Background:** glass gradient over the zinc ground (letter, company rows, form, secondary company cards).
- **Shadow Strategy:** none; see the Lit Edge Rule.
- **Border:** hairline with lit top and dim bottom.
- **Internal Padding:** `spacing.card`; letter and form slightly larger (up to 3rem / 2.25rem).

### Inputs / Fields
- **Style:** 50% zinc-muted fill, 1px `input` border, 8px radius, 0.9375rem text; label above in 500, optional marker in muted 400.
- **Focus:** border shifts to `ring` with a 3px soft zinc halo; no outline.
- **Error / Disabled:** status line with a coral dot (error) or green dot with halo (sent, only after the API returns 200); disabled submit drops to 60% opacity.
- **Select:** native, custom 14px chevron in muted zinc.

### Navigation
- **Style:** sticky, 4rem tall, zinc at 70% with 12px blur and a bottom hairline. Monogram (inverted to white) plus brand name at left; links at 0.875rem in muted, turning white on hover; language toggle; small white primary button.
- **Mobile:** at 720px secondary links hide (Portfolio, Company, language and CTA stay); at 480px the brand name hides and the monogram remains.

### Mockup Frame and Mosaic (signature)
Real product screens held in a translucent 10% zinc frame (16px radius, 8px padding). Inside, each screen has an 8px radius, a lit top hairline, and the Screen shadow. In the hero, three screens form the mosaic; each tile carries a blurred dark pill label with a status dot and links to the company's entry. Screens sit above the warm glow.

### Glow (signature)
Two stacked radial ellipses, centered: an outer Ember ellipse (50% at 10% falling to 0 by 60%, opacity 0.35, scaled 2.5x) and an inner Apricot ellipse (opacity 0.6, scaled 2x). Placed once behind the hero mockup and once centered behind the contact block. Purely decorative, `aria-hidden`, no pointer events.

### Motion
One curve for everything (`cubic-bezier(0.16, 1, 0.3, 1)`). On load, hero elements "appear" over 700ms (rise 1rem and clear a 6px blur), staggered at 100, 220 and 420ms. Feature screens and cards rise 2rem as they enter the viewport where scroll-driven timelines are supported. Animations only run under `html.js` and `prefers-reduced-motion: no-preference`, and never start from opacity 0, so content is always visible.

### Accordion (FAQ)
Native `details` rows split by hairlines; question at 1.0625rem/500, underlined on hover; a CSS-drawn chevron rotates from down to up over 220ms.

## Do's and Don'ts

### Do:
- **Do** use the white primary button for the one main action in a region, and the glow button for the secondary.
- **Do** show only real screenshots of live products inside mockup frames, with the Screen shadow and nested radii (16px frame, 8px padding, 8px screen).
- **Do** keep supporting copy in `muted-foreground` and reserve full white for headings, names, values and actions.
- **Do** build raised surfaces as glass: hairline border, brighter top edge, 5% white top-down gradient.
- **Do** keep every animation on the single ease curve, gated behind `html.js` and reduced-motion, starting from transform or blur rather than invisibility.
- **Do** credit Launch UI (MIT) in THIRD_PARTY_NOTICES.md whenever more of its patterns are ported.

### Don't:
- **Don't** fill buttons, panels or text blocks with orange; the brand hues exist as glow light and tiny marks only.
- **Don't** show a green status dot for anything not verifiably live.
- **Don't** add invented dashboards, fake metrics, testimonials or customer counts to mockups or cards.
- **Don't** introduce a second typeface or uppercase letter-spaced labels; Inter at 400/500/600 carries the whole hierarchy.
- **Don't** place kicker or eyebrow labels above headings.
- **Don't** add drop shadows to cards or glass containers, or hard offset shadows anywhere.
- **Don't** scatter glows; at most one per view region, behind the main object (on the home: hero mockup and contact block).
