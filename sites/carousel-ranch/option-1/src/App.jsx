import { Link } from 'react-router-dom'
import Home from './Home.jsx'
import Pages, { Donate } from './pages.jsx'
import { Main, Menu, NavLinks } from './core.jsx'
import { CO, NAV } from './data.js'

export default function App() {
  return (
    <>
      <header className="head">
        <Link to="/" className="brand">Carousel Ranch<small>Santa Clarita</small></Link>
        <nav aria-label="Primary"><NavLinks links={NAV} /></nav>
        <Donate />
        <Menu links={[['Home', '/'], ...NAV, ['Contact', '/contact']]} />
      </header>
      <div className="canopy" aria-hidden="true" />
      <Main><Pages home={<Home />} /></Main>
      <footer className="foot">
        <div className="canopy flip" aria-hidden="true" />
        <div className="wrap">
          <p className="tag">{CO.tagline}</p>
          <div><p>{CO.address}</p><p><a href={`tel:${CO.tel}`}>{CO.phone}</a><br /><a href={`mailto:${CO.email}`}>{CO.email}</a></p><p><Link to="/contact">Contact us</Link></p></div>
          <p className="fine">501(c)(3), tax ID {CO.taxId}. Design concept, not the live website.</p>
        </div>
      </footer>
    </>
  )
}
