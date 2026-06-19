# LearnSomm — Build To-Do (priority order)

## Launch-blocking (target: July 4)
1. **Wine Maps product (`winemaps.html`)** — interactive Napa Valley + sub-AVA map.
   - Tiered: Intro / Next Level / Master (same model as the wheels). Maps are a paid product.
   - **Free demo until July 4:** Intro tier for Napa sub-AVAs only. Zoom path allowed: California → coastal regions (North Coast, Central Coast, South Coast…) → into Napa. Everywhere else is locked/greyed in demo.
   - Global map is being built in a separate chat; this is the US/California start.
   - (Currently `winemaps.html` = a copy of the existing Napa explorer; needs the tier gating, demo lock, and zoom-scope limiting added.)

2. **`deductive.html` → the Certified Exam blind-tasting GRID CHECKER** (NOT the CMS deductive reference, and NOT the grape browser).
   - User fills in a blind-tasting grid and submits; system **cross-checks against the CMS Deductive tasting standards** from the workbook already implemented (this logic lives in `tasting-suite.html` today — port/own it on `deductive.html`).
   - "Working well by end of day" — updated features, implemented into the design & function.
   - NOTE: the grid-checker with CMS cross-check already largely exists as `tasting-suite.html`; deductive.html is currently the *reference* page. Decision needed: rename/repoint, or rebuild deductive.html as the checker and keep tasting-suite as-is.

## Next
3. **"Telling the Story" — casual tasting mode.** User writes OR speaks a paragraph of descriptions; the system extracts the key words/elements (sight, fruit, structure, etc.) and gives feedback — a relaxed alternative to the strict grid. Pairs with the grid checker on the exam-prepper.

## Standing queue (from prior sessions)
4. Test-out / reinforcement engine (spaced repetition) — powers the Sharpen Wheel, the global progress bar, and earn-to-unlock.
5. Nine remaining cuisine wheels (Chinese, Japanese, Thai, French, Spanish, American, Mexican, Indian, Greek).
6. Roll the **Trim** feature out to all wheels (currently bubbles only).
7. Convert remaining cheat sheets to the tiered template (name-aligned to wheels → fixes click-to-spin everywhere).
8. Roll the tier system (tease/clean/list/bilingual/preview) to all wheels.
9. Journal cluster: share-image button, blind-grid color picker, journal collapse, save-notes-as-standalone-HTML w/ audio.
10. Arcade games (4) feeding the points economy.
11. Checkout / accounts (Firebase) — wires all the entitlement flags (paid/tier/pass/challenge/vault/inclusions) to real charging.
