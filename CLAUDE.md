# Machine Learning Lesson Workspace

## What This Repo Is

A structured, self-paced AI/ML learning workspace built with the `/teach` skill in Claude Code. Each lesson is a self-contained HTML file with explanations, diagrams, and interactive quizzes.

## Structure

```
lessons/          # HTML lesson files (open in browser)
assets/           # Shared stylesheet (style.css) used by all lessons
learning-records/ # Progress notes — what has been learned so far
reference/        # Cheat sheets and quick-reference documents
MISSION.md        # Learning goal and constraints
RESOURCES.md      # Curated books, courses, and communities
NOTES.md          # Teaching preferences and session notes
Content Material.md  # Original syllabus outline (Huawei HCIA-AI)
```

## Lesson Index

| # | Lesson | Chapter |
|---|--------|---------|
| 01 | What Is AI? | Ch 01 — AI Overview |
| 02 | AI Technologies: NLP, CV & Foundation Models | Ch 01 — AI Overview |
| 03 | DeepSeek, AI Applications & Huawei PanGu | Ch 01 — AI Overview |
| 04 | Machine Learning Overview | Ch 02 — Machine Learning |

## How to Continue Learning

Open any lesson file in a browser. After completing a lesson, return to Claude Code and type `next lesson`.

## Teaching Rules for Claude

- Target: complete beginner with basic Python, zero ML experience
- Goal: pass Huawei HCIA-AI certification exam
- Always define terms before using them
- Mark exam-critical content with "Exam Alert" callouts
- Keep lessons short — one concept at a time
- Follow the syllabus in `Content Material.md` and improve where possible
- Reuse `assets/style.css` — never inline duplicate styles across lessons
- Quiz questions must have all options equal length (no length hints to the answer)
- Explanations in quiz feedback must explain *why* the wrong answer is wrong, not just state the right one
