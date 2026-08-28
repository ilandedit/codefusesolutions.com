# Handoff — Permit Pro GPS case study

State of the Work section as of 2026-08-21. Written at the end of the session
that published the first real case study. Read `README.md` for the mechanics of
adding a case study and `PRODUCT.md` for what may and may not be claimed; this
file only covers what is unfinished and why.

## What shipped

Two commits, both on `main`, both deployed to production successfully.

- `590df76` — publishes `src/content/work/permit-pro-gps.md`, the first real
  case study. No `sample` flag, so it carries no Sample badge. `order: 0` puts
  it above the three illustrative entries.
- `7d9dd07` — swaps the `client` field from the client's company name to the
  sector tag `Heavy haul`.

The Work section now reads: Permit Pro GPS first, then the three sample
entries (`dispatch-system`, `inventory-reconciliation`, `compliance-portal`,
orders 1–3). The home page's two featured cards are Permit Pro GPS and
`dispatch-system`.

## Unfinished: the media

The case study publishes with **no images and no video**. The frontmatter
carries only `title`, `summary`, `client`, `year`, `order`.

This was deliberate, not an oversight. The screenshots and the screen
recording were never added to the repo, and Astro fails the build on a missing
image path rather than shipping a broken image — so referencing files that
don't exist would have turned the branch red. The copy went up without them.

**This is the main thing left to do**, and it matters more than it sounds:
Permit Pro GPS is currently the only row on `/work/` without a thumbnail,
sitting directly above three sample entries that all have one. The real
engagement is the lightest-looking item on the page. Adding `cover` alone
fixes the hierarchy; the gallery and video can follow later.

### To finish it

Put the screenshots in `src/assets/work/permit-pro-gps/` (**not** `public/` —
anything under `src/assets` goes through Astro's image pipeline) and the
recording in `public/work/permit-pro-gps/`. Then add to the frontmatter:

```yaml
cover: ../../assets/work/permit-pro-gps/drive.png
coverAlt: The Drive screen following a permitted route, with the next maneuver and a clearance warning stacked above the map
gallery:
  - src: ../../assets/work/permit-pro-gps/trip-detail.png
    alt: <needed>
  - src: ../../assets/work/permit-pro-gps/console.png
    alt: <needed>
  - src: ../../assets/work/permit-pro-gps/permit-inbox.png
    alt: <needed>
video:
  src: /work/permit-pro-gps/off-route.mp4
  poster: ../../assets/work/permit-pro-gps/drive.png
  caption: <needed>
  autoplay: false
```

Note the shapes: `gallery` entries are objects with `src` and `alt`, not bare
paths, and `video` is an object, not a string. The schema in
`src/content.config.ts` rejects the shorthand. Alt text for the three gallery
shots is still needed — nobody has described those screens in writing yet.

`autoplay: false` is correct for the off-route clip, which has a narrative;
`autoplay: true` is only for short silent loops. The video encode is on you,
since Astro does not transcode: H.264 MP4, 720p or 1080p, no audio track,
20–60 seconds, a few MB. See the Video section of `README.md`.

## Decisions taken, and what is still open

**The client is not named.** The entry originally carried the client's company
name and went live with it for roughly six minutes before being changed to the
sector tag `Heavy haul`. `Heavy haul` was chosen over `Logistics` because the
`dispatch-system` sample already uses `Logistics`, and two identical tags on
adjacent rows read as a mistake. Dropping the `client` field entirely is also
valid — the page falls back to "Case study".

**The client's name is still in this repository's public history.** Commit
`590df76` contains it in the file body. It is not in any commit message, and
it is not in the working tree. The repository is public, so that commit is
publicly readable. Removing it means rewriting `main` and force-pushing —
squashing the two commits into one would do it, since they are the only two
involved. This was left alone deliberately: it is destructive, it invalidates
the existing commit hashes, and it is the owner's call. Note that GitHub can
keep serving an orphaned commit from cache after a force-push, so a full scrub
also means asking GitHub Support to purge the stale ref.

**The three sample entries are still published.** Now that a real case study
exists, the argument for keeping illustrative ones is weaker — `PRODUCT.md`
holds that absence beats filler. Removing them is deleting three files from
`src/content/work/`. Left in place pending a decision.

**`PRODUCT.md` is out of date.** Its "Evidence on Hand" section still says
"None publishable. No shipped case studies, client names, testimonials,
metrics, or press", and "Operating Context" still describes the Work section
as rendering nothing until the first project file exists. Both were true
before this session and are not true now. `README.md` names `PRODUCT.md` as
product truth, so it should catch up.

## Working on this repo

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
```

A push to `main` triggers `.github/workflows/deploy.yml`, which builds and
deploys to GitHub Pages at codefusesolutions.com. There is no staging step and
no test suite — `npm run build` passing is the only gate, so run it before
pushing. A broken image path or a frontmatter field that violates the schema
in `src/content.config.ts` will fail that build, which is the intended
behaviour.

At the time of writing, the build is green at 9 pages and the last deploy
succeeded. The live site itself was not verified from the session that wrote
this, because the sandbox could not reach the domain.
