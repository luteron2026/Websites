import { Link } from 'react-router-dom'
import Home from './Home.jsx'
import Pages, { Inquire } from './pages.jsx'
import { Main, Menu, NavLinks, Out } from './core.jsx'
import { CO, NAV } from './data.js'

export default function App() {
  return (
    <>
      <div className="awning" aria-hidden="true" />
      <header className="head">
        <Link to="/" className="brand">Vibe <i>florals</i></Link>
        <nav aria-label="Primary"><NavLinks links={NAV} /></nav>
        <Inquire>Book</Inquire>
        <Menu links={[['Home', '/'], ...NAV, ['Inquire', '/inquire']]} />
      </header>
      <Main><Pages home={<Home />} /></Main>
      <div className="awning flip" aria-hidden="true" />
      <footer className="foot">
        <div className="wrap">
          <div><p className="brand">Vibe <i>marketplace</i></p><p>Made in Santa Clarita since 2013.</p></div>
          <p><a href={`tel:${CO.tel}`}>{CO.phone}</a><br /><a href={`mailto:${CO.email}`}>{CO.email}</a></p>
          <p><Out href={CO.instagram}>Instagram</Out><br /><Out href={CO.facebook}>Facebook</Out></p>
        </div>
        <p className="wrap fine">Design concept, not the live website.</p>
      </footer>
    </>
  )
}
