/* data-showcase-update: reloads an open page after a new version has been published. */
(function (version, versionFile) {
  window.SHOWCASE_VERSION = version

  // True once someone has typed into a field that is still on screen.
  var typed = []
  document.addEventListener('input', function (e) { if (e.target.type !== 'search') typed.push(e.target) }, true)
  window.showcaseBusy = function () {
    return typed.some(function (el) { return el.isConnected && el.value !== '' }) ||
      Array.prototype.some.call(document.querySelectorAll('iframe'), function (f) {
        try { return !!(f.contentWindow.showcaseBusy && f.contentWindow.showcaseBusy()) } catch (e) { return false }
      })
  }

  // A site shown inside the client page or dashboard is refreshed by that outer page.
  if (window.top !== window) return

  var checking = false
  function check() {
    if (checking || document.hidden) return
    checking = true
    fetch(versionFile + '?t=' + Date.now(), { cache: 'no-store' })
      .then(function (r) { return r.ok ? r.json() : null })
      .then(function (d) {
        if (!d || !d.version || d.version === version || window.showcaseBusy()) return
        // Reload only once per new version, so a slow server can never cause a reload loop.
        var key = 'showcase-reloaded:' + location.pathname
        if (sessionStorage.getItem(key) === d.version) return
        sessionStorage.setItem(key, d.version)
        // Replace the browser's saved copy of this page before reloading it.
        return fetch(location.href.split('#')[0], { cache: 'reload' }).then(function () { location.reload() })
      })
      .catch(function () { /* offline or storage blocked: try again later */ })
      .then(function () { checking = false })
  }

  check()
  setInterval(check, 60000)
  document.addEventListener('visibilitychange', check)
})(__VERSION__, __VERSION_FILE__)
