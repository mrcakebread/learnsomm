# LearnSomm — Gemini Prompts (SVG/CSS version)

Gemini won't export image files or sliced PNG assets — but it **will** write inline SVG markup and CSS. That's better for your single-file HTML app anyway. The trick that replaces "light + dark versions": draw every icon with **`stroke="currentColor"`** for the main line and **`var(--ls-gold, #b5862a)`** for the metallic accent. Then one SVG inherits the surrounding text color, so it themes itself in Daylight and Cellar with zero duplicate files.

Work **one section at a time** (Gemini stays consistent that way, and it asked you to). Paste **PROMPT 0** first, then go section by section.

---

## PROMPT 0 — Setup (paste this first, on its own)

> I'm building a single-file HTML app called **LearnSomm**, a sommelier-grade beverage study tool. I need you to generate **inline SVG markup** (and CSS where noted) — not image files. Work in batches I give you; keep the whole set visually consistent.
>
> **Rules for every icon you produce:**
> - Output raw `<svg>` markup I can paste into HTML. Use `viewBox="0 0 24 24"`, no width/height attributes (I'll size with CSS).
> - **Main line:** `stroke="currentColor"`, `fill="none"`, `stroke-width="1.6"`, `stroke-linecap="round"`, `stroke-linejoin="round"`. Using `currentColor` lets one icon theme itself light/dark — do this, don't hardcode the line color.
> - **Metallic accent only where it adds craft:** `fill="var(--ls-gold, #b5862a)"` or `stroke="var(--ls-gold, #b5862a)"`.
> - Style: clean editorial line-art with a hint of depth — confident single-weight strokes, generous padding, soft corners. Restrained and premium (Michelin wine list, not gamer UI). No drop shadows, no heavy gradients, no glassmorphism, not cartoonish.
> - Name each one in a comment, e.g. `<!-- icon: nav-search -->`.
>
> **Brand context (for your judgment, not for hardcoding):** parchment/garnet/antique-gold world; primary accent garnet `#6E1B2E`, metallic `#b5862a`; typography is IBM Plex (Serif/Sans/Mono). Voice: sleek, restrained, fine-dining.
>
> Reply "ready" and I'll send the first batch.

---

## PROMPT 1 — Top nav icons (start here; Gemini offered this)

> Generate inline SVG icons (per the rules above) for these nav buttons, as one consistent set. One `<svg>` each, with a name comment:
> Search · Random · Cheat Sheet · Journal · **Build a Challenge** (work in a tiny solo/pair/group figure motif) · Quest · Pairing mode · Design · Arcade · **Lightning** (give me two: a calm state and a "lit/glowing" state) · Format · **Focus mode** (a distinct expand-to-fullscreen glyph, meant to render larger than the others) · My Journey & Preferences · Sign in / Log out (two states) · **Theme switch** (make it ours — a wine glass filling with light vs. a candlelit cellar, two states) · **Tree/Collapse** (a custom branching-tree glyph that folds closed — our Learning-Quest tree, not a hamburger).

## PROMPT 2 — Subject icons

> Same rules. Generate: a **Tasting Exam** icon (a checkmarked grid / clipboard-meets-glass), and a **Sparkling Aroma** icon (rising bubbles + aroma wisps — distinct from a plain flute). Then give me a consistency note: the stroke weight and padding you'd use so these sit in a family with simple subject icons (wine, beer, coffee, tea, spirits, etc.).

## PROMPT 3 — The wheel hub (middle circle)

> Generate an SVG **center hub / medallion** for a tasting wheel — the pressable anchor at the center of a colorful segmented wheel. Make it feel like a **wax seal / tastevin / bottle-cap**: subtle embossed rim, antique-gold edge, a debossed center that can hold a small mark or a per-subject glyph. It must read clearly over both light parchment and a dark cellar background. Give me the neutral (LearnSomm) version plus a note on how to swap in a per-subject glyph. Use `currentColor` + `var(--ls-gold)`.

## PROMPT 4 — Wordmarks (SVG text lockups)

> Generate SVG **wordmark lockups** using IBM Plex Serif: **LearnSomm** ("Learn" in `currentColor`, "Somm" in `var(--ls-garnet, #6E1B2E)`) and **LearnComida** ("Comida" in garnet). No ".com". Include an optional small logomark (a simplified tasting-wheel hub) to sit left of the word. Also a square **logomark-only** version for a favicon/app icon.

## PROMPT 5 — Custom frame/panel headers (SVG + CSS)

> For each of these panels, give me an SVG header vignette + the CSS for a rounded card frame, themeable via `currentColor`/CSS vars: **Tip the Somm** (decanter/generosity motif), **Cheat Sheet** (reference-card), **Study Journal** (clean notebook), **Tasting Note** (note card). Keep them restrained.

## PROMPT 6 — Group & challenge figures

> Generate three consistent SVG figure-icons: **Solo**, **With a Friend**, **Group/Family**, plus an **Affiliate/Corporate/Multi-unit** icon (a multi-seat / building motif). Warm and human, same line style.

## PROMPT 7 — Backgrounds & the wheel-of-wheels (CSS + SVG)

> Give me: (a) a subtle CSS **parchment texture** for light and a **cellar texture** for dark (pure CSS or a tiny tiling SVG, must stay quiet/non-noisy); (b) a very faint **tasting-wheel watermark** SVG for an empty stage; (c) an SVG concept for the **welcome "wheel of wheels"** hero — an inviting tasting wheel that signals "tap to begin."

---

### When Gemini returns each batch
- Check it uses `currentColor` (not a hardcoded near-black) — that's what makes light/dark free.
- Confirm `viewBox="0 0 24 24"` and no fixed width/height.
- Drop them into the app and tint with CSS (`color: var(--ink)` for line, define `--ls-gold`, `--ls-garnet`).
- If a batch drifts in style, paste one earlier good icon back in and say "match this weight and padding."
