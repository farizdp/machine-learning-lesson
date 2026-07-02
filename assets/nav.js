/**
 * nav.js — shared sidebar injector for the HCIA-AI learning site
 * Add <script src="../assets/nav.js"></script> before </body> in every lesson.
 * Add <script src="assets/nav.js"></script> before </body> in index.html.
 */
(function () {
  var CHAPTERS = [
    {
      label: 'Ch 01 — AI Overview',
      lessons: [
        { num: '01', file: '0001-what-is-ai.html',                   title: 'What Is AI?' },
        { num: '02', file: '0002-ai-technologies.html',               title: 'AI Technologies' },
        { num: '03', file: '0003-deepseek-applications-pangu.html',   title: 'DeepSeek, Apps & PanGu' },
      ],
    },
    {
      label: 'Ch 02 — Machine Learning',
      lessons: [
        { num: '04', file: '0004-ml-overview.html',       title: 'ML Overview' },
        { num: '05', file: '0005-ml-process.html',        title: 'The ML Process' },
        { num: '06', file: '0006-ml-key-concepts.html',   title: 'Key ML Concepts' },
        { num: '07', file: '0007-ml-algorithms.html',     title: 'Common ML Algorithms' },
      ],
    },
    {
      label: 'Ch 03 — Deep Learning',
      lessons: [
        { num: '08', file: '0008-deep-learning-intro.html',        title: 'Perceptrons & Neural Nets' },
        { num: '09', file: '0009-activation-training.html',        title: 'Activation & Training' },
        { num: '10', file: '0010-optimizers-regularization.html',  title: 'Optimizers & Regularization' },
        { num: '11', file: '0011-cnn.html',                        title: 'Convolutional Neural Nets' },
        { num: '12', file: '0012-rnn-lstm.html',                   title: 'RNNs & LSTM' },
        { num: '13', file: '0013-transformer-attention.html',      title: 'Transformer & Attention' },
      ],
    },
    {
      label: 'Ch 04 — AI Development',
      lessons: [
        { num: '14', file: '0014-ai-frameworks.html',       title: 'AI Frameworks' },
        { num: '15', file: '0015-ai-app-dev-process.html',  title: 'App Development Process' },
      ],
    },
    {
      label: 'Advanced Topics',
      lessons: [
        { num: '16', file: '0016-transfer-learning.html',   title: 'Transfer Learning' },
        { num: '17', file: '0017-evaluation-metrics.html',  title: 'Evaluation Metrics' },
        { num: '18', file: '0018-ai-ethics.html',           title: 'AI Ethics' },
        { num: '19', file: '0019-exam-review.html',         title: 'HCIA-AI Exam Review' },
      ],
    },
  ];

  function init() {
    var inLesson    = location.pathname.indexOf('/lessons/') !== -1;
    var basename    = location.pathname.split('/').pop() || 'index.html';
    var homeHref    = inLesson ? '../index.html' : 'index.html';
    var prefix      = inLesson ? '' : 'lessons/';

    /* ── backdrop ── */
    var backdrop = document.createElement('div');
    backdrop.className = 'nav-backdrop';
    backdrop.addEventListener('click', closeSidebar);
    document.body.appendChild(backdrop);

    /* ── hamburger toggle ── */
    var toggle = document.createElement('button');
    toggle.className = 'nav-toggle';
    toggle.setAttribute('aria-label', 'Toggle navigation');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.innerHTML =
      '<span></span><span></span><span></span>';
    toggle.addEventListener('click', function () {
      var open = document.body.classList.toggle('nav-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    document.body.appendChild(toggle);

    /* ── sidebar ── */
    var nav = document.createElement('nav');
    nav.className = 'site-nav';
    nav.setAttribute('aria-label', 'Course navigation');

    /* home link */
    var homeEl = document.createElement('a');
    homeEl.href = homeHref;
    homeEl.className = 'nav-home';
    homeEl.innerHTML =
      '<svg class="nav-home-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8">' +
        '<path d="M2 6.5L8 2l6 4.5V13a1 1 0 01-1 1H3a1 1 0 01-1-1V6.5z"/>' +
        '<path d="M6 14V9h4v5"/>' +
      '</svg>' +
      '<span>HCIA-AI Course</span>';
    nav.appendChild(homeEl);

    /* chapter groups */
    CHAPTERS.forEach(function (chapter) {
      var group = document.createElement('div');
      group.className = 'nav-group';

      var label = document.createElement('div');
      label.className = 'nav-group-label';
      label.textContent = chapter.label;
      group.appendChild(label);

      chapter.lessons.forEach(function (lesson) {
        var a = document.createElement('a');
        a.href = prefix + lesson.file;
        a.className = 'nav-link';
        if (lesson.file === basename) {
          a.classList.add('active');
          a.setAttribute('aria-current', 'page');
        }
        a.innerHTML =
          '<span class="nav-num">' + lesson.num + '</span>' +
          '<span class="nav-title">' + lesson.title + '</span>';
        group.appendChild(a);
      });

      nav.appendChild(group);
    });

    document.body.insertBefore(nav, document.body.firstChild);
    document.body.classList.add('has-sidebar');
  }

  function closeSidebar() {
    document.body.classList.remove('nav-open');
    var toggle = document.querySelector('.nav-toggle');
    if (toggle) toggle.setAttribute('aria-expanded', 'false');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
