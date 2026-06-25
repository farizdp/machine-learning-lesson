# Machine Learning & AI — Self-Paced Lessons

A beginner-friendly, interactive course for learning Machine Learning and AI, structured around the **Huawei HCIA-AI** certification syllabus.

Each lesson is a standalone HTML file with clear explanations, diagrams, and a quiz. Open any file in your browser — no server or dependencies needed.

---

## Getting Started

Clone the repo and open a lesson:

```bash
git clone git@github.com:farizdp/machine-learning-lesson.git
cd machine-learning-lesson
open lessons/0001-what-is-ai.html
```

---

## Lessons

### Chapter 01 — AI Overview

| Lesson | Topics |
|--------|--------|
| [01 — What Is AI?](lessons/0001-what-is-ai.html) | Intelligence, AI vs ML vs DL, Three AI schools (Symbolism / Connectionism / Behaviorism), Three elements (Data / Compute / Algorithms), Weak vs Strong AI |
| [02 — AI Technologies](lessons/0002-ai-technologies.html) | NLP tasks (Classification, Sequence Labelling, Text Generation, Knowledge Graph), CV tasks (Detection, Segmentation, Tracking, OCR, Generation), Foundation Models, Transformer types, Emergence, Chain-of-Thought |
| [03 — DeepSeek, Applications & PanGu](lessons/0003-deepseek-applications-pangu.html) | DeepSeek & efficiency innovations, AI eras (Perception → Understanding → Creation), Huawei PanGu 3-tier hierarchy, Ascend chips, ModelArts, AI ethics & future (AGI, Embodied AI) |

### Chapter 02 — Machine Learning

| Lesson | Topics |
|--------|--------|
| [04 — ML Overview](lessons/0004-ml-overview.html) | ML vs rule-based programming, Classification / Regression / Clustering, Supervised / Unsupervised / Semi-supervised / Reinforcement Learning |
| [05 — The ML Process](lessons/0005-ml-process.html) | 7-stage ML pipeline, Training vs Test set, Data cleansing / Standardization / Dimensionality Reduction, Feature selection (Filter / Wrapper / Embedded), Overfitting vs Underfitting, Bias-Variance trade-off |
| [06 — Key ML Concepts](lessons/0006-ml-key-concepts.html) | Gradient Descent (BGD / SGD / MBGD), Parameters vs Hyperparameters, Learning rate, Hyperparameter search (Grid / Random / Heuristic / Bayesian), K-Fold Cross-Validation |
| [07 — Common ML Algorithms](lessons/0007-ml-algorithms.html) | Linear & Polynomial Regression, Logistic Regression, Decision Tree, SVM (Linear + Kernel), k-NN, Naive Bayes, Ensemble Learning (Bagging / Boosting, Random Forest, GBDT), k-Means, Hierarchical Clustering |

### Chapter 03 — Deep Learning & Foundation Models

| Lesson | Topics |
|--------|--------|
| [08 — Perceptrons & Neural Networks](lessons/0008-deep-learning-intro.html) | Perceptron anatomy, Why nonlinearity is essential, Multi-layer Perceptron (MLP), Deep Neural Networks, Forward pass, Feature hierarchy |
| [09 — Activation Functions & Training](lessons/0009-activation-training.html) | Step / Sigmoid / Tanh / ReLU / Leaky ReLU / Swish / Softmax, Loss functions (MSE vs Cross-Entropy), Training loop, Backpropagation & Chain rule, Vanishing & Exploding gradients |
| [10 — Optimizers & Regularization](lessons/0010-optimizers-regularization.html) | Momentum, AdaGrad, RMSProp, Adam (default ★), L1 regularization (sparse), L2 regularization (weight decay), Early Stopping, Dropout (training only) |
| [11 — Convolutional Neural Networks](lessons/0011-cnn.html) | Why CNNs beat FC networks, Convolution operation, Kernel / Stride / Padding, Output size formula, Parameter sharing, Local connectivity, Max Pooling, Average Pooling, Fully-Connected layer, Full CNN pipeline |

---

## What's Coming

- **Lesson 12** — Recurrent Neural Networks (RNN): RNN, LSTM (Forget / Input / Output gates), Seq2Seq
- **Lesson 13** — Transformer Architecture & Attention: Self-attention, GPT-1, BERT, MoE
- **Lesson 14** — AI Development Frameworks: PyTorch, MindSpore, Computational graphs, LeNet implementation

---

## How Each Lesson Is Built

- **Exam Alert boxes** — content that frequently appears in certification questions
- **Analogies** — every abstract concept explained with a real-world comparison
- **Diagrams** — inline SVG visuals, no external dependencies
- **Interactive quiz** — immediate feedback with explanations for both correct and wrong answers
- **Primary source** — one trusted external resource recommended per lesson

---

## Target Audience

Complete beginners with basic Python. No prior ML or AI experience required.

---

## Learning Goal

Pass the Huawei HCIA-AI certification exam with genuine understanding — not just surface memorization.
