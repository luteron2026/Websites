import { useEffect, useState } from 'react'
import { Routes, Route, NavLink, Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, ArrowUpRight, ChevronDown } from 'lucide-react'
import { Logo } from './components/ui.jsx'
import { CO } from './data.js'
import { NAV } from './nav.js'
import Home from './pages/Home.jsx'
import { ProductOverview, ProductWhat, ProductComponents } from './pages/Product.jsx'
import { SystemsHub, SystemDetail } from './pages/Systems.jsx'
import { TechHub, TechFaq, TechDensity, TechDocs, CaseIndex, CaseDetail } from './pages/Tech.jsx'
import { ClientPage, TextPage, News, About } from './pages/Misc.jsx'
import Contact from './pages/Contact.jsx'

function Dropdown({ g, pathname }) {
  const active = pathname.startsWith(g.base)
  if (!g.items) {
    return <NavLink to={g.to} className={`label transition-colors hover:text-heat ${active ? 'text-heat' : 'text-slate-300'}`}>{g.label}</NavLink>
  }
  return (
    <div className="group relative">
      <button className={`label flex items-center gap-1 py-6 transition-colors group-hover:text-heat group-focus-within:text-heat ${active ? 'text-heat' : 'text-slate-300'}`} aria-haspopup="true">
        {g.label}<ChevronDown size={12} />
      </button>
      <div className="invisible absolute left-1/2 top-full min-w-[230px] -translate-x-1/2 border border-line bg-ink opacity-0 shadow-2xl transition-all group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
        {g.items.map(([t, to]) => (
          <Link key={to} to={to} className="label block border-b border-line px-5 py-3.5 text-slate-300 last:border-0 hover:bg-slate2 hover:text-heat">{t}</Link>
        ))}
      </div>
    </div>
  )
}

function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => { setOpen(false); window.scrollTo(0, 0) }, [pathname])
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 30)
    f(); window.addEventListener('scroll', f, { passive: true })
    return () => window.removeEventListener('scroll', f)
  }, [])
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors ${scrolled || open || pathname !== '/' ? 'border-b border-line bg-ink/95 backdrop-blur' : 'border-b border-transparent'}`}>
      <div className="mx-auto flex h-[72px] max-w-[1280px] items-center justify-between px-5 md:px-8">
        <Link to="/" aria-label="Gilsulate home"><Logo /></Link>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {NAV.map((g) => <Dropdown key={g.label} g={g} pathname={pathname} />)}
          <Link to="/contact" className="btn btn-heat !py-3">Request a quote</Link>
        </nav>
        <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu" aria-expanded={open}>{open ? <X /> : <Menu />}</button>
      </div>
      {open && (
        <div className="max-h-[calc(100dvh-72px)] overflow-y-auto border-t border-line bg-ink px-5 pb-8 pt-2 lg:hidden">
          {NAV.map((g) => (
            <div key={g.label} className="border-b border-line py-4">
              <Link to={g.to || g.items[0][1]} className="display text-2xl">{g.label}</Link>
              {g.items && (
                <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
                  {g.items.map(([t, to]) => <Link key={to} to={to} className="label text-slate-400">{t}</Link>)}
                </div>
              )}
            </div>
          ))}
          <a href={`tel:${CO.tel}`} className="btn btn-heat mt-6 w-full justify-center"><Phone size={14} />{CO.phone}</a>
        </div>
      )}
    </header>
  )
}

function Footer() {
  return (
    <footer className="border-t border-line bg-ink">
      <div className="mx-auto grid max-w-[1280px] gap-12 px-5 py-16 md:grid-cols-2 md:px-8 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-slate-400">Patented underground insulation and corrosion protection for pipes, tanks and structures. Woman-owned small business, Santa Clarita, California.</p>
        </div>
        {[NAV[0], NAV[1], NAV[3]].map((g) => (
          <div key={g.label}>
            <div className="label mb-4 text-slate-400">{g.label}</div>
            <ul className="space-y-2 text-sm text-slate-300">{g.items.map(([t, to]) => <li key={to}><Link className="hover:text-heat" to={to}>{t}</Link></li>)}</ul>
          </div>
        ))}
        <div>
          <div className="label mb-4 text-slate-400">Contact</div>
          <ul className="space-y-2 text-sm text-slate-300">
            <li><a className="hover:text-heat" href={`tel:${CO.tel}`}>{CO.phone}</a></li>
            <li><a className="hover:text-heat" href={`mailto:${CO.email}`}>{CO.email}</a></li>
            <li className="text-slate-400">{CO.addr1}<br />{CO.addr2}</li>
            <li className="flex gap-4 pt-2">
              {['LinkedIn', 'Facebook'].map((s) => <a key={s} href="#" className="inline-flex items-center gap-1 hover:text-heat">{s}<ArrowUpRight size={12} /></a>)}
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line px-5 py-5 text-center md:px-8">
        <span className="label text-slate-400">© 2026 {CO.name} · Gilsulate and 500XR are trademarks of Gilsulate International, Inc. · Design concept, not live</span>
      </div>
    </footer>
  )
}

export default function App() {
  const { pathname } = useLocation()
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-heat focus:px-4 focus:py-2 focus:text-ink">Skip to content</a>
      <Nav />
      <main id="main" key={pathname}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clients/:id" element={<ClientPage />} />
          <Route path="/product" element={<ProductOverview />} />
          <Route path="/product/why" element={<TextPage id="why" />} />
          <Route path="/product/what" element={<ProductWhat />} />
          <Route path="/product/standard" element={<TextPage id="standard" />} />
          <Route path="/product/sustainability" element={<TextPage id="sustainability" />} />
          <Route path="/product/components" element={<ProductComponents />} />
          <Route path="/systems" element={<SystemsHub />} />
          <Route path="/systems/:id" element={<SystemDetail />} />
          <Route path="/tech" element={<TechHub />} />
          <Route path="/tech/faq" element={<TechFaq />} />
          <Route path="/tech/density" element={<TechDensity />} />
          <Route path="/tech/documents" element={<TechDocs />} />
          <Route path="/tech/case-studies" element={<CaseIndex />} />
          <Route path="/tech/case-studies/:id" element={<CaseDetail />} />
          <Route path="/news" element={<News />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/mission" element={<TextPage id="mission" />} />
          <Route path="/about/quality" element={<TextPage id="quality" />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
