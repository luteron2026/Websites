import { Link } from 'react-router-dom'
import Home from './Home.jsx'
import Pages from './pages.jsx'
import { Main, Menu, NavLinks, Out, media } from './core.jsx'
import { CO, LINKS, NAV, upcoming } from './data.js'

export default function App() {
  const next = upcoming()[0]
  return (
    <>
      <header className="head">
        <Link to="/" className="brand"><img src={media('logo.png')} alt="Family Promise of Santa Clarita Valley home" width="800" height="262" /></Link>
        <nav aria-label="Primary"><NavLinks links={NAV} /></nav>
        <Out href={LINKS.give} className="btn">Give now</Out>
        <Menu links={[['Home', '/'], ...NAV, ['Contact', '/contact']]} />
      </header>
      {next && <p className="alert"><b>{next.name}</b> {next.date}. <Link to="/volunteer">Pitch in</Link></p>}
      <Main><Pages home={<Home />} /></Main>
      <footer className="foot">
        <div className="wrap">
          <p className="big" aria-hidden="true">No child should be homeless.</p>
          <div>
            <p>{CO.name}<br />{CO.address}</p>
            <p>Need help: <a href={`tel:${CO.helpTel}`}>{CO.helpPhone}</a><br />Office: <a href={`tel:${CO.tel}`}>{CO.phone}</a></p>
            <p><Link to="/contact">Contact us</Link></p>
          </div>
          <p className="fine">Tax ID {CO.taxId}. Design concept, not the live website.</p>
        </div>
      </footer>
    </>
  )
}
