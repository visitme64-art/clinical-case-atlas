/* ==========================================================
   CLINICAL CASE ATLAS BANGLADESH - app.js
   Menu, search, specialty cards, filters, recently viewed
   and bookmarks.

   Depends on: data.js and storage.js (loaded before this file)
   ========================================================== */

(function () {
  "use strict";

  var DATA = window.ATLAS_DATA;
  var STORE = window.ATLAS_STORE;

  if (!DATA || !STORE) {
    if (window.console) console.error("Clinical Case Atlas: data.js and storage.js must load before app.js");
    return;
  }

  var HOME_LIMIT = 12;          // cards shown on the home page when "All" is selected
  var activeCategory = "all";

  /* ---------- Small helpers ---------- */
  function $(id) { return document.getElementById(id); }

  function escapeHtml(text) {
    return String(text)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function specialtyUrl(id) { return "specialty.html?id=" + encodeURIComponent(id); }
  function moduleUrl(id) { return "modules.html?m=" + encodeURIComponent(id); }

  /* ---------- Footer year ---------- */
  function setYear() {
    var el = $("year");
    if (el) el.textContent = new Date().getFullYear();
  }

  /* ---------- Mobile menu ---------- */
  function initMenu() {
    var btn = $("menuBtn");
    var nav = $("navLinks");
    if (!btn || !nav) return;

    function closeMenu() {
      nav.classList.remove("open");
      btn.setAttribute("aria-expanded", "false");
      btn.setAttribute("aria-label", "Open menu");
    }

    btn.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
      btn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });

    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) closeMenu();
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeMenu();
    });
  }

  /* ---------- Specialty cards ---------- */
  function specialtyCardHtml(sp) {
    var cat = DATA.getCategory(sp.category);
    var saved = STORE.isBookmarked("specialty", sp.id);

    return (
      '<article class="specialty-card">' +
        '<a class="s-main" data-track="specialty" data-id="' + escapeHtml(sp.id) + '" href="' + specialtyUrl(sp.id) + '" ' +
          'style="display:flex;align-items:center;gap:12px;flex:1;min-width:0;color:inherit;text-decoration:none;">' +
          '<span class="s-icon" aria-hidden="true">' + sp.icon + '</span>' +
          '<div class="s-body">' +
            '<h3>' + escapeHtml(sp.name) + '</h3>' +
            '<p>' + escapeHtml(sp.desc) + '</p>' +
            (cat ? '<span class="badge">' + escapeHtml(cat.name) + '</span>' : '') +
          '</div>' +
        '</a>' +
        '<button type="button" class="bookmark-btn' + (saved ? ' saved' : '') + '" ' +
          'data-bookmark="' + escapeHtml(sp.id) + '" ' +
          'aria-pressed="' + (saved ? 'true' : 'false') + '" ' +
          'aria-label="' + (saved ? 'Remove bookmark: ' : 'Bookmark: ') + escapeHtml(sp.name) + '" ' +
          'title="' + (saved ? 'Remove bookmark' : 'Bookmark') + '">' +
          (saved ? '★' : '☆') +
        '</button>' +
      '</article>'
    );
  }

  function renderSpecialties() {
    var grid = $("specialtyGrid");
    if (!grid) return;

    var isHome = !!$("modules");   // the home page has a #modules section
    var list = DATA.specialties.filter(function (sp) {
      return activeCategory === "all" || sp.category === activeCategory;
    });

    var total = list.length;
    if (isHome && activeCategory === "all") list = list.slice(0, HOME_LIMIT);

    if (!list.length) {
      grid.innerHTML = '<p>No specialties found in this category.</p>';
      return;
    }

    grid.innerHTML = list.map(specialtyCardHtml).join("");
  }

  function initBookmarkButtons() {
    var grid = $("specialtyGrid");
    if (!grid) return;

    grid.addEventListener("click", function (e) {
      var btn = e.target.closest(".bookmark-btn");
      if (!btn) return;

      var id = btn.getAttribute("data-bookmark");
      var nowSaved = STORE.toggleBookmark("specialty", id);
      var sp = DATA.getSpecialty(id);
      var name = sp ? sp.name : "";

      btn.classList.toggle("saved", nowSaved);
      btn.setAttribute("aria-pressed", nowSaved ? "true" : "false");
      btn.setAttribute("aria-label", (nowSaved ? "Remove bookmark: " : "Bookmark: ") + name);
      btn.setAttribute("title", nowSaved ? "Remove bookmark" : "Bookmark");
      btn.textContent = nowSaved ? "★" : "☆";
    });
  }

  /* ---------- Filter chips ---------- */
  function renderChips() {
    var wrap = $("filterChips");
    if (!wrap) return;

    var html = '<button type="button" class="chip active" data-cat="all" aria-pressed="true">All</button>';
    DATA.categories.forEach(function (c) {
      html += '<button type="button" class="chip" data-cat="' + escapeHtml(c.id) + '" aria-pressed="false">' +
              escapeHtml(c.name) + '</button>';
    });
    wrap.innerHTML = html;

    wrap.addEventListener("click", function (e) {
      var chip = e.target.closest(".chip");
      if (!chip) return;

      activeCategory = chip.getAttribute("data-cat");
      var chips = wrap.querySelectorAll(".chip");
      for (var i = 0; i < chips.length; i++) {
        var on = chips[i] === chip;
        chips[i].classList.toggle("active", on);
        chips[i].setAttribute("aria-pressed", on ? "true" : "false");
      }
      renderSpecialties();
    });
  }

  /* ---------- Search ---------- */
  function runSearch(query) {
    var q = query.trim().toLowerCase();
    var results = [];
    if (!q) return results;

    DATA.specialties.forEach(function (sp) {
      var cat = DATA.getCategory(sp.category);
      var haystack = (sp.name + " " + sp.desc + " " + (cat ? cat.name : "")).toLowerCase();
      if (haystack.indexOf(q) !== -1) {
        results.push({ type: "specialty", id: sp.id, name: sp.name, icon: sp.icon, label: "Specialty", url: specialtyUrl(sp.id) });
      }
    });

    DATA.modules.forEach(function (m) {
      var haystack = (m.name + " " + m.desc).toLowerCase();
      if (haystack.indexOf(q) !== -1) {
        results.push({ type: "module", id: m.id, name: m.name, icon: m.icon, label: "Module", url: moduleUrl(m.id) });
      }
    });

    return results;
  }

  function showSearchResults(query) {
    var box = $("searchResults");
    if (!box) return;

    if (!query.trim()) {
      box.hidden = true;
      box.innerHTML = "";
      return;
    }

    var results = runSearch(query);
    if (!results.length) {
      box.innerHTML = '<div class="no-result">No matches found. Try another word.</div>';
      box.hidden = false;
      return;
    }

    box.innerHTML = results.slice(0, 8).map(function (r) {
      return '<a href="' + r.url + '" data-track="' + r.type + '" data-id="' + escapeHtml(r.id) + '">' +
               '<span aria-hidden="true">' + r.icon + '</span>' +
               '<span>' + escapeHtml(r.name) + '</span>' +
               '<small>' + r.label + '</small>' +
             '</a>';
    }).join("");
    box.hidden = false;
  }

  function initSearch() {
    var form = $("searchForm");
    var input = $("searchInput");
    var box = $("searchResults");
    if (!form || !input || !box) return;

    input.addEventListener("input", function () {
      showSearchResults(input.value);
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      showSearchResults(input.value);
    });

    document.addEventListener("click", function (e) {
      if (!form.contains(e.target) && !box.contains(e.target)) {
        box.hidden = true;
      }
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") box.hidden = true;
    });
  }

  /* ---------- Recently viewed tracking ---------- */
  // When someone opens a specialty or module link marked data-track,
  // or a module card on the home page, record it as recently viewed.
  function initTracking() {
    document.addEventListener("click", function (e) {
      var link = e.target.closest("a");
      if (!link) return;

      var type = link.getAttribute("data-track");
      var id = link.getAttribute("data-id");

      if (!type) {
        var href = link.getAttribute("href") || "";
        var match = href.match(/^modules\.html\?m=([^&#]+)/);
        if (match) {
          type = "module";
          id = decodeURIComponent(match[1]);
        }
      }

      if (type && id) STORE.addRecent(type, id);
    });
  }

  /* ---------- Recent + bookmark lists, stats ---------- */
  function listHtml(items, emptyText) {
    if (!items.length) return '<li class="empty">' + escapeHtml(emptyText) + '</li>';
    return items.map(function (it) {
      return '<li><a href="' + escapeHtml(it.url) + '">' +
               '<span aria-hidden="true">' + it.icon + '</span>' +
               '<span>' + escapeHtml(it.name) + '</span>' +
             '</a></li>';
    }).join("");
  }

  function renderMyStudy() {
    var recentEl = $("recentList");
    var bookmarkEl = $("bookmarkList");
    var bookmarks = STORE.getBookmarks();

    if (recentEl) {
      recentEl.innerHTML = listHtml(STORE.getRecent().slice(0, 5), "Nothing viewed yet. Open a specialty or module to see it here.");
    }
    if (bookmarkEl) {
      bookmarkEl.innerHTML = listHtml(bookmarks.slice(0, 5), "No bookmarks yet. Tap ☆ on a specialty card to save it.");
    }

    var statB = $("statBookmarks");
    if (statB) statB.textContent = bookmarks.length;
  }

  function initClearRecent() {
    var btn = $("clearRecent");
    if (!btn) return;
    btn.addEventListener("click", function () {
      STORE.clearRecent();
    });
  }

  function setStats() {
    var statS = $("statSpecialties");
    if (statS) statS.textContent = DATA.specialties.length;
  }

  /* ---------- Start ---------- */
  function init() {
    setYear();
    initMenu();
    setStats();
    renderChips();
    renderSpecialties();
    initBookmarkButtons();
    initSearch();
    initTracking();
    initClearRecent();
    renderMyStudy();

    // Refresh lists whenever bookmarks or recents change
    document.addEventListener("atlas:storage", renderMyStudy);
  }

  /* ---------- Share helpers for other pages ---------- */
  window.ATLAS_UI = {
    escapeHtml: escapeHtml,
    specialtyCardHtml: specialtyCardHtml,
    specialtyUrl: specialtyUrl,
    moduleUrl: moduleUrl
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
