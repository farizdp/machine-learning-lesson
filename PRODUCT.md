# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Fariz (farizdwipratama@gmail.com), a single self-directed learner. Basic Python skills, zero prior ML/AI experience — a complete beginner going in. Studying solo, self-paced, outside any classroom or cohort. Not designed for other users at this time; may be shared with other HCIA-AI candidates later, but that is not a current design requirement.

## Product Purpose

A self-paced learning workspace that teaches AI/ML from first principles through short, standalone HTML lessons, so Fariz can pass the Huawei HCIA-AI certification exam with genuine conceptual understanding — not just surface memorization. Success means being able to explain core AI concepts (intelligence, ML types, neural networks, transformers), describe the ML pipeline end-to-end, distinguish between key algorithms and know when to use each, and pass the exam.

## Positioning

Three things together, none of which a textbook, generic MOOC, or ad-hoc chatbot session gives on their own:

- **Exam-syllabus fidelity** — lessons are built directly around the HCIA-AI syllabus (`Content Material.md`), covering exactly what the exam covers, structured in the exam's own chapter order, with exam-critical content explicitly flagged.
- **1:1 adaptive tutoring, paced to Fariz** — Claude (via the `/teach` skill) teaches one concept at a time, calibrated to Fariz's exact starting point (basic Python, zero ML), remembering progress across sessions — unlike a static course or a one-off chat that forgets context.
- **Self-contained, durable artifacts** — every lesson is a standalone HTML file (inline SVG diagrams, interactive quiz, no build step, no course-platform lock-in) that can be opened and revisited indefinitely. One deliberate exception: the three typefaces (Barlow, Barlow Condensed, JetBrains Mono) load from the Google Fonts CDN, chosen by Fariz over self-hosting; offline the pages still open and read correctly, falling back to the system sans and mono stacks, but not in their designed lettering.

## Operating Context

- Lessons are opened directly in a browser (`open index.html` or any `lessons/*.html` file) — no server, build step, or install required. Lettering is its own design pass: light and dark are two authored themes, remembered per reader, defaulting to the OS preference.
- Learning happens in sessions: Fariz completes a lesson in the browser, then returns to Claude Code and says "next lesson" to continue.
- `index.html` is the homepage/entry point listing all chapters and lessons, with a left-nav sidebar (`assets/nav.js`) present on every lesson page for jumping between lessons.
- Progress and teaching context persist in `learning-records/` (what's been learned, user background) so tutoring stays calibrated across sessions.
- Built and extended through the `/teach` Claude Code skill, following `Content Material.md` as the syllabus source of truth, improving on it where useful.

## Capabilities and Constraints

- 19 lessons across 4 chapters (AI Overview, Machine Learning, Deep Learning & Foundation Models, AI Development Framework) plus Advanced Topics (Transfer Learning, Evaluation Metrics, AI Ethics, Exam Review).
- Each lesson: explanations, analogies, inline SVG diagrams, an "Exam Alert" callout convention for exam-critical content, an interactive quiz with feedback that explains *why* wrong answers are wrong, and one recommended primary source.
- Quiz options must be equal length (no length-based hints to the answer).
- All lessons share `assets/style.css` — no inline duplicate styling per lesson.
- Pure static HTML/CSS/JS — no build tooling, no backend, no JS runtime dependencies. The only network request any page makes is the Google Fonts stylesheet; everything else is local, and a full system fallback stack keeps the pages legible without it.
- Out of scope: deep coding implementations (conceptual understanding is the goal, not hands-on ML engineering), advanced research-level topics beyond the syllabus, non-Python frameworks.
- Frameworks referenced conceptually in lessons: PyTorch and MindSpore (Huawei's framework, exam-relevant).

## Evidence on Hand

- `Content Material.md` — original Huawei HCIA-AI syllabus outline; source of truth for topic coverage and ordering.
- `RESOURCES.md` — curated external references (books, courses, papers, communities) cited per lesson as primary sources.
- `learning-records/0001-user-background.md` — documented starting point (basic Python, zero ML experience).
- No testimonials, case studies, or third-party proof — this is a personal study tool, not a public-facing product; none should be fabricated.

## Product Principles

1. Define every term before using it — never assume prior ML/AI vocabulary.
2. One concept at a time; lessons stay short and completable in one sitting.
3. Every abstract concept gets a real-world analogy before (or alongside) the formal explanation.
4. Exam relevance is made explicit, not left for Fariz to guess — critical content is flagged as it's introduced.
5. Follow the syllabus structure, but improve on it where a better teaching order or explanation serves understanding.

## Accessibility & Inclusion

No project-specific accessibility requirement has been established beyond standard web accessibility practice.
