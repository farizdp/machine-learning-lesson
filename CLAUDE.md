# Machine Learning Lesson Workspace

## What This Repo Is

A structured, self-paced AI/ML learning workspace built with the `/teach` skill in Claude Code. Each lesson is a self-contained HTML file with explanations, diagrams, and interactive quizzes.

## Structure

```
index.html        # Homepage — entry point, lists all chapters and lessons
lessons/          # HTML lesson files (open in browser)
assets/
  style.css       # Shared stylesheet used by all lessons and index.html
  nav.js          # Shared sidebar injector (docs-style left map, active highlight)
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
| 05 | The ML Process | Ch 02 — Machine Learning |
| 06 | Key ML Concepts: Gradient Descent, Hyperparameters & Cross-Validation | Ch 02 — Machine Learning |
| 07 | Common ML Algorithms | Ch 02 — Machine Learning |
| 08 | Deep Learning: Perceptrons & Neural Networks | Ch 03 — Deep Learning & Foundation Models |
| 09 | Activation Functions & Training | Ch 03 — Deep Learning & Foundation Models |
| 10 | Optimizers & Regularization | Ch 03 — Deep Learning & Foundation Models |
| 11 | Convolutional Neural Networks (CNN) | Ch 03 — Deep Learning & Foundation Models |
| 12 | Recurrent Neural Networks & LSTM | Ch 03 — Deep Learning & Foundation Models |
| 13 | Transformer Architecture & Attention | Ch 03 — Deep Learning & Foundation Models |
| 14 | AI Development Frameworks | Ch 04 — AI Development Framework |
| 15 | AI Application Development Process | Ch 04 — AI Development Framework |
| 16 | Transfer Learning & Fine-tuning | Advanced |
| 17 | Model Evaluation Metrics | Advanced |
| 18 | AI Ethics & Responsible AI | Advanced |
| 19 | HCIA-AI Exam Review | Advanced |

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
