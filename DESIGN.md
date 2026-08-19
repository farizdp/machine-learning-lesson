---
name: HCIA-AI Self-Paced Course
description: A minimalist field-guide for learning AI/ML — calm teal accents, docs-style sidebar, one concept per screen.
colors:
  muted-teal: "#3b7a77"
  muted-teal-deep: "#2c5e5c"
  muted-teal-mist: "#e4f0ef"
  paper: "#f7f7f6"
  surface: "#ffffff"
  hairline: "#e5e4e0"
  ink: "#2a2a28"
  ink-muted: "#6c6c66"
  code-surface: "#f3f3f2"
  amber: "#966010"
  amber-mist: "#fef3c7"
  moss: "#1a6b3f"
  moss-mist: "#d8f3e5"
  clay: "#c12929"
  clay-mist: "#fde8e8"
  slate: "#3d4f7b"
  slate-deep: "#2c3b5e"
  slate-mist: "#e4e8f0"
  plum: "#7b3d64"
  plum-deep: "#5e2c4c"
  plum-mist: "#f0e4ec"
  olive: "#526d36"
  olive-deep: "#3d5327"
  olive-mist: "#e6edde"
typography:
  display:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "2.1rem"
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: "normal"
  headline:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "2rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "normal"
  title:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "1.3rem"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "normal"
  body:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.8
    letterSpacing: "normal"
  label:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "0.08em"
  mono:
    fontFamily: "'Menlo', 'Monaco', 'Courier New', monospace"
    fontSize: "0.85em"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
rounded:
  sm: "3px"
  md: "5px"
  lg: "6px"
  xl: "8px"
spacing:
  xs: "0.3rem"
  sm: "0.5rem"
  md: "0.75rem"
  base: "1rem"
  lg: "1.5rem"
  xl: "2rem"
  2xl: "2.5rem"
components:
  button-primary:
    backgroundColor: "{colors.muted-teal}"
    textColor: "#ffffff"
    rounded: "{rounded.md}"
    padding: "0.6rem 1.4rem"
  button-primary-hover:
    backgroundColor: "{colors.muted-teal-deep}"
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    padding: "0.75rem 1rem"
  callout-tip:
    backgroundColor: "{colors.muted-teal-mist}"
    textColor: "{colors.muted-teal-deep}"
    rounded: "0"
    padding: "1rem 1.2rem"
  callout-exam:
    backgroundColor: "{colors.amber-mist}"
    textColor: "{colors.amber}"
    rounded: "0"
    padding: "1rem 1.2rem"
  nav-link-active:
    backgroundColor: "{colors.muted-teal-mist}"
    textColor: "{colors.muted-teal}"
    rounded: "0"
    padding: "0.32rem 1rem 0.32rem 1.1rem"
---

# Design System: HCIA-AI Self-Paced Course

## Overview

**Creative North Star: "The Field Guide"**

This is a trusted reference you consult one entry at a time, not a marketing surface competing for attention. Every lesson opens the same way — a numbered badge, an uppercase label, a short title — and the visual language stays out of the way of the concept being taught. Density stays low: one idea per screen, generous line-height (1.8 body), a content column capped at 700px so paragraphs never sprawl past a comfortable reading measure.

The palette is warm and approachable despite its restraint: a single muted teal accent does almost all the expressive work (links, active states, the h2 rail, the primary button), set against warm off-white paper rather than clinical white-and-black. Nothing in the system reaches for drama — no heavy shadows, no saturated color blocks, no display serif. The system earns trust through consistency (the same left-border-rail pattern marks emphasis everywhere: headings, callouts, active nav links) rather than through visual flourish.

**Key Characteristics:**
- Docs-style fixed left sidebar (252px) that collapses off-canvas below 900px, replaced by a hamburger toggle
- A single accent color (muted teal) carrying every interactive and emphasis signal
- Left-border "rail" as the recurring emphasis device — on h2, callouts, and the active nav link
- Uppercase, letter-spaced micro-labels (eyebrows, chapter headings, quiz titles, nav group labels) as the system's one typographic flourish
- Flat by default; the only shadow in the system belongs to the mobile sidebar overlay

## Colors

Warm and restrained: one working accent, a warm-paper neutral scale, and three status colors reserved for quiz feedback and callouts.

### Primary
- **Muted Teal** (`#3b7a77`): links, the h2 accent rail, active nav-link state, the primary button, quiz-option hover border. This is the system's only expressive color — nearly every interactive or "this matters" signal runs through it.
- **Muted Teal Deep** (`#2c5e5c`): hover/active state for the primary button and active nav-link numerals; the pressed-in version of the accent.
- **Muted Teal Mist** (`#e4f0ef`): the accent's light tint — tip-callout background, active nav-link background, quiz-option hover background.

### Neutral
- **Paper** (`#f7f7f6`): page background. Warm off-white, never pure white — this is what keeps the system feeling calm rather than clinical.
- **Surface** (`#ffffff`): raised content — cards, the quiz box, the diagram box, the sidebar itself. True white, one step lighter than Paper, is how the system signals "this is a distinct block" without a shadow.
- **Hairline** (`#e5e4e0`): all borders and dividers — header underline, card borders, sidebar edge, print-safe quiz-option borders.
- **Ink** (`#2a2a28`): primary text.
- **Ink Muted** (`#6c6c66`): secondary text — subtitles, meta labels, nav-link default state, source citations.
- **Code Surface** (`#f3f3f2`): inline `<code>` background only.

### Status (quiz feedback & callouts)
- **Amber** (`#966010`) / **Amber Mist** (`#fef3c7`): the "exam"-flagged callout — Exam Alert boxes that mark certification-critical content.
- **Moss** (`#1a6b3f`) / **Moss Mist** (`#d8f3e5`): correct quiz answers and the "analogy" callout's border/title color.
- **Clay** (`#c12929`) / **Clay Mist** (`#fde8e8`): incorrect quiz answers.

### Categorical (diagram-only)
A second, deliberately muted-down hue family — added after the diagram-color sweep found several diagrams that need 3–4 visually distinct, non-hierarchical, non-comparative categories (SVM/k-means classes, RNN gate types, dropout layer states) where flattening to one teal treatment erased the pedagogical distinction the diagram exists to show, but no existing token was safe to reuse (Amber/Moss/Clay already carry a status meaning that would mislead). Both sit at the same restrained saturation/lightness Muted Teal uses, so they read as siblings of the interactive accent rather than a second alert system.
- **Slate** (`#3d4f7b`) / **Slate Deep** (`#2c3b5e`) / **Slate Mist** (`#e4e8f0`): one diagram-category slot.
- **Plum** (`#7b3d64`) / **Plum Deep** (`#5e2c4c`) / **Plum Mist** (`#f0e4ec`): a second diagram-category slot.
- **Olive** (`#526d36`) / **Olive Deep** (`#3d5327`) / **Olive Mist** (`#e6edde`): a third diagram-category slot, added for the rare case (e.g. a 2×2 spatial-correspondence diagram) that needs four simultaneously distinguishable, non-hierarchical categories in one view.

With Muted Teal as a fourth option, a diagram needing up to four genuinely parallel categories can use Teal/Slate/Plum/Olive together; a diagram needing only two or three still defaults to Rule 2's single consistent treatment unless the categories are truly inseparable without color. Reach for a fourth hue only when the correspondence being taught (which input maps to which output) is the actual point of the diagram — not for routine visual variety.

### Named Rules
**The One Accent Rule.** Muted Teal is the only color used to signal "interactive" or "emphasized" — links, active states, buttons, the h2 rail, callouts, quiz hover. Status colors (Amber/Moss/Clay) are reserved strictly for quiz feedback and their matching callout types — never repurpose them as a second brand accent.

**The Diagram-Only Rule.** Slate and Plum exist strictly to distinguish parallel categories *inside a single diagram or table* where no hierarchy, comparison, or verdict is intended — never on a button, link, callout, active nav state, or quiz feedback. If a diagram's categories carry a real semantic verdict (correct/incorrect, strength/weakness), use Moss/Clay instead, not Slate/Plum. If they carry no distinction at all beyond being "three of the same kind of thing," default to one consistent Muted Teal treatment — reach for Slate/Plum only when collapsing to one color would erase information the diagram exists to convey.

## Typography

**Body & Display Font:** `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif` (system sans stack)
**Label/Mono Font:** `'Menlo', 'Monaco', 'Courier New', monospace`

**Character:** One typeface for everything but code. Hierarchy comes entirely from size, weight, and the uppercase-label treatment — not from a second display face.

### Hierarchy
- **Display** (800, 2.1rem, line-height 1.15): homepage hero title only. The one place weight goes above 700.
- **Headline** (700, 2rem, line-height 1.2): the lesson `h1`.
- **Title** (700, 1.3rem): `h2` section headers — always paired with the 3px Muted Teal left rail (`.h2` `border-left`).
- **Body** (400, 1rem/16px, line-height 1.8): all paragraph and list copy. Line-height is deliberately generous for sustained reading.
- **Label** (700, 0.75rem avg — ranges 0.62–0.78rem by context, letter-spacing 0.08–0.1em, uppercase): the system's one typographic flourish, reused everywhere something needs to read as a category rather than content — lesson meta, hero eyebrow, chapter headings, quiz title, callout title, nav-group labels.

### Named Rules
**The Label Rule.** Any uppercase, letter-spaced small-caps text in this system means "this is a category, not a sentence." It never carries a full clause — only short nouns (LESSON META, CH 01 — AI OVERVIEW, EXAM ALERT).

## Layout

Single centered content column, `max-width: 700px`, with a fixed docs-style sidebar to its left on wide viewports.

- **Content column:** capped at 700px, centered (`margin: 0 auto`), `padding: 2.5rem 1.5rem 5rem` on the body. This width is the system's reading-comfort invariant — do not widen it to fill more of large screens.
- **Sidebar:** fixed, 252px wide, full viewport height, independently scrollable, sits to the left of the content column (`.has-sidebar { padding-left: 252px }`).
- **Breakpoint 900px:** sidebar goes off-canvas (`translateX(-100%)`), a hamburger toggle appears fixed top-left, content padding-left drops to 1.5rem, and a semi-transparent backdrop (`rgba(0,0,0,0.2)`) appears behind the sidebar when open.
- **Breakpoint 600px:** base font-size drops to 15px, `h1` drops to 1.5rem. No further structural changes below this.
- **Print:** sidebar, toggle, and backdrop are all removed; content reclaims full width; background forced to white.
- **Vertical rhythm:** major sections separate with 2–2.5rem top margin; card-like blocks (callouts, quiz, diagram) use 1.5–2rem margin; list items use 0.3rem gaps. Consistent, generous, never cramped.

## Elevation & Depth

Flat by construction. Surfaces separate from Paper by color contrast (Surface white vs. Paper off-white) and a 1px Hairline border — not by shadow. The one exception is functional, not decorative: the sidebar's mobile overlay state, which needs a shadow to read as "floating above the page" while a semi-transparent backdrop dims the content behind it.

### Shadow Vocabulary
- **Overlay** (`box-shadow: 4px 0 20px rgba(0,0,0,0.12)`): the sidebar when open on mobile (`body.nav-open .site-nav`). Signals temporary, dismissible elevation above the page.
- **Toggle button** (`box-shadow: 0 1px 3px rgba(0,0,0,0.08)`): the fixed hamburger button — a bare hint of lift so it reads as tappable over any background.

### Named Rules
**The Flat-By-Default Rule.** Nothing sits above the page at rest. Shadow is reserved for the one state where a surface genuinely floats over content it can be dismissed from (the mobile sidebar). Do not add shadows to cards, buttons, or callouts to increase their visual weight — use the Surface/Paper contrast and Hairline border instead.

## Shapes

Small, consistent radii — never sharp, never pill-shaped. A four-step scale covers everything in the system:

- **sm (3px):** inline `<code>` only — barely rounded, functional.
- **md (5px):** small interactive controls — the primary button, the lesson-badge number chip, the hamburger toggle.
- **lg (6px):** the system's default card/control radius — callouts, def-list items, quiz-options, homepage lesson-list links, the progress bar.
- **xl (8px):** the two largest content blocks — the quiz widget and the diagram box.

Borders default to 1px Hairline. The recurring exception is the **left-border rail**: a thicker (3–4px), colored left border used as the system's one deliberate emphasis device — on `h2` (3px Muted Teal), callout boxes (4px, color matches callout type), and the active sidebar nav-link (2px Muted Teal).

## Components

### Buttons
- **Shape:** 5–6px radius (md/lg), never sharp or pill.
- **Primary** (`.btn-start`, `.quiz-next`): Muted Teal background, white text, 600–700 weight, `padding: 0.6rem 1.4rem` (btn-start) or `0.5rem 1.2rem` (quiz-next).
- **Hover:** background shifts to Muted Teal Deep. No transform, no shadow — a flat color shift only (`transition: background 0.12s`).

### Callouts
- **Style:** left-border rail (4px) in the matching status color, tinted background at the Mist variant, no radius on the standard callout, an uppercase Label-styled title above the body text.
- **Tip** (Muted Teal / Muted Teal Mist): general teaching notes.
- **Exam** (Amber / Amber Mist): certification-critical content — the "Exam Alert" convention from `CLAUDE.md`.
- **Analogy** (Moss border/title, but a literal `#f0fdf4` background rather than a token — see Do's and Don'ts): real-world comparisons.

### Cards / Containers
- **Corner Style:** 6px (def-list items, homepage lesson links) or 8px (quiz box, diagram box).
- **Background:** Surface (white) on Paper.
- **Shadow Strategy:** none — see Elevation & Depth.
- **Border:** 1px Hairline.
- **Internal Padding:** 0.75–1rem for small cards (def-item), 1.5rem for large blocks (quiz, diagram).

### Quiz Widget
- **Options:** 1.5px Hairline border, 6px radius, flat Paper background at rest.
- **Hover:** border and background shift to Muted Teal / Muted Teal Mist.
- **Correct:** Moss border, Moss Mist background, Moss text, 600 weight.
- **Wrong:** Clay border, Clay Mist background, Clay text.
- **Feedback copy** always explains *why* an answer is right or wrong, never just states the verdict (a content rule, not a visual one, but binding per `CLAUDE.md`).

### Navigation (Sidebar)
- **Style:** fixed 252px column, Surface background, 1px Hairline right border, uppercase Label-styled group headers, links in Ink Muted at rest.
- **Active state:** Muted Teal text, 2px Muted Teal left border, Muted Teal Mist background, 600 weight — the same rail-and-tint pattern used everywhere else in the system.
- **Mobile:** off-canvas below 900px, hamburger toggle top-left, dimmed backdrop while open.

### Badges
- **Lesson number badge** (`.lesson-badge`, `.nav-num`): small (1.85rem square on the homepage, inline on the sidebar), 5px radius, Hairline border, Paper background, Ink Muted numeral — inverts to Muted Teal Mist/Muted Teal Deep on hover or active state.

## Do's and Don'ts

### Do:
- **Do** route every new emphasis signal through Muted Teal — resist introducing a second accent color even for a "special" feature.
- **Do** use the left-border rail (colored, 2–4px) as the emphasis device for any new callout, active state, or section marker, matching the weight already used for `h2` (3px), callouts (4px), and active nav-links (2px).
- **Do** keep uppercase Label styling (700 weight, 0.08em+ letter-spacing) reserved for short category text only, never full sentences.
- **Do** keep the reading column at 700px max-width; widen the sidebar or margins instead of the content column if more horizontal space is needed.
- **Do** keep quiz-option and callout copy the same length across variants (an existing content rule from `CLAUDE.md`, worth restating here since it's a visual-parity concern too — unequal option lengths visually hint at the answer).

### Don't:
- **Don't** add box-shadow to cards, buttons, or callouts — depth in this system comes from Surface/Paper contrast and Hairline borders, not shadow (see The Flat-By-Default Rule).
- **Don't** introduce a second display typeface. `--font-serif` already exists as a token in the codebase but currently resolves to the identical system-sans stack as `--font-sans` — treat this as a naming artifact to eventually clean up, not a live serif you can rely on.
- **Don't** inline per-lesson `<style>` blocks for anything `assets/style.css` already covers (a `CLAUDE.md` rule); the one existing exception (`0011-cnn.html`'s scoped SVG cell styles) is diagram-specific markup, not a page-level style override, and should stay the narrow exception rather than the precedent.
- **Don't** carry forward the `.callout.analogy` background as a literal `#f0fdf4` in new work — it sits outside the token set defined in this file's frontmatter; use `{colors.moss-mist}` or a properly tokenized new mist color instead.
