import { Link } from 'react-router-dom'
import Home from './Home.jsx'
import Pages from './pages.jsx'
import { Main, Menu, NavLinks, media } from './core.jsx'
import { CO, MOTTO, NAV } from './data.js'

export default function App() {
  return (
    <>
      <p className="helpline">Family facing homelessness? <a href={`tel:${CO.helpTel}`}>Call {CO.helpPhone}</a></p>
      <header className="head">
        <Link to="/" className="brand"><img src={media('logo.png')} alt="Family Promise of Santa Clarita Valley home" width="800" height="262" /></Link>
        <nav aria-label="Primary"><NavLinks links={NAV} /></nav>
        <Link to="/donate" className="btn gold">Donate</Link>
        <Menu links={[['Home', '/'], ...NAV, ['Contact', '/contact']]} />
      </header>
      <Main><Pages home={<Home />} /></Main>
      <footer className="foot">
        <div className="wrap">
          <p className="motto">{MOTTO}</p>
          <p>{CO.address}<br />{CO.hours}</p>
          <p><a href={`tel:${CO.tel}`}>{CO.phone}</a><br /><a href={`mailto:${CO.email}`}>{CO.email}</a><br /><Link to="/contact">Contact</Link></p>
          <p className="fine">Tax ID {CO.taxId}. Design concept, not the live website.</p>
        </div>
      </footer>
    </>
  )
}
