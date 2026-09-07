---
name: HCIA-AI Self-Paced Course
description: Nineteen AI/ML lessons signposted like a building — one signal red, ink, air, and hairline rules.
colors:
  plate: "#f4f4f2"
  sheet: "#ffffff"
  ink: "#111111"
  ink-2: "#5c5c58"
  ink-3: "#8f8f8a"
  rule: "#d5d5d0"
  rule-strong: "#111111"
  signal: "#e5341f"
  signal-ink: "#c62b13"
  signal-tint: "#fdeae6"
  on-signal: "#ffffff"
  go: "#0f7b3d"
  go-tint: "#e4f4ea"
  stop: "#c9281a"
  stop-tint: "#fceae7"
  blue: "#1b56c4"
  blue-deep: "#143f92"
  blue-tint: "#e7edfa"
  blue-soft: "#9db4e6"
  purple: "#7a3ea8"
  purple-deep: "#5a2d7d"
  purple-tint: "#f2e9f8"
  purple-soft: "#c19ad9"
  ochre: "#8a5200"
  ochre-deep: "#654000"
  ochre-tint: "#f7eede"
  ochre-soft: "#d8b478"
  line: "#55554f"
  line-soft: "#b9b9b2"
  fill-0: "#f7f7f5"
  fill-1: "#eaeae6"
  fill-2: "#d9d9d3"
  fill-3: "#bcbcb5"
  on-fill: "#111111"
  invert-bg: "#111111"
  invert-ink: "#f4f4f2"
  invert-ink-2: "#a8a8a2"
  invert-rule: "#3a3a36"
  invert-signal: "#ff6a4d"
typography:
  numeral:
    fontFamily: "Barlow Condensed, Barlow, Arial Narrow, -apple-system, sans-serif"
    fontSize: "clamp(3.6rem, 11vw, 6rem)"
    fontWeight: 700
    lineHeight: 0.82
    letterSpacing: "-0.035em"
  display:
    fontFamily: "Barlow Condensed, Barlow, Arial Narrow, -apple-system, sans-serif"
    fontSize: "clamp(2.3rem, 7vw, 3.6rem)"
    fontWeight: 700
    lineHeight: 0.98
    letterSpacing: "-0.028em"
  headline:
    fontFamily: "Barlow Condensed, Barlow, Arial Narrow, -apple-system, sans-serif"
    fontSize: "clamp(1.9rem, 5.5vw, 2.7rem)"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Barlow Condensed, Barlow, Arial Narrow, -apple-system, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.012em"
  subtitle:
    fontFamily: "Barlow Condensed, Barlow, Arial Narrow, -apple-system, sans-serif"
    fontSize: "1.1rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.005em"
  body:
    fontFamily: "Barlow, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "0.001em"
  label:
    fontFamily: "Barlow Condensed, Barlow, Arial Narrow, -apple-system, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "0.16em"
  action:
    fontFamily: "Barlow Condensed, Barlow, Arial Narrow, -apple-system, sans-serif"
    fontSize: "0.88rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "0.1em"
  code:
    fontFamily: "JetBrains Mono, ui-monospace, Menlo, Consolas, monospace"
    fontSize: "0.82em"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "normal"
rounded:
  plate: "2px"
  focus: "1px"
spacing:
  s1: "0.25rem"
  s2: "0.5rem"
  s3: "0.75rem"
  s4: "1rem"
  s5: "1.5rem"
  s6: "2rem"
  s7: "3rem"
  s8: "4.5rem"
components:
  button-action:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.on-signal}"
    typography: "{typography.action}"
    rounded: "{rounded.plate}"
    padding: "0.62rem 1.15rem"
  button-action-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.plate}"
  callout:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink}"
    rounded: "{rounded.plate}"
    padding: "0 1rem 0.95rem"
  callout-exam:
    backgroundColor: "{colors.invert-bg}"
    textColor: "{colors.invert-ink}"
    rounded: "{rounded.plate}"
    padding: "0 1rem 0.95rem"
  quiz-option:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    padding: "0.8rem 2.4rem 0.8rem 1.1rem"
  quiz-option-correct:
    backgroundColor: "{colors.go-tint}"
    textColor: "{colors.go}"
  quiz-option-wrong:
    backgroundColor: "{colors.stop-tint}"
    textColor: "{colors.stop}"
  diagram:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink}"
    rounded: "{rounded.plate}"
    padding: "1.5rem 1rem"
    width: "44rem"
  nav-rail:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink-2}"
    width: "260px"
  nav-link-active:
    backgroundColor: "{colors.fill-0}"
    textColor: "{colors.ink}"
    padding: "0.34rem 1rem"
---

# Design System: HCIA-AI Self-Paced Course

## Overview

**Creative North Star: "The Wayfinding Board"**

The world is technical-exhibition and transit wayfinding signage. Nineteen lessons are treated as a building to be signposted: numbered, spaced, and impossible to get lost in. Every surface behaves like a sign face — a flat plate on a wall, lettered in condensed type, ruled with hairlines, and carrying exactly one colour that means *here* or *go*. Nothing decorates; everything directs. A reader should be able to answer "where am I in the nineteen?" from any scroll position without reading a word of prose.

Density is deliberately low. The page is air, ink, and rules: a `#f4f4f2` plate ground with `#ffffff` sign faces raised on it, near-black `#111111` ink, and a single signal red `#e5341f` that appears only where position or action lives. Hierarchy is built from weight, case, and horizontal rules rather than a long size ramp — a 2px black rule above a section heading does more ranking work than any font-size step could. Numbers are monumental: the lesson numeral is set at `clamp(3.6rem, 11vw, 6rem)` in Barlow Condensed as the page's own mark, the way a platform number is the largest thing on a station sign.

The build refuses two things the category defaults to: the course-site card grid, and the hero-with-eyebrow. The homepage is a directory board of ruled rows, not cards. And a small label stacked above a heading is banned outright — the chapter a reader is in is answered by the position rule, as wayfinding, not by a decorative kicker. This is the build's thesis, not a stylistic preference.

Light and dark are two separately authored palettes with a pre-paint boot script and a remembered `localStorage` choice, defaulting to the OS preference — not an inverted or filtered light theme.

**Key Characteristics:**
- One signal hue, reserved for position and action; everything else is ink, rule, and air.
- Rank from weight, case, and rule — not a six-step size ramp.
- Every state carries a drawn mark, never a hue alone.
- Square-cornered sign plates (2px) — border *or* fill, never both plus a shadow.
- Monumental tabular numerals in Barlow Condensed as the primary wayfinding device.
- Two authored themes, remembered; the design survives print and reduced motion.

## Colors

A near-monochrome signage palette — plate, ink, and hairline rule — pierced by exactly one red.

### Primary
- **Signal Red** (`#e5341f` light / `#ff6a4d` dark): The one colour. It marks *position* (the here-tick on the progress rule, the active rail link's 3px left border and its numeral) and *action* (the start button, the quiz Next button, focus rings, text selection, caret). Never used for emphasis, decoration, categories, or chapter identity.
- **Signal Ink** (`#c62b13` light / `#ff8168` dark): The body-size variant, at 5.1:1 on the plate ground. Every inline link and every accent word set at body size uses this, because Signal Red at 3.9:1 is legible only at large sizes and on plates. Underlines are drawn at 40% signal, going full on hover.
- **Signal Tint** (`#fdeae6` light / `#38201c` dark): The palest wash of the signal, reserved for a filled signal ground under signal text. Rare.

### Secondary
- **Go Green** (`#0f7b3d` / `#4ec97e`) with **Go Tint** (`#e4f4ea` / `#16311f`): the affirmative status pair. Correct quiz options; affirmative cells inside diagrams.
- **Stop Red** (`#c9281a` / `#ff6b5c`) with **Stop Tint** (`#fceae7` / `#38201c`): the negative status pair. Incorrect quiz options; negative cells inside diagrams. Distinct from the signal — status is a verdict, the signal is a direction.

### Tertiary
Three diagram categoricals, each with a deep / tint / soft companion:
- **Wayfinding Blue** (`#1b56c4` / `#7aa5ff`) — deep `#143f92`, tint `#e7edfa`, soft `#9db4e6`.
- **Wayfinding Purple** (`#7a3ea8` / `#c093e8`) — deep `#5a2d7d`, tint `#f2e9f8`, soft `#c19ad9`.
- **Wayfinding Ochre** (`#8a5200` / `#e0a33c`) — deep `#654000`, tint `#f7eede`, soft `#d8b478`.

These exist to tell unlike things apart *inside a single drawing* — two classes in a scatter plot, two branches of a tree, a gate versus a state. That is the whole job.

### Neutral
- **Plate** (`#f4f4f2` / `#131316`): the page ground — the wall the signs hang on.
- **Sheet** (`#ffffff` / `#1c1c20`): a raised sign face. Callouts, quizzes, diagrams, and the rail sit on it.
- **Ink** (`#111111` / `#f2f2ef`): all primary text, headings, and strong rules.
- **Ink 2** (`#5c5c58` / `#a3a39d`, 6.1:1): secondary text — subtitles, captions, feedback prose, rail links at rest, list markers.
- **Ink 3** (`#8f8f8a` / `#6e6e77`, 2.95:1): rules and hairline strokes only.
- **Rule** (`#d5d5d0` / `#34343a`): the hairline. Every 1px divider in the system.
- **Rule Strong** (`#111111` / `#f2f2ef`): the 2px structural rule above `h2`, under the board head and chapter headings, and above the lesson nav.
- **Diagram ink** — **Line** (`#55554f` / `#8f8f99`) primary stroke, **Line Soft** (`#b9b9b2` / `#4a4a54`) secondary stroke, and a four-step neutral fill ramp **Fill 0–3** (`#f7f7f5`, `#eaeae6`, `#d9d9d3`, `#bcbcb5`) with **On Fill** (`#111111`) for text on them.
- **Inverted plate** — **Invert BG** (`#111111` / `#f2f2ef`), **Invert Ink** (`#f4f4f2` / `#131316`), **Invert Ink 2** (`#a8a8a2` / `#55555c`), **Invert Rule** (`#3a3a36` / `#c9c9c2`), **Invert Signal** (`#ff6a4d` / `#c62b13`): the highest-authority sign, used by the Exam Alert callout.

### Named Rules

**The One Signal Rule.** `--signal` marks position and action, and nothing else. Not emphasis, not category, not chapter identity, not decoration. If a red thing on the page is not "you are here" or "press this", it is a defect. At body size, use `--signal-ink` (5.1:1); `--signal` is for plates, rules, marks, and large type only.

**The Rules-Only Rule.** `--ink-3` is a rule colour. It is never text and never a mark — at 2.95:1 it fails contrast for both. This was a real accessibility defect caught in review; the token carries the prohibition in its own comment so it does not recur.

**The Diagram-Interior Rule.** `--blue`, `--purple` and `--ochre` (and their deep/tint/soft ramps) are categorical fills for the inside of a diagram: they separate unlike items within one drawing. They are never chapter identity, never a route or wayfinding mark, and never appear on prose, chrome, links, buttons, or the rail. A drawing that needs no categories uses the neutral `--fill-0…3` ramp instead — that is the default, and most diagrams in the build use it.

**The Two-Palette Rule.** Dark is authored, not derived. Every token is redeclared under `:root[data-theme="dark"]` and again under `@media (prefers-color-scheme: dark)` guarded by `:root:not([data-theme="light"])`. Never introduce a colour that exists in only one theme, and never reach for a filter or an opacity trick to make one theme cover both.

## Typography

**Display Font:** Barlow Condensed (with Barlow, Arial Narrow, and system sans fallbacks)
**Body Font:** Barlow (with the full `-apple-system` / Segoe UI / Roboto stack)
**Label/Mono Font:** JetBrains Mono (with `ui-monospace`, Menlo, Consolas)

All three load from the Google Fonts CDN with `preconnect` and `display=swap`; the fallback stacks are complete, so the pages stay legible offline in system lettering.

**Character:** Barlow is a grotesk with public-signage lineage — it was drawn for the low-contrast, rounded-rectangular vocabulary of transport and municipal signs, which is exactly why it is here. Its condensed cut does the sign-plate lettering: headings, labels, buttons, rail entries, and the monumental numerals. The regular cut does the reading. `font-variant-numeric: tabular-nums` is set on every element that shows a number, so lesson numerals, counts, and positions align in a column like a departures board.

### Hierarchy
- **Numeral** (Barlow Condensed, 700, `clamp(3.6rem, 11vw, 6rem)`, line-height 0.82, tracking −0.035em): the lesson number at the top of every lesson. Block-level, ink-coloured, with an optional `<sup>` in signal at 0.2em. This is the page's own mark, never a badge chip.
- **Display** (Barlow Condensed, 700, `clamp(2.3rem, 7vw, 3.6rem)`, line-height 0.98, tracking −0.028em): the homepage board head only.
- **Headline** (Barlow Condensed, 600, `clamp(1.9rem, 5.5vw, 2.7rem)`, line-height 1.08, tracking −0.02em, `text-wrap: balance`): the lesson `h1`.
- **Title** (Barlow Condensed, 600, 1.5rem, line-height 1.15, tracking −0.012em): section `h2`. Always preceded by a 2px `--rule-strong` top border and `0.75rem` of padding; separated from the previous section by `4.5rem`.
- **Subtitle** (Barlow Condensed, 600, 1.1rem, line-height 1.4): `h3`, the sub-section step.
- **Body** (Barlow, 400, 17px, line-height 1.7, tracking 0.001em): all reading text. Measure is held by the `34rem` column, ~70 characters. Drops to 16px below 640px.
- **Label** (Barlow Condensed, 600, 0.72rem, tracking 0.16em, uppercase, `--ink-2`): the system's one category voice — callout titles, quiz titles, chapter headings, rail group labels, the source label.
- **Action** (Barlow Condensed, 600, 0.88rem, tracking 0.1em, uppercase): buttons and lesson-nav links.
- **Code** (JetBrains Mono, 500, 0.82em): inline code, on `--fill-0` with a 1px `--rule` border and a 2px radius.

### Named Rules

**The Rank-From-Weight Rule.** Hierarchy comes from weight, case, and rule — not from a six-step size ramp. The gap between a section heading (1.5rem) and body (17px) is small on purpose; what separates them is the 2px black rule above the heading and the 4.5rem of air before it. When a new level of rank is needed, reach for a rule or a case change before reaching for a size.

**The Label-Voice Rule.** The uppercase, letter-spaced condensed label carries *short nouns only* — "Definition", "Analogy", "Exam Alert", "Ch 02 — Machine Learning". Never a clause, never a sentence. `.diagram-caption` was pulled out of this voice mid-review for exactly that reason: captions are clauses, so they are sentence case, in the text face, at 0.86rem in `--ink-2`, capped at 52ch and centred.

**The No-Eyebrow Rule.** A small label stacked above a heading is banned. No kickers, no eyebrows, no category chip over a title. The chapter a reader is in is read off the position rule (`Ch 02 · Machine Learning · 5 / 19`), which is wayfinding rather than decoration. If a surface seems to need an eyebrow, it needs a rule or a position indicator instead.

## Layout

A fixed left directory rail plus a single, left-anchored reading column. Nothing is centred in leftover space.

- **The rail** (`--rail-w: 260px`) is fixed full-height on `--sheet` with a 1px right rule, and holds a head (home link), a scrolling body of five chapter groups covering all nineteen lessons, and a foot (position count + theme control). It auto-scrolls the active entry to the middle on load. `body.has-sidebar` offsets the page by `260px + 3rem`.
- **The column** is `--board: 34rem` — the sign face, about 70 characters of Barlow at 17px. Prose, headings, rules, callouts, and quizzes all share it. It is anchored to the rail (`margin-left: 0; margin-right: auto`), not centred, so the open space always falls on the same side.
- **Breakout** is one exception: `.diagram` is `--wide: 44rem` and pulls right into that open margin via a negative right margin (`calc(var(--board) - var(--wide))`). It is written as a single `margin` shorthand so no later rule half-resets it.
- **Body padding** is `3rem 1.5rem 4.5rem`, dropping to `1.5rem 1rem 3rem` below 640px.
- **Rhythm** is an eight-step scale: `0.25 / 0.5 / 0.75 / 1 / 1.5 / 2 / 3 / 4.5rem`. Section separation uses the top of that scale (`4.5rem` above an `h2`); component internals use the bottom.
- **`--measure: 57ch`** is a secondary cap, applied only to the source-citation block at the foot of a lesson. The `34rem` board is the measure that governs everything else.

**Responsive.** Three breakpoints, each doing one job:
- **≤1200px** — the board has no room to break out; diagrams snap to `100%` and sit flush.
- **≤960px** — the rail becomes an off-canvas drawer (`min(85vw, 300px)`) behind a hamburger toggle with a backdrop, Escape to close, and body scroll lock; the column re-centres.
- **≤640px** — body type drops to 16px, diagram strips authored with a desktop `min-width` are overridden down to phone scale, the lesson-nav stacks, and the homepage row grid narrows.

**Motion.** One easing token, `--ease: cubic-bezier(0.16, 1, 0.3, 1)`, used for every transition (0.13–0.26s). The only entrance animation in the system is the position rule's ticks, which scale up in sequence at 22ms stagger. A `prefers-reduced-motion: reduce` block flattens all animation, transition, and scroll behaviour.

**Print.** The sign becomes a sheet: rail, toggles, and the position rule are hidden, the ground goes white, type drops to 11pt, the inverted Exam Alert flips to a 2px black-bordered white plate, and callouts, quizzes and diagrams get `break-inside: avoid`.

### Named Rules

**The One Right Edge Rule.** Every text element in the reading column ends at the same right edge (`34rem`). Diagrams are the only thing allowed past it, and only to `44rem`, only to the right, and only above 1200px. Nothing else breaks the line.

**The Anchored Column Rule.** The reading column is anchored to the rail that indexes it, never centred in the leftover space. The rail, the column, and the open margin are always in the same order.

## Elevation & Depth

The system is flat. There is no elevation scale and no ambient shadow vocabulary. Depth is expressed by *ground versus sheet* — a `#f4f4f2` plate ground with `#ffffff` sign faces on it — plus 1px `--rule` hairlines and a four-step neutral fill ramp inside drawings. A raised surface reads as raised because it is lighter than the wall and outlined, not because it floats.

Exactly one shadow exists in the entire stylesheet: `6px 0 28px rgba(0, 0, 0, 0.18)` on the mobile rail when it is open as a drawer. It is a modal-layer affordance, not a surface style, and it is the only place a shadow may be used.

### Named Rules

**The Flat Plate Rule.** A surface gets a border *or* a fill, never both plus a shadow. Sign plates are printed, not lifted. If a surface needs to feel more important, invert it — as the Exam Alert does — rather than lifting it.

## Shapes

Square-cornered. `--r: 2px` is the only radius in the system, and it is a manufacturing tolerance rather than a curve: a sign plate has a cut edge, not a rounded one. This deliberately departs from the usual 12–16px card radius; a plate that reads as a soft card has left the world.

The form language otherwise is rules and rectangles:
- **1px `--rule` hairlines** separate everything: callout title bars, quiz options, definition rows, rail sections, list dividers.
- **2px `--rule-strong` rules** are structural: above every `h2`, under the board head and each chapter heading, above the lesson nav.
- **A 3px left border** on the active rail entry is the one vertical rule in the system, and it is the signal.
- **Focus** is a 2px `--signal` outline at 3px offset with a 1px radius, applied via `:focus-visible` only.
- **Marks are drawn**, never glyphs or emoji: every icon is an inline SVG or a `data:` URI applied as a CSS `mask` over `currentColor`, at a single 2–2.4px stroke weight with round caps and joins. The set is small — info circle, nested squares, warning triangle, check, cross, arrow, home, sun, moon.
- **Scrollbars** are themed to the world: an 11px track with a `--rule` thumb inset by a 3px `--plate` border.

## Components

### Buttons
- **Shape:** square plate (2px radius), 1px border in the same colour as the fill.
- **Action (`.btn`, `.btn-start`, `.quiz-next`):** signal fill with `--on-signal` text, condensed uppercase at 0.88rem / 0.1em tracking, `0.62rem 1.15rem` padding, inline-flex with a 0.5rem gap for its drawn arrow.
- **Hover / Active:** hover flips the plate to ink (`--ink` fill and border, `--plate` text) — a colour *swap*, not a tint; active nudges 1px down. Focus uses the global signal outline.
- There is no secondary or ghost button. Non-primary navigation is a lesson-nav link, not a lesser button.

### Callouts
- **Character:** a sign plate with a lettered title bar.
- **Structure:** `--sheet` fill, 1px `--rule` border, 2px radius, `0 1rem 0.95rem` padding on the plate itself so bare text nodes are inset; the title bar bleeds back to the edges with a negative margin and sits on `--fill-0` above a 1px rule.
- **Title:** the label voice (condensed, 0.72rem, 0.16em, uppercase) with a 15px drawn mark masked from `currentColor` on its left.
- **Variants:** `tip` (info circle, "Definition"), `analogy` (nested squares), and `exam` — the highest-authority sign, which inverts to the `--invert-bg` plate with `--invert-ink` text, an `--invert-signal` title, a transparent title bar over an `--invert-rule` divider, and re-tinted code and list markers.

### Quiz
- **Character:** a check plate. Every state carries a mark.
- **Shape:** `--sheet` fill, 1px `--rule` border, 2px radius, zero padding — the title bar, question, options and feedback each own their insets.
- **Options:** full-width borderless buttons in a grid, hairline-divided, `0.8rem 2.4rem 0.8rem 1.1rem` padding (the right inset reserves a fixed mark cell). Hover fills `--fill-0`; all options disable on answer.
- **States:** `correct` takes the go tint, go text, weight 500, and a drawn ✓ mask in the reserved cell. `wrong` takes the stop tint, stop text, a drawn ✕ mask, *and* a line-through at 55% stop. State is never carried by colour alone.
- **Feedback:** 0.94rem, and deliberately set in `--ink` rather than a status colour — the verdict is already drawn on the option, so the feedback only has to explain why. Its job is to say why the wrong answer is wrong.
- **Next:** a signal action button, hidden until answered.

### Diagram
- **Character:** a technical drawing in ink, in its own framed panel.
- **Shape:** `--sheet` fill, 1px `--rule` border, 2px radius, `1.5rem 1rem` padding, centred content at 0.88rem.
- **Width:** `44rem`, breaking right out of the `34rem` column above 1200px; `100%` below it.
- **Ink:** strokes use `--line` / `--line-soft`; areas use the neutral `--fill-0…3` ramp with `--on-fill` text. Categorical hues appear only when a drawing must separate unlike items. Connectors reuse the system's own arrow mark (`.conn`), inheriting the cell's colour.
- **Overflow:** an overflowing panel says so — a 1.75rem fade appears at the right edge, toggled by `nav.js` only when `scrollWidth` actually exceeds `clientWidth`, and a 2.75rem spacer keeps the fade off the content it advertises.
- **Caption:** sentence case, text face, 0.86rem `--ink-2`, max 52ch, centred.

### Position Rule (signature component)
The build's answer to "where am I in the nineteen?", and the reason no eyebrow is needed. A 20px-tall flex row of nineteen ticks with 3px gaps: past lessons are 6px `--ink-2`, future lessons 6px `--rule`, and the current lesson is a full-height 20px `--signal` tick. A trailing `::after` prints the chapter and position (`Ch 02 · Machine Learning · 5 / 19`) in the condensed label voice from a `data-position` attribute. It is built by `nav.js`, exposed as `role="img"` with an "Lesson N of 19" label, and its ticks scale in at 22ms stagger under `prefers-reduced-motion: no-preference`.

### Directory Rail (signature component)
Fixed 260px sign board on `--sheet`. Chapter groups are label-voice headings; each entry is a two-column grid (a 1.9rem condensed tabular numeral, then the title) at 0.875rem in `--ink-2` with a transparent 3px left border. Hover moves to `--ink` on `--fill-0`. The active entry takes the signal left border, a signal numeral, `--ink` text at weight 500, `--fill-0` ground, and `aria-current="page"`. The foot pairs the position count with a 30px theme toggle — a bordered square plate holding a sun/moon drawn mark, swapped by `data-theme` and remembered in `localStorage` under `hcia-theme`, with a pre-paint boot script in every page head so the board never flashes.

### Lesson Navigation
A flex row above a 2px `--rule-strong` rule at the foot of a lesson: previous on the left with a mirrored arrow mark, next pushed right with a forward arrow. Links are condensed 600 at 0.05em in `--ink` with a transparent 2px bottom border; hover moves the text to `--signal-ink` and lights the border in `--signal`. Stacks vertically below 640px.

### Directory Rows (homepage)
The homepage board is ruled rows, not cards. Each row is a three-column grid (a 3.1rem condensed numeral at 1.35rem/700 in `--ink-2`, the lesson name in the text face at 1.02rem/400, and a 16px arrow mark) on a hairline bottom rule. Hover fills `--fill-0`, turns the numeral and arrow signal, and slides the arrow 3px right. Chapter headings are label-voice, above a 2px `--rule-strong` rule, with a tabular count on the right.

### Definition Rows
A hairline-ruled list: a condensed 1.02rem `--ink` term, then `--ink-2` body at 0.97rem, each row divided by a 1px rule. Used where a lesson defines several terms in sequence — a plate would be too loud for a set of four.

## Do's and Don'ts

### Do:
- **Do** keep the signal for position and action only, and use `--signal-ink` (5.1:1) whenever the red is at body size.
- **Do** give every state a drawn mark as well as a colour — a ✓, a ✕, a strike-through, a tick height, a border.
- **Do** build rank with a 2px `--rule-strong` rule, a weight change, or uppercase condensed lettering before reaching for a bigger size.
- **Do** hold the `34rem` right edge for all prose, callouts, and quizzes; break out only a `.diagram`, only to `44rem`, only rightward, only above 1200px.
- **Do** draw icons as inline SVG or a masked `data:` URI at a 2–2.4px stroke weight, inheriting `currentColor`.
- **Do** author both themes when adding any colour: `:root`, `:root[data-theme="dark"]`, and the `prefers-color-scheme` block.
- **Do** set `font-variant-numeric: tabular-nums` on anything that shows a number.
- **Do** use the neutral `--fill-0…3` ramp for diagram areas by default; reach for a categorical hue only when a drawing must separate unlike items.
- **Do** keep the label voice to short nouns; anything with a verb in it is sentence-case body text.

### Don't:
- **Don't** put a label, kicker, or eyebrow above a heading. The position rule carries the chapter.
- **Don't** use `--ink-3` for text or for a mark. It is a rule colour at 2.95:1, and using it as either is an accessibility defect.
- **Don't** use `--blue`, `--purple`, or `--ochre` outside a diagram interior — not for chapter identity, not as a route mark, not on links, chrome, buttons, or the rail.
- **Don't** combine a border, a fill, and a shadow on one surface. Border or fill; the drawer shadow is the only shadow in the system.
- **Don't** soften the corners. `2px` is the radius; a 12–16px card radius leaves the world.
- **Don't** signal state with hue alone, and don't colour the quiz feedback prose — the drawn mark is already the verdict.
- **Don't** introduce an emoji or a glyph icon. Every mark in this system is drawn at one stroke weight.
- **Don't** centre the reading column or float it in the leftover space; it is anchored to the rail.
- **Don't** add a second accent, a gradient, or a tinted background band. One signal, one ground, one sheet.
