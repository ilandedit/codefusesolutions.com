---
title: Inventory reconciliation, rebuilt
summary: A nightly reconciliation that took two people a morning now runs itself and flags only what's genuinely wrong.
client: Manufacturing
year: 2026
order: 2
sample: true
cover: ../../assets/work/inventory-reconciliation/cover.png
coverAlt: The nightly reconciliation summary with matched, timing-difference and review counts
---

## The problem

Two people spent every morning reconciling inventory counts between the floor system and the accounting system. The two disagreed constantly, most disagreements were benign timing differences, and the real discrepancies — the ones that cost money — were buried in the noise.

## The approach

Rather than automate the existing comparison, we started by classifying a month of historical disagreements. Most fell into four predictable patterns that could be resolved automatically with confidence. What remained was small enough to review by hand.

The system was built to explain itself: every automatic resolution states which rule it applied, so the team could audit it into trust rather than being asked to take it on faith.

## The result

The nightly run completes before anyone arrives. The morning review is a short list of genuine exceptions instead of a spreadsheet diff, and both people went back to work the business actually needed them for.
