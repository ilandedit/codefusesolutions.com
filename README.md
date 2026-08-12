# codefusesolutions.com

The site of CodeFuse Solutions — an independent software studio building custom software for complex, niche problems.

Static [Astro](https://astro.build) site, deployed to GitHub Pages at [codefusesolutions.com](https://codefusesolutions.com) via `.github/workflows/deploy.yml`.

Pages: `/` (home), `/work/` (index), `/work/<slug>/` (case study), `/studio/`, `/contact/`.

## Develop

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
```

## Adding a case study

One markdown file in `src/content/work/`. The filename becomes the URL: `dispatch-system.md` → `/work/dispatch-system/`.

```markdown
---
title: Dispatch system for a regional courier
summary: One sentence — the problem and the outcome.
client: Logistics          # optional; shown as the tag
year: 2026                 # optional
order: 1                   # lower numbers sort first
cover: ../../assets/work/dispatch-system/cover.png
coverAlt: What the screenshot shows, for screen readers
---

## The problem
...

## The approach
...

## The result
...
```

That's the whole process. The Work index, the home page's featured cards, the nav link, and the case-study page all appear automatically.

### Screenshots

Put them in `src/assets/work/<slug>/` — **not** `public/`. Anything under `src/assets` goes through Astro's image pipeline: resized to several widths, converted to WebP, given intrinsic dimensions so the page doesn't jump while loading, and hashed for caching. A 4 MB screengrab ships as a couple hundred KB.

Three places they appear:

- **`cover`** — the card thumbnail on `/work/` and the home page, and the lead image on the case study. Always set `coverAlt`.
- **`gallery`** — extra screenshots shown after the write-up:
  ```yaml
  gallery:
    - src: ../../assets/work/dispatch-system/detail.png
      alt: The assignment drawer open beside the route list
      caption: Optional line shown under the image.
  ```
- **Inline** — reference them in the body like normal markdown, and they're optimised too:
  ```markdown
  ![The route timeline after a mid-day change](../../assets/work/dispatch-system/timeline.png)
  ```

A wrong path fails the build instead of shipping a broken image.

### Video

Astro does **not** transcode video, so screen recordings live in `public/work/<slug>/` and ship exactly as you export them. That means the encode is on you:

- Trim to 20–60 seconds — show one thing working, not a full tour.
- H.264 MP4, 720p or 1080p, no audio track.
- Aim for a few MB. A minute of UI footage at CRF 26–30 lands around 2–6 MB.

```yaml
video:
  src: /work/dispatch-system/demo.mp4
  poster: ../../assets/work/dispatch-system/cover.png
  caption: Reassigning a route mid-shift.
  autoplay: false   # true = silent looping clip that plays when scrolled into view
```

`autoplay: true` suits short silent loops; it plays only while on screen and falls back to a normal play button under `prefers-reduced-motion`. Leave it `false` for anything with a narrative, and the visitor gets standard controls.

**Hosting limits:** GitHub Pages allows 100 MB per file, ~1 GB per repo, and 100 GB/month of bandwidth. A handful of clips is fine. If the site grows past that, move video to Cloudflare Stream, Mux, or unlisted YouTube and point `src` at the new URL — nothing else changes.

### Sample entries

The three case studies currently in `src/content/work/` carry `sample: true`. They publish to the live site with a visible "Sample" badge on every appearance (home, work index, case-study pages), and the work index carries a note explaining they are illustrative, not real client engagements. Drop the flag when a story becomes real, or delete the file to unpublish it.

## Design

`DESIGN.md` holds the normative design system (tokens are authoritative) and `PRODUCT.md` holds product truth — who the site is for, what may and may not be claimed. Read both before changing the look or the copy. `.impeccable/` holds the generated design sidecar and surface briefs.
