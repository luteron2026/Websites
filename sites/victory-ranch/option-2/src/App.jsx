import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Home from './Home.jsx'
import Pages from './pages.jsx'
import { Main, Menu, NavLinks, Out } from './core.jsx'
import { CO, NAV } from './data.js'

export default function App() {
  const [solid, setSolid] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => {
    const f = () => setSolid(window.scrollY > 40)
    f()
    window.addEventListener('scroll', f, { passive: true })
    return () => window.removeEventListener('scroll', f)
  }, [pathname])
  return (
    <>
      <header className={`head ${solid ? 'solid' : ''}`}>
        <Link to="/" className="brand">Victory<b>Ranch</b></Link>
        <nav aria-label="Primary"><NavLinks links={NAV.slice(0, 4)} /></nav>
        <Menu links={[['Home', '/'], ...NAV]}><p className="menu-note"><a href={`tel:${CO.tel}`}>{CO.phone}</a></p></Menu>
      </header>
      <Main><Pages home={<Home />} /></Main>
      <footer className="foot">
        <div className="wrap">
          <p className="huge" aria-hidden="true">Since 1956</p>
          <div className="cols">
            <p>{CO.addr1}<br />{CO.addr2}</p>
            <p><a href={`tel:${CO.tel}`}>{CO.phone}</a><br /><Out href={CO.facebook}>Facebook</Out></p>
            <p><Link to="/give">Give to the Ranch</Link><br /><Link to="/contact">Directions</Link></p>
          </div>
          <p className="fine">Design concept, not the live website.</p>
        </div>
      </footer>
    </>
  )
}
