---
title: Permit Pro GPS
summary: >-
  Oversize-load haulers get one state-issued route per permit and no navigation
  app that respects it; this one turns the permit itself into the route and
  alarms instead of re-routing.
client: Heavy haul
year: 2026
order: 0
---

## The problem

An oversize load is not allowed to take the fast way. Every state issues its
own single-trip permit, and each one prescribes an exact authorized route —
this ramp, that bridge, these miles. Leaving it is a violation, and on a
68-foot shed at 13'6" it can also be a struck overpass.

Every consumer navigation app does the one thing this driver must never
accept: it re-routes. Traffic, a closure, a faster line — it silently moves
you onto a road nobody permitted. Meanwhile the permits themselves arrive as
scanned images with no text layer, one per state, so a single haul from Ohio
to Pennsylvania is two documents that have to be recognised as one move.

## The approach

The permit is the source of truth, and the app is built so that nothing can
quietly become the authority instead.

Permits arrive by email or bulk upload and are read by a vision model that is
told to **transcribe, never reconstruct** — no inferring a connecting road, no
filling a gap, and coordinates are forbidden outright, because a plausible
position for "SR 0022 at the WV line" is a confident wrong answer nothing
downstream can detect. Placing those road names on the earth is a separate,
checkable step: geocode, snap to roads, then refuse to draw unless the result
clears three guards — the match must be a place rather than a county centroid
and in the right state, no point may sit off the corridor its neighbours
describe, and the finished line must be about as long as the permit says the
move is. That last one is the strongest, because the paper prints its own
mileage, so a line of the wrong length is provably not that route.

Connected permits stitch into one trip on the hand-off each document declares,
corroborated by the calendar — legs of one haul are days apart, not seasons.
Where a state's permit is missing, the gap is named rather than hidden.

The line on the map is always labelled as an approximation, and a route the
app worked out **never arms the off-route alarm**. Stopping a driver for the
app's own geocoding error teaches him the alarm is noise, and the next one
fires on a route read off the paper.

## The result

A driver navigates the permitted route and nothing else: live GPS projected
onto the authorized line, maneuvers and restrictions pinned to distance along
it, and an alarm — never a re-route — when the truck leaves it. Around that
sits the rest of the operation: an email ingest pipeline that classifies
arriving documents and bounces junk with a reply, a company console where a
carrier distributes permits to drivers, a platform admin console, community
road tags with satellite views of the parking, and a CI pipeline that builds
and ships to testers in eight minutes.

The engineering discipline the product demanded turned out to be the
interesting part: at every step where the software could have guessed, it
either proves the guess against something the paper already says, or declines
and shows the driver the route table instead.
