/**
 * nav.js — the directory board for the HCIA-AI course.
 *
 * Injects the fixed left rail (chapter groups, you-are-here bar), the theme
 * control, the mobile rail toggle, and the position rule that answers
 * "where am I in the nineteen?" on every lesson page.
 *
 * Add <script src="../assets/nav.js"></script> before </body> in every lesson.
 * Add <script src="assets/nav.js"></script> before </body> in index.html.
 */
(function () {
  'use strict';

  var CHAPTERS = [
    {
      label: 'Ch 01 — AI Overview',
      lessons: [
        { num: '01', file: '0001-what-is-ai.html',                  title: 'What Is AI?' },
        { num: '02', file: '0002-ai-technologies.html',             title: 'AI Technologies' },
        { num: '03', file: '0003-deepseek-applications-pangu.html', title: 'DeepSeek, Apps & PanGu' }
      ]
    },
    {
      label: 'Ch 02 — Machine Learning',
      lessons: [
        { num: '04', file: '0004-ml-overview.html',     title: 'ML Overview' },
        { num: '05', file: '0005-ml-process.html',      title: 'The ML Process' },
        { num: '06', file: '0006-ml-key-concepts.html', title: 'Key ML Concepts' },
        { num: '07', file: '0007-ml-algorithms.html',   title: 'Common ML Algorithms' }
      ]
    },
    {
      label: 'Ch 03 — Deep Learning',
      lessons: [
        { num: '08', file: '0008-deep-learning-intro.html',       title: 'Perceptrons & Neural Nets' },
        { num: '09', file: '0009-activation-training.html',       title: 'Activation & Training' },
        { num: '10', file: '0010-optimizers-regularization.html', title: 'Optimizers & Regularization' },
        { num: '11', file: '0011-cnn.html',                       title: 'Convolutional Neural Nets' },
        { num: '12', file: '0012-rnn-lstm.html',                  title: 'RNNs & LSTM' },
        { num: '13', file: '0013-transformer-attention.html',     title: 'Transformer & Attention' }
      ]
    },
    {
      label: 'Ch 04 — AI Development',
      lessons: [
        { num: '14', file: '0014-ai-frameworks.html',      title: 'AI Frameworks' },
        { num: '15', file: '0015-ai-app-dev-process.html', title: 'App Development Process' }
      ]
    },
    {
      label: 'Advanced Topics',
      lessons: [
        { num: '16', file: '0016-transfer-learning.html',  title: 'Transfer Learning' },
        { num: '17', file: '0017-evaluation-metrics.html', title: 'Evaluation Metrics' },
        { num: '18', file: '0018-ai-ethics.html',          title: 'AI Ethics' },
        { num: '19', file: '0019-exam-review.html',        title: 'HCIA-AI Exam Review' }
      ]
    }
  ];

  var ALL = CHAPTERS.reduce(function (acc, c) { return acc.concat(c.lessons); }, []);
  var TOTAL = ALL.length;

  var ICON_HOME =
    '<svg class="nav-home-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
    'stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
    '<path d="M3 10.2 12 3.5l9 6.7V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"/>' +
    '<path d="M9.2 21v-6.6h5.6V21"/></svg>';

  var ICON_SUN =
    '<svg class="icon-sun" viewBox="0 0 24 24" aria-hidden="true">' +
    '<circle cx="12" cy="12" r="4.2"/>' +
    '<path d="M12 2.4v2.2M12 19.4v2.2M4.2 12H2M22 12h-2.2M6.5 6.5 4.9 4.9M19.1 19.1l-1.6-1.6' +
    'M17.5 6.5l1.6-1.6M4.9 19.1l1.6-1.6" stroke-linecap="round"/></svg>';

  var ICON_MOON =
    '<svg class="icon-moon" viewBox="0 0 24 24" aria-hidden="true">' +
    '<path d="M20.5 14.3A8.6 8.6 0 0 1 9.7 3.5a8.6 8.6 0 1 0 10.8 10.8z" ' +
    'stroke-linecap="round" stroke-linejoin="round"/></svg>';

  function indexOfFile(basename) {
    for (var i = 0; i < TOTAL; i++) { if (ALL[i].file === basename) return i; }
    return -1;
  }

  /* The chapter is wayfinding, so it reads off the position rule — never as a
     label stacked above the heading. */
  function chapterOf(basename) {
    for (var i = 0; i < CHAPTERS.length; i++) {
      for (var j = 0; j < CHAPTERS[i].lessons.length; j++) {
        if (CHAPTERS[i].lessons[j].file === basename) return CHAPTERS[i].label;
      }
    }
    return '';
  }

  /* ── Theme: an authored state, remembered ───────────────────────────── */
  function currentTheme() {
    var set = document.documentElement.getAttribute('data-theme');
    if (set) return set;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark' : 'light';
  }

  function buildThemeToggle() {
    var btn = document.createElement('button');
    btn.className = 'theme-toggle';
    btn.type = 'button';
    btn.innerHTML = ICON_SUN + ICON_MOON;

    function sync() {
      var next = currentTheme() === 'dark' ? 'light' : 'dark';
      btn.setAttribute('aria-label', 'Switch to ' + next + ' theme');
      btn.setAttribute('title', 'Switch to ' + next + ' theme');
    }

    btn.addEventListener('click', function () {
      var next = currentTheme() === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      try { localStorage.setItem('hcia-theme', next); } catch (e) { /* private mode */ }
      sync();
    });

    sync();
    return btn;
  }

  /* ── The position rule: you are here, in the nineteen ───────────────── */
  function buildPositionRule(idx) {
    var bar = document.querySelector('.progress-bar');
    if (!bar || idx < 0) return;

    bar.innerHTML = '';
    bar.setAttribute('role', 'img');
    bar.setAttribute('aria-label', 'Lesson ' + (idx + 1) + ' of ' + TOTAL);
    var chapter = chapterOf(location.pathname.split('/').pop() || '');
    bar.setAttribute('data-position',
      (chapter ? chapter.replace(/\s+—\s+/, ' · ') + '  ·  ' : '') + (idx + 1) + ' / ' + TOTAL);

    for (var i = 0; i < TOTAL; i++) {
      var tick = document.createElement('span');
      tick.className = 'tick' + (i < idx ? ' done' : i === idx ? ' here' : '');
      tick.style.animationDelay = (i * 22) + 'ms';
      bar.appendChild(tick);
    }
  }

  /* Only a diagram that genuinely overflows gets the scroll affordance. */
  function markScrollableDiagrams() {
    var boxes = document.querySelectorAll('.diagram');
    var check = function () {
      for (var i = 0; i < boxes.length; i++) {
        boxes[i].classList.toggle('is-scrollable',
          boxes[i].scrollWidth > boxes[i].clientWidth + 2);
      }
    };
    check();
    window.addEventListener('resize', check);
    for (var i = 0; i < boxes.length; i++) {
      boxes[i].addEventListener('scroll', check, { passive: true });
    }
  }

  function closeRail() {
    document.body.classList.remove('nav-open');
    var t = document.querySelector('.nav-toggle');
    if (t) t.setAttribute('aria-expanded', 'false');
  }

  function init() {
    var inLesson = location.pathname.indexOf('/lessons/') !== -1;
    var basename = location.pathname.split('/').pop() || 'index.html';
    var homeHref = inLesson ? '../index.html' : 'index.html';
    var prefix   = inLesson ? '' : 'lessons/';
    var idx      = indexOfFile(basename);

    /* backdrop */
    var backdrop = document.createElement('div');
    backdrop.className = 'nav-backdrop';
    backdrop.addEventListener('click', closeRail);
    document.body.appendChild(backdrop);

    /* mobile rail control */
    var toggle = document.createElement('button');
    toggle.className = 'nav-toggle';
    toggle.type = 'button';
    toggle.setAttribute('aria-label', 'Open course directory');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.innerHTML = '<span></span><span></span><span></span>';
    toggle.addEventListener('click', function () {
      var open = document.body.classList.toggle('nav-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', (open ? 'Close' : 'Open') + ' course directory');
    });
    document.body.appendChild(toggle);

    /* the directory board */
    var nav = document.createElement('nav');
    nav.className = 'site-nav';
    nav.setAttribute('aria-label', 'Course directory');

    var head = document.createElement('div');
    head.className = 'nav-head';
    var home = document.createElement('a');
    home.href = homeHref;
    home.className = 'nav-home';
    home.innerHTML = ICON_HOME + '<span>HCIA-AI Course</span>';
    head.appendChild(home);
    nav.appendChild(head);

    var scroll = document.createElement('div');
    scroll.className = 'nav-scroll';
    var activeLink = null;

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
          activeLink = a;
        }
        a.innerHTML =
          '<span class="nav-num">' + lesson.num + '</span>' +
          '<span class="nav-title">' + lesson.title + '</span>';
        group.appendChild(a);
      });

      scroll.appendChild(group);
    });
    nav.appendChild(scroll);

    var foot = document.createElement('div');
    foot.className = 'nav-foot';
    var count = document.createElement('span');
    count.className = 'nav-count';
    count.textContent = idx >= 0 ? (idx + 1) + ' of ' + TOTAL : TOTAL + ' lessons';
    foot.appendChild(count);
    foot.appendChild(buildThemeToggle());
    nav.appendChild(foot);

    document.body.insertBefore(nav, document.body.firstChild);
    document.body.classList.add('has-sidebar');

    /* keep the current lesson visible in a 19-item rail */
    if (activeLink && scroll.scrollHeight > scroll.clientHeight) {
      var top = activeLink.offsetTop - scroll.clientHeight / 2;
      scroll.scrollTop = top > 0 ? top : 0;
    }

    buildPositionRule(idx);
    markScrollableDiagrams();

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && document.body.classList.contains('nav-open')) {
        closeRail();
        toggle.focus();
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
