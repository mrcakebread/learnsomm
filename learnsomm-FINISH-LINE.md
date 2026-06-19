# LearnSomm — Finish-Line Inventory (handoff for the next chat)

**Read first:** `wine-tool-workshop-SKILL.md` (conventions + full canon), `learnsomm-tier-system.md` (pricing/points/inclusions/check-ins/all decisions), `learnsomm-build-run-spec.md` (wheel reproduction + the cuisine factory). All files live in /mnt/user-data/outputs. Rebuild `learnsomm-vault.zip` every turn (exclude beef-wheel-v2.html). Verify with the 4 gates. Use `?admin=1` or `LSADMIN.on()` to unlock everything for testing. Local server for iframe tests: `python3 -m http.server 8199` (restart if it dies; test heavy files one at a time).

This batch (just done): hero copy cleaned (no kick/ASSESSMENT), tip copy softened (bartender row removed, "finally click" reworded), Lightning Hour set to top-tier subjects (bev: Wine/Champagne/Cocktails; food: Seafood/Oysters — champagne+oysters theme pools built from their wheels), champagne-aroma cheat (fruits-first + click-to-spin), one-font-everywhere, icon hover glow, spin count → Preferences, group-value moved into Build a Challenge.

---

## ✅ DONE — all 10 cuisine wheels built, registered, verified (was the headline work)
_Italian, French, Chinese, Japanese, Thai, Spanish, Mexican, Indian, Greek, American — all in CATALOG/TOPICS/TOPIC_FILE, gates pass, spin verified._

## (historical) The cuisine build notes
Two cuisine golds done (Italian, French). Build the other **8** via `build_cuisine.py`: **Chinese, Japanese, Thai, Spanish, Mexican, Indian, Greek, American.** Mark wants these built HERE (not deferred); translation/factual re-checks happen later via other models. Each cuisine:
1. Author an audited 8-category dataset (~50 descriptors), tuple `(name, slug, accurate_note, tier 1|2|3)`. Accuracy matters — Mark is a Certified Sommelier.
2. Assign a real Intro/Certified/Master split (≈12-15 / ≈29 / rest). The factory REQUIRES a tier on each and refuses to build with no Intro tier (prevents the empty-paid-Intro bug).
3. Run `build()` → wheel + cheat. Register in CATALOG (distinct icon + palette). Run 4 gates + live smoke (spin-on-select, paid Intro<Master segment counts).
Do 1-2 per turn for quality. Mark suggested starting Spanish + Japanese.

## Graphics to mount (Mark cleans these in a separate Gemini chat; he renames to match)
Prompts already written: `gemini-two-new-icons-prompt.md` (10 cuisine icons each labeled with the cuisine NAME + Champagne Flavors&Aromas + Tasting Exam, light+dark), `gemini-navbar-buttons-prompt.md` (14 nav buttons incl. current-category template, Pairing=tech concept, light+dark in one image), `gemini-image-prep-prompt.md` (the de-watermark→demo→patch pipeline; files 0.png–8.png by brief section). When cleaned sets return: mount cuisine icons on their tiles, nav buttons in the bar, the Champagne Flavors&Aromas (🍾→real icon) + Tasting Exam icons, hub medallion, Lightning lit-state, frames, wheel-of-wheels art.

## Wine Maps product
`winemaps.html` (~7.4MB) — make it tiered (Intro/Next/Master). Free Napa sub-AVA demo until July 4 launch. Register/confirm in CATALOG (currently 🗺 under Study).

## Offline / correctness passes
- Embed Dancing Script font across all wheels (currently the one gate-3 flag — loaded from Google Fonts; must be offline for the Vault).
- Migrate wheel datasets onto the i18n schema via `admin.html` (EN base + ES required for launch; IT/DE/FR optional fall back to EN).
- Convert any remaining cheats to the name-aligned tiered template; ensure every wheel's `spinToSlug` spins (not just selects).
- Roll `LSTrim` + the tier system to ALL wheels (not just the cuisine/sparkling golds).

## Commerce / backend (Firebase — the real money + accounts layer)
- Checkout + accounts: wire every entitlement flag (`LSEnt`: pass/subscriber/challenge/vault/paid/canPair/bilingual) to real charging. URL flags + admin already simulate it.
- Challenge check-in emails: `LSCheckins` schedule + copy are the source of truth — fire them as real scheduled emails (week1/25%/50%/day-75 corner/day-87). Day-75 Yes→day-87 celebratory discounted upgrade; No→suppress day-87. Attach the real coupon for the day-87 reward.
- Group bundle, Ambassador referral tracking ("goes live with accounts"), Tip jar link (paste real Gumroad/Stripe link into the tip block).

## Arcade
4 games feeding `LSPoints` (Lightning is separate). Not yet built.

## Known nits / verify-on-fresh-context
- Confirm the stage top is truly seamless once Mark reloads (navbar border removed; crumb constrained; fmt strip gone). If a band persists, inspect the loaded wheel's own top spacing.
- Heavy files (1.2MB dashboard, 300KB wheels) time out playwright if tested together — one at a time, `wait_until='domcontentloaded'` + longer waits.

## Launch
Firebase Hosting, target July 4 2026. LearnComida.com = planned bilingual food mirror.

---
## UPDATE — category testing + blitz built this chat
Done: raised test bars (Quiz 80%/10Q, Medium 90%/15Q, Final 90%/30Q), all timed per-question with a 4s/8s/15s speed picker that scales points (×1.0/×0.6/×0.3). 2-week sharing blitz onboarding (pick coffee/tea → accept → Intro coffee+tea+water+bread + one spirit/non-cuisine-food trial → on end keep the pick if a quiz was passed, else lock, + the other coffee/tea add-on + 250-pt perk; resolves on load).

**Testing status:** ✅ All 39 categories now have auto-generated quiz/test banks (from each wheel's DATA), and a 'Test a Category' tab in My Journey launches Quiz/Medium/Final (timed, speed-scored) for any of them. Remaining: (optional) tie passing a tier's test to gating the next paid tier / a 'Certified' badge in My Journey, and replace the hardcoded coffee→tea `applyUnlock` starter logic with the per-category gate if desired.
