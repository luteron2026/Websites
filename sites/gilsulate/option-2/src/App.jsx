import { useEffect, useRef, useState } from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import Home from './Home.jsx'
import * as P from './pages.jsx'
import { NAV, inGroup } from './nav.js'
import { CO, media } from './data.js'

const QUICK = [['Product', '/product'], ['Systems', '/systems'], ['Projects', '/tech/case-studies'], ['Contact', '/contact']]

function Masthead() {
  const { pathname } = useLocation()
  const dialog = useRef(null)
  const [solid, setSolid] = useState(false)
  useEffect(() => dialog.current.close(), [pathname])
  useEffect(() => {
    const f = () => setSolid(window.scrollY > 40)
    f()
    window.addEventListener('scroll', f, { passive: true })
    return () => window.removeEventListener('scroll', f)
  }, [])
  return (
    <>
      <header className={`masthead ${solid ? 'solid' : ''}`}>
        <Link to="/" className="brand" aria-label="Gilsulate home">
          <img src={media('logo.png')} alt="" width="245" height="238" />
          <span>Gilsulate</span>
        </Link>
        <nav aria-label="Primary">
          {QUICK.map(([t, to]) => <Link key={to} to={to} aria-current={pathname === to ? 'page' : undefined}>{t}</Link>)}
          <button type="button" aria-haspopup="dialog" onClick={() => dialog.current.showModal()}>Menu</button>
        </nav>
      </header>
      {/* native dialog: focus is trapped and Escape closes it */}
      <dialog ref={dialog} className="menu" aria-label="All pages">
        <div className="menu-top">
          <a href={`tel:${CO.tel}`}>{CO.phone}</a>
          <button type="button" onClick={() => dialog.current.close()}>Close</button>
        </div>
        <nav aria-label="All pages">
          {NAV.map((g) => (
            <div key={g.label}>
              <h2><Link className={inGroup(g, pathname) ? 'on' : ''} to={g.to || g.items[0][1]} onClick={() => dialog.current.close()}>{g.label}</Link></h2>
              {g.items && <ul>{g.items.map(([t, to]) => <li key={to}><Link to={to} aria-current={pathname === to ? 'page' : undefined} onClick={() => dialog.current.close()}>{t}</Link></li>)}</ul>}
            </div>
          ))}
          <div><h2><Link to="/contact" onClick={() => dialog.current.close()}>Contact</Link></h2></div>
        </nav>
      </dialog>
    </>
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
      <Masthead />
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
      <footer className="foot">
        <div className="wrap">
          <p>{CO.name}<br />{CO.addr1}, {CO.addr2}<br /><a href={`mailto:${CO.email}`}>{CO.email}</a></p>
          <p>© {new Date().getFullYear()}. A woman-owned small business. Gilsulate and 500XR are trademarks of Gilsulate International, Inc. Design concept, not live.</p>
        </div>
      </footer>
    </>
  )
}
