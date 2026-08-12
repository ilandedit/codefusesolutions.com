---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: []
---

# Surface brief: / (home)

Scope: the home page at src/pages/index.astro, the entry point of a four-page site. Visitor mode: Persuade.

Audience & job: business owners with complex, niche software problems deciding whether to trust CodeFuse Solutions. The one action: email codefusesolutions@protonmail.com. Home's specific job is to state the claim, show what the studio takes on, offer a taste of the work, and hand the visitor onward — to /work/ for proof or /contact/ to act. It does not try to close the sale alone.

Proof & content constraints: no real case studies yet. The three entries in src/content/work carry `sample: true` — they publish with a visible Sample badge everywhere they appear (a 2026-08-12 decision; previously they were stripped from production builds). No fabricated logos, stats, testimonials, or clients, ever. Founder Derrick Wengerd is named once, on /studio/. Voice is "we".

Chosen direction (2026-07-24, current — "Navy & Copper"): user-selected from a six-palette board that held layout and type constant so colour was the only variable under judgement. White ground, navy (#0f2a5c) for structure and actions, copper (#a9642a) for the human half; Clash Display over Switzer. The two-halves colour logic is binding: copper means listening and people, navy means building and commitment.

Structure (user's explicit decision, replacing an earlier single-page scroll): four real routes — / , /work/ , /studio/ , /contact/ — plus /work/<slug>/ case studies. Navigation marks the current page with a copper underline and aria-current. Every page except Contact ends in a full-bleed navy band pointing at the next step; Contact is the ending and carries no band.

Home composition: page header (copper label, display claim, lede, navy action, plain-text email) → "The work we take on" three cards → featured work (up to two cards with cover thumbnails, linking to /work/) → navy band to /contact/.

Media: case-study screenshots live in src/assets/work/<slug>/ and go through Astro's image pipeline (multiple widths, WebP, intrinsic dimensions, lazy). Cover images surface here as card thumbnails. Video lives in public/work/<slug>/ and is rendered by VideoBlock; Astro does not transcode it.

Selection-method note worth repeating: the decision page cannot show a rendered preview for derived directions (no image generation available in session), so candidates were built as real working HTML pages and compared live. Holding one variable constant per round — structure, then skin, then palette — is what finally converged.

Rejected and off the table: the light-editorial canon (no character), the dark Factory-Records "Catalog" (beautiful but someone else's identity), the Misfit Grid, De Stijl primaries ("too artsy"), and the near-black "Signal" palette with bright green/blue accents (read as machine-generated). Dark grounds with bright neon-ish accents are permanently prohibited.

Unresolved: which real case study publishes first; DNS and email forwarding at go-live.
