---
version: 1
slug: "src-pages-work-index-astro"
primary_target: "src/pages/work/index.astro"
related_targets: ["src/pages/work/[slug].astro"]
---

# Surface brief: /work/ (index) and /work/<slug>/ (case study)

Scope: src/pages/work/index.astro and src/pages/work/[slug].astro. Visitor mode: Persuade on the index (deciding whether this studio is credible), Read on a case study (understanding one piece of work).

Audience & job: a business owner looking for evidence before emailing. The index's job is to make the body of work scannable and each entry worth opening; a case study's job is to make one problem→approach→result story legible to a non-technical reader, then hand off to /contact/.

Content constraints: no real case studies exist yet. Entries carrying `sample: true` render in development with a visible badge and are stripped from production, where the index shows an honest empty state — "The first case studies are being written" plus an invitation to ask what we're building. That empty state is deliberate and must never be replaced with stock imagery, fake logos, or invented metrics.

Composition: index rows are full-width, each with a cover thumbnail, copper tag (client · year), row title and summary, sliding right on hover via transform. A case study leads with a full-bleed cover image, then the write-up capped at 68ch, then optional video and gallery, then a "Next case study" card, then the navy band to /contact/.

Media rules: screenshots live in src/assets/work/<slug>/ and are optimised by Astro (multiple widths, WebP, intrinsic dimensions, lazy below the fold). Video lives in public/work/<slug>/ and ships as authored; short silent loops may autoplay on scroll and must fall back to controls under prefers-reduced-motion.

Unresolved: which real case study publishes first, and whether client names may be used or must stay generic (currently the `client` field holds a sector, not a company).
