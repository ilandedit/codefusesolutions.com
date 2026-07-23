# codefusesolutions.com

The site of CodeFuse Solutions — an independent software studio building custom software for complex, niche problems.

Static [Astro](https://astro.build) site, deployed to GitHub Pages at [codefusesolutions.com](https://codefusesolutions.com) via `.github/workflows/deploy.yml`.

## Develop

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
```

## Adding a case study

Drop one markdown file into `src/content/work/`:

```markdown
---
title: Project name
summary: One-sentence problem-and-outcome.
year: 2026
order: 1
---

## The problem
...

## The approach
...

## The result
...
```

That's the whole process — the hidden "Selected work" section on the landing page and the case-study page at `/work/<filename>/` both appear automatically on the next build.

Design decisions live in `DESIGN.md` (normative tokens) and `PRODUCT.md` (product truth); read both before changing the site's look or copy.
