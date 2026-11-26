import { Link } from 'react-router-dom'
import Home from './Home.jsx'
import Pages, { Inquire } from './pages.jsx'
import { Main, Menu, NavLinks, Out } from './core.jsx'
import { CO, NAV } from './data.js'

export default function App() {
  return (
    <>
      <header className="head">
        <nav aria-label="Primary" className="left"><NavLinks links={NAV.slice(0, 3)} /></nav>
        <Link to="/" className="brand">Vibe<small>florals &amp; photography</small></Link>
        <nav aria-label="More" className="right"><NavLinks links={NAV.slice(3)} /><Link to="/inquire" className="inq">Inquire</Link></nav>
        <Menu links={[['Home', '/'], ...NAV, ['Inquire', '/inquire']]} />
      </header>
      <Main><Pages home={<Home />} /></Main>
      <footer className="foot">
        <div className="wrap">
          <h2>Tell us about your day.</h2>
          <Inquire />
          <p><a href={`tel:${CO.tel}`}>{CO.phone}</a> · <a href={`mailto:${CO.email}`}>{CO.email}</a></p>
          <p><Out href={CO.instagram}>Instagram</Out> · <Out href={CO.facebook}>Facebook</Out> · Santa Clarita, California</p>
          <p className="fine">Design concept, not the live website.</p>
        </div>
      </footer>
    </>
  )
}
