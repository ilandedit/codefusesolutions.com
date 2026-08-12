---
version: 1
slug: "src-pages-work-index-astro"
primary_target: "src/pages/work/index.astro"
related_targets: ["src/pages/work/[slug].astro"]
---

# Surface brief: /work/ (index) and /work/<slug>/ (case study)

Scope: src/pages/work/index.astro and src/pages/work/[slug].astro. Visitor mode: Persuade on the index (deciding whether this studio is credible), Read on a case study (understanding one piece of work).

Audience & job: a business owner looking for evidence before emailing. The index's job is to make the body of work scannable and each entry worth opening; a case study's job is to make one problem→approach→result story legible to a non-technical reader, then hand off to /contact/.

Content constraints: no real case studies exist yet. Entries carrying `sample: true` publish with a visible Sample badge and an index note stating they are illustrative, not real client engagements (a 2026-08-12 decision; they were previously stripped from production). No stock imagery, fake logos, or invented metrics, and samples must never shed their badge.

Composition: index rows are full-width, each with a cover thumbnail, copper tag (client · year), row title and summary, sliding right on hover via transform. A case study leads with a full-bleed cover image, then the write-up capped at 68ch, then optional video and gallery, then a "Next case study" card, then the navy band to /contact/.

Media rules: screenshots live in src/assets/work/<slug>/ and are optimised by Astro (multiple widths, WebP, intrinsic dimensions, lazy below the fold). Video lives in public/work/<slug>/ and ships as authored; short silent loops may autoplay on scroll and must fall back to controls under prefers-reduced-motion.

Unresolved: which real case study publishes first, and whether client names may be used or must stay generic (currently the `client` field holds a sector, not a company).
