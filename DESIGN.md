---
name: CodeFuse Solutions
description: Inset Panels — a quiet off-white studio site with a centred tracked wordmark and large navy and copper fields carrying big geometric white type.
colors:
  paper: "#fafafa"
  ink: "#111111"
  heading: "#3d3d3d"
  text: "#413e3e"
  mute: "#6b6b6b"
  line: "#e2e2e2"
  navy: "#0f2a5c"
  navy-deep: "#0a1f47"
  copper: "#a9642a"
  copper-deep: "#8c5122"
  white: "#ffffff"
typography:
  display:
    fontFamily: "Jost Variable, Century Gothic, Futura, sans-serif"
    fontSize: "clamp(2.375rem, 6.2vw, 5.25rem)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.012em"
  headline:
    fontFamily: "Jost Variable, Century Gothic, Futura, sans-serif"
    fontSize: "clamp(1.75rem, 3vw, 2.1875rem)"
    fontWeight: 600
    lineHeight: 1.1
  title:
    fontFamily: "Jost Variable, Century Gothic, Futura, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 600
    lineHeight: 1.2
  body:
    fontFamily: "Switzer, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.8
  label:
    fontFamily: "Jost Variable, Century Gothic, Futura, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 700
    letterSpacing: "0.15em"
  button:
    fontFamily: "Jost Variable, Century Gothic, Futura, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    letterSpacing: "0.24em"
  wordmark:
    fontFamily: "Jost Variable, Century Gothic, Futura, sans-serif"
    fontSize: "clamp(1.125rem, 1.75vw, 1.5625rem)"
    fontWeight: 700
    letterSpacing: "0.15em"
  nav:
    fontFamily: "Switzer, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 400
    letterSpacing: "0.08em"
rounded:
  none: "0"
spacing:
  inset: "clamp(0.625rem, 1.4vw, 1.25rem)"
  gutter: "clamp(1.25rem, 5vw, 3.5rem)"
  section: "clamp(3.5rem, 10vh, 6rem)"
components:
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "1rem 1.75rem"
  button-outline-on-panel:
    backgroundColor: "transparent"
    textColor: "{colors.white}"
    rounded: "{rounded.none}"
    padding: "1rem 1.75rem"
---

# Design System: CodeFuse Solutions

## Overview

**Creative North Star: "Inset Panels"**

Rebuilt on 2026-11-16 at the owner's request, modelled on the layout language
of christopherboyer.com (a Squarespace site): an off-white page, a centred
tracked-capitals wordmark with the navigation split either side of it, and
large full-width blocks held a small margin off the viewport edge, carrying
big geometric white type. This replaces the earlier "Navy & Copper" card
layout. The copy, the four-page structure and the navy and copper brand
colours carry over; the reference's photography, text and fonts do not.

The reference fills its blocks with photographs. This site has none yet, so
the blocks are solid navy (with a faint drafting grid) and deep copper.
`Panel` accepts an `image` prop for when a real photograph exists.

**Key Characteristics:**
- Off-white ground; colour appears only as inset panels, never as tint
- Jost (a free Futura-style geometric) for display, headings and all tracked
  capitals; Switzer for reading text
- Square corners everywhere; outline buttons in tracked capitals
- Centred page heads; prose in a 900px column
- No fabricated proof; sample case studies always show a Sample badge

## Colors

- **Paper** (#fafafa): the ground. **Ink** (#111111): wordmark, display type,
  buttons. **Heading** (#3d3d3d): section headings. **Text** (#413e3e): body.
  **Mute** (#6b6b6b): nav and secondary lines. **Line** (#e2e2e2): hairlines.
- **Navy** (#0f2a5c → #0a1f47): the hero, the closing band, the founder card,
  and the placeholder tile for a case study with no screenshot.
- **Copper Deep** (#8c5122): the second panel tone, and small labels and link
  hovers on the light ground. **Copper** (#a9642a) is too light for small text
  on Paper and is not used for it.

## Typography

- **Display** (Jost 700, up to 84px, tight): one per page; white on a panel or
  Ink on Paper.
- **Headline** (Jost 600, up to 35px): section titles.
- **Title** (Jost 600, 22px): tiles, steps, names.
- **Body** (Switzer 400, 18px / 1.8).
- **Label** (Jost 700, 13px, 0.15em, uppercase): eyebrows, the hero's second
  line, the footer line. Buttons use the same face at 12px / 0.24em.

Jost is bundled from `@fontsource-variable/jost`; Switzer is self-hosted in
`public/fonts`.

## Layout

- **Header:** not sticky. Three columns: Home, Work | wordmark | Studio,
  Contact. Under 760px the wordmark takes its own line with all four links in
  one row beneath it; there is no menu to open.
- **Panel:** full width minus `--inset` each side. Centred variant for the
  hero and closing bands; the hero is `min(74vh, 46rem)` tall.
- **Page head:** centred label, display, lede.
- **Prose:** `.column`, 900px.
- **Work:** two-column tiles (16:10 screenshot, label, title, summary).
- **Studio:** the portrait with a navy card overlapping its right edge.

**Site structure (binding, unchanged):** `/`, `/work/`, `/work/<slug>/`,
`/studio/`, `/contact/`. Every page except Contact ends with a navy closing
band pointing at Contact. Current page is marked with `aria-current="page"`.

## Do's and Don'ts

- **Do** keep every claim true today; `sample: true` entries always show the
  badge.
- **Do** honor prefers-reduced-motion: reveals render settled.
- **Do** use a real photograph in a panel only if it is the studio's own or
  properly licensed.
- **Don't** add rounded corners, shadows, cards with borders, or a third
  panel colour.
- **Don't** copy the reference site's photographs, copy or licensed fonts.
