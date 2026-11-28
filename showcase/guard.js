/* data-showcase-guard: discourages saving / viewing source (printing is allowed). A deterrent, not real protection. */
(function () {
  var stop = function (e) { e.preventDefault(); e.stopPropagation(); return false }
  document.addEventListener('contextmenu', stop, true)
  document.addEventListener('dragstart', function (e) { if (e.target && e.target.tagName === 'IMG') stop(e) }, true)
  document.addEventListener('keydown', function (e) {
    var k = (e.key || '').toLowerCase(), mod = e.ctrlKey || e.metaKey
    if (k === 'f12' ||
        (mod && (k === 's' || k === 'u')) ||
        (mod && e.shiftKey && (k === 'i' || k === 'j' || k === 'c')) ||
        (e.metaKey && e.altKey && (k === 'i' || k === 'j' || k === 'c' || k === 'u'))) stop(e)
  }, true)
  var css = document.createElement('style')
  css.textContent = 'img{-webkit-user-drag:none;user-drag:none}'
  ;(document.head || document.documentElement).appendChild(css)
})()
