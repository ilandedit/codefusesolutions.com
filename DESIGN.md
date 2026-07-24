---
name: CodeFuse Solutions
description: Navy & Copper — a multi-page studio site with engineering-firm credibility and a warm metal edge.
colors:
  paper: "#ffffff"
  ink: "#101a2e"
  mute: "#5a6478"
  line: "#e2e6ee"
  card: "#f7f9fc"
  wash: "#fdf3ea"
  navy: "#0f2a5c"
  navy-deep: "#0a1f47"
  copper: "#a9642a"
  copper-deep: "#8c5122"
  white: "#ffffff"
typography:
  display:
    fontFamily: "Clash Display, Arial Black, sans-serif"
    fontSize: "clamp(2.25rem, 5.2vw, 4rem)"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "-0.015em"
  headline:
    fontFamily: "Clash Display, Arial Black, sans-serif"
    fontSize: "clamp(1.5rem, 3vw, 2.25rem)"
    fontWeight: 600
    lineHeight: 1.15
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
    fontSize: "0.75rem"
    fontWeight: 600
    letterSpacing: "0.09em"
  button:
    fontFamily: "Switzer, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 600
  mail-display:
    fontFamily: "Clash Display, Arial Black, sans-serif"
    fontSize: "clamp(1.25rem, 3vw, 2.25rem)"
    fontWeight: 600
  case-title:
    fontFamily: "Clash Display, Arial Black, sans-serif"
    fontSize: "clamp(1.875rem, 4.2vw, 3.25rem)"
    fontWeight: 600
    lineHeight: 1.1
  row-title:
    fontFamily: "Clash Display, Arial Black, sans-serif"
    fontSize: "clamp(1.375rem, 2.6vw, 1.875rem)"
    fontWeight: 600
    lineHeight: 1.2
  wordmark:
    fontFamily: "Clash Display, Arial Black, sans-serif"
    fontSize: "1.3125rem"
    fontWeight: 600
  wordmark-tail:
    fontFamily: "Switzer, Helvetica Neue, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
  monogram:
    fontFamily: "Clash Display, Arial Black, sans-serif"
    fontSize: "1.625rem"
    fontWeight: 600
  ui-small:
    fontFamily: "Switzer, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 600
  nav-action:
    fontFamily: "Switzer, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
rounded:
  sm: "4px"
  md: "6px"
spacing:
  gutter: "clamp(1.25rem, 5vw, 3.5rem)"
  section: "clamp(3.5rem, 9vh, 5.5rem)"
components:
  button-primary:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.white}"
    rounded: "{rounded.sm}"
    padding: "1rem 1.625rem"
  button-primary-hover:
    backgroundColor: "{colors.navy-deep}"
  button-invert:
    backgroundColor: "{colors.white}"
    textColor: "{colors.navy}"
    rounded: "{rounded.sm}"
    padding: "1rem 1.625rem"
---

# Design System: CodeFuse Solutions

## Overview

**Creative North Star: "Navy & Copper"**

A multi-page studio site with the credibility of an engineering firm and the warmth of hand-worked metal. White ground, deep navy for structure and action, copper for the human side. Chosen by the user from a six-palette board that held layout and type constant so colour was the only variable under judgement.

The site is **four real pages** — Home, Work, Studio, Contact — not one long scroll with anchors. Each page does one job and ends by pointing at the next; the visitor always knows where they are because the nav marks it.

**The two halves carry through the colour:** copper marks listening and the human (eyebrows, the founder, step one of the method), navy marks building and commitment (actions, the closing band, step three). This survives from an earlier accepted concept and remains binding.

**Key Characteristics:**
- White ground, navy structure, copper warmth; no third accent
- Clash Display headlines over Switzer body
- Navy bands close each page at full width — colour committed at page scale, not sprinkled
- No fabricated proof; sample case studies are dev-only and never build

## Colors

### Primary
- **Navy** (#0f2a5c): primary actions, closing bands, step three, the wordmark. White on navy is 13.9:1. **Navy Deep** (#0a1f47) is its hover.

### Secondary
- **Copper** (#a9642a): eyebrows, section labels, the founder line, step one, link hovers. 4.6:1 on white — legible for small text but never used for long body copy. **Copper Deep** (#8c5122) for hovers on light grounds.

### Neutral
- **Paper** (#ffffff): the ground. **Card** (#f7f9fc): raised panels. **Wash** (#fdf3ea): the copper-tinted panel used once per page at most, to mark the human moment.
- **Ink** (#101a2e): headings and primary text — navy-black, never pure black.
- **Mute** (#5a6478): body copy, 5.9:1 on white.
- **Line** (#e2e6ee): hairlines and borders.

### Named Rules
**The Two Halves Rule.** Copper means listening and people; navy means building and commitment. An accent that fits neither shouldn't be coloured.
**The Band Rule.** Navy appears at page scale (full-width closing bands, never a thin stripe) or as a solid action. Navy is never a background tint.

## Typography

**Display Font:** Clash Display 600 (Arial Black fallback), self-hosted woff2
**Body Font:** Switzer 400/500/600 (Helvetica Neue fallback), self-hosted woff2

**Character:** Confident geometric headlines, invisible reading text. Sentence case except small tracked labels.

### Hierarchy
- **Display** (600, clamp(2.25rem, 5.2vw, 4rem)): one per page — the page's own statement.
- **Headline** (600, clamp(1.5rem, 3vw, 2.25rem)): section titles.
- **Title** (600, 1.1875rem): cards, steps, project titles.
- **Lede** (400, 1.125rem): the standfirst under each page's display, in Mute.
- **Body** (400, 1.0625rem, 1.65): copy in Mute, max 62ch.
- **Small** (400, 0.9375rem): nav, footer, meta.
- **Label** (600, 0.75rem, 0.09em, uppercase): eyebrows and section labels, usually copper.
- **Mail Display** (600, clamp(1.25rem, 3vw, 2.25rem)): the contact page's address.
- **Supporting steps** (all in frontmatter): Case Title (clamp(1.875rem, 4.2vw, 3.25rem)) for a case study's own heading; Row Title (clamp(1.375rem, 2.6vw, 1.875rem)) for work-index rows; Wordmark (1.3125rem) with its tail (1rem); Monogram (1.625rem) for founder initials; UI Small (600, 0.8125rem) for ghost buttons and section notes; Nav Action (600, 0.875rem) for the header's Contact button.

## Layout

Content capped at 1140px inside gutters (clamp(1.25rem, 5vw, 3.5rem)). Every page opens with a page header (label + display + lede) and closes with a full-bleed navy band pointing at the next step. Sections are separated by Line hairlines with clamp(3.5rem, 9vh, 5.5rem) padding. Grids collapse to one column at 900px (capabilities, method) and 820px (work, studio).

**Site structure (binding):** four real routes.
- `/` — Home: the claim, what we take on, featured work, band → Work.
- `/work/` — Work: the index of case studies; honest empty state when none exist yet; band → Contact.
- `/work/<slug>/` — a case study: problem → approach → result; band → Contact.
- `/studio/` — Studio: who we are, the founder, and the three-step method; band → Contact.
- `/contact/` — Contact: the ask, the address in plain text, and a copy affordance. This page ends the journey and carries no onward band.

Navigation marks the current page (copper underline, `aria-current="page"`). No anchor-link navigation between sections; links go to pages.

## Elevation & Depth

Flat with hairlines. Cards are Card or Wash panels with 1px Line borders. The primary action lifts 1px on hover — the only movement. No shadows beyond a single soft one under the sticky header once scrolled.

## Shapes

Restrained radii: 4px on actions and small chips, 6px on panels and cards. No pills, no circles except the small copper dot marking the current nav item on mobile.

## Components

### Primary action
Navy fill, white text, 4px radius, 1rem × 1.625rem padding, Switzer 600. Hover: Navy Deep, translateY(-1px). Focus-visible: 2px navy outline offset 3px. **Invert variant** (white fill, navy text) for use inside navy bands.

### Text links
Ink with a 1px Line underline; hover shifts text and underline to Copper.

### Cards (capability, project)
Card ground, 1px Line border, 6px radius. Interactive cards move the border to Copper and lift 2px on hover; project cards show a copper "Read the case study →" on hover.

### Navigation
Sticky, white, Line bottom border (plus a soft shadow after scroll). Wordmark left; Work, Studio, Contact right, with the current page marked by a copper underline and `aria-current`. Targets ≥44px. Contact is a solid navy action.

### The Closing Band (signature)
A full-bleed navy section ending every page except Contact: a headline, one line of copy, and a white action pointing at the next step. It gives each page a real ending and puts the brand colour on the page at scale rather than as decoration.

### The Method Block
Three panels in one bordered container on the Studio page, top bars running Copper → Copper/Navy gradient → Navy: listening becoming building. The only gradient in the system.

## Do's and Don'ts

### Do:
- **Do** keep every claim true today; sample case studies carry `sample: true`, show a visible badge, and are stripped from production builds.
- **Do** give every page a page header and a closing band (except Contact, which is the ending).
- **Do** mark the current page in the nav with both colour and `aria-current="page"`.
- **Do** honor prefers-reduced-motion: reveals render settled.

### Don't:
- **Don't** return to a dark ground with bright accents — the user rejected that as machine-looking, and it is permanently out.
- **Don't** add a third accent, gradients (except the method bar), glass, or big blurred shadows.
- **Don't** use copper for long body copy, or navy as a background tint.
- **Don't** rebuild the site as a single-page scroll; the multi-page structure is the user's explicit decision.
