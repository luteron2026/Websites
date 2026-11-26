import { Link } from 'react-router-dom'
import Home from './Home.jsx'
import Pages, { Register } from './pages.jsx'
import { Main, Menu, NavLinks, Out, media } from './core.jsx'
import { CO, DOCS, LOCATIONS, NAV, SEASON } from './data.js'

export default function App() {
  return (
    <>
      <header className="head">
        <Link to="/" className="brand"><img src={media('logo.png')} alt="Coast 2 Coast Camps home" width="600" height="429" /></Link>
        <nav aria-label="Primary"><NavLinks links={NAV} /></nav>
        <Register />
        <Menu links={[['Home', '/'], ...NAV, ['Photos', '/photos'], ['Contact', '/contact']]} />
      </header>
      <p className="ticker">{SEASON.text} <Register className="inline">Sign up</Register></p>
      <Main><Pages home={<Home />} /></Main>
      <footer className="foot">
        <div className="wrap">
          <p className="coast" aria-hidden="true">Coast to Coast</p>
          <ul>{LOCATIONS.map((l) => <li key={l.id}><Link to={`/locations/${l.id}`}>{l.city}, {l.state}</Link></li>)}</ul>
          <p><a href={`tel:${CO.tel}`}>{CO.phone}</a> · <Link to="/contact">Contact</Link> · <Out href={DOCS.privacy[1]}>Privacy</Out> · <Out href={DOCS.terms[1]}>Terms</Out></p>
          <p className="fine">Design concept, not the live website.</p>
        </div>
      </footer>
    </>
  )
}
