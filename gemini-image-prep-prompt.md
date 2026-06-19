# Paste this into the NEW Claude chat (with the Gemini PNGs attached)

> I'm Mark Lenington, building **LearnSomm** — a sommelier study app with a parchment-and-garnet, IBM-Plex, sleek-not-flashy design. I'm attaching PNGs Gemini generated from my design brief. **I've renamed each file to its section number in the brief** — `1.png`, `2.png`, `3.png`, etc. — so the filename IS the identifier. Use this key:
>
> **FILE → ASSET KEY (filename number = design-brief section):**
> - **1.png — Logos & Wordmarks:** LearnSomm wordmark, LearnComida wordmark, + small logomark (no ".com")
> - **2.png — Top nav bar buttons:** Search, Random, Cheat Sheet, Journal, Build a Challenge, Quest, Pairing mode, Design, Arcade, Lightning (calm + lit state), Format, Focus (larger), My Journey & Preferences, Sign in/Log out, Theme switch, Tree/Collapse
> - **3.png — Wheel subject icons:** Tasting Exam, Sparkling Aroma
> - **4.png — The wheel itself:** wheel-of-wheels welcome hero, the center hub medallion, the current-wheel title treatment
> - **5.png — Challenge & group graphics:** Solo, With a Friend, Group/Family, + Affiliate/Corporate
> - **6.png — Custom frames:** Tip the Somm, Cheat Sheet, Study Journal, Tasting Note
> - **7.png — Feature UI blocks:** Arcade hub, Lightning Hour, Build a Challenge, Cheat Sheets, Search bar + options
> - **8.png — Backgrounds:** parchment (light) texture, cellar (dark) texture, faint wheel watermark
>
> (If I sent fewer or more files, just map by the number on each — `N.png` = section N above.)
>
> For every file:
> 1. **Inventory by filename number.** `view` each `N.png`, state which section it is and what asset(s) it contains, its size, transparent vs. solid background, and where the watermark sits. If a file is a *sheet* of several assets (e.g. 2.png), note the grid. List all files up front so I can confirm before you finalize.
> 2. **Remove the bottom-right Gemini watermark** with Pillow — crop the minimal margin strip if there's empty space, or paint over it with the local background colour (clear to transparent for PNGs). Show the result; confirm no badge remains and no art was clipped. (Ignore invisible SynthID — only the visible badge.)
> 3. **Verify** each is on-brand (parchment `#F4F2EA` / garnet `#6E1B2E` / antique-gold `#b5862a`, sleek line-art) and transparent where it's an icon/logo. **Proceed as if the images are correct** — just flag anything visibly off (wrong glyph, an icon in the wrong slot) in a note; I'll confirm errors after.
> 4. **Slice & normalise** — cut multi-asset sheets into individual files; trim icons to even padding on a square canvas. Export **transparent PNG at 3×** (a 48px icon → 144px).
> 5. **Name** each by what it actually is, in the outputs directory: e.g. `logo-learnsomm.png`, `logo-learncomida.png`, `nav-search.png`, `nav-lightning-lit.png`, `icon-sparkling-aroma.png`, `icon-tasting-exam.png`, `wheel-hub.png`, `wheel-welcome-hero.png`, `fig-solo.png`, `fig-group.png`, `frame-tip-the-somm.png`, `bg-parchment.png`.
> 5b. **Expect inconsistencies — this is a first pass, not final.** Some icons may be in the wrong slot, mismatched in style, off-brand, or sliced badly. **Do not treat the batch as final.** Before renaming anything for real, build a **demo contact sheet**: a single HTML (or image) page that lays out every cleaned asset in a labeled grid — filename it came from, the name you'd assign, and the watermark-removed preview — on both a light parchment background and a dark cellar background so I can judge transparency and on-brand fit. I'll review the contact sheet and take notes on what's wrong.
> 5c. **Plan for a patch, don't force fixes.** For anything off, **flag it — do not redraw or fudge it.** Collect the problems into a short, numbered **"patch list"** I can take back to Gemini (e.g. "redo Sparkling Aroma icon — currently looks like a plain flute"; "nav Lightning lit-state missing"). The goal of this pass is the contact sheet + the patch list, so I can have Gemini generate a small **patch file of just the corrected icons** and we re-run. Only finalize names after I confirm the demo looks right.
>
> 6. **Hand back** the finished set + a one-line-per-asset report: source file (`N.png`), what it is, watermark removed ✓, transparent ✓, any flag.
>
> This is image work (Pillow), not HTML — the named asset library is the deliverable; don't wire anything into an app.

---

**After that chat finishes:** review the **contact sheet first** and note anything wrong. Expect a round or two — gather the fixes into a patch list, have Gemini regenerate just those as a small **patch file**, and re-run the cleanup. Once the demo looks right, download the named set and bring it here and I'll mount it — swap the temporary emoji, drop in the hub medallion, wire the Lightning lit-state to the on-the-hour glow, place the frames.
