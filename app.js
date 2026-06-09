/* ============================================================
   IGLESIA MANANTIALES — interacción v2
   ES por defecto · EN vía diccionario · agenda semanal en vivo
   ============================================================ */
(function () {
  "use strict";

  /* ---------- Diccionario inglés ---------- */
  var EN = {
    "nav.about": "about", "nav.purpose": "purpose", "nav.week": "this week",
    "nav.events": "events", "nav.world": "churches", "nav.social": "social",
    "rail.home": "home",
    "cta.sunday": "join us sunday",

    "hero.eyebrow": "Manantiales · Santiago · Chile",
    "hero.title": "Waters that <span class=\"l2\">give life</span>",
    "hero.verse": "\u201cWhoever believes in me, as Scripture has said, rivers of living water will flow from within them.\u201d",
    "hero.verseRef": "John 7:38",
    "hero.know": "get to know us",

    "stat.years": "years of history", "stat.churches": "congregations",
    "stat.countries": "countries", "stat.sinceL": "since San Bernardo",

    "about.kicker": "Who we are",
    "about.title": "Committed to <em>family.</em>",
    "about.body": "Manantiales began in 2004 in San Bernardo, Santiago de Chile. We are a family that believes in the power of transformation: we walk with people as they grow, we strengthen families and we serve with generosity. Our heart is to share the gospel of Jesus and bring hope to every life.",
    "about.verse": "\u201cTherefore go and make disciples of all nations\u2026\u201d",
    "about.verseRef": "Matthew 28:19 · NIV",
    "about.badge": "where it began",

    "identity.kicker": "Manantiales is",
    "identity.1": "a church", "identity.2": "an apostolic anointing",
    "identity.3": "a prophetic spirit", "identity.4": "a pastoral heart",

    "adn.kicker": "Our DNA",
    "adn.title": "Three pillars that shape how we live out our faith.",
    "adn.1t": "Worship",
    "adn.1d": "We live to honor God in everything \u2014 in Sunday's gathering and in every day of the week.",
    "adn.1v": "\u201c\u2026to the praise of the glory of his grace, by which he made us accepted in the Beloved.\u201d",
    "adn.1r": "Ephesians 1:6",
    "adn.2t": "Family",
    "adn.2d": "We are community. In our home groups, house to house, real discipleship happens.",
    "adn.2v": "\u201c\u2026let us do good to all, especially to those who belong to the family of believers.\u201d",
    "adn.2r": "Galatians 6:10",
    "adn.3t": "Service",
    "adn.3d": "We are called to go. The Son of Man did not come to be served, but to serve.",
    "adn.3v": "\u201c\u2026whoever wants to become great among you must be your servant.\u201d",
    "adn.3r": "Matthew 20:26-28",

    "prop.kicker": "Wells of Manantiales",
    "prop.title": "We are the salt that heals the land to make God's <em>spring flow.</em>",
    "prop.sub": "We open wells to bring waters that give life to the thirsty \u2014 a church full of life, of joy and of the life of the Spirit.",
    "prop.verse": "\u201cFor the Lord your God is bringing you into a good land\u2014a land with streams and pools of water, with springs flowing.\u201d",
    "prop.verseRef": "Deuteronomy 8:7",

    "week.kicker": "This week",
    "week.title": "We gather every <em>Sunday.</em>",
    "week.svc": "Family gathering · the whole congregation",
    "week.map": "get directions",

    "cal.today": "today",
    "cal.note": "Reference calendar — send us the real monthly activities and we'll finalize it.",

    "ev.kicker": "Upcoming events · 2026",
    "ev.title": "What's <em>coming up.</em>",
    "ev.lead": "Gatherings that mark the year. Save the date and connect \u2014 admission is announced on our social channels.",
    "ev.next": "Next", "ev.more": "more info",
    "ev.bethelK": "Gathering", "ev.bethelT": "Bethel",
    "ev.bethelP": "Three days to encounter the presence of God and renew the heart of the church.",
    "ev.jovenesK": "Youth", "ev.jovenesT": "Youth Conference",
    "ev.jovenesP": "A new generation that wants to encounter God. Worship, the Word and community.",
    "ev.codigoK": "Gathering", "ev.codigoT": "Code 7",
    "ev.codigoP": "Two days of training and momentum for those who want to grow and serve with purpose.",
    "ev.principalK": "Main conference", "ev.principalT": "Manantiales Conference",
    "ev.principalP": "The year's central gathering. Four days of the Manantiales family together, with guests from Chile and the world.",

    "world.kicker": "Manantiales around the world",
    "world.title": "One vision, <em>many homes.</em>",
    "world.lead": "From the San Bernardo campus, the Manantiales family has grown into daughter churches across Chile and Argentina.",
    "world.chile": "7 congregations", "world.argentina": "6 congregations",
    "world.sede": "Main campus",

    "red.kicker": "Connect",
    "red.title": "Follow along and <em>don't miss a thing.</em>",
    "red.lead": "Messages, events and the word of each week. We're wherever you are.",
    "red.follow": "follow", "red.like": "view page", "red.watch": "watch messages",

    "band.title": "Your place at the table <em>is already set.</em>",

    "gal.kicker": "The family",
    "gal.title": "This is <em>Manantiales.</em>",

    "foot.visit": "Visit us", "foot.sunday": "Sundays · 11:00",
    "foot.follow": "Follow us", "foot.tag": "Waters that give life · San Bernardo · Chile"
  };

  var lang = "es";

  /* ---------- i18n ---------- */
  var els = Array.prototype.slice.call(document.querySelectorAll("[data-i18n],[data-i18n-html]"));
  els.forEach(function (el) {
    var isHtml = el.hasAttribute("data-i18n-html");
    el.__es = isHtml ? el.innerHTML : el.textContent;
  });
  function keyOf(el) { return el.getAttribute("data-i18n") || el.getAttribute("data-i18n-html"); }

  function setLang(l) {
    lang = l;
    els.forEach(function (el) {
      var isHtml = el.hasAttribute("data-i18n-html");
      var k = keyOf(el);
      var val = l === "en" ? (EN[k] != null ? EN[k] : el.__es) : el.__es;
      if (isHtml) el.innerHTML = val; else el.textContent = val;
    });
    document.documentElement.lang = l;
    document.querySelectorAll(".lang button").forEach(function (b) {
      b.classList.toggle("active", b.getAttribute("data-lang") === l);
    });
    try { localStorage.setItem("man_lang", l); } catch (e) {}
    renderCal();
    if (typeof reposInd === "function") reposInd();
  }

  document.querySelectorAll(".lang button").forEach(function (b) {
    b.addEventListener("click", function () { setLang(b.getAttribute("data-lang")); });
  });

  /* ---------- Navbar al hacer scroll ---------- */
  var nav = document.getElementById("nav");
  function onScroll() {
    if (window.scrollY > 24) nav.classList.add("scrolled");
    else nav.classList.remove("scrolled");
    revealCheck();
    maybeAnimateCal();
    updateSpy();
  }
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- Scroll-spy: marca la sección actual ---------- */
  var sideRail = document.getElementById("sideRail");
  var railLine = document.querySelector(".side-rail-line");
  var railThumb = document.querySelector(".side-rail-thumb");
  var railItems = Array.prototype.slice.call(document.querySelectorAll(".side-rail .sr-item"));
  var mobileLinks = Array.prototype.slice.call(document.querySelectorAll('.mobile-links a[href^="#"]'));
  var spyTargets = railItems.map(function (it) {
    var id = it.getAttribute("href");
    return { id: id, item: it, el: document.querySelector(id) };
  }).filter(function (t) { return t.el; });
  var currentSpy = null;
  var thumbShown = false;

  function moveThumb(item) {
    if (!railThumb || !railLine || !item) return;
    var lr = railLine.getBoundingClientRect();
    var ir = item.getBoundingClientRect();
    if (!thumbShown) railThumb.style.transition = "none"; // primera vez: sin animar
    railThumb.style.height = ir.height + "px";
    railThumb.style.transform = "translateY(" + (ir.top - lr.top) + "px)";
    if (!thumbShown) { void railThumb.offsetWidth; railThumb.style.transition = ""; thumbShown = true; }
  }

  function setActive(id) {
    if (id === currentSpy) return;
    currentSpy = id;
    var activeItem = null;
    spyTargets.forEach(function (t) {
      var on = t.id === id;
      t.item.classList.toggle("active", on);
      if (on) activeItem = t.item;
    });
    mobileLinks.forEach(function (a) {
      a.classList.toggle("active", a.getAttribute("href") === id);
    });
    if (activeItem) moveThumb(activeItem);
  }

  function updateSpy() {
    var probe = (window.innerHeight || 800) * 0.32;
    var best = "#top";
    for (var i = 0; i < spyTargets.length; i++) {
      if (spyTargets[i].id === "#top") continue;
      var r = spyTargets[i].el.getBoundingClientRect();
      if (r.top - probe <= 0) best = spyTargets[i].id;
    }
    if (window.scrollY < 80) best = "#top";
    setActive(best);
  }
  function reposInd() {
    var act = spyTargets.filter(function (t) { return t.id === currentSpy; })[0];
    if (act) moveThumb(act.item);
  }
  window.addEventListener("resize", reposInd);

  /* ---------- Menú móvil (hamburguesa) ---------- */
  var navToggle = document.getElementById("navToggle");
  var mobileMenu = document.getElementById("mobileMenu");
  var menuOpen = false;

  function openMenu() {
    if (!mobileMenu) return;
    mobileMenu.hidden = false;
    // forzar reflow para que la transición corra
    void mobileMenu.offsetWidth;
    mobileMenu.classList.add("open");
    navToggle.setAttribute("aria-expanded", "true");
    navToggle.setAttribute("aria-label", "Cerrar menú");
    menuOpen = true;
  }
  function closeMenu() {
    if (!mobileMenu) return;
    mobileMenu.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Abrir menú");
    menuOpen = false;
    setTimeout(function () { if (!menuOpen) mobileMenu.hidden = true; }, 300);
  }
  if (navToggle) {
    navToggle.addEventListener("click", function () {
      if (menuOpen) closeMenu(); else openMenu();
    });
  }
  mobileLinks.forEach(function (a) {
    a.addEventListener("click", function () { closeMenu(); });
  });
  // cerrar al tocar fuera
  document.addEventListener("click", function (e) {
    if (!menuOpen) return;
    if (mobileMenu.contains(e.target) || navToggle.contains(e.target)) return;
    closeMenu();
  });
  // cerrar al pasar a escritorio
  window.addEventListener("resize", function () {
    if (window.innerWidth > 880 && menuOpen) closeMenu();
  });

  /* ---------- Reveal (robusto en entornos sin repintado) ---------- */
  var reveals = Array.prototype.slice.call(document.querySelectorAll(".reveal, .reveal-mask"));
  function showEl(el) {
    if (el.classList.contains("in")) return;
    el.classList.add("in");
    setTimeout(function () {
      el.style.transition = "none";
      el.style.opacity = "1";
      el.style.transform = "none";
      el.style.clipPath = "none";
    }, 1300);
  }
  function revealCheck() {
    var vh = window.innerHeight || document.documentElement.clientHeight;
    for (var i = 0; i < reveals.length; i++) {
      var el = reveals[i];
      if (el.classList.contains("in")) continue;
      var r = el.getBoundingClientRect();
      if (r.top < vh * 0.92 && r.bottom > 0) showEl(el);
    }
  }

  /* ---------- Calendario mensual ---------- */
  // Eventos referenciales — reemplazar por los reales.
  var WEEKLY = {
    0: [{ t: "11:00", es: "Culto de Familia", en: "Family Service", cls: "ev-teal" }],
    6: [
      { t: "17:00", es: "MLSS Teens", en: "MLSS Teens", cls: "ev-violet" },
      { t: "19:00", es: "MLSS", en: "MLSS", cls: "ev-amber" }
    ]
  };
  var DATED = {
    "2026-6-6":  [{ t: "11:00", es: "Rise Up", en: "Rise Up", cls: "ev-amber" }],
    "2026-6-26": [{ t: "20:30", es: "Valientes", en: "Valientes", cls: "ev-amber" }],
    "2026-6-30": [{ t: "20:30", es: "Discipulado", en: "Discipleship", cls: "ev-violet" }]
  };
  var RANGES = [
    { s: "2026-6-12", e: "2026-6-13", es: "Retiro de Líderes", en: "Leaders Retreat", cls: "bar-amber" },
    { s: "2026-6-19", e: "2026-6-21", es: "BETHEL", en: "BETHEL", cls: "bar-brown" },
    { s: "2026-6-27", e: "2026-6-27", es: "MLSS Talleres", en: "MLSS Workshops", cls: "bar-violet" },
    { s: "2026-7-17", e: "2026-7-19", es: "Conf. de Jóvenes", en: "Youth Conf.", cls: "bar-brown" },
    { s: "2026-8-7",  e: "2026-8-8",  es: "Código 7", en: "Code 7", cls: "bar-amber" },
    { s: "2026-10-22", e: "2026-10-25", es: "Conf. Manantiales", en: "Manantiales Conf.", cls: "bar-brown" }
  ];

  var MONTHS = {
    es: ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],
    en: ["January","February","March","April","May","June","July","August","September","October","November","December"]
  };
  var DOW_LABELS = {
    es: ["Dom","Lun","Mar","Mié","Jue","Vie","Sáb"],
    en: ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
  };

  var calMonthEl = document.getElementById("calMonth");
  var calDowEl = document.getElementById("calDow");
  var calGridEl = document.getElementById("calGrid");
  var calLegendEl = document.getElementById("calLegend");
  var calListEl = document.getElementById("calList");
  var today = new Date();
  var viewY = today.getFullYear();
  var viewM = today.getMonth();

  // Color por tipo de evento (para puntos y lista)
  var CLS_COLOR = {
    "ev-teal": "#41C2B1", "bar-teal": "#41C2B1",
    "ev-amber": "#E9C46A", "bar-amber": "#E9C46A",
    "ev-violet": "#9d8cff", "bar-violet": "#9d8cff",
    "bar-brown": "#cf9b63", "ev-brown": "#cf9b63"
  };
  function colorOf(cls) { return CLS_COLOR[cls] || "#879189"; }

  function keyOfDate(d) { return d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate(); }
  function sameDay(a, b) { return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate(); }
  function parseKey(k) { var p = k.split("-"); return new Date(+p[0], +p[1] - 1, +p[2]); }

  function rangesForDate(d) {
    var out = [];
    for (var i = 0; i < RANGES.length; i++) {
      var r = RANGES[i], s = parseKey(r.s), e = parseKey(r.e);
      var dd = new Date(d.getFullYear(), d.getMonth(), d.getDate());
      if (dd >= new Date(s.getFullYear(), s.getMonth(), s.getDate()) &&
          dd <= new Date(e.getFullYear(), e.getMonth(), e.getDate())) {
        out.push({ r: r, isStart: sameDay(dd, s) });
      }
    }
    return out;
  }

  function renderCal() {
    if (!calGridEl) return;
    calMonthEl.textContent = MONTHS[lang][viewM] + " " + viewY;

    calDowEl.innerHTML = "";
    for (var i = 0; i < 7; i++) {
      var sp = document.createElement("span");
      sp.textContent = DOW_LABELS[lang][i];
      calDowEl.appendChild(sp);
    }

    calGridEl.innerHTML = "";
    var first = new Date(viewY, viewM, 1);
    var startDow = first.getDay();
    var gridStart = new Date(viewY, viewM, 1 - startDow);

    for (var c = 0; c < 42; c++) {
      var d = new Date(gridStart.getFullYear(), gridStart.getMonth(), gridStart.getDate() + c);
      var inMonth = d.getMonth() === viewM;
      var cell = document.createElement("div");
      cell.className = "cal-cell" + (inMonth ? "" : " other") + (sameDay(d, today) ? " today" : "");

      var num = document.createElement("div");
      num.className = "cal-num";
      num.textContent = d.getDate();
      cell.appendChild(num);
      cell.style.setProperty("--i", c);

      (function (dd, cellRef) {
        var dotColors = [];
        var rs = rangesForDate(dd);
        rs.forEach(function (item) {
          var bar = document.createElement("div");
          var showLabel = item.isStart || dd.getDay() === 0;
          bar.className = "cal-bar " + item.r.cls + (showLabel ? "" : " cont");
          bar.textContent = showLabel ? (lang === "en" ? item.r.en : item.r.es) : "·";
          cellRef.appendChild(bar);
          dotColors.push(colorOf(item.r.cls));
        });

        var evs = [];
        if (WEEKLY[dd.getDay()]) evs = evs.concat(WEEKLY[dd.getDay()]);
        if (DATED[keyOfDate(dd)]) evs = evs.concat(DATED[keyOfDate(dd)]);
        evs.sort(function (a, b) { return a.t.localeCompare(b.t); });

        var maxShow = 3;
        evs.slice(0, maxShow).forEach(function (ev) {
          var el = document.createElement("div");
          el.className = "cal-ev " + ev.cls;
          el.innerHTML = '<span class="t">' + ev.t + '</span><span class="n">' + (lang === "en" ? ev.en : ev.es) + '</span>';
          cellRef.appendChild(el);
        });
        if (evs.length > maxShow) {
          var more = document.createElement("div");
          more.className = "cal-more";
          more.textContent = "+" + (evs.length - maxShow) + (lang === "en" ? " more" : " más");
          cellRef.appendChild(more);
        }
        evs.forEach(function (ev) { dotColors.push(colorOf(ev.cls)); });

        // Puntos resumen (visibles solo en móvil)
        if (dotColors.length) {
          var dots = document.createElement("div");
          dots.className = "cal-dots";
          dotColors.slice(0, 4).forEach(function (col) {
            var dd2 = document.createElement("span");
            dd2.className = "dot";
            dd2.style.background = col;
            dots.appendChild(dd2);
          });
          cellRef.appendChild(dots);
        }
      })(d, cell);

      calGridEl.appendChild(cell);
    }

    if (calLegendEl) {
      var legend = [
        { c: "var(--teal-bright)", es: "Culto de Familia", en: "Family Service" },
        { c: "#9d8cff", es: "MLSS / Teens", en: "MLSS / Teens" },
        { c: "var(--amber)", es: "Encuentros", en: "Gatherings" },
        { c: "#5a4632", es: "Conferencias", en: "Conferences" }
      ];
      calLegendEl.innerHTML = "";
      legend.forEach(function (lg) {
        var w = document.createElement("div");
        w.className = "lg";
        w.innerHTML = '<span class="sw" style="background:' + lg.c + '"></span>' + (lang === "en" ? lg.en : lg.es);
        calLegendEl.appendChild(w);
      });
    }

    // Lista mensual (visible solo en móvil)
    if (calListEl) {
      calListEl.innerHTML = "";
      var shortMonth = MONTHS[lang][viewM].slice(0, 3).toLowerCase();
      var daysInMonth = new Date(viewY, viewM + 1, 0).getDate();
      var anyRows = false;
      for (var day = 1; day <= daysInMonth; day++) {
        var ld = new Date(viewY, viewM, day);
        var items = [];
        RANGES.forEach(function (r) {
          var s = parseKey(r.s);
          if (s.getFullYear() === viewY && s.getMonth() === viewM && s.getDate() === day) {
            var e = parseKey(r.e);
            var tm = sameDay(s, e) ? "" : (s.getDate() + "–" + e.getDate() + " " + shortMonth);
            items.push({ color: colorOf(r.cls), nm: (lang === "en" ? r.en : r.es), tm: tm });
          }
        });
        (WEEKLY[ld.getDay()] || []).forEach(function (ev) {
          items.push({ color: colorOf(ev.cls), nm: (lang === "en" ? ev.en : ev.es), tm: ev.t });
        });
        (DATED[keyOfDate(ld)] || []).forEach(function (ev) {
          items.push({ color: colorOf(ev.cls), nm: (lang === "en" ? ev.en : ev.es), tm: ev.t });
        });
        if (!items.length) continue;
        anyRows = true;
        items.sort(function (a, b) {
          var ra = /^\d{1,2}:\d{2}/.test(a.tm) ? a.tm : "00:00";
          var rb = /^\d{1,2}:\d{2}/.test(b.tm) ? b.tm : "00:00";
          return ra.localeCompare(rb);
        });

        var li = document.createElement("div");
        li.className = "cal-list-li";
        var isToday = sameDay(ld, today);
        var evsHtml = items.map(function (it) {
          return '<div class="cal-list-ev"><span class="dot" style="background:' + it.color + '"></span>' +
                 '<span class="nm">' + it.nm + '</span>' +
                 (it.tm ? '<span class="tm">' + it.tm + '</span>' : '') + '</div>';
        }).join("");
        li.innerHTML =
          '<div class="cal-list-date' + (isToday ? ' is-today' : '') + '"><b>' + day + '</b><span>' + DOW_LABELS[lang][ld.getDay()] + '</span></div>' +
          '<div class="cal-list-evs">' + evsHtml + '</div>';
        calListEl.appendChild(li);
      }
      if (!anyRows) {
        var empty = document.createElement("div");
        empty.className = "cal-list-empty";
        empty.textContent = lang === "en" ? "No activities this month." : "Sin actividades este mes.";
        calListEl.appendChild(empty);
      }
    }
  }

  var calEl = document.querySelector(".cal");
  var prefersReducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var calHasAnimated = false;

  function animateCalCells() {
    if (!calGridEl || prefersReducedMotion) return;
    calGridEl.classList.remove("go");
    void calGridEl.offsetWidth; // forzar reflow para reiniciar la animación
    calGridEl.classList.add("go");
    // Watchdog: al terminar la animación quitamos la clase para que las celdas
    // queden en su estado final (visible), incluso en entornos que la congelan.
    clearTimeout(calGridEl.__animT);
    calGridEl.__animT = setTimeout(function () {
      calGridEl.classList.remove("go");
    }, 1400);
  }
  function maybeAnimateCal() {
    if (!calEl || !calGridEl || prefersReducedMotion) return;
    if (calHasAnimated) return; // solo la primera vez que entra en vista
    var r = calEl.getBoundingClientRect();
    var vh = window.innerHeight || document.documentElement.clientHeight;
    if (r.top < vh * 0.82 && r.bottom > 0) {
      calHasAnimated = true;
      animateCalCells();
    }
  }

  (function bindCal() {
    var prev = document.getElementById("calPrev");
    var next = document.getElementById("calNext");
    var todayBtn = document.getElementById("calToday");
    if (prev) prev.addEventListener("click", function () { viewM--; if (viewM < 0) { viewM = 11; viewY--; } renderCal(); animateCalCells(); });
    if (next) next.addEventListener("click", function () { viewM++; if (viewM > 11) { viewM = 0; viewY++; } renderCal(); animateCalCells(); });
    if (todayBtn) todayBtn.addEventListener("click", function () { viewY = today.getFullYear(); viewM = today.getMonth(); renderCal(); animateCalCells(); });
  })();

  /* ---------- Scroll suave para anclas ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener("click", function (e) {
      var id = a.getAttribute("href");
      if (id.length < 2) return;
      var t = document.querySelector(id);
      if (!t) return;
      e.preventDefault();
      var y = t.getBoundingClientRect().top + window.scrollY - 86;
      window.scrollTo({ top: y, behavior: "smooth" });
    });
  });

  /* ---------- Init ---------- */
  var saved = "es";
  try { saved = localStorage.getItem("man_lang") || "es"; } catch (e) {}
  setLang(saved); // setLang también renderiza el calendario
  onScroll();
  window.addEventListener("resize", revealCheck);
  window.addEventListener("load", function () { setTimeout(function () { revealCheck(); maybeAnimateCal(); }, 60); });
})();
