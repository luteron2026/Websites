import { Link } from 'react-router-dom'
import Home from './Home.jsx'
import Pages from './pages.jsx'
import { Main, Menu, NavLinks, Out } from './core.jsx'
import { CO, NAV } from './data.js'

export default function App() {
  return (
    <>
      <header className="rail">
        <Link to="/" className="brand">Vibe</Link>
        <nav aria-label="Primary"><NavLinks links={NAV} /></nav>
        <Link to="/inquire" className="inq">Inquire</Link>
        <Menu links={[['Home', '/'], ...NAV, ['Inquire', '/inquire']]} />
      </header>
      <div className="page">
        <Main><Pages home={<Home />} /></Main>
        <footer className="foot wrap">
          <Link to="/inquire" className="big">Is your date open?</Link>
          <div>
            <p><a href={`tel:${CO.tel}`}>{CO.phone}</a><br /><a href={`mailto:${CO.email}`}>{CO.email}</a></p>
            <p><Out href={CO.instagram}>Instagram</Out><br /><Out href={CO.facebook}>Facebook</Out></p>
            <p>Santa Clarita, California<br /><span>Design concept, not the live website.</span></p>
          </div>
        </footer>
      </div>
    </>
  )
}
