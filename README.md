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
| [12 — Recurrent Neural Networks &amp; LSTM](lessons/0012-rnn-lstm.html) | Why sequences need memory, RNN hidden state, Vanishing gradient in time, LSTM cell state, Forget Gate, Input Gate, Output Gate, Candidate, Seq2Seq (Encoder → Context Vector → Decoder) |
| [13 — Transformer Architecture &amp; Attention](lessons/0013-transformer-attention.html) | Attention motivation, Q/K/V, Self-attention, Multi-head attention, Positional encoding, Transformer encoder/decoder, Add &amp; Norm, Masked Self-Attention, Cross-Attention, BERT (encoder-only / bidirectional), GPT-1 (decoder-only), Mixture of Experts (MoE) |
| [14 — AI Development Frameworks](lessons/0014-ai-frameworks.html) | Why frameworks exist, Tensor + autograd, Computational graphs (static vs dynamic), Graph Mode vs PyNative Mode, PyTorch (nn.Module / forward), MindSpore (nn.Cell / construct), LeNet-5 architecture and MindSpore implementation |
| [15 — AI Application Development Process](lessons/0015-ai-app-dev-process.html) | 6-stage pipeline (Requirement → Environment → Data → Network → Training → Deployment), RNN types (one-to-one / one-to-many / many-to-one / many-to-many), ModelArts platform, MindSpore Serving vs Lite, Feedback &amp; iteration loop |

### Advanced Topics

| Lesson | Topics |
|--------|--------|
| [16 — Transfer Learning &amp; Fine-tuning](lessons/0016-transfer-learning.html) | Why training from scratch fails on small data, Feature extraction vs Fine-tuning, Data size × domain similarity quadrant, Freezing layers with requires_grad, ResNet / BERT / PanGu-α, MindSpore fine-tuning pattern |
| [17 — Model Evaluation Metrics](lessons/0017-evaluation-metrics.html) | Why accuracy misleads, Confusion matrix (TP/TN/FP/FN), Accuracy / Precision / Recall / F1 with formulas, Precision–Recall trade-off, ROC curve (TPR vs FPR), AUC interpretation, Which metric to use when, Multi-class macro vs weighted average |
| [18 — AI Ethics &amp; Responsible AI](lessons/0018-ai-ethics.html) | *(coming soon)* |
| [19 — HCIA-AI Exam Review](lessons/0019-exam-review.html) | *(coming soon)* |

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
