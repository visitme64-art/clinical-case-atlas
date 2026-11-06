/* ==========================================================
   CLINICAL CASE ATLAS BANGLADESH - storage.js
   Bookmarks and recently viewed items, saved in the browser
   with localStorage. No account or server needed.

   Depends on: data.js (must be loaded first)
   ========================================================== */

(function () {
  "use strict";

  var BOOKMARK_KEY = "cca_bookmarks_v1";
  var RECENT_KEY = "cca_recent_v1";
  var MAX_RECENT = 10;

  /* ---------- Safe localStorage helpers ---------- */
  // Some browsers (private mode, strict settings) block localStorage.
  // These helpers keep the site working in memory if that happens.
  var memoryFallback = {};

  function readList(key) {
    try {
      var raw = window.localStorage.getItem(key);
      if (!raw) return [];
      var parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch (e) {
      return Array.isArray(memoryFallback[key]) ? memoryFallback[key] : [];
    }
  }

  function writeList(key, list) {
    memoryFallback[key] = list;
    try {
      window.localStorage.setItem(key, JSON.stringify(list));
    } catch (e) {
      // Storage blocked or full: the in-memory copy is still used.
    }
    notifyChange();
  }

  function notifyChange() {
    try {
      document.dispatchEvent(new CustomEvent("atlas:storage"));
    } catch (e) {
      // Very old browsers: ignore.
    }
  }

  /* ---------- Item building ---------- */
  // An item is a small object saved in the lists:
  // { key, type, id, name, icon, url, savedAt }
  // type is "specialty" or "module".

  function makeItem(type, id) {
    var data = window.ATLAS_DATA;
    if (!data) return null;

    var source = null;
    var url = "";

    if (type === "specialty") {
      source = data.getSpecialty(id);
      url = "specialty.html?id=" + encodeURIComponent(id);
    } else if (type === "module") {
      source = data.getModule(id);
      url = "modules.html?m=" + encodeURIComponent(id);
    }

    if (!source) return null;

    return {
      key: type + ":" + id,
      type: type,
      id: id,
      name: source.name,
      icon: source.icon,
      url: url,
      savedAt: Date.now()
    };
  }

  function indexOfKey(list, key) {
    for (var i = 0; i < list.length; i++) {
      if (list[i] && list[i].key === key) return i;
    }
    return -1;
  }

  /* ---------- Bookmarks ---------- */
  function getBookmarks() {
    return readList(BOOKMARK_KEY);
  }

  function isBookmarked(type, id) {
    return indexOfKey(getBookmarks(), type + ":" + id) !== -1;
  }

  // Adds the bookmark if missing, removes it if present.
  // Returns true if the item is now bookmarked, false if removed.
  function toggleBookmark(type, id) {
    var list = getBookmarks();
    var key = type + ":" + id;
    var pos = indexOfKey(list, key);

    if (pos !== -1) {
      list.splice(pos, 1);
      writeList(BOOKMARK_KEY, list);
      return false;
    }

    var item = makeItem(type, id);
    if (!item) return false;
    list.unshift(item);
    writeList(BOOKMARK_KEY, list);
    return true;
  }

  function removeBookmark(type, id) {
    var list = getBookmarks();
    var pos = indexOfKey(list, type + ":" + id);
    if (pos !== -1) {
      list.splice(pos, 1);
      writeList(BOOKMARK_KEY, list);
    }
  }

  function clearBookmarks() {
    writeList(BOOKMARK_KEY, []);
  }

  /* ---------- Recently viewed ---------- */
  function getRecent() {
    return readList(RECENT_KEY);
  }

  // Moves the item to the top; keeps only the latest MAX_RECENT items.
  function addRecent(type, id) {
    var item = makeItem(type, id);
    if (!item) return;

    var list = getRecent();
    var pos = indexOfKey(list, item.key);
    if (pos !== -1) list.splice(pos, 1);

    list.unshift(item);
    if (list.length > MAX_RECENT) list = list.slice(0, MAX_RECENT);
    writeList(RECENT_KEY, list);
  }

  function clearRecent() {
    writeList(RECENT_KEY, []);
  }

  /* ---------- Share with other scripts ---------- */
  window.ATLAS_STORE = {
    getBookmarks: getBookmarks,
    isBookmarked: isBookmarked,
    toggleBookmark: toggleBookmark,
    removeBookmark: removeBookmark,
    clearBookmarks: clearBookmarks,
    getRecent: getRecent,
    addRecent: addRecent,
    clearRecent: clearRecent,
    makeItem: makeItem
  };
})();
