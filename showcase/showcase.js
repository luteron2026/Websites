(function () {
  var S = window.SHOWCASE || {}
  var $ = function (id) { return document.getElementById(id) }
  var el = function (tag, cls, text) {
    var e = document.createElement(tag)
    if (cls) e.className = cls
    if (text != null) e.textContent = text
    return e
  }
  // Sites live at <root>/v/<id>/ ; showcase pages live one folder deep.
  // The version in the address stops the browser showing a saved copy of an older build.
  var siteUrl = function (id) { return '../v/' + id + '/?v=' + (window.SHOWCASE_VERSION || '') }

  // Scaled live preview of a site (renders the real page at 1440px wide, shrunk to fit).
  function thumb(id) {
    var t = el('div', 'thumb')
    var f = document.createElement('iframe')
    f.setAttribute('loading', 'lazy')
    f.setAttribute('tabindex', '-1')
    f.setAttribute('aria-hidden', 'true')
    f.setAttribute('scrolling', 'no')
    f.src = siteUrl(id)
    t.appendChild(f)
    new ResizeObserver(function () { f.style.transform = 'scale(' + t.clientWidth / 1440 + ')' }).observe(t)
    return t
  }

  function plural(n, w) { return n + ' ' + w + (n === 1 ? '' : 's') }

  // Your contact details, from "contact" in clients.json. Hidden until there is a way to reach you.
  function contactFooter(k) {
    if (!k || !(k.email || k.phone || k.website)) return
    $('contactHeading').textContent = k.heading || ''
    $('contactMessage').textContent = k.message || ''
    $('contactName').textContent = k.name || ''
    var add = function (text, href) {
      var a = el('a', '', text)
      a.href = href
      if (/^https?:/.test(href)) { a.target = '_blank'; a.rel = 'noopener' }
      var li = el('li')
      li.appendChild(a)
      $('contactLinks').appendChild(li)
    }
    if (k.email) add(k.email, 'mailto:' + k.email)
    if (k.phone) add(k.phone, 'tel:' + k.phone.replace(/[^\d+]/g, ''))
    if (k.website) {
      var site = k.website.replace(/^https?:\/\//i, '').replace(/\/$/, '')
      add(site, /^https?:\/\//i.test(k.website) ? k.website : 'https://' + k.website)
    }
    $('contact').hidden = false
  }

  // ---------------- client page ----------------
  function clientPage(c) {
    $('clientName').textContent = c.name
    $('intro').textContent = c.intro
    $('count').textContent = plural(c.options.length, 'option') + ' to review'
    contactFooter(S.contact)
    var grid = $('grid')
    if (c.options.length >= 3) grid.classList.add('three')

    c.options.forEach(function (o, i) {
      var card = el('button', 'card')
      card.type = 'button'
      card.setAttribute('aria-label', 'View ' + o.title)
      var t = thumb(o.id)
      var open = el('span', 'open', 'View full screen')
      t.appendChild(open)
      var m = el('div', 'meta')
      var top = el('div', 'meta-top')
      top.appendChild(el('h2', '', o.title))
      top.appendChild(el('span', 'tag', (i + 1) + ' of ' + c.options.length))
      m.appendChild(top)
      m.appendChild(el('p', 'subtitle', o.subtitle))
      m.appendChild(el('p', 'notes', o.notes))
      card.appendChild(t)
      card.appendChild(m)
      card.addEventListener('click', function () { location.hash = String(i + 1) })
      grid.appendChild(card)
    })

    var viewer = $('viewer'), frame = $('frame'), device = $('device'), tabs = $('tabs')
    c.options.forEach(function (o, i) {
      var b = el('button', 'tab', o.title)
      b.type = 'button'
      b.addEventListener('click', function () { location.hash = String(i + 1) })
      tabs.appendChild(b)
    })
    if (c.options.length < 2) tabs.style.visibility = 'hidden'

    // While a website is open, the browser tab wears that website's icon. The options page has none.
    var icon = document.createElement('link')
    icon.rel = 'icon'
    icon.href = 'data:,'
    document.head.appendChild(icon)

    function show() {
      var n = parseInt(location.hash.slice(1), 10)
      var o = c.options[n - 1]
      icon.href = o ? '../v/' + o.id + '/favicon.png?v=' + (window.SHOWCASE_VERSION || '') : 'data:,'
      if (!o) {
        viewer.hidden = true
        document.body.classList.remove('locked')
        frame.removeAttribute('src')
        document.title = c.name + ' · Website options'
        return
      }
      viewer.hidden = false
      document.body.classList.add('locked')
      if (frame.getAttribute('src') !== siteUrl(o.id)) frame.src = siteUrl(o.id)
      Array.prototype.forEach.call(tabs.children, function (t, i) { t.setAttribute('aria-current', String(i === n - 1)) })
      tabs.children[n - 1].scrollIntoView({ block: 'nearest', inline: 'center' })
      document.title = o.title + ' · ' + c.name
    }
    window.addEventListener('hashchange', show)
    show()

    $('close').addEventListener('click', function () {
      history.pushState('', document.title, location.pathname + location.search)
      show()
    })
    document.addEventListener('keydown', function (e) {
      if (viewer.hidden) return
      var n = parseInt(location.hash.slice(1), 10)
      if (e.key === 'Escape') $('close').click()
      if (e.key === 'ArrowRight' && n < c.options.length) location.hash = String(n + 1)
      if (e.key === 'ArrowLeft' && n > 1) location.hash = String(n - 1)
    })
    Array.prototype.forEach.call(document.querySelectorAll('[data-device]'), function (b, _, all) {
      b.addEventListener('click', function () {
        device.className = 'device ' + b.dataset.device
        Array.prototype.forEach.call(document.querySelectorAll('[data-device]'), function (x) { x.setAttribute('aria-pressed', String(x === b)) })
      })
    })
  }

  // ---------------- dashboard ----------------
  function adminPage(list) {
    var total = list.reduce(function (a, c) { return a + c.options.length }, 0)
    $('count').textContent = plural(list.length, 'client') + ' · ' + plural(total, 'website')
    var wrap = $('clients')
    var toast = el('div', 'toast'); document.body.appendChild(toast)
    function flash(msg) { toast.textContent = msg; toast.classList.add('show'); setTimeout(function () { toast.classList.remove('show') }, 1600) }

    list.forEach(function (c) {
      var url = new URL('../' + c.link + '/', location.href).href
      var box = el('section', 'client')
      box.dataset.search = (c.name + ' ' + c.link + ' ' + c.options.map(function (o) { return o.title + ' ' + o.subtitle }).join(' ')).toLowerCase()
      var head = el('div', 'client-head')
      var name = el('div')
      name.appendChild(el('h2', '', c.name))
      name.appendChild(el('div', 'sub', plural(c.options.length, 'option')))
      var lb = el('div', 'linkbox')
      lb.appendChild(el('code', '', url))
      var copy = el('button', 'btn dark', 'Copy client link'); copy.type = 'button'
      copy.addEventListener('click', function () {
        (navigator.clipboard ? navigator.clipboard.writeText(url) : Promise.reject()).then(function () { flash('Link copied') }, function () { flash('Select the link and copy it') })
      })
      var open = el('a', 'btn', 'Open as client'); open.href = url; open.target = '_blank'; open.rel = 'noopener'
      lb.appendChild(copy); lb.appendChild(open)
      head.appendChild(name); head.appendChild(lb)
      box.appendChild(head)

      var opts = el('div', 'opts')
      c.options.forEach(function (o, i) {
        var a = el('a', 'opt'); a.href = url + '#' + (i + 1); a.target = '_blank'; a.rel = 'noopener'
        a.appendChild(thumb(o.id))
        var m = el('div', 'opt-meta')
        m.appendChild(el('strong', '', o.title))
        m.appendChild(el('span', '', o.subtitle || ' '))
        a.appendChild(m)
        opts.appendChild(a)
      })
      box.appendChild(opts)
      wrap.appendChild(box)
    })
    if (!list.length) wrap.appendChild(el('p', 'empty', 'No clients yet. Add one to clients.json.'))

    $('search').addEventListener('input', function (e) {
      var q = e.target.value.trim().toLowerCase()
      Array.prototype.forEach.call(wrap.querySelectorAll('.client'), function (b) { b.hidden = q && b.dataset.search.indexOf(q) < 0 })
    })
  }

  if (S.page === 'client') clientPage(S.data)
  if (S.page === 'admin') adminPage(S.data)
})()
