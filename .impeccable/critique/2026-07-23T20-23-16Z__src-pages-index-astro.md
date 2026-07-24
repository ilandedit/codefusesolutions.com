---
target: the landing page
total_score: 26
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 2
timestamp: 2026-07-23T20-23-16Z
slug: src-pages-index-astro
---
Method: dual-agent (A: design-review agent · B: detector-evidence agent)

# Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Fuse rail + header hairline are good status; but a mailto click with no mail client gives zero feedback at the moment of highest intent |
| 2 | Match System / Real World | 4 | Plain language throughout; one slip — "the last commit" is developer vocabulary aimed at a business owner |
| 3 | User Control and Freedom | 3 | Nav "Contact" is a raw mailto that ejects into a mail app instead of the #contact section where the reassurance copy lives |
| 4 | Consistency and Standards | 3 | One section, two names: hero says "How we work", nav says "Approach" |
| 5 | Error Prevention | 3 | No subject prefill; no visible/copyable address until the final section; nothing prevents the broken-mail-client dead end |
| 6 | Recognition Rather Than Recall | 4 | Everything on one scroll; address appears as literal text twice; solid |
| 7 | Flexibility and Efficiency | n/a | Static Persuade page, single one-shot action — nothing to accelerate |
| 8 | Aesthetic and Minimalist Design | 4 | Rationed ember, one kicker, hairline rows, no filler — the restraint is real and enforced in code |
| 9 | Error Recovery | 2 | The page's only failure mode (mailto fails) has no acknowledging affordance at all |
| 10 | Help and Documentation | n/a | Nothing on a landing page warrants documentation |
| **Total** | | **26/32** | **Good (81%)** |

# Design Specificity Verdict

**LLM assessment:** Authored, not interchangeable — but the authorship lives in exactly two places: the copy ("Problems other shops passed on", "We'll tell you honestly whether we're the right studio for it" — no generic studio ships those lines) and the Burning Fuse system, a real identity device derived from the name. The composition skeleton is the deliberate category canon; swap the copy and kill the ember and any studio could wear it. That's the chosen bet, and within it the page passes: the parts that could be specific, are.

**Deterministic scan:** Fully clean — 0 findings across index.astro, Base.astro, Header.astro, Footer.astro, 404.astro, and the CSS pass (verified as a genuine pass: the detector demonstrably fires on planted anti-patterns). Mechanical checks: fonts preloaded and present, one h1, anchors resolve, title/description/canonical/og present. Gaps: no og:image or twitter:card; the 404 page emits a canonical URL (unusual for error pages); id="contact" exists but nothing links to it.

**Visual overlays:** Skipped — no browser automation this session; curl-based mechanical verification substituted.

# Overall Impression

A disciplined, honest page whose craft claims survive inspection — the motion system is identity rather than garnish, and the closing section is genuinely good persuasion. The single biggest opportunity is the conversion path itself: every contact affordance is a bare mailto, so the page's one action can silently do nothing on exactly this audience's office PCs.

# What's Working

1. **The fuse system is identity, not garnish.** Name → metaphor → motion grammar (hero draw, section ignition on one shared easing, rail burning toward contact) — transform-only, no loops, hidden without JS. This is what authored motion looks like.
2. **The closing is honest persuasion done right.** Question-mirroring headline, an explicit offer to say no ("We'll tell you honestly whether we're the right studio for it"), the address as the hero object. It treats the reader's real fear instead of shouting a CTA.
3. **Progressive-enhancement discipline.** Reveals gated behind html.js, rail hidden without JS, server-rendered text throughout — the page degrades to a fully legible document.

# Priority Issues

1. **[P1] The one conversion path can dead-click.** Every contact affordance is a bare `mailto:`. On desktop machines with no mail client — common on this audience's office PCs — "Tell us your problem" does nothing, silently, at the moment of highest intent. **Fix:** hero primary CTA → `#contact` (visible, selectable address), keep the closing mail-link as the mailto, add `?subject=` prefill, add a copy-address affordance at the closing. *Suggested command: /impeccable harden*
2. **[P1] Scroll-reveal can permanently hide content.** The IntersectionObserver watches whole `.section` elements at threshold 0.15; a section taller than ~6.6 viewports never triggers, leaving its children at opacity 0 forever — landscape phones flirt with this today, a populated Work section walks into it. **Fix:** observe the `[data-scroll-reveal]` elements themselves, or threshold 0 + rootMargin. *Suggested command: /impeccable harden*
3. **[P2] Reduced-motion is incomplete.** The media query settles the reveals and the hero fuse line but not `.section::before` — section ignition still animates for reduced-motion users, contradicting DESIGN.md's own rule. **Fix:** settle `.section::before` in the reduced-motion block. *Suggested command: /impeccable harden*
4. **[P2] Two names for one section.** "How we work" (hero link, section H2) vs "Approach" (nav) both target #approach. **Fix:** one label everywhere. *Suggested command: /impeccable clarify*
5. **[P2] The Work section's arrival is under-designed.** When the first case study ships: "Selected work" sits above the near-duplicate "The work we take on."; work items carry no scroll-reveal so they'll pop in flat; the nav grows to five focusable options. **Fix now while cheap:** retitle one section, tag work items with data-scroll-reveal, decide nav order. *Suggested command: /impeccable onboard*

# Persona Red Flags

**Jordan (first-timer business owner):** kicker + H1 answer "what is this" in one second — good. Clicked "How we work", later can't find it in nav (it's "Approach"). "From the first call to the last commit" means nothing to them. Tapping the CTA drops them into an empty compose window with no starting point — the page said "tell us your problem" but gave no nudge about what to write.

**Riley (stress tester):** Reads "we" for four sections, then meets "the studio of founder Derrick Wengerd" — survives only because "you talk directly to the person building your system" pre-seeded it. Hunts for verification and dead-ends: no work, no client names, no LinkedIn/GitHub, no location or legal identity — the footer offers zero external-verification handles. Catches the reduced-motion gap. Notices nav "Contact" is the one nav item that doesn't behave like its siblings.

**Casey (distracted mobile):** The fuse rail is display:none below 820px — mobile keeps none of the signature except the hero line. Nav links are ~15px text targets in the hardest one-handed reach zone. Mail-app context switch loses the persuasion; return is a blank draft. Positives: wrapping email address, 51px hero button, reveals are once-only so interruption is safe.

# Minor Observations

- GeneralSans-600 is used (.title) but not preloaded — the only weight that can FOUT.
- The One Fuse Rule is bent in the first viewport: nav Contact, hero button, and fuse line are three ember voices at once.
- Inline transitionDelay persists after reveal — a trap if a revealed element ever gains a hover transition.
- No skip-to-content link (near-zero cost with a 4-link header).
- No og:image / twitter:card; 404 page emits a canonical URL; orphaned id="contact".
- The #studio section (one short paragraph inside full section padding) borders on thin rather than confident on tall desktops.
- scroll-padding-top correctly clears the sticky header — a detail most pages miss.

# Questions to Consider

1. Mobile is where most first visits land, and it sheds the entire signature. What is mobile Casey's memorable moment?
2. The closing promises honesty but never names the first step of an engagement (a call? a week? free?). Is that absence the real reason a cautious owner closes the tab?
3. The fuse burns toward an arrival that is a mailto handoff to someone else's software. Should the page own its own ending?
