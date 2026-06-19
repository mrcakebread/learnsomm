# LearnSomm — Graphic Asset Brief for Gemini

**How to use this:** Paste the **House Style** section first so Gemini holds the look across every asset. Then give it assets one zone at a time (it stays more consistent in small batches than all at once). Ask for **light + dark** versions of everything, **transparent PNG** at **3× (e.g. a 48px icon delivered at 144px)**, plus **SVG where it can**. Keep a shared reference image open so each new batch matches the last.

---

## 0 · HOUSE STYLE (give this to Gemini before any asset)

> Design a cohesive icon and graphic set for **LearnSomm**, a sommelier-grade beverage & food study app. The mood is **sleek, editorial, and restrained — a Michelin wine list meets a clean modern study tool.** NOT flashy, NOT cartoonish, NOT gamer-RGB. Think pressed parchment, fine-dining menus, and quiet metallic accents.
>
> **Palette — Light ("Daylight"):** background parchment `#F4F2EA`, panels `#FBFAF4`, ink `#1A1714`, muted `#7c7263`, hairlines `#d8d3c4`. Primary accent is a deep wine **garnet `#6E1B2E`** with a brighter `#8a2538` and a deep `#56121f`; a restrained antique **gold `#b5862a`** as the only metallic.
> **Palette — Dark ("Cellar"):** background `#14100c`, panels `#1c1712`, ink `#f0e8da`, hairlines `#3a2f24`, accent a softened rose-garnet `#b5485e` / `#c75d72`, same antique gold.
> **Type:** IBM Plex Serif (display/titles), IBM Plex Sans (UI), IBM Plex Mono (small caps labels).
> **Icon language:** clean line-art with subtle weight and a hint of depth — confident single-weight strokes (~2px on a 48px grid), generous padding, soft 12–14px corner radii to match the app's rounded cards. Two-tone allowed (garnet line + gold accent). Avoid heavy gradients, drop shadows, glassmorphism, and literal photo-realism.
> **Deliverables for every asset:** transparent PNG at 3×, plus SVG if possible; a **Daylight** and a **Cellar** version; consistent stroke weight and corner radius across the whole set.

---

## 1 · LOGOS & WORDMARKS  *(drop the ".com" everywhere)*

| Asset | Notes |
|---|---|
| **LearnSomm wordmark** | "Learn" in ink, "Somm" in garnet (current split). Refined, editorial. A small **logomark** (a stylized tasting-wheel hub / wax-seal medallion) can sit left of the word. Deliver Daylight + Cellar. |
| **LearnComida wordmark** | Sister brand for food (EN/ES). Same construction, "Comida" in garnet. Should read as a family member of LearnSomm, not a clone. |
| **Logomark / app icon / favicon** | Standalone symbol from the wheel-hub motif (see §4). Square + circular crops. Works at 32px. |

---

## 2 · TOP NAV BAR BUTTONS  *(pill buttons; light + dark; icon + label)*

One coherent set, same stroke weight, ~22–24px icon inside a pill:
- **Search** (with its options/filter affordance)
- **Random**
- **Cheat Sheet**
- **Journal** (study/tasting journal)
- **Build a Challenge** *(renamed from "Challenges")* — include a **tiny solo / pair / group figure motif** worked into the icon
- **Quest** (the free Learning Quest)
- **Pairing mode**
- **Design** (design-your-wheel)
- **Arcade**
- **Lightning** — must read as "live energy"; design an **on-state that glows** (it lights up on the hour, see §9)
- **Format** (typography/formatting — sits top-center)
- **Focus mode** — **unique and larger** than the others; a "go fullscreen, clear the room" feel (recommend a distinct shape, e.g. an expand/frame glyph in a slightly larger pill)
- **My Journey & Preferences** — personal, warm; a small progress/laurel motif
- **Sign in / Log out** — two states of one button
- **Theme switch (Daylight ⇄ Cellar)** — **make it ours, not a generic sun/moon.** Suggest a **wine glass filling with light vs. a candlelit cellar**, or a decanter half-lit. Two-state.
- **Tree / Collapse** (left-rail expand/collapse) — a **custom branching-tree glyph** that folds closed; should feel like our Learning-Quest tree, not a hamburger.

---

## 3 · WHEEL SUBJECT ICONS (left rail)

- Full consistency pass on the existing subject icons so they read as one family.
- **NEW — Tasting Exam icon** (the blind-grid/exam tool): a clipboard-meets-glass or a checkmarked grid in garnet/gold.
- **RENAME — "Sparkling" → "Sparkling Aroma"** and give it its **own unique icon** (distinct from the plain sparkling/flute icon — lean into *aroma*: rising bubbles + aroma wisps).
- Each subject keeps its category color accent.

---

## 4 · THE WHEEL ITSELF

- **Wheel-of-wheels (load/welcome screen):** the first thing on open. Make it **graphical and inviting** — a hero tasting wheel, softly spinning-ready, that signals "tap to begin." Sleek, not busy.
- **Middle circle / hub — design guidance for Gemini:**
  > Design the **center hub** of a tasting wheel as a small **medallion / wax-seal / coaster** — the tactile anchor you press to spin. It should feel pressable and premium: a subtle embossed rim, the LearnSomm logomark or the current subject's mark debossed in the center, antique-gold edge on parchment (Daylight) / on espresso (Cellar). It must read clearly sitting at the center of a colorful segmented wheel. Make it **different and better than a plain circle** — give it weight and craft, like the cap of a good bottle or a sommelier's tastevin. Provide a neutral version (LearnSomm mark) and note it should accept a per-subject glyph.
- **Current-wheel title treatment:** replaces the temporary emoji + text at top. A clean **IBM Plex Serif title lockup** (e.g. *Gin*) with a small subject glyph — an elegant nameplate, light + dark.
- **"Click / Press to Spin" hint:** a **faint, small** label that sits at the **top of the wheel** (at the pointer). Understated — it's a whisper, not a banner. (Functional placement handled in code; Gemini just provides the styled text treatment / optional little arrow-to-pointer mark.)

---

## 5 · CHALLENGE & GROUP GRAPHICS

- **Solo / With a Friend / Group-Family** — three **graphic buttons** (figures), warm and human, same family. (These also appear as the **tiny solo/pair/group figures** inside the Build-a-Challenge icon.)
- **Affiliate / Corporate / Multi-unit link** — a distinct graphic (a building / multi-seat motif) for the "bigger than 15 people" next-step link.

---

## 6 · CUSTOM FRAMES / PANELS

Custom-illustrated container art (header + frame), light + dark:
- **Tip the Somm** — warm, generous, "pour a little back into the bar." A bartender/decanter vignette header.
- **Cheat Sheet** — a refined reference-card frame.
- **Study Journal** — a leather-and-parchment notebook feel, but clean.
- **Tasting Note** — a custom note card (the individual entry).

---

## 7 · FEATURE UI BLOCKS (icons + small header art)

- **Arcade hub** — playful but still on-brand (restrained).
- **Lightning Hour** — energetic, with the glow on-state (§9).
- **Build a Challenge** — see §2/§5.
- **Cheat Sheets** — see §6.
- **Search bar + options** — the field treatment and its filter/option controls.

---

## 8 · BACKGROUNDS (where appropriate)

- **Daylight:** a barely-there pressed-parchment texture (subtle, never noisy).
- **Cellar:** a deep, soft espresso/cellar texture.
- **Optional stage watermark:** a very faint tasting-wheel watermark behind the main stage so an empty stage still feels intentional.
- Keep all backgrounds quiet — the content and the wheels are the stars.

---

## 9 · NOTES THAT TOUCH CODE (not Gemini's job, but design should anticipate)

- **Lightning lights up every hour, on the hour** — the Lightning button needs an animated **glow on-state**; Gemini supplies the lit vs. unlit art.
- **"Click/Press to Spin"** faint hint at the wheel's top/pointer.
- **Theme switch** two states; **Sign in / Log out** two states; **Focus** on/off states.

---

## 10 · FILE NAMING (so the set drops straight in)

`{asset}-{variant}@3x.png` and `.svg`, e.g.
`nav-search-light@3x.png`, `nav-search-dark@3x.png`, `logo-learnsomm-light.svg`, `wheel-hub-neutral-dark.png`, `icon-sparkling-aroma-light.svg`, `icon-tasting-exam-light.svg`, `frame-tip-the-somm-dark.png`.

---

*Brand foundation summary for quick reference — Palette: parchment `#F4F2EA` / garnet `#6E1B2E` / antique gold `#b5862a`; Cellar dark `#14100c` / rose-garnet `#b5485e`. Type: IBM Plex Serif + Sans + Mono. Voice: sleek, editorial, fine-dining restraint.*
