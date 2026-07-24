---
name: CodeFuse Solutions
description: Signal — a dark, precise studio site where two accent colors carry the two halves of the work: listening and building.
colors:
  bg: "#0c0e12"
  panel: "#141821"
  panel-quiet: "#11151d"
  line: "#232936"
  ink: "#f0f2f6"
  mute: "#8f98a8"
  live: "#3ddc97"
  volt: "#6f93ff"
  volt-deep: "#3f5fe0"
  volt-press: "#3350c4"
  white: "#ffffff"
typography:
  display:
    fontFamily: "Clash Display, Arial Black, sans-serif"
    fontSize: "clamp(2.375rem, 5.6vw, 4.375rem)"
    fontWeight: 600
    lineHeight: 1.06
    letterSpacing: "-0.015em"
  headline:
    fontFamily: "Clash Display, Arial Black, sans-serif"
    fontSize: "clamp(1.625rem, 3.2vw, 2.375rem)"
    fontWeight: 600
    lineHeight: 1.15
  close-headline:
    fontFamily: "Clash Display, Arial Black, sans-serif"
    fontSize: "clamp(1.875rem, 4.4vw, 3.25rem)"
    fontWeight: 600
    lineHeight: 1.1
  title:
    fontFamily: "Clash Display, Arial Black, sans-serif"
    fontSize: "1.1875rem"
    fontWeight: 600
    lineHeight: 1.25
  body:
    fontFamily: "Switzer, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
  lede:
    fontFamily: "Switzer, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.6
  small:
    fontFamily: "Switzer, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
  label:
    fontFamily: "Switzer, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 500
    letterSpacing: "0.06em"
  step-label:
    fontFamily: "Switzer, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    letterSpacing: "0.08em"
  mail-display:
    fontFamily: "Clash Display, Arial Black, sans-serif"
    fontSize: "clamp(1.25rem, 3vw, 2.125rem)"
    fontWeight: 600
  monogram:
    fontFamily: "Clash Display, Arial Black, sans-serif"
    fontSize: "1.75rem"
    fontWeight: 600
rounded:
  sm: "6px"
  md: "8px"
  lg: "12px"
  xl: "14px"
  pill: "999px"
spacing:
  gutter: "clamp(1.25rem, 5vw, 3.5rem)"
  section: "clamp(3rem, 8vh, 4.75rem)"
components:
  button-primary:
    backgroundColor: "{colors.volt-deep}"
    textColor: "{colors.white}"
    rounded: "{rounded.md}"
    padding: "1.0625rem 1.75rem"
  button-primary-hover:
    backgroundColor: "{colors.volt-press}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.mute}"
    rounded: "{rounded.md}"
    padding: "0.625rem 0.875rem"
---

# Design System: CodeFuse Solutions

## Overview

**Creative North Star: "Signal"**

A dark, precise, modern software-studio surface where every colored thing means something. The page reads as instrumentation for a serious practice: near-black ground, quiet panels separated by hairlines, calm generous type, and exactly two accent colors that carry the studio's two halves — **green for listening** (the conversation, understanding, the first move) and **blue for building** (the system, the action, the commitment). Nothing is colored for decoration.

Chosen by the user from three working comps after four rejected worlds. The failures are instructive and binding: a characterless light canon, a beautiful dark identity that belonged to someone else, a conceptual grid, and treatments read as "artsy." Signal is deliberately none of those — it is professional first, with personality carried by the two-color logic and the confidence of the type.

**Key Characteristics:**
- Near-black ground (#0c0e12) with quiet panels and hairline separation; no glow, no neon, no gradient wash
- Clash Display headlines over Switzer body — confident geometry, invisible reading text
- Green = listening, blue = building; the two accents never swap roles
- No fabricated proof; Work renders only when real case studies exist

## Colors

Two-accent system on a near-black field. Every accent use must answer "which half of the work is this?"

### Primary
- **Volt** (#6f93ff): the building half, used as *text and accents on dark* — links, project tags, the third method step. 6.6:1 on the ground.
- **Volt Deep** (#3f5fe0): the fill for solid actions carrying white text (5.4:1 — the bright Volt fails white text at 3.2:1 and must never take it). **Volt Press** (#3350c4) is its hover/active.

### Secondary
- **Live** (#3ddc97): the listening half — the status dot, the hero rule, capability icons, the first method step, copy-confirmation. High contrast on the ground; when filled, it takes dark text, never white.

### Neutral
- **Ink** (#f0f2f6): headings and primary text.
- **Mute** (#8f98a8): body copy and secondary labels; 6.5:1 on the ground.
- **Ground** (#0c0e12): the page. **Panel** (#141821) for raised cards, **Panel Quiet** (#11151d) for recessed blocks.
- **Line** (#232936): hairlines, borders, section rules.
- **White** (#ffffff): only as text on Volt Deep.

### Named Rules
**The Two Halves Rule.** Green means listening/understanding; blue means building/acting. An accent that can't be assigned to one of those halves shouldn't be colored at all.
**The Fill Rule.** White text only on Volt Deep or darker. Live and Volt take dark text when filled, never white.

## Typography

**Display Font:** Clash Display 600 (Arial Black fallback), self-hosted woff2
**Body Font:** Switzer 400/500/600 (Helvetica Neue fallback), self-hosted woff2

**Character:** Confident geometric headlines with tight tracking; body text that gets out of the way. Sentence case everywhere except small tracked labels and method step markers.

### Hierarchy
- **Display** (600, clamp(2.375rem, 5.6vw, 4.375rem), 1.06, -0.015em): the hero statement only. The two verbs carry the accent colors.
- **Close Headline** (600, clamp(1.875rem, 4.4vw, 3.25rem)): the closing ask.
- **Headline** (600, clamp(1.625rem, 3.2vw, 2.375rem)): section titles.
- **Title** (600, 1.1875rem): cards, steps, project titles.
- **Lede** (400, 1.125rem): the hero standfirst and studio statement, in Mute.
- **Body** (400, 1.0625rem, 1.65): copy in Mute, max 62ch.
- **Small** (400, 0.9375rem): nav, footer, hero email line.
- **Label** (500, 0.8125rem, 0.06em): eyebrow and section notes.
- **Step Label** (700, 0.75rem, 0.08em): the method's `01 — UNDERSTAND` markers. Numbering is legitimate here and only here: the method is a real sequence.
- **Monogram** (600, 1.75rem): the founder initials in the studio block.

Tints are derived, never hand-mixed: use `color-mix(in srgb, var(--token) N%, transparent)` for icon washes, the monogram gradient, and the action's shadow, so every color on the page traces back to a documented token.

## Layout

Content capped at 1180px inside gutters (clamp(1.25rem, 5vw, 3.5rem)). Sections are separated by a 1px Line rule with clamp(3rem, 8vh, 4.75rem) padding. Capability content is a three-card grid; the method is a single bordered block divided into three panels by internal hairlines (one object, three parts — it reads as a process, not three unrelated cards); work is a two-column card grid. All collapse to one column at 900px (method, capabilities) and 820px (work, studio).

**Information architecture (approved, binding):** claim → what we take on → proof → how we work → the studio → the ask. Each section does one job; no section restates another. Every nav item resolves to a real section. The page ends on the ask, never on a content section.

## Elevation & Depth

Flat with hairlines. Depth comes from panel tone (Panel above Ground, Panel Quiet below it) and 1px Line borders — not shadows. The one exception: the primary action lifts 2px on hover with a soft blue-tinted shadow, the only shadow in the system. The sticky header uses translucent ground plus backdrop blur.

## Shapes

Rounded rectangles on a restrained scale: 6px small (buttons, quiet chips), 8px actions, 12px capability cards, 14px project and method blocks, pill only for metadata chips. No circles except the status dot.

## Components

### Primary action
- Volt Deep fill, white text, 8px radius, 1.0625rem × 1.75rem padding, Switzer 600.
- **Hover:** lifts 2px with `0 10px 26px rgba(91,140,255,.28)`, background to Volt Press. **Focus-visible:** 2px Volt outline offset 3px.

### Ghost / copy button
- Transparent with a Line border, Mute text, 6px radius, min-height 44px; border and text go Live on hover.

### Text links
- Ink with a 1px Line underline; hover shifts both to Live.

### Cards (capability, project, method panel)
- Panel or Panel Quiet ground, 1px Line border, radius per the shape scale.
- **Hover (interactive cards only):** border goes Live (capability) or Volt (project) and the card lifts 2px. Non-interactive panels never react.

### Navigation
- Sticky, translucent ground, blurred, with a Line bottom border. Status dot (Live, with a soft ring) + wordmark left; Work (only when case studies exist), Method, Studio, and a solid Contact action right. All targets ≥44px.

### The Method Block (signature)
One bordered container split into three panels by internal hairlines, each capped by a 2px top bar: Live for step 01, a Live→Volt gradient for step 02, Volt for step 03. The gradient is the whole idea made visible — listening becoming building. It is the only gradient permitted in the system.

## Do's and Don'ts

### Do:
- **Do** keep every claim true today; the Work section renders only when a case-study file exists, and sample entries never ship.
- **Do** keep contact@codefusesolutions.com reachable in the first viewport (plain text under the hero actions) and again at the close, with `?subject=` prefill and a copy-address button.
- **Do** give every interactive element a hover state and a visible keyboard focus ring.
- **Do** honor prefers-reduced-motion: reveals render settled, no transitions.

### Don't:
- **Don't** put white text on Live or bright Volt (contrast failure) — see The Fill Rule.
- **Don't** add a third accent, glows, neon edges, scanlines, or decorative gradients; the method block's Live→Volt bar is the only gradient.
- **Don't** restate a section's idea in another section, or end the page on anything but the ask.
- **Don't** number sections other than the method steps.
