---
name: CodeFuse Solutions
description: The Misfit Grid — clean exposed-grid professionalism where exactly one element per screen doesn't fit, and the misfit is the action.
colors:
  paper: "#fbfaf7"
  ink: "#1a1916"
  slate: "#5b584e"
  gridline: "#e9e6de"
  cobalt: "#2b46e0"
  cobalt-deep: "#1f34b8"
  white: "#ffffff"
typography:
  display:
    fontFamily: "Clash Display, Arial Black, sans-serif"
    fontSize: "clamp(2.5rem, 6.5vw, 5.5rem)"
    fontWeight: 600
    lineHeight: 1.04
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Clash Display, Arial Black, sans-serif"
    fontSize: "clamp(1.625rem, 3.2vw, 2.5rem)"
    fontWeight: 600
    lineHeight: 1.12
    letterSpacing: "-0.005em"
  title:
    fontFamily: "Clash Display, Arial Black, sans-serif"
    fontSize: "1.3125rem"
    fontWeight: 600
    lineHeight: 1.25
  body:
    fontFamily: "Switzer, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
  lede:
    fontFamily: "Switzer, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.125rem, 1.7vw, 1.3125rem)"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Switzer, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 500
    letterSpacing: "0.06em"
  button:
    fontFamily: "Switzer, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 600
  small:
    fontFamily: "Switzer, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
  mail-display:
    fontFamily: "Clash Display, Arial Black, sans-serif"
    fontSize: "clamp(1.375rem, 3.2vw, 2.625rem)"
    fontWeight: 700
    letterSpacing: "-0.005em"
  statement:
    fontFamily: "Switzer, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.1875rem, 1.9vw, 1.5rem)"
    fontWeight: 400
    lineHeight: 1.55
rounded:
  none: "0px"
spacing:
  gutter: "clamp(1.25rem, 6vw, 6rem)"
  section: "clamp(4.5rem, 12vh, 8.5rem)"
components:
  misfit-primary:
    backgroundColor: "{colors.cobalt}"
    textColor: "#ffffff"
    rounded: "{rounded.none}"
    padding: "1.25rem 2rem"
  misfit-primary-hover:
    backgroundColor: "{colors.cobalt-deep}"
---

# Design System: CodeFuse Solutions

## Overview

**Creative North Star: "The Misfit Grid"**

A clean, warm, professional page built on a visibly drawn grid — and on every screen, exactly one element refuses to fit. It crosses a column rule, tilts a couple of degrees, or bleeds a margin. That misfit is always the thing that acts, and it alone carries color. The site performs the company's positioning on itself: CodeFuse takes the problems that don't fit, so on this site, the thing that doesn't fit is the thing you click.

This is the third world (2026-07-24, replacing the dark Catalog, which replaced the light-editorial canon; both are anti-reference). The pinned brief: clean and professional with character — personality from one clever concept, color with purpose, in the spirit of adhamdannaway.com and tamalsen.dev, never bold for its own sake.

**Signature interaction:** hovering a misfit straightens it — CodeFuse makes the thing that doesn't fit, fit.

**Key Characteristics:**
- Warm paper ground with faintly drawn column rules; calm near-black type
- Cobalt reserved exclusively for misfit actions; quiet breaks stay ink and positional
- One misfit per screen — the rhythm is order, order, break
- No fabricated proof; Work renders only when real case studies exist

## Colors

Monochrome professionalism plus one purposeful accent that means exactly one thing.

### Primary
- **Cobalt** (#2b46e0): the misfit-action color — the hero CTA plate, the nav Contact plate, the closing email plate. 6.5:1 as text on Paper; white text on Cobalt passes at 6.8:1.
- **Cobalt Deep** (#1f34b8): hover/pressed state of Cobalt surfaces.

### Neutral
- **White** (#ffffff): text on Cobalt plates and selection foreground only — never a ground.
- **Paper** (#fbfaf7): warm white ground; never pure #fff.
- **Ink** (#1a1916): headings and primary text.
- **Slate** (#5b584e): body copy and secondary labels; ≥6:1 on Paper.
- **Gridline** (#e9e6de): the drawn column rules and section hairlines — visible but quiet.

### Named Rules
**The Misfit Rule.** Cobalt appears only on elements that both (a) break the grid and (b) perform an action. A colored element that fits, or a broken element that isn't actionable, is a violation. Quiet (non-action) breaks are ink and positional only.

## Typography

**Display Font:** Clash Display 600/700 (Arial Black fallback), self-hosted woff2
**Body Font:** Switzer 400/500/600 (Helvetica Neue fallback), self-hosted woff2

**Character:** Confident geometry with warmth — Clash Display's character carries personality without shouting; Switzer stays invisible and professional in the body. No uppercase-tracking theatrics; sentence case throughout except small labels.

### Hierarchy
- **Display** (600, clamp(2.5rem, 6.5vw, 5.5rem), 1.04): hero statement and closing question only.
- **Headline** (600, clamp(1.625rem, 3.2vw, 2.5rem), 1.12): section leads.
- **Title** (600, 1.3125rem): row and step titles.
- **Body** (Switzer 400, 1.0625rem, 1.65): copy in Slate, max 65ch.
- **Lede** (Switzer 400, clamp(1.125rem, 1.7vw, 1.3125rem)): hero and closing standfirsts.
- **Label** (Switzer 500, 0.8125rem, 0.06em): kicker, nav, small captions.
- **Button** (Switzer 600, 0.9375rem): misfit plate text.
- **Small** (Switzer 400, 0.875rem): footer.
- **Mail Display** (Clash Display 700, clamp(1.375rem, 3.2vw, 2.625rem)): the closing email plate.
- **Statement** (Switzer 400, clamp(1.1875rem, 1.9vw, 1.5rem), 1.55): the studio paragraph, in Ink.

## Layout

Content capped at 1200px inside gutters (clamp(1.25rem, 6vw, 6rem)). The grid is drawn: faint Gridline column rules run vertically through the content area (6 columns desktop, 3 below 820px), with section hairlines horizontal. Every module aligns to the columns — except each screen's one misfit. Sections carry clamp(4.5rem, 12vh, 8.5rem) padding. Capability rows: title left, copy right on the column rules, stacking below 820px; Method is a three-step row that stacks the same.

**Break inventory (one per screen, by design):** nav — the Contact plate (tilted -1.5°, Cobalt); hero — the CTA plate (tilted -2°, spanning a column rule, Cobalt); work-we-take-on — row three's title crosses onto the copy column (ink, positional); method — step three sits 1rem below its siblings' baseline (ink, positional); studio — the paragraph bleeds left across the first column rule (ink, positional); contact — the email plate (tilted -2°, bleeding the right margin, Cobalt). No screen has two misfits.

## Elevation & Depth

Essentially flat. Misfit plates carry one small hard offset shadow (4px 4px 0 rgba(26,25,22,0.12)) — a printed-plate lift with real offset, never a blur halo. Nothing else casts anything.

## Shapes

Squared, 0 radius everywhere. Misfit plates are rectangles with the tilt as their identity; quiet breaks are purely positional. Underlines are drawn 1–2px background-image rules.

## Components

### The Misfit Plate (signature)
- **Primary (action):** Cobalt ground, white Button text, 1.25rem × 2rem padding, rotate(-2deg), hard offset shadow, trailing "→".
- **Hover / Focus:** the plate straightens to rotate(0) and deepens to Cobalt Deep over 200ms ease-out-expo — the signature "we make it fit" moment; focus-visible adds a 2px Cobalt outline offset 3px.
- **Nav variant:** compact (0.5rem 0.875rem padding, -1.5° tilt), same behavior.

### Text links
- Switzer 500, Ink, 1px underline via background-image; hover shifts text and underline to Cobalt.

### Navigation
- Sticky, opaque Paper, Gridline bottom rule; wordmark "CodeFuse" (Clash Display 600) + "Solutions" tail in Slate (drops below 480px); links in Slate darkening to Ink; Contact is the nav's misfit plate. Tap targets ≥44px.

### Quiet breaks
- Ink-only positional violations (cross a rule, offset a baseline, bleed a margin). Never colored, never rotated more than needed to read as deliberate, always in document flow.

## Do's and Don'ts

### Do:
- **Do** keep exactly one break per screen; if a new section needs emphasis, it earns the break by carrying the action.
- **Do** keep every claim true today; Work renders only when a case-study file exists.
- **Do** keep contact@codefusesolutions.com reachable from the first viewport (hero CTA → #contact, plain-text address, ?subject= prefill, copy-address affordance).
- **Do** honor prefers-reduced-motion: plates render settled at their tilt, reveals visible, no entrance choreography.

### Don't:
- **Don't** let Cobalt touch anything that fits the grid or anything that isn't an action.
- **Don't** add a second accent, gradients, glass, big blurred shadows, or icon-card grids.
- **Don't** tilt more than 2 degrees or break the grid twice on one screen — restraint is what makes the misfit legible.
- **Don't** carry over grammar from the Catalog or fuse-line worlds (numbers, code strips, mono-as-voice, ember, plots).
