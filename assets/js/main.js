/* -------------------- TRANSLATIONS -------------------- */
const I18N = {
  fr: {
    "nav.parcours": "Parcours",
    "nav.ecole42": "42",
    "nav.cap": "Cap",
    "nav.projets": "Projets",
    "nav.apprendre": "Apprendre",
    "nav.contact": "Contact",

    "hero.eyebrow": "Portfolio — 2026",
    "hero.ribbon": "du terrain au code, sans raccourci",
    "hero.avail": "Open to work",
    "hero.line1": "De la rigueur du terrain,",
    "hero.line2": "à la précision du code.",
    "hero.sub": "Après cinq années dans l’aéronautique au sein de l’Armée de Terre, j’ai fait le choix de me tourner vers le code.",
    "hero.tag": "Pour aller au fond des concepts de la programmation, j’ai choisi de repartir des bases en intégrant 42 Paris. À travers le C et le C++, je renforce mes compétences et développe des réflexes ancrés dans le fonctionnement réel des systèmes.",
    "hero.42.link": "Découvrir 42",
    "hero.cta.projects": "Voir mes projets",
    "hero.cta.contact": "Me contacter",
    "hero.scroll": "Faites défiler",

    "parcours.num": "Parcours",
    "parcours.title1": "Deux expériences,",
    "parcours.title2": "une même exigence.",
    "parcours.intro": "Ce qui relie le terrain au code, c'est la même logique : comprendre avant d'agir, tenir dans la durée, ne pas prendre de raccourcis.",

    "s42.num": "42 Paris",
    "s42.title1": "Une école",
    "s42.title2": "à part.",
    "s42.intro": "Fondée en 2013 à Paris par Xavier Niel, 42 s'est exportée dans le monde entier. Pas de cours magistraux, pas de professeurs — l'apprentissage se construit par les projets et entre pairs.",
    "s42.stat1.num": "50+",
    "s42.stat1.label": "campus dans le monde",
    "s42.stat2.num": "170k+",
    "s42.stat2.label": "apprenants formés depuis 2013",
    "s42.stat3.num": "0",
    "s42.stat3.label": "professeur — pair à pair",
    "s42.stat4.num": "Bac+5",
    "s42.stat4.label": "certification RNCP reconnue par l'État",
    "s42.note": "Admissions sur test (La Piscine), sans condition de diplôme. Gratuit.",

    "p.a.date": "Avril 2025 — aujourd'hui",
    "p.a.title": "42 Paris — Formation au développement logiciel",
    "p.a.desc": "Formation au C et au C++ : gestion mémoire, concurrence, parsing, programmation bas niveau. J'apprends projet par projet, en essayant d'écrire un code propre et de bien comprendre ce que je produis.",

    "p.c.date": "Mars 2020 — Mars 2025",
    "p.c.title": "Sous-officier — Armée de Terre",
    "p.c.place": "École Nationale des Sous-Officiers d'Active — Saint-Maixent-l'École, France",
    "p.c.desc": "Cinq années d'encadrement opérationnel : conduite d'équipe, décision sous pression, coordination inter-services.",

    "p.b.date": "Juin 2022 — Décembre 2022",
    "p.b.title": "Spécialisation maintenance aéronautique",
    "p.b.place": "Centre de formation franco-allemand (CFA PTL TIGRE) — Faßberg, Allemagne · dans le cadre du service militaire",
    "p.b.desc": "Formation technique en maintenance aéronautique, dans un cadre militaire franco-allemand.",

    "p.d.date": "Juin 2019",
    "p.d.title": "Baccalauréat scientifique — spécialité mathématiques",
    "p.d.place": "Lycée Privé Polyvalent La Trinité — Béziers, France",
    "p.d.desc": "Baccalauréat scientifique, spécialité mathématiques.",

    "cap.num": "Cap",
    "cap.title1": "Spécialisation",
    "cap.title2": "IA &amp; data.",
    "cap.intro": "Mon cursus à 42 se prolonge par une spécialisation en intelligence artificielle et data science, certifiée <strong>RNCP 39774</strong> (niveau bac +5).",
    "cap.badge": "Cursus de spécialisation",
    "cap.feature.h": "Des systèmes bas niveau à l'IA appliquée.",
    "cap.feature.p": "Après les bases en C/C++ et en programmation système, je m'oriente vers des projets qui relient machine learning, préparation de données et intégration d'IA, de la théorie au déploiement.",
    "cap.link": "Détail de la certification RNCP 39774",
    "cap.card1.h": "Piliers du cursus",
    "cap.card1.p": "ML, pipelines de données et intégration de modèles dans des applications concrètes, au fil de projets progressifs et concrets.",
    "cap.card2.h": "Leaffliction",
    "cap.card2.p": "Classification d'images par réseau convolutif : préparation du dataset, augmentation, entraînement et évaluation d'un modèle de vision.",
    "cap.card3.h": "Multilayer Perceptron",
    "cap.card3.p": "Réseau de neurones construit from scratch : forward pass, backprop, descente de gradient, pour comprendre l'optimisation avant d'utiliser les frameworks.",

    "pr.num": "Projets",
    "pr.title1": "Ce que",
    "pr.title2": "j'ai construit.",
    "pr.intro": "Quelques projets de 42 sur lesquels je travaille actuellement : systèmes, concurrence, HTTP, conteneurs.",
    "pr.webserv": "Serveur HTTP/1.1 en C++ : GET, POST, DELETE, CGI, gestion de plusieurs clients. Un projet d'équipe qui m'a beaucoup appris sur la lecture des RFC et sur l'organisation d'un code qui reste lisible malgré la complexité.",
    "pr.webserv.c1.h": "Trello board",
    "pr.webserv.c1.p": "Organisation en sprints et tickets partagés entre les membres de l'équipe.",
    "pr.webserv.c2.h": "State machine",
    "pr.webserv.c2.p": "Les connexions HTTP sont gérées via une machine à états claire et explicite.",
    "pr.webserv.c3.h": "Complexité cyclomatique",
    "pr.webserv.c3.p": "Accord d'équipe pour limiter la complexité par fonction et garder le code maintenable.",
    "pr.webserv.c4.h": "Scalabilité",
    "pr.webserv.c4.p": "Architecture pensée pour intégrer de nouveaux modules sans tout reconstruire.",
    "pr.inception": "Infrastructure conteneurisée : Nginx (TLS), WordPress (PHP-FPM) et MariaDB orchestrés via Docker Compose. Volumes persistants, réseau isolé, images reproductibles.",
    "pr.minishell": "Shell Unix en C : parsing, redirections, pipes, expansion de variables, gestion des signaux et builtins. Un bon exercice pour se familiariser avec les appels système et le cycle de vie des processus.",
    "pr.minishell.c1.h": "AST",
    "pr.minishell.c1.p": "Le parsing construit un arbre syntaxique abstrait qui représente la commande avant son exécution.",
    "pr.philo": "Le problème du dîner des philosophes en C, avec threads et mutex. Un bon support pour s'entraîner à la synchronisation et éviter les blocages.",
    "pr.see": "Voir sur GitHub",

    "app.num": "Apprendre",
    "app.title1": "Ma manière",
    "app.title2": "d'apprendre.",
    "app.intro": "À 42, on apprend par la pratique et en allant chercher les réponses. L'IA est un outil puissant et je l'utilise — mais pendant la phase d'apprentissage, j'essaie de faire attention à la façon dont je m'en sers.",
    "app.q1.h": "L'IA, surtout pour comprendre.",
    "app.q1.p": "Je m'en sers pour reformuler un concept, comparer des approches ou décoder un message d'erreur. Pour le code lui-même, quand c'est un sujet que je suis en train d'apprendre, je préfère l'écrire moi-même.",
    "app.q2.h": "Croiser avec la doc.",
    "app.q2.p": "RFC, <em>man</em> pages, documentation officielle : j'y retourne régulièrement. L'IA répond vite, la doc répond juste; je m'appuie sur les deux selon mes besoins.",
    "app.q3.h": "Comprendre ce que je commit.",
    "app.q3.p": "J'essaie de pouvoir expliquer chaque ligne de mon code. Quand j'hésite sur une suggestion, je relis la doc ou je prends le temps de comprendre comment elle fonctionne avant de l'intégrer.",
    "app.sources.label": "Mes références au quotidien :",

    "sk.num": "Compétences",
    "sk.title1": "Des outils,",
    "sk.title2": "et une manière de travailler.",
    "sk.lang.h": "Langages",
    "sk.lang.tag": "noyau",
    "sk.tools.h": "Outils",
    "sk.tools.tag": "quotidien",
    "sk.core.h": "Programmation &amp; architecture",
    "sk.core.tag": "fondamentaux",
    "sk.core.c1": "Gestion mémoire",
    "sk.core.c2": "Concurrence &amp; threads",
    "sk.core.c3": "Algorithmes &amp; structures",
    "sk.core.c4": "Debugging (gdb, valgrind)",
    "sk.core.c5": "Parsing &amp; protocoles",
    "sk.soft.h": "Qualités de travail",
    "sk.soft.tag": "posture",
    "sk.soft.c1": "Autonomie",
    "sk.soft.c2": "Rigueur opérationnelle",
    "sk.soft.c3": "Curiosité technique",
    "sk.soft.c4": "Travail en équipe",
    "sk.langs.h": "Langues",
    "sk.langs.tag": "à l'écrit &amp; à l'oral",
    "sk.langs.fr": "Français",
    "sk.langs.fr.lvl": "natif",
    "sk.langs.en": "Anglais",
    "sk.langs.es": "Espagnol",
    "sk.other.h": "À côté du code",
    "sk.other.tag": "équilibre",
    "sk.other.c1": "Escalade",
    "sk.other.c2": "Piano",
    "sk.other.c3": "Judo · ceinture marron",
    "sk.other.c4": "Permis B",
    "sk.lvl.solid": "solide",
    "sk.lvl.learn": "en cours",
    "sk.lvl.use": "utilisé",
    "sk.lvl.daily": "quotidien",

    "ct.num": "Contact",
    "ct.title1": "Un poste,",
    "ct.title2": "un stage, <span class=\"accent\">un café ?</span>",
    "ct.lead": "Je cherche un stage, alternance ou un premier poste où je pourrai apprendre sérieusement et contribuer concrètement. Si mon profil vous semble intéressant, écrivez-moi.",
    "ct.cta.cv": "Télécharger mon CV",

    "foot": "Paris."
  },
  en: {
    "nav.parcours": "Journey",
    "nav.ecole42": "42",
    "nav.cap": "Direction",
    "nav.projets": "Projects",
    "nav.apprendre": "Learning",
    "nav.contact": "Contact",

    "hero.eyebrow": "Portfolio — 2026",
    "hero.ribbon": "from the field to the code, no shortcuts",
    "hero.avail": "Open to work",
    "hero.line1": "From the discipline of the field,",
    "hero.line2": "to the precision of code.",
    "hero.sub": "After five years in aeronautics with the French Army, I chose to turn toward code.",
    "hero.tag": "To go deeper into programming concepts, I chose to return to the basics by joining 42 Paris. Through C and C++, I strengthen my skills and build instincts grounded in how systems really work.",
    "hero.42.link": "Learn more about 42",
    "hero.cta.projects": "See my projects",
    "hero.cta.contact": "Get in touch",
    "hero.scroll": "Scroll",

    "parcours.num": "Journey",
    "parcours.title1": "Two experiences,",
    "parcours.title2": "one same standard.",
    "parcours.intro": "What connects the field to the code is the same logic: understand before acting, stay the course, take no shortcuts.",

    "s42.num": "42 Paris",
    "s42.title1": "A school",
    "s42.title2": "unlike any other.",
    "s42.intro": "Founded in Paris in 2013 by Xavier Niel, 42 has expanded across the globe. No lectures, no teachers — learning is built through projects and peer collaboration.",
    "s42.stat1.num": "50+",
    "s42.stat1.label": "campuses worldwide",
    "s42.stat2.num": "170k+",
    "s42.stat2.label": "students trained since 2013",
    "s42.stat3.num": "0",
    "s42.stat3.label": "teachers — pure peer learning",
    "s42.stat4.num": "Bac+5",
    "s42.stat4.label": "state-recognized RNCP certification",
    "s42.note": "Admissions by aptitude test (La Piscine), no degree required. Tuition-free.",

    "p.a.date": "April 2025 — present",
    "p.a.title": "42 Paris — Software development training",
    "p.a.desc": "Training in C and C++: memory management, concurrency, parsing, low-level programming. I learn project by project, trying to write clean code and to properly understand what I produce.",

    "p.c.date": "March 2020 — March 2025",
    "p.c.title": "Non-Commissioned Officer — French Army",
    "p.c.place": "National School of Active NCOs — Saint-Maixent-l'École, France",
    "p.c.desc": "Five years of operational leadership: team command, decision-making under pressure, cross-unit coordination.",

    "p.b.date": "June 2022 — December 2022",
    "p.b.title": "Aeronautical maintenance specialization",
    "p.b.place": "Franco-German training center (CFA PTL TIGRE) — Faßberg, Germany · as part of military service",
    "p.b.desc": "Technical training in aeronautical maintenance, in a Franco-German military environment.",

    "p.d.date": "June 2019",
    "p.d.title": "Scientific Baccalaureate — mathematics specialization",
    "p.d.place": "Lycée Privé Polyvalent La Trinité — Béziers, France",
    "p.d.desc": "Scientific baccalaureate, mathematics specialization.",

    "cap.num": "Direction",
    "cap.title1": "Specialization",
    "cap.title2": "AI &amp; data.",
    "cap.intro": "My 42 curriculum extends into a specialization in artificial intelligence and data science, certified <strong>RNCP 39774</strong> (master's level).",
    "cap.badge": "Specialization track",
    "cap.feature.h": "From low-level systems to applied AI.",
    "cap.feature.p": "After the basics in C/C++ and systems programming, I'm moving toward projects that connect machine learning, data preparation and AI integration, from theory to deployment.",
    "cap.link": "View RNCP 39774 certification",
    "cap.card1.h": "Curriculum pillars",
    "cap.card1.p": "ML, data pipelines and integration of models into real applications, through progressive and concrete projects.",
    "cap.card2.h": "Leaffliction",
    "cap.card2.p": "Image classification with a convolutional network: dataset prep, augmentation, training and evaluation of a vision model.",
    "cap.card3.h": "Multilayer Perceptron",
    "cap.card3.p": "A neural network built from scratch: forward pass, backprop, gradient descent, to understand optimization before reaching for frameworks.",

    "pr.num": "Projects",
    "pr.title1": "What",
    "pr.title2": "I've built.",
    "pr.intro": "A few 42 projects I'm currently working on: systems, concurrency, HTTP, containers.",
    "pr.webserv": "HTTP/1.1 server in C++: GET, POST, DELETE, CGI, multi-client handling. A team project that taught me a lot about reading RFCs carefully and organizing code that stays readable despite the complexity.",
    "pr.webserv.c1.h": "Trello board",
    "pr.webserv.c1.p": "Organized the project into sprints and shared tickets across team members.",
    "pr.webserv.c2.h": "State machine",
    "pr.webserv.c2.p": "HTTP connection handling is managed through a clear, explicit state machine.",
    "pr.webserv.c3.h": "Cyclomatic complexity",
    "pr.webserv.c3.p": "Team agreement to cap per-function complexity and keep the codebase maintainable.",
    "pr.webserv.c4.h": "Scalability",
    "pr.webserv.c4.p": "Architecture designed to integrate new modules without rewriting existing code.",
    "pr.inception": "Containerized infrastructure: Nginx (TLS), WordPress (PHP-FPM) and MariaDB orchestrated via Docker Compose. Persistent volumes, isolated network, reproducible images.",
    "pr.minishell": "A Unix shell in C: parsing, redirections, pipes, variable expansion, signal handling and built-ins. A good exercise for getting comfortable with system calls and process lifecycles.",
    "pr.minishell.c1.h": "AST",
    "pr.minishell.c1.p": "Parsing builds an abstract syntax tree that represents the full command before execution.",
    "pr.philo": "The dining philosophers problem in C, with threads and mutexes. A good playground for practicing synchronization and avoiding deadlocks.",
    "pr.see": "View on GitHub",

    "app.num": "Learning",
    "app.title1": "How",
    "app.title2": "I learn.",
    "app.intro": "At 42, you learn by doing and by going after the answers yourself. AI is a powerful tool and I use it regularly; during the learning phase, I simply try to pay attention to how I use it.",
    "app.q1.h": "AI, mostly to understand.",
    "app.q1.p": "I use it to rephrase a concept, compare approaches or decode an error message. On topics I'm currently learning, I prefer to write the code myself, to keep the learning active.",
    "app.q2.h": "Cross-check with the docs.",
    "app.q2.p": "RFCs, <em>man</em> pages, official docs: I keep coming back to them. AI answers fast, the docs answer right, and I lean on both depending on what I need.",
    "app.q3.h": "Understand what I commit.",
    "app.q3.p": "I try to be able to explain every line of my code. When I'm unsure about a suggestion, I re-read the docs or take the time to understand how it works before integrating it.",
    "app.sources.label": "My daily references:",

    "sk.num": "Skills",
    "sk.title1": "Tools,",
    "sk.title2": "and a way of working.",
    "sk.lang.h": "Languages",
    "sk.lang.tag": "core",
    "sk.tools.h": "Tools",
    "sk.tools.tag": "daily",
    "sk.core.h": "Programming &amp; architecture",
    "sk.core.tag": "fundamentals",
    "sk.core.c1": "Memory management",
    "sk.core.c2": "Concurrency &amp; threads",
    "sk.core.c3": "Algorithms &amp; data structures",
    "sk.core.c4": "Debugging (gdb, valgrind)",
    "sk.core.c5": "Parsing &amp; protocols",
    "sk.soft.h": "Work habits",
    "sk.soft.tag": "posture",
    "sk.soft.c1": "Autonomy",
    "sk.soft.c2": "Operational rigor",
    "sk.soft.c3": "Technical curiosity",
    "sk.soft.c4": "Teamwork",
    "sk.langs.h": "Languages",
    "sk.langs.tag": "written &amp; spoken",
    "sk.langs.fr": "French",
    "sk.langs.fr.lvl": "native",
    "sk.langs.en": "English",
    "sk.langs.es": "Spanish",
    "sk.other.h": "Beyond code",
    "sk.other.tag": "balance",
    "sk.other.c1": "Climbing",
    "sk.other.c2": "Piano",
    "sk.other.c3": "Judo · brown belt",
    "sk.other.c4": "Driver's licence (B)",
    "sk.lvl.solid": "solid",
    "sk.lvl.learn": "learning",
    "sk.lvl.use": "used",
    "sk.lvl.daily": "daily",

    "ct.num": "Contact",
    "ct.title1": "A job,",
    "ct.title2": "an internship, <span class=\"accent\">a coffee?</span>",
    "ct.lead": "I'm looking for a first role or internship where I can learn seriously and contribute concretely. If my profile resonates, write to me.",
    "ct.cta.cv": "Download my CV",

    "foot": "Paris."
  }
};

const SUPPORTED_LANGS = new Set(['fr', 'en']);

function normalizeLang(lang) {
  return SUPPORTED_LANGS.has(lang) ? lang : 'fr';
}

function splitHeroHeading() {
  // Wrap each word of the hero H1 in a span, then each char, to animate them.
  const h1 = document.querySelector('.hero h1');
  if (!h1) return;
  h1.querySelectorAll('span[data-i18n]').forEach((span) => {
    const text = span.textContent;
    if (!text) return;
    const words = text.split(/(\s+)/);
    span.innerHTML = '';
    let idx = 0;
    words.forEach((w) => {
      if (/^\s+$/.test(w)) {
        span.appendChild(document.createTextNode(' '));
        return;
      }
      const wrap = document.createElement('span');
      wrap.className = 'reveal-word';
      for (const ch of w) {
        const c = document.createElement('span');
        c.className = 'char';
        c.textContent = ch;
        c.style.setProperty('--i', idx++);
        wrap.appendChild(c);
      }
      span.appendChild(wrap);
    });
  });
}

function applyLang(lang) {
  const resolvedLang = normalizeLang(lang);
  document.documentElement.lang = resolvedLang;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (I18N[resolvedLang] && I18N[resolvedLang][key] != null) {
      el.innerHTML = I18N[resolvedLang][key];
    }
  });

  // Re-wrap hero characters after i18n substitution so the animation replays
  splitHeroHeading();

  document.querySelectorAll('.lang-toggle button').forEach((button) => {
    const isActive = button.dataset.lang === resolvedLang;
    button.classList.toggle('active', isActive);
    button.setAttribute('aria-pressed', isActive ? 'true' : 'false');
  });

  try {
    localStorage.setItem('lang', resolvedLang);
  } catch (e) {}
}

function getInitialLang() {
  try {
    const storedLang = localStorage.getItem('lang');
    if (SUPPORTED_LANGS.has(storedLang)) {
      return storedLang;
    }
  } catch (e) {}

  return (navigator.language || 'fr').toLowerCase().startsWith('en') ? 'en' : 'fr';
}

function initLanguageSwitcher() {
  document.querySelectorAll('.lang-toggle button').forEach((button) => {
    button.addEventListener('click', () => applyLang(button.dataset.lang));
  });

  applyLang(getInitialLang());
}

/* Mobile burger menu toggle */
function initBurgerMenu() {
  const burger = document.querySelector('.nav-burger');
  const menu = document.getElementById('primary-menu');
  if (!burger || !menu) return;

  const close = () => {
    burger.setAttribute('aria-expanded', 'false');
    burger.setAttribute('aria-label', 'Ouvrir le menu');
  };
  const open = () => {
    burger.setAttribute('aria-expanded', 'true');
    burger.setAttribute('aria-label', 'Fermer le menu');
  };

  burger.addEventListener('click', () => {
    const expanded = burger.getAttribute('aria-expanded') === 'true';
    expanded ? close() : open();
  });

  // Close menu when a nav link is clicked
  menu.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', () => {
      if (burger.getAttribute('aria-expanded') === 'true') close();
    });
  });

  // Close on resize to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 820) close();
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && burger.getAttribute('aria-expanded') === 'true') {
      close();
      burger.focus();
    }
  });
}

function initScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
  );

  const selectors = [
    '.reveal',
    '.t-item',
    '.projects-grid',
    '.cap-stack',
    '.cap-layout',
    '.skills-wrap',
    '.stagger',
    '.skill-group',
    '.learn-grid',
    '.learn-card',
    '.learn-sources'
  ];
  document.querySelectorAll(selectors.join(',')).forEach((el) => observer.observe(el));
}

/* Track scroll progress per section as a CSS custom prop (0 → 1). */
function initSectionProgress() {
  const sections = Array.from(document.querySelectorAll('main section, .timeline'));
  if (!sections.length) return;

  const update = () => {
    const vh = window.innerHeight;
    sections.forEach((sec) => {
      const r = sec.getBoundingClientRect();
      const total = r.height + vh;
      const passed = Math.min(total, Math.max(0, vh - r.top));
      const prog = total ? passed / total : 0;
      const entry = Math.min(1, Math.max(0, (vh - r.top) / vh));
      const exit = Math.min(1, Math.max(0, -r.top / r.height));
      sec.style.setProperty('--section-progress', prog.toFixed(3));
      sec.style.setProperty('--section-entry', entry.toFixed(3));
      sec.style.setProperty('--section-exit', exit.toFixed(3));
    });
  };

  let raf = false;
  const onScroll = () => {
    if (raf) return;
    raf = true;
    requestAnimationFrame(() => {
      update();
      raf = false;
    });
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  update();
}

/* Magnetic buttons — pull toward the cursor a few px */
function initMagnetic() {
  const strength = 16;
  document.querySelectorAll('.magnetic').forEach((el) => {
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      const relX = (e.clientX - r.left) / r.width - 0.5;
      const relY = (e.clientY - r.top) / r.height - 0.5;
      el.style.setProperty('--mag-x', `${(relX * strength).toFixed(2)}px`);
      el.style.setProperty('--mag-y', `${(relY * strength).toFixed(2)}px`);
      el.style.setProperty('--mag-lift', '-2px');
    });
    el.addEventListener('pointerleave', () => {
      el.style.setProperty('--mag-x', '0px');
      el.style.setProperty('--mag-y', '0px');
      el.style.setProperty('--mag-lift', '0px');
    });
  });
}

/* Custom cursor (desktop only) */
function initCustomCursor() {
  const isCoarse = window.matchMedia('(pointer: coarse)').matches;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (isCoarse || reduced) return;

  document.documentElement.classList.add('has-custom-cursor');

  window.addEventListener('pointermove', (e) => {
    document.documentElement.style.setProperty('--cursor-x', `${e.clientX}px`);
    document.documentElement.style.setProperty('--cursor-y', `${e.clientY}px`);
  }, { passive: true });

  const growTargets = 'a, button, .project, .cap-card, .cap-feature, .skill-group, .learn-card, .sk-chip';
  document.addEventListener('pointerover', (e) => {
    if (e.target.closest && e.target.closest(growTargets)) {
      document.documentElement.style.setProperty('--r-scale', '1.6');
      document.documentElement.style.setProperty('--c-scale', '0.4');
    }
  });
  document.addEventListener('pointerout', (e) => {
    if (e.target.closest && e.target.closest(growTargets)) {
      document.documentElement.style.setProperty('--r-scale', '1');
      document.documentElement.style.setProperty('--c-scale', '1');
    }
  });
}

/* Contact card 3D tilt */
function initContactTilt() {
  const card = document.querySelector('.contact-inner');
  if (!card) return;
  const box = card.parentElement;
  if (!box) return;

  box.addEventListener('pointermove', (e) => {
    const r = card.getBoundingClientRect();
    const relX = (e.clientX - r.left) / r.width - 0.5;
    const relY = (e.clientY - r.top) / r.height - 0.5;
    card.style.setProperty('--ctiltY', `${(relX * 6).toFixed(2)}deg`);
    card.style.setProperty('--ctiltX', `${(-relY * 5).toFixed(2)}deg`);
  });
  box.addEventListener('pointerleave', () => {
    card.style.setProperty('--ctiltX', '0deg');
    card.style.setProperty('--ctiltY', '0deg');
  });
}

function initParallaxAndRail() {
  const navEl = document.querySelector('nav.top');
  const blobs = Array.from(document.querySelectorAll('.blob'));
  const sectionEls = Array.from(document.querySelectorAll('main section[id]'));
  const railLinks = Array.from(document.querySelectorAll('.dynamic-rail a[data-rail]'));

  function updateRailActive(scrollY) {
    if (!sectionEls.length || !railLinks.length) return;

    const probe = scrollY + window.innerHeight * 0.36;
    let currentId = sectionEls[0].id;

    sectionEls.forEach((sec) => {
      if (sec.offsetTop <= probe) currentId = sec.id;
    });

    railLinks.forEach((link) => {
      link.classList.toggle('active', link.dataset.rail === currentId);
    });
  }

  let ticking = false;

  function onScroll() {
    if (ticking) return;

    window.requestAnimationFrame(() => {
      const scrollY = window.scrollY;
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const progress = Math.min(1, scrollY / maxScroll);
      document.documentElement.style.setProperty('--scroll-progress', progress.toFixed(3));

      const bgStart = [239, 224, 207];
      const bgEnd = [224, 204, 184];
      const bgR = Math.round(bgStart[0] + (bgEnd[0] - bgStart[0]) * progress);
      const bgG = Math.round(bgStart[1] + (bgEnd[1] - bgStart[1]) * progress);
      const bgB = Math.round(bgStart[2] + (bgEnd[2] - bgStart[2]) * progress);
      document.body.style.backgroundColor = `rgb(${bgR}, ${bgG}, ${bgB})`;

      if (navEl) {
        const navBgAlpha = (0.74 + progress * 0.18).toFixed(2);
        const navBorderAlpha = (0.06 + progress * 0.06).toFixed(2);
        navEl.style.background = `rgba(239,224,207,${navBgAlpha})`;
        navEl.style.borderBottomColor = `rgba(43,37,35,${navBorderAlpha})`;
      }

      document.documentElement.classList.toggle('is-scrolled', scrollY > 24);

      updateRailActive(scrollY);

      blobs.forEach((blob) => {
        const speed = parseFloat(blob.dataset.speed || '0.2');
        blob.style.transform = `translate3d(0, ${-scrollY * speed}px, 0)`;
      });

      ticking = false;
    });

    ticking = true;
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

function initPointerGlow() {
  window.addEventListener(
    'pointermove',
    (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      document.documentElement.style.setProperty('--mx', `${x.toFixed(2)}%`);
      document.documentElement.style.setProperty('--my', `${y.toFixed(2)}%`);
    },
    { passive: true }
  );
}

function initProjectCards() {
  document.querySelectorAll('.project').forEach((card) => {
    card.addEventListener('pointermove', (e) => {
      const r = card.getBoundingClientRect();
      const relX = (e.clientX - r.left) / r.width;
      const relY = (e.clientY - r.top) / r.height;
      card.style.setProperty('--mx', `${(relX * 100).toFixed(1)}%`);
      card.style.setProperty('--my', `${(relY * 100).toFixed(1)}%`);

      const tiltY = (relX - 0.5) * 12;
      const tiltX = (0.5 - relY) * 10;
      card.style.setProperty('--tiltY', `${tiltY.toFixed(2)}deg`);
      card.style.setProperty('--tiltX', `${tiltX.toFixed(2)}deg`);
    });

    card.addEventListener('pointerleave', () => {
      card.style.setProperty('--tiltY', '0deg');
      card.style.setProperty('--tiltX', '0deg');
    });
  });
}

initLanguageSwitcher();
initBurgerMenu();
initScrollReveal();
initSectionProgress();
initParallaxAndRail();
initPointerGlow();
initProjectCards();
initMagnetic();
initCusto