# LearnSomm — Wheel + Cheat Build-Run Spec (Gold Standard)

Two verified reference builds now exist. Every remaining wheel/cheat is **reproduction from these**, not invention.

- **Gold wheel A — sparkling:** `bubbles-wheel.html` (63 descriptor name-fields)
- **Gold wheel B — cuisine:** `italian-cuisine-wheel.html` (60 descriptors, 8 categories) — the template for the 9 other cuisines
- **Gold cheat:** `sparkling-cheat-sheet.html` and `italian-cuisine-cheat-sheet.html` (name-aligned, click-to-spin)

Both wheels share the **v9 engine**: `REGISTRY`, `readAngle()`, per-descriptor `reg._mid`, `rotation` + `applyRotation()`, `spinning`, `_LS_NAME2SLUG`, and the spinning `window.spinToSlug`.

## The three click-to-spin surfaces (the contract)
All three must spin the wheel to the descriptor AND populate its info — not just highlight:
1. **The wheel** — spin button / tap lands a wedge at the read pointer; `selectItem` populates the panel and posts `LS_READ`.
2. **The cheat sheet** — each card click → `postSpin(name)` → `LS_SPIN_TO` to parent → dashboard relays to wheel → `spinToSlug` spins + selects.
3. **The journal** — each saved descriptor chip's label is clickable → posts `LS_SPIN_TO` to `stageFrame` → wheel spins + selects. (✕ still deletes.)

The wheel resolves a spin by NAME via `_LS_NAME2SLUG`, so cheat/journal can send the descriptor name and it still lands.

## The spinning `spinToSlug` (canonical — must be present in every wheel)
The active `window.spinToSlug` must SPIN, then select. Pattern: resolve key→slug (direct or via `_LS_NAME2SLUG`); if `rotation`/`applyRotation`/`readAngle`/`reg._mid` exist and not `spinning`, animate `rotation` to `readAngle()-reg._mid` over ~1100ms (ease `1-(1-p)^3`, ~2 turns), then `selectItem(slug)`; else fall back to `selectItem`. Wrap in nested try/catch with an outer catch that falls back to `selectItem(key)`. (Older wheels ship a select-only `spinToSlug` — upgrade it.)

## Per-wheel build steps (mechanical)
1. **Data** in canonical shape: `DATA.categories[].sub[].descriptors[] = {name, name_es, slug}`; `DESCRIPTIONS[slug] = {cat, origin, chemistry, pairing, mixology, examples}` each with `_es` twin. Every descriptor needs at least an `origin`-level note (accurate, no invented producers/facts). Migrate strings onto the i18n schema (admin.html) so EN/ES/IT/DE/FR slots exist.
2. **Palette:** assign the subject's color block (one per subject).
3. **Assemble** on the v9 engine (clone a gold wheel; swap DATA/DESCRIPTIONS/palette/subject config). No interaction code is rewritten.
4. **spinToSlug:** confirm it's the SPINNING version (grep for `applyRotation` inside the `spinToSlug=function` body).
5. **Cheat sheet:** clone a gold cheat; feed `CARDS=[{name,group(category),note(=origin),color,slug,wheel:'type'|'aroma'}]`. Aroma/tasting-note groups sort first. Set `data-wheelslug` = the wheel's exact slug. No per-card tier badges.
6. **Dashboard CATALOG:** add `{file, label, icon, cat, cheat:"<cheat file>", desc}` — the `cheat` field is what links wheel↔cheat. (Bug caught on Italian: a missing `cheat` field breaks the cheat button.)

## The four verification gates (every file, every time)
1. **HTML parse** — `html.parser` feeds clean.
2. **JS syntax** — extract each full `<script>…</script>` body, `node --check`. (Slice the WHOLE node, not from `<script` mid-IIFE, or you get false brace errors.)
3. **Offline-asset scan** — no broken local refs; flag external `http(s)` loads. *Known flag:* wheels currently load `Dancing Script` from Google Fonts — the one true offline gap; embed/replace when doing an offline pass (affects all wheels, do as one batch).
4. **Live smoke test (playwright)** — load wheel `?paid=1&tier=master`; assert `spinToSlug(name)` rotates `rotation` and selects; for the chain, post `LS_SPIN_TO` and assert spin+select; for the journal, load the wheel into `stageFrame`, add a chip, click its label, assert the wheel frame's `rotation` changed and a descriptor is selected. (Wheels are heavy ~300KB+ — test one at a time; serve over `python3 -m http.server` since file:// blocks sibling iframes.)

## Verified status (this session)
- `bubbles-wheel.html` — spinning spinToSlug ✓; cheat click-to-spin ✓; journal chip click-to-spin ✓; gates 1,2,4 PASS; gate 3 flags the Google-Fonts load.
- `italian-cuisine-wheel.html` — spinToSlug upgraded to spinning ✓; new name-aligned cheat built (60 descriptors, accurate notes) ✓; cheat & journal click-to-spin ✓; CATALOG cheat link added ✓; gates 1,2,4 PASS; gate 3 flags Google Fonts.
- `learnsomm.html` — journal chips made clickable→spin ✓; Italian cheat linked ✓; parse + JS PASS.

## Remaining build queue (reproduction, not invention)
- 9 cuisine wheels (Chinese, Japanese, Thai, French, Spanish, American, Mexican, Indian, Greek) — clone Italian gold.
- Convert all remaining cheats to the name-aligned template (fixes click-to-spin everywhere).
- Upgrade any wheel still carrying a select-only `spinToSlug`.
- One offline pass to embed the Dancing Script font across all wheels (clears gate 3).
- Migrate every wheel's strings onto the i18n schema via admin.html.

**Recommendation:** run the cuisine clones as a focused factory pass in a FRESH session (clean context window = room for the heavy files), cloning from these two verified golds and running all four gates per file.

---

## Cuisine factory (built — build_cuisine.py)
`build_cuisine.py` clones the Italian gold wheel + cheat into a new cuisine from a dataset dict, swapping DATA / DESCRIPTIONS / SUBJECT / HUB / title. The v9 engine — **all 3 tiers (Intro/Certified/Master), the free unpaid tease + paid clean modes, the spin contract, and the "Click to Spin" hint — is inherited unchanged**, so one wheel file per cuisine covers free+paid+all tiers. (There are NOT 18 separate files: free/paid and the three depths are modes of one file, addressed via `?paid=1&tier=master` etc.)

Dataset shape: `{subject, title, hub:[Mark's, SUBJECT, WORD, 2026], categories:[(NAME, color, [(name, slug, accurate_note), ...]), ...]}` — 8 categories is the norm; every descriptor needs an accurate one-line note (no invented producers/facts). Run `build()`, then register in the dashboard CATALOG with the `cheat` field, then run the live smoke test.

### Gold clones complete (2 of 10 cuisines)
- **Italian** (`italian-cuisine-wheel.html` + cheat) — 60 descriptors. HUB defect fixed (was leftover SPARKLING/WINE → now ITALIAN/CUISINE).
- **French** (`french-cuisine-wheel.html` + cheat) — 55 descriptors across 8 categories (Soupes & Entrées, Sauces Mères, Viandes, Fruits de Mer, Pain & Pâtisserie, Fromage & Charcuterie, Desserts, Techniques & Terroir), all accurate notes. Registered in CATALOG (🥐). Gates 1,2,4 PASS; spin-on-select verified.

### Remaining 8 cuisines (mechanical via build_cuisine.py)
Chinese, Japanese, Thai, Spanish, American, Mexican, Indian, Greek. Each needs: an audited 8-category dataset (~50 descriptors, accurate notes) → `build()` → CATALOG register → smoke test. The ONLY real work per cuisine is writing accurate content; the build + verify is automated. **Best run as a focused fresh session** (the dashboard is 1.2MB and the wheels ~300KB — a clean context window avoids the heavy-file timeouts seen here). Each cuisine gets a distinct palette/icon.

---

## CRITICAL — tier membership per cuisine (paid Intro = exclude + regrow, not frost)
**Paid tiers are clean, self-contained wheels, not frosted teases.** In paid mode the engine's `cleanRebuild(t)` filters DATA to `rank(name) <= t` and rebuilds from scratch, so only that tier's segments remain and they **re-proportion (grow)** to fill the circle. The free/unpaid view is the frosted tease that shows everything. (Verified: French paid Intro = 15 segments vs Master = 55; Italian Intro = 12 vs Master = 60.)

Tier membership is defined by **name lists in each wheel**: `var LS_TIER_INTRO=[...]`, `var LS_TIER_NEXT=[...]`; anything not listed is Master (rank 3). **Each cuisine needs its OWN lists.**

**Bug caught & fixed this session:** the French clone inherited Italian's tier names ("Spaghetti"…), so French paid-Intro rebuilt to ZERO segments. Fixed: French now has a real split (15 Intro / 29 Next / 11 Master). Italian's lists were already correct (12/30/18). `build_cuisine.py` now **requires a tier (1|2|3) on every descriptor** — tuple shape is `(name, slug, note, tier)` — writes the per-cuisine `LS_TIER_INTRO/NEXT`, and **refuses to build if no Intro-tier items exist**. So the remaining 8 cuisines cannot ship this bug.

Tiering guidance: Intro = the household-name foundations a beginner learns first (~12–15); Next/Certified = intermediate breadth; Master = technique, advanced, and the long tail.

---

## Other Meats wheel (built — everything but Beef)
`othermeats-wheel.html` + `othermeats-cheat-sheet.html`, built via `build_cuisine.py` (v9 engine, tiered). 55 descriptors across 8 categories: Pork Cuts, Lamb & Mutton, Poultry—Chicken, Poultry—Other Birds, Game—Furred, Game—Feathered, Veal & Offal, Processed & Technique. Tier split 14 Intro / 21 Certified / 20 Master. HUB "Mark's/OTHER/MEATS/2026", icon 🍖. Registered in CATALOG (after Beef) + TOPICS ('Other Meats' after 'Beef') + TOPIC_FILE. Gates pass; paid Intro=14 vs Master=55; spin-on-select verified. Complements Beef (🥩) and Charcuterie (🥓, cured).
