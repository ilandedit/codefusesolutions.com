---
name: CodeFuse Solutions
description: Light, editorial studio site — the category standard executed at elite-agency craft level.
colors:
  ember: "#c7430f"
  ember-deep: "#a0350a"
  ink: "#161513"
  paper: "#faf9f6"
  graphite: "#55524b"
  hairline: "#e7e4dd"
typography:
  display:
    fontFamily: "Cabinet Grotesk, Arial Black, sans-serif"
    fontSize: "clamp(2.625rem, 7.2vw, 6rem)"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Cabinet Grotesk, Arial Black, sans-serif"
    fontSize: "clamp(2rem, 3.4vw, 2.75rem)"
    fontWeight: 800
    lineHeight: 1.12
    letterSpacing: "-0.015em"
  title:
    fontFamily: "General Sans, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.35
  body:
    fontFamily: "General Sans, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "General Sans, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 500
    letterSpacing: "0.09em"
  lede:
    fontFamily: "General Sans, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.1875rem, 1.8vw, 1.375rem)"
    fontWeight: 400
    lineHeight: 1.55
  row-title:
    fontFamily: "Cabinet Grotesk, Arial Black, sans-serif"
    fontSize: "clamp(1.5rem, 2.6vw, 2.125rem)"
    fontWeight: 800
    lineHeight: 1.15
  statement:
    fontFamily: "General Sans, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.375rem, 2.4vw, 1.875rem)"
    fontWeight: 400
    lineHeight: 1.45
  mail-display:
    fontFamily: "Cabinet Grotesk, Arial Black, sans-serif"
    fontSize: "clamp(1.375rem, 3.4vw, 2.75rem)"
    fontWeight: 800
    letterSpacing: "-0.015em"
  wordmark:
    fontFamily: "Cabinet Grotesk, Arial Black, sans-serif"
    fontSize: "1.3125rem"
    fontWeight: 800
  wordmark-tail:
    fontFamily: "General Sans, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
  nav:
    fontFamily: "General Sans, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 500
  button:
    fontFamily: "General Sans, Helvetica Neue, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 500
rounded:
  none: "0px"
spacing:
  gutter: "clamp(1.25rem, 6vw, 6.5rem)"
  section: "clamp(5rem, 14vh, 9.5rem)"
components:
  button-primary:
    backgroundColor: "{colors.ember}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "1.125rem 2.25rem"
  button-primary-hover:
    backgroundColor: "{colors.ember-deep}"
---

# Design System: CodeFuse Solutions

## Overview

**Creative North Star: "The Confident Studio"**

The category standard, played completely straight and finished to the level of Work & Co, Instrument, and MetaLab: a light, typography-led studio site where restraint reads as competence. The page persuades by craft, not devices — a business owner with a hard problem should feel they are already looking at precise work. Density is low; type is large and decisive; color is rationed so the single accent means something.

The user explicitly rejected conceptual carriers (drawing sheets, catalogues, print metaphors). Nothing on the surface may read as a costume. Warmth comes from editorial pacing and honest copy, not ornament.

**Key Characteristics:**
- Warm paper ground, near-black ink, one ember accent used sparingly
- Cabinet Grotesk Extrabold display over General Sans text; hairline dividers
- One orchestrated entrance motion (staggered hero reveal, then the fuse line draws); everything else is quiet state feedback
- No fabricated proof anywhere: no logos, stats, testimonials until real

## Colors

Restrained strategy: warm neutrals plus one ember accent, rationed hard.

### Primary
- **Ember** (#c7430f): the fuse color. The primary action, the drawn fuse line under the hero, link emphasis on hover, and selection color. Passes 4.5:1 as text on Paper.
- **Ember Deep** (#a0350a): hover/pressed state of Ember surfaces.

### Neutral
- **Ink** (#161513): headings, wordmark, primary text.
- **Paper** (#faf9f6): the ground everywhere; never pure white.
- **Graphite** (#55524b): secondary text and nav resting state; warm-tinted from Ink, never a cold gray.
- **Hairline** (#e7e4dd): 1px dividers between sections and rows.

### Named Rules
**The One Fuse Rule.** Ember appears once per viewport region — the action, or the drawn line, or a hover emphasis — never several competing at once. The fuse rail is the one page-level exception: it lives in the gutter, outside content regions, as the page's single persistent voice.

## Typography

**Display Font:** Cabinet Grotesk Extrabold (with Arial Black fallback), self-hosted woff2
**Body Font:** General Sans 400/500/600 (with Helvetica Neue fallback), self-hosted woff2

**Character:** Decisive and unornamented. Scale and weight do the expressive work; no italics, no gradient text.

### Hierarchy
- **Display** (800, clamp(2.625rem, 7.2vw, 6rem), 1.02): hero statement and closing CTA only.
- **Headline** (800, clamp(2rem, 3.4vw, 2.75rem), 1.12): section leads — the 2rem floor keeps a clear step above Row Title at tablet widths.
- **Title** (600, 1.25rem, 1.35): step and work-item titles.
- **Body** (400, 1.125rem, 1.6): copy in Graphite, max 65ch.
- **Label** (500, 0.8125rem, 0.09em tracked uppercase): the single hero kicker; not an every-section eyebrow.
- **Supporting steps** (all documented in frontmatter): Lede (400, clamp(1.1875rem, 1.8vw, 1.375rem)) for hero and closing standfirsts; Row Title (800, clamp(1.5rem, 2.6vw, 2.125rem)) for capability rows and case-study subheads; Statement (400, clamp(1.375rem, 2.4vw, 1.875rem)) for the studio paragraph; Mail Display (800, clamp(1.375rem, 3.4vw, 2.75rem)) for the closing email link; Wordmark (800, 1.3125rem) with its tail (400, 1.0625rem); Nav/Footer small (500, 0.9375rem); Button label (500, 1rem).

### Named Rules
**The One Kicker Rule.** Exactly one tracked-uppercase label exists on the page (the hero kicker). Sections lead with headlines, not eyebrows.

## Layout

Single fluid column inside generous gutters (clamp(1.25rem, 6vw, 6.5rem)), content capped at 1400px. Sections carry clamp(5rem, 14vh, 9.5rem) vertical padding and open with a 1px Hairline rule. Capability content reads as editorial rows on a 5/7 column split (title left, copy right) that stacks below 820px; the approach section is a three-column step grid that stacks the same way. More space above headings than below.

## Elevation & Depth

Flat. The page is paper; depth comes from hierarchy and hairlines, not shadows. The sticky header uses a subtle backdrop blur over translucent Paper and gains its hairline border only after scroll — no shadow vocabulary exists.

## Shapes

Squared editorial geometry: 0 radius everywhere. Buttons are confident rectangles; underlines are drawn 1–3px background-image rules, not text-decoration defaults.

## Components

### Buttons
- **Shape:** square-cornered (0px)
- **Primary:** Ember background, Paper text, 1.125rem × 2.25rem padding, General Sans 500
- **Hover / Focus:** background deepens to Ember Deep with a -2px lift; focus-visible shows a 2px Ember outline offset 3px

### Text links
- **Style:** General Sans 500 with a 1px Ink underline drawn via background-image
- **Hover:** text and underline shift to Ember

### Navigation
- Sticky, translucent Paper with 8px backdrop blur; Graphite links that darken to Ink on hover; the Contact link is the one Ember item; hairline bottom border appears after 8px of scroll. The "Solutions" tail of the wordmark drops below 480px.

### The Fuse Line (signature)
A full-width 1px Hairline at the hero's foot with an Ember segment (left 38%) that draws in with scaleX over 1.3s ease-out-expo, 450ms after the staggered hero reveal. Reduced motion renders it fully drawn and static.

### The Burning Fuse (signature motion system)
The fuse-line grammar carried through the whole scroll, in three parts:
- **Section ignition:** every section's top hairline carries an Ember segment (left 38%, 1px) that draws in with the same 1.3s ease-out-expo the first time the section enters the viewport (IntersectionObserver, threshold 0.15, once).
- **The fuse rail:** a fixed 1px Hairline in the left half-gutter running the full viewport height, whose Ember fill scales from the top to track scroll progress (rAF-throttled, transform-only, 3px square ember tip). The page reads as a fuse burning down toward the contact section. Hidden below 820px and without JS.
- **Interaction feedback:** nav links draw a 1px currentColor underline (scaleX from left, 250ms ease-out-expo) on hover/focus; the closing mail link's ember underline thickens from 3px to 0.18em on hover/focus.
No other scroll-driven or looping motion exists; sections do not fade or rise on scroll.

## Do's and Don'ts

### Do:
- **Do** keep every claim on the page true today; absence beats filler (the Work section renders only when a case-study file exists).
- **Do** keep contact@codefusesolutions.com findable within seconds from the first viewport.
- **Do** give every interactive element hover and visible keyboard focus states.
- **Do** honor prefers-reduced-motion by rendering the entrance fully settled.

### Don't:
- **Don't** use icon-card grids, hero metrics, section numbers, gradient text, glass-as-decoration, or monospace-as-technical-costume.
- **Don't** introduce a second accent color or use Ember for decoration.
- **Don't** let the site drift dark or conceptual — light, conventional, excellent is the commitment.
