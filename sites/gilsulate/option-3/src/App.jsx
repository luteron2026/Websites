import { useEffect, useRef, useState } from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import Home from './Home.jsx'
import * as P from './pages.jsx'
import { NAV, inGroup } from './nav.js'
import { CO, media } from './data.js'

function Menu({ group, pathname }) {
  const [open, setOpen] = useState(false)
  useEffect(() => setOpen(false), [pathname])
  const cls = inGroup(group, pathname) ? 'top on' : 'top'
  if (!group.items) return <li><Link className={cls} to={group.to}>{group.label}</Link></li>
  return (
    <li className="drop"
      onPointerEnter={(e) => e.pointerType === 'mouse' && setOpen(true)}
      onPointerLeave={(e) => e.pointerType === 'mouse' && setOpen(false)}
      onKeyDown={(e) => { if (e.key === 'Escape') { setOpen(false); e.currentTarget.querySelector('button').focus() } }}
      onBlur={(e) => !e.currentTarget.contains(e.relatedTarget) && setOpen(false)}>
      <button type="button" className={cls} aria-expanded={open} onClick={(e) => setOpen(e.nativeEvent.pointerType === 'mouse' ? true : !open)}>
        {group.label}
        <svg width="10" height="6" viewBox="0 0 10 6" aria-hidden="true"><path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.8" /></svg>
      </button>
      <ul hidden={!open}>
        {group.items.map(([t, to]) => <li key={to}><Link to={to} aria-current={pathname === to ? 'page' : undefined} onClick={() => setOpen(false)}>{t}</Link></li>)}
      </ul>
    </li>
  )
}

function Header() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)
  useEffect(() => setOpen(false), [pathname])
  useEffect(() => {
    const esc = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', esc)
    return () => window.removeEventListener('keydown', esc)
  }, [])
  return (
    <>
      <div className="utility">
        <div className="wrap">
          <span>Woman-owned small business, Santa Clarita, California</span>
          <span><a href={`mailto:${CO.email}`}>{CO.email}</a><a href={`tel:${CO.tel}`}>{CO.phone}</a></span>
        </div>
      </div>
      <header className="bar">
        <div className="wrap">
          <Link to="/" className="brand" aria-label="Gilsulate home">
            <img src={media('logo.png')} alt="" width="245" height="238" />
            <span>Gilsulate<small>International, Inc.</small></span>
          </Link>
          <button type="button" className="burger" aria-expanded={open} aria-controls="menu" onClick={() => setOpen(!open)}>{open ? 'Close' : 'Menu'}</button>
          <nav id="menu" aria-label="Primary" className={open ? 'open' : ''}>
            <ul>{NAV.map((g) => <Menu key={g.label} group={g} pathname={pathname} />)}</ul>
            <Link to="/contact" className="btn">Request a quote</Link>
          </nav>
        </div>
      </header>
    </>
  )
}

function Footer() {
  return (
    <footer className="foot">
      <div className="wrap foot-grid">
        <div>
          <img src={media('logo.png')} alt="Gilsulate 500XR" width="245" height="238" />
          <p>Patented underground insulation and corrosion protection for pipes, tanks and structures.</p>
        </div>
        {[NAV[0], NAV[2], NAV[3]].map((g) => (
          <div key={g.label}>
            <h2>{g.label}</h2>
            <ul>{g.items.map(([t, to]) => <li key={to}><Link to={to}>{t}</Link></li>)}</ul>
          </div>
        ))}
        <div>
          <h2>Contact</h2>
          <ul>
            <li><a href={`tel:${CO.tel}`}>{CO.phone}</a></li>
            <li><a href={`mailto:${CO.email}`}>{CO.email}</a></li>
            <li>{CO.addr1}<br />{CO.addr2}</li>
          </ul>
        </div>
      </div>
      <div className="wrap legal">© {new Date().getFullYear()} {CO.name} Gilsulate and 500XR are trademarks of Gilsulate International, Inc. Design concept, not live.</div>
    </footer>
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
    <>
      <button type="button" className="skip" onClick={() => main.current?.focus()}>Skip to content</button>
      <Header />
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
      <Footer />
    </>
  )
}
