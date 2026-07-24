---
name: CodeFuse Solutions
description: Dark-technical catalog identity — matte void, pulse-ink hairlines, numbered entries, coded color strips.
colors:
  void: "#0b0b0a"
  pulse: "#f2efe6"
  industrial: "#a09d94"
  hairline-dark: "#262622"
  code-blueprint: "#3760c8"
  code-frequency: "#1e8f89"
  code-energy: "#e6b91e"
  code-contact: "#d0342c"
typography:
  display:
    fontFamily: "Technor, Arial Black, sans-serif"
    fontSize: "clamp(2.5rem, 6.8vw, 5.75rem)"
    fontWeight: 900
    lineHeight: 1.0
    letterSpacing: "0.01em"
  section-title:
    fontFamily: "Technor, Arial Black, sans-serif"
    fontSize: "clamp(1.5rem, 3vw, 2.5rem)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "0.02em"
  entry-title:
    fontFamily: "Technor, Arial Black, sans-serif"
    fontSize: "clamp(1.125rem, 1.8vw, 1.5rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.03em"
  body:
    fontFamily: "Martian Mono, Consolas, monospace"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.75
  label:
    fontFamily: "Martian Mono, Consolas, monospace"
    fontSize: "0.75rem"
    fontWeight: 500
    letterSpacing: "0.12em"
  mail-display:
    fontFamily: "Technor, Arial Black, sans-serif"
    fontSize: "clamp(1.25rem, 3.2vw, 2.625rem)"
    fontWeight: 900
    letterSpacing: "0.01em"
  nav:
    fontFamily: "Martian Mono, Consolas, monospace"
    fontSize: "0.75rem"
    fontWeight: 500
    letterSpacing: "0.1em"
  statement:
    fontFamily: "Martian Mono, Consolas, monospace"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.8
  button:
    fontFamily: "Martian Mono, Consolas, monospace"
    fontSize: "0.8125rem"
    fontWeight: 500
    letterSpacing: "0.1em"
rounded:
  none: "0px"
spacing:
  gutter: "clamp(1.25rem, 6vw, 6.5rem)"
  section: "clamp(4.5rem, 12vh, 8.5rem)"
components:
  button-primary:
    backgroundColor: "transparent"
    textColor: "{colors.pulse}"
    rounded: "{rounded.none}"
    padding: "1.0625rem 1.75rem"
  button-primary-hover:
    backgroundColor: "{colors.pulse}"
    textColor: "{colors.void}"
---

# Design System: CodeFuse Solutions

## Overview

**Creative North Star: "The Catalog"**

Factory-Records catalog identity fused to a software studio: matte void-black board, pulse-ink hairline graphics, engraved industrial display caps, mono body text, and a numbering system that treats everything the studio makes as a pressed release. The studio itself is the catalog; every section of the site is a numbered entry (CF 001 THE WORK, CF 002 METHOD, CF 003 STUDIO, CF 007 CONTACT), and every future case study takes the next number — one file, one release. Vast unprinted black is a feature: density lives in precise small type and hairline plots, never in filler.

One deliberate divergence from the source world: Factory withheld; we label. This is a Persuade surface — the offer and the action stay in plain words within seconds. The coded color strips are a real system (each entry carries its code), but text always accompanies code.

This replaces the light-editorial canon world entirely (user-directed redesign, 2026-07-24). The old site is anti-reference. Product truth (PRODUCT.md) is unchanged: no fabricated proof, work section absent until real, email is the one action.

**Key Characteristics:**
- Matte Void ground, Pulse hairline ink, Industrial gray secondary — color only as coded blocks
- Engraved (outline) Technor display caps over Martian Mono body
- Catalog-number grammar on every entry; hairline radial pulse plot as the signature graphic
- Contact red is reserved: the contact entry alone owns a hue

## Colors

Void/Pulse monochrome carries the page; the code hues exist only as small coded blocks, never as grounds or text — except Contact red, which marks the contact entry's code and accents.

### Primary
- **Pulse** (#f2efe6): all text, hairlines, plots, borders on Void. The ink of the system.

### Secondary
- **Contact Red** (#d0342c): the contact entry's code block, the nav CONTACT link, and the active state of the contact action. Nowhere else.

### Tertiary
- **Blueprint** (#3760c8), **Frequency** (#1e8f89), **Energy** (#e6b91e): coded blocks in entry code strips only. Never text, never grounds.

### Neutral
- **Void** (#0b0b0a): the ground everywhere; matte, never pure #000.
- **Industrial** (#a09d94): body copy and secondary labels; ≥4.5:1 on Void.
- **Hairline Dark** (#262622): 1px rules and borders between entries.

### Named Rules
**The Code Rule.** Color hues appear only inside code strips (small rectangular blocks) — with one exception: Contact Red may color the contact entry's text accents and nav link. A hue as a background field or headline color is a violation.

## Typography

**Display Font:** Technor 900/700 (industrial squared caps; Arial Black fallback), self-hosted woff2
**Body Font:** Martian Mono 400/500/700 (Consolas fallback), self-hosted woff2

**Character:** Engraved and machined. Display headlines are UPPERCASE Technor; the hero statement renders "engraved" — outline stroke (1.5px Pulse, transparent fill) with the key phrase solid-filled. Body is mono at a deliberately small size with tall leading — the printed-spec voice.

### Hierarchy
- **Display** (900, clamp(2.5rem, 6.8vw, 5.75rem), 1.0, uppercase): hero statement and closing email only. Hero uses engraved outline with one filled emphasis phrase.
- **Section Title** (700, clamp(1.5rem, 3vw, 2.5rem), uppercase): catalog entry titles (THE WORK WE TAKE ON, METHOD…).
- **Entry Title** (700, clamp(1.125rem, 1.8vw, 1.5rem), uppercase): rows and steps inside entries.
- **Body** (Martian Mono 400, 0.9375rem, 1.75): copy in Industrial, max 62ch.
- **Label** (Martian Mono 500, 0.75rem, 0.12em tracked, uppercase): catalog numbers, kickers, nav, code-strip captions.
- **Mail Display** (900, clamp(1.25rem, 3.2vw, 2.625rem), uppercase): the closing email link.
- **Statement** (Martian Mono 400, 1.0625rem, 1.8): the studio paragraph, in Pulse rather than Industrial.
- **Button Label** (Martian Mono 500, 0.8125rem, 0.1em tracked, uppercase): button text.

### Named Rules
**The Entry Header Rule.** Every section opens with the same machined header row: catalog number (Label) · code strip · section title. No section may invent a different header grammar.

## Layout

Single column inside gutters (clamp(1.25rem, 6vw, 6.5rem)), content capped at 1440px. Entries are separated by 1px Hairline Dark rules and clamp(4.5rem, 12vh, 8.5rem) vertical padding. The hero is a 7/5 split — engraved statement left, radial pulse plot right — collapsing to stacked below 900px (plot shrinks, never disappears: mobile keeps the signature). Capability and method content read as hairline-ruled rows with entry titles left, mono copy right (stacking below 820px). Vast black margins are intentional; do not fill them.

## Elevation & Depth

None. The board is matte; there are no shadows, no glows, no blur. Depth is drawn — hairline weight (1px resting, 2px active), plot line density, and type scale. The sticky nav is opaque Void with a Hairline Dark bottom rule (no translucency, no backdrop blur).

## Shapes

Machined rectangles, 0 radius everywhere. Buttons are 1px Pulse-bordered rectangles with mono labels; active/hover inverts (Pulse fill, Void text). Code strips are butt-jointed rectangles. The only circles on the page belong to the radial plot's ticked ring.

## Components

### Buttons
- **Shape:** square-cornered, 1px solid Pulse border, transparent ground
- **Primary:** mono Label text in Pulse, 1.0625rem × 1.75rem padding, trailing "→"
- **Hover / Active / Focus:** Pulse fill with Void text (hard swap, 120ms); focus-visible adds a 2px Pulse outline offset 3px
- **Contact variant:** border and text in Contact Red; hover fills Contact Red with Pulse text

### Text links
- Mono, Pulse, 1px underline drawn via background-image; hover doubles the underline to 2px. The nav CONTACT link is Contact Red.

### Navigation
- Sticky, opaque Void, Hairline Dark bottom rule always visible; left: barcode mark + CODEFUSE SOLUTIONS in Label caps; right: mono links (METHOD, STUDIO, CONTACT-in-red, plus WORK when it exists). Tap targets ≥44px tall on mobile.

### Entry Header (signature)
`CF 00N` Label + code strip (3–5 hue blocks, 14×8px, butt-jointed) + Section Title on one baseline row, sitting directly on the entry's top hairline.

### The Pulse Plot (signature graphic)
A radial burst of hairline Pulse strokes (deterministic pseudo-random lengths, seeded at build) inside a ticked ring — the studio's "pressed signal." Lives in the hero at large scale; a compact variant may mark future case-study entries. Motion: the plot draws once on load (stroke groups fading in over ~1.2s) and thereafter rotates imperceptibly slowly (≥180s/rev); reduced-motion renders it complete and static. Canvas/SVG hairlines only — no bitmap.

## Do's and Don'ts

### Do:
- **Do** keep every claim true today; the Work entry (CF 004+) renders only when a case-study file exists, and each new case study takes the next catalog number automatically.
- **Do** keep the offer and contact@codefusesolutions.com legible as plain text within the first viewport and again at the closing entry; the hero primary action targets #contact (visible address), and mailtos carry a ?subject= prefill.
- **Do** give every interactive element a hard inverted hover state and visible keyboard focus.
- **Do** honor prefers-reduced-motion: plot static and complete, reveals settled, no rotation.

### Don't:
- **Don't** use glows, neon edges, scanlines, gradients, blur, or any "dark dashboard" garnish — the world is matte print, not CRT.
- **Don't** let a hue escape its code block (Contact Red's defined roles excepted).
- **Don't** hide meaning behind code alone — every code strip sits beside plain words.
- **Don't** carry over the ember palette, fuse-line motifs, or any grammar from the replaced light-editorial world.
