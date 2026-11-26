import { Link } from 'react-router-dom'
import Home from './Home.jsx'
import Pages from './pages.jsx'
import { Main, Menu, NavLinks } from './core.jsx'
import { CO, NAV } from './data.js'

export default function App() {
  return (
    <>
      <header className="head">
        <Link to="/" className="brand">Family Promise<small>Santa Clarita Valley</small></Link>
        <nav aria-label="Primary"><NavLinks links={NAV} /></nav>
        <Menu links={[['Home', '/'], ...NAV, ['Contact', '/contact']]} />
      </header>
      <Main><Pages home={<Home />} /></Main>
      <footer className="foot">
        <div className="wrap">
          <h2>The door is open.</h2>
          <div className="cols">
            <p><strong>Need help</strong><br /><a href={`tel:${CO.helpTel}`}>{CO.helpPhone}</a></p>
            <p><strong>Office</strong><br /><a href={`tel:${CO.tel}`}>{CO.phone}</a><br /><Link to="/contact">Write to us</Link></p>
            <p><strong>Visit</strong><br />{CO.address}</p>
          </div>
          <p className="fine">Tax ID {CO.taxId}. Design concept, not the live website.</p>
        </div>
      </footer>
    </>
  )
}
