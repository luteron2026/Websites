import { Link } from 'react-router-dom'
import Home from './Home.jsx'
import Pages, { Register } from './pages.jsx'
import { Main, Menu, NavLinks, Out, media } from './core.jsx'
import { CO, DOCS, NAV, SEASON } from './data.js'

export default function App() {
  return (
    <div className="shell">
      <header className="side">
        <Link to="/" className="brand"><img src={media('logo.png')} alt="Coast 2 Coast Camps home" width="600" height="429" /></Link>
        <nav aria-label="Primary"><NavLinks links={[['Home', '/'], ...NAV, ['Contact', '/contact']]} /></nav>
        <div className="side-foot"><p>{SEASON.short}</p><Register /><a href={`tel:${CO.tel}`}>{CO.phone}</a></div>
        <Register />
        <Menu links={[['Home', '/'], ...NAV, ['Contact', '/contact']]} />
      </header>
      <div className="page">
        <Main><Pages home={<Home />} /></Main>
        <footer className="foot wrap">
          <p><strong>{CO.name}</strong><br /><a href={`tel:${CO.tel}`}>{CO.phone}</a></p>
          <p><Link to="/photos">Photos</Link> · <Out href={DOCS.privacy[1]}>Privacy</Out> · <Out href={DOCS.terms[1]}>Terms</Out></p>
          <p className="fine">Design concept, not the live website.</p>
        </footer>
      </div>
    </div>
  )
}
