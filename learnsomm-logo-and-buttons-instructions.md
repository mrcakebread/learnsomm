# LearnSomm — Logo + Button Sheet: Two Sets of Instructions

This has two parts:
- **PART 1** — paste into **Gemini** (image generation) to create ONE image holding the wordmark, card title-logos, and all the nav buttons.
- **PART 2** — paste into **another Claude chat** (one with code/file tools) to remove the background, make it transparent, and slice each piece into its own PNG, exactly like the 72 rail icons were done.

Read Part 1's "What to upload / settings" note first — it matters for slicing later.

---

## PART 1 — PROMPT FOR GEMINI

> Copy everything in the block below into Gemini. If Gemini makes the pieces touch or overlap, re-run and add: "increase spacing, every element fully separated with empty margin around it."

```
Create a single flat 2D image on a PLAIN SOLID WHITE background (#FFFFFF, no gradient, no texture, no shadow on the background). The image is a sprite sheet of separate UI assets for a wine-education web app called "LearnSomm." Arrange the assets in clearly separated rows with generous empty white space between every element so each can be cut out individually. Do NOT let any two elements touch or overlap. Do NOT add a drop shadow, glow, or background panel behind any element.

Visual style for ALL elements: warm, refined, "fine-dining sommelier" aesthetic. Palette: deep oxblood/garnet red (#6E1B2E), warm gold (#C49A4A), espresso brown (#3A2A20), on white. Clean, modern, slightly classic. Flat vector look, crisp edges, no photorealism. Consistent line weight across all icons.

ROW 1 — MAIN WORDMARK (large, left-aligned):
- The word "LearnSomm" as a logo. Elegant serif or refined script for "Learn" + a slightly bolder treatment for "Somm." Include a small wine-related mark (a simple wine glass, grape, or swirl) integrated to the left of the text. This is the primary brand logo.

ROW 2 — CARD TITLE LOGOS (a row of 3 small horizontal title badges, evenly spaced):
- Title badge 1: "Flavor Wheels"
- Title badge 2: "Cheat Sheets"
- Title badge 3: "Tasting Tools"
Each is a small, tasteful text logo (same font family as the wordmark) with a tiny matching icon to its left. Keep them compact and on one baseline.

ROW 3 and ROW 4 — NAV BUTTONS (7 buttons total, each a small rounded "pill" containing an icon + its label, evenly spaced, 3–4 per row):
1. "Search" — magnifying glass icon
2. "Random" — dice icon
3. "Cheat Sheet" — document/paper icon
4. "Journal" — open notebook / pencil icon
5. "Challenges" — target / bullseye icon
6. "Quest" — map / compass icon
7. "Tip the Somm" — coin / heart icon

Every button uses the same pill shape, same height, same font, same icon style — only the icon and label change. Keep the labels short and readable.

Output one single high-resolution image (at least 2000px wide), everything on pure white, maximum spacing between items.
```

### What to upload / settings (read this)
- Ask Gemini for the **highest resolution** it offers, and **PNG** if possible.
- The single most important thing for clean slicing later: **pure white background and big gaps between every element.** If elements touch, the slicer can't separate them. If the first result is cramped, regenerate with: *"far more white space, each element isolated."*
- Once you have an image you like, **download it** and have it ready to upload to the other Claude chat in Part 2.

---

## PART 2 — PROMPT FOR ANOTHER CLAUDE CHAT (the one with code/file tools)

> Start a new Claude chat that has the code-execution / file tools. Upload the image from Gemini, then paste the block below.

```
I'm uploading one PNG sprite sheet from an image generator. It has, on a plain white background with gaps between everything: a "LearnSomm" wordmark, three small card-title logos ("Flavor Wheels", "Cheat Sheets", "Tasting Tools"), and seven nav buttons (Search, Random, Cheat Sheet, Journal, Challenges, Quest, Tip the Somm).

Please slice it into individual transparent PNGs, exactly like a sprite-sheet extraction. Specifically:

1. Load the image with Pillow (PIL) and numpy in Python.
2. Make the white background transparent: convert to RGBA, then for every pixel that is near-white (e.g. R,G,B all > 240), set alpha to 0. Use a small tolerance so anti-aliased edges stay clean; optionally feather 1px so edges aren't jagged.
3. Auto-detect each separate element by connected-component / bounding-box analysis on the now-transparent alpha channel:
   - Build a boolean mask of non-transparent pixels.
   - Use scipy.ndimage.label (or your own flood-fill) to find connected blobs.
   - Discard tiny blobs below a minimum area (noise/specks).
   - For elements made of multiple disconnected parts (icon + separate text), merge blobs whose bounding boxes are close together / on the same row so each logical button stays one piece. A simple approach: merge boxes that overlap horizontally and are within ~40px vertically, or just group by row bands.
4. Crop each detected element to its tight bounding box (add a few px transparent padding) and save as its own PNG with transparency preserved.
5. Name the files clearly and predictably:
   - wordmark.png
   - title-flavor-wheels.png, title-cheat-sheets.png, title-tasting-tools.png
   - btn-search.png, btn-random.png, btn-cheat-sheet.png, btn-journal.png, btn-challenges.png, btn-quest.png, btn-tip.png
6. Show me a labeled preview/contact-sheet of every cut-out so I can confirm the slicing is correct BEFORE finalizing. If any element got split or merged wrong, adjust the grouping (I'll tell you which) and re-run.
7. When the cuts look right, package all the individual transparent PNGs into a single ZIP I can download. Also tell me each image's pixel dimensions.

Important details:
- Keep every output strictly transparent (no white halo around edges). If you see white fringing, tighten the near-white threshold or erode the mask by 1px.
- Don't upscale; keep native resolution.
- If the layout is a clean grid you can also offer a fixed-grid slice as a fallback, but prefer the auto-detect approach since spacing may be uneven.
- Verify each saved PNG actually has non-zero transparent pixels and a sensible bounding box (not the whole canvas).
```

### After you get the ZIP
Bring the sliced PNGs (or the ZIP) **back to this LearnSomm chat** and tell me which file is which. I'll wire them into the dashboard: the wordmark into the top-left logo slot, the three title logos onto their cards, and the seven button images onto the Search / Random / Cheat Sheet / Journal / Challenges / Quest / Tip the Somm buttons — base64-embedded so the file stays self-contained, same as the rail icons.

A couple of practical tips:
- If a button image comes back with its label baked in, that's fine — I'll drop the current text label and use the image alone.
- If you'd rather the labels be live text (so they can change/translate later), ask the other Claude to slice **icon-only** versions too (no text), and I'll pair each icon with the existing text button.
- Transparent PNGs work on both the light ("Paper") and dark ("Cellar") themes, but very dark icons can disappear on the dark theme. If you want them to work on both, ask Gemini for the icons in a **mid-gold tone** rather than near-black, or request a light-on-dark second set the way we keep `icons-light/` and `icons-dark/`.
