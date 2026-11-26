import { useEffect, useRef, useState } from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import Home from './Home.jsx'
import * as P from './pages.jsx'
import { SECTIONS, locate } from './manual.js'
import { CO, media } from './data.js'

function Binder() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)
  const here = locate(pathname)
  useEffect(() => setOpen(false), [pathname])
  useEffect(() => {
    const esc = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', esc)
    return () => window.removeEventListener('keydown', esc)
  }, [])
  return (
    <header className={`binder ${open ? 'is-open' : ''}`}>
      <div className="binder-top">
        <Link to="/" className="mark" aria-label="Gilsulate home">
          <img src={media('logo.png')} alt="" width="245" height="238" />
          <span>Gilsulate<small>Design &amp; Installation</small></span>
        </Link>
        <button type="button" className="binder-btn" aria-expanded={open} aria-controls="contents" onClick={() => setOpen(!open)}>
          {open ? 'Close' : 'Contents'}
        </button>
      </div>
      <nav id="contents" aria-label="Contents">
        <ol>
          {SECTIONS.map((s) => {
            const active = here?.section === s
            return (
              <li key={s.n}>
                <Link to={s.pages[0][1]} className={active ? 'on' : ''}><span>{s.n}</span>{s.title}</Link>
                {s.pages.length > 1 && (
                  <ul className={active ? 'show' : ''}>
                    {s.pages.map(([t, to], i) => (
                      <li key={to}><Link to={to} aria-current={here?.section === s && here.index === i ? 'page' : undefined}>{t}</Link></li>
                    ))}
                  </ul>
                )}
              </li>
            )
          })}
        </ol>
        <p className="binder-foot"><a href={`tel:${CO.tel}`}>{CO.phone}</a><br /><a href={`mailto:${CO.email}`}>{CO.email}</a></p>
      </nav>
    </header>
  )
}

export default function App() {
  const { pathname } = useLocation()
  const main = useRef(null)
  const first = useRef(true)
  useEffect(() => {
    window.scrollTo(0, 0)
    if (first.current) { first.current = false; return }
    main.current?.focus({ preventScroll: true })
  }, [pathname])
  return (
    <div className="book">
      <button type="button" className="skip" onClick={() => main.current?.focus()}>Skip to content</button>
      <Binder />
      <div className="leaf">
        <main ref={main} tabIndex={-1}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<P.ProductOverview />} />
            <Route path="/product/what" element={<P.ProductWhat />} />
            <Route path="/product/why" element={<P.TextPage key="why" id="why" />} />
            <Route path="/product/standard" element={<P.TextPage key="standard" id="standard" />} />
            <Route path="/product/sustainability" element={<P.TextPage key="sus" id="sustainability" />} />
            <Route path="/product/components" element={<P.Components />} />
            <Route path="/systems" element={<P.Systems />} />
            <Route path="/systems/:id" element={<P.SystemDetail />} />
            <Route path="/tech" element={<P.TechHub />} />
            <Route path="/tech/faq" element={<P.Faq />} />
            <Route path="/tech/density" element={<P.Density />} />
            <Route path="/tech/case-studies" element={<P.Cases />} />
            <Route path="/tech/case-studies/:id" element={<P.CaseDetail />} />
            <Route path="/tech/documents" element={<P.Documents />} />
            <Route path="/clients/:id" element={<P.ClientPage />} />
            <Route path="/news" element={<P.News />} />
            <Route path="/about" element={<P.About />} />
            <Route path="/about/mission" element={<P.TextPage key="mission" id="mission" />} />
            <Route path="/about/quality" element={<P.TextPage key="quality" id="quality" />} />
            <Route path="/contact" element={<P.Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <footer className="colophon">
          <p>© {new Date().getFullYear()} {CO.name} A woman-owned small business.</p>
          <p>Gilsulate and 500XR are trademarks of Gilsulate International, Inc. Design concept, not live.</p>
        </footer>
      </div>
    </div>
  )
}
