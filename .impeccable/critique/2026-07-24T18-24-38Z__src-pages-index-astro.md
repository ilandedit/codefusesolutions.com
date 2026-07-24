---
target: the site (home as primary)
total_score: 25
max_score: 36
na_heuristics: 10
p0_count: 1
p1_count: 3
timestamp: 2026-07-24T18-24-38Z
slug: src-pages-index-astro
---
Method: dual-agent (A: design review · B: detector + production audit)

# Design Health Score

| # | Heuristic | Score | Key issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 2 | Nav marks the current page well, but the *process* has no status: nothing says when or whether you'll hear back, or who reads the address. |
| 2 | Match System / Real World | 3 | Copy is plain and buyer-shaped. "Studio" is design-industry vocabulary where an owner scans for "About"; "Work" delivers an empty room in production. |
| 3 | User Control and Freedom | 3 | No traps, 404 with three exits. The case-study back link is a 12px unpadded target; "Next case study" wraps to the first with no signal the loop closed. |
| 4 | Consistency and Standards | 2 | One action, four names (Tell us your problem / Get in touch / Ask what we're working on / Contact). Nav button is 40px against DESIGN.md's documented 44px. Home's band points to Contact where DESIGN.md specifies Work. |
| 5 | Error Prevention | 3 | Bad image paths fail the build; samples cannot reach production; copy button has a real catch. With JS off it still renders and does nothing. |
| 6 | Recognition Rather Than Recall | 3 | The Contact prompt list is the site's best idea, but none of those prompts reach the composed email — the mail client still opens blank. |
| 7 | Flexibility and Efficiency | 3 | The hero mailto with subject prefill skips Contact entirely — and is styled in the muted grey, making the fastest path the least visible. |
| 8 | Aesthetic and Minimalist Design | 3 | Restrained and coherent, one meaningful gradient. But production home has no images and no crafted moment, so "the site is quiet proof of craft" has nothing to prove it on. |
| 9 | Error Recovery | 3 | 404 is warm with three exits; copy failure gives an actionable instruction. |
| 10 | Help and Documentation | n/a | Four pages, one action; the Contact guidance list is the only documentation warranted, and it exists. |
| **Total** | | **25/36** | **Acceptable (69%)** |

Previous run scored 26/32 (81%) on the old single-page site. Not like-for-like: different site, different heuristic set.

# Design Specificity Verdict

**LLM assessment:** Authored infrastructure, interchangeable front door. What is genuinely specific to this product is the honesty machinery (sample flag plus production filtering in three places, build-failing image schema), the Contact prompt list, the recurring honest-rejection promise, and the copper→navy method bar as a literal picture of listening becoming building. But the production home page — claim, three abstract capability cards, navy band — is a page any dev shop could ship by swapping the wordmark, and the three cards restate one idea without a single CodeFuse-specific fact. The colour rule is stated more strictly than it is held: copper is defined as "listening and people" but marks "Error 404", "Work", and client/year meta.

**Deterministic scan:** Detector clean — zero findings across all twelve markup files and the CSS passes, verified against a deliberately-bad canary that returned exit 2, so the negative is genuine rather than a broken harness. Important scope bound: only static rules ran. Roughly 30 of 59 rules (contrast, line length, occlusion, spacing rhythm) need rendered geometry and were not evaluated — which is exactly where the real defects turned out to live.

**Production audit:** Sound on everything load-bearing. No leaked case studies, correct empty state, zero dangling links, unique meta per page, one h1 per page with no heading skips, all font preloads resolve. One real leak: four sample screenshots ship as orphaned files in dist/_astro/ — unreferenced by any page but publicly fetchable.

**Visual overlays:** Not available — no browser automation this session.

# Overall Impression

The engineering underneath is better than the page on top. Every structural promise holds — the multi-page IA never dead-ends, honesty is enforced by the build rather than by discipline, and the production output is genuinely clean. What's missing is anything to look at or believe: the live site is four rooms with one room of furniture, and the one room a stranger enters first contains three paraphrases of the same sentence.

# What's Working

1. **Honest absence is structural, not promised.** The sample flag plus PROD filtering applied identically in all three consumers, plus image() typing so a broken path fails the build. Fabricated proof is impossible, not merely discouraged.
2. **The Contact prompt list.** Converts a blank page into recognition, in the buyer's language, immediately defused by "None of it is required." The most authored thing on the site.
3. **The band and current-page system.** Every page has a real ending and you always know where you are. The IA mechanics are sound even where the content isn't.

# Priority Issues

**[P0] Production is an empty house, and the nav shows visitors the emptiest room.** The built home page is hero plus three text cards plus a band, with zero images; /work/ is a single panel apologising for itself, and it's the second nav item. PRODUCT.md says nothing on the live site may look empty or apologetic. *Fix:* hide the Work nav item and route until at least one case study exists, and promote the empty state's real substance — "ask us what we're building, we'll talk you through it directly" — into a home-page section.

**[P1] Copper fails contrast on the copper-washed panels.** Verified: copper on white is 4.62:1 (DESIGN.md's 4.6 figure is correct, and Assessment A's 4.38 claim is wrong), but copper on the wash panel (#fdf3ea) is **4.22:1** — below the 4.5 floor. That's exactly where the founder credit on Studio and the copy-confirmation on Contact sit. *Fix:* use copper-deep (#8c5122) for text on wash panels; keep bright copper for non-text roles.

**[P1] The focus ring is invisible on every page's primary CTA.** The global focus outline is navy, and the band's white button sits on navy — so keyboard users get a 1:1 ring on the most important control on Home, Work, Studio and every case study. *Fix:* override the outline colour to white inside the band.

**[P1] Nothing de-risks the send.** Contact has no human name, no response window, no "free, no obligation", no confidentiality line. All four are true today and absent. *Fix:* one short block under the address naming Derrick, a realistic reply window, and that it costs nothing and stays private.

**[P2] One action, four names; and the home band contradicts the spec.** Four CTA verbs resolve to /contact/, two within one screen on /work/. DESIGN.md specifies home's band points to Work; it points to Contact. *Fix:* one verb sitewide; reconcile the band target with the spec.

**[P2] The case study is the least typographically authored page.** Its h2 is 1.1875rem against 1.0625rem body — a 12% step — so problem/approach/result visually vanishes on a long page while the loudest heading is the ad at the bottom. No outcome, duration or stack fields exist. *Fix:* raise case-body h2 with a copper rule; add optional outcome/duration/stack rendered as a fact strip.

**[P2] Orphaned sample screenshots deploy.** Four fabricated PNGs ship to dist/_astro/ because the image schema resolves before the sample filter runs. Unreferenced, but publicly fetchable at guessable URLs. *Fix:* move sample imagery outside src/assets/ or gate the import.

# Persona Red Flags

**Jordan (non-technical owner):** scans for "About", finds "Studio" — and the three-step method that answers "what happens if I email you" hides behind a word she won't click. The three home cards answer "what do you do" three times and never answer cost, duration, or first step. /work/ reads as *no track record* with nothing offered to offset it. Contact asks her to describe her most painful business problem to an alias, with no human named on the page.

**Riley (verifier):** zero verifiable facts anywhere — no location, no founding year, no LinkedIn, no GitHub in the footer. Tabs to the band CTA and sees no focus ring. Turns JS off and the copy button still looks pressable but does nothing. Reaches the last case study and the "next" link silently wraps to the first. On the preview build, sample entries read "Logistics · 2026" with the disclaimer as the quietest element in the row.

**Casey (mobile):** the persistent Contact button is the one undersized target at 40px. On a 390px phone the home CTA sits at or below the fold with no image to reward the scroll. The case-study back link is 12px with no padding — effectively unhittable with a thumb. Below 640px the work rows lose their chevron and become untreated text.

# Minor Observations

- No og:image or twitter:card sitewide — every shared link unfurls as a blank card.
- The 404 emits a self-referential canonical and no noindex, so every mistyped URL becomes its own canonical.
- No skip link, and main has no id.
- smooth scroll-behavior is dead weight; the site has no anchors by design.
- Footer links the raw mailto while the header links /contact/ — the two chromes disagree about what "contact" means.
- The Two Halves rule isn't held: copper marks 404, Work, and meta, none of which are listening or people.
- The Studio founder block has no heading, so the outline runs h1 → (nothing) → h2.
- No sitemap integration and no robots.txt.
- Assessment B's own analyzer flagged missing alt text; that was a false positive — Astro serialises alt="" as a valueless attribute, which parses as empty string. Correctly decorative.

# Questions to Consider

1. Production has about one page of content across four routes, one existing solely to say "nothing here yet." What is the multi-page structure buying you today, versus the day the flagship ships?
2. The most persuasive sentence written for this site lives in a file that will never build: "The person who held it all in their head took a vacation for the first time in two years." What true sentence of that specificity exists right now, and why is a slogan on the home page instead of it?
3. You've correctly forbidden fabricated proof — but the honest proof that *is* available (a named human, a location, a founding year, a response promise, a paragraph on the system under construction) is also missing. Is "no evidence" a principle here, or an unfinished sentence?
