import { Link } from 'react-router-dom'
import Home from './Home.jsx'
import Pages, { Portals } from './pages.jsx'
import { Main, Menu, NavLinks, media } from './core.jsx'
import { CAMPUSES, NAV } from './data.js'

export default function App() {
  return (
    <>
      <header className="head">
        <Link to="/" className="brand"><img src={media('crest.jpg')} alt="" width="205" height="227" />Beacon Hill</Link>
        <nav aria-label="Primary"><NavLinks links={NAV} /></nav>
        <Menu links={[['Home', '/'], ...NAV, ['Contact', '/contact']]} />
      </header>
      <Main><Pages home={<Home />} /></Main>
      <footer className="foot wrap">
        <div>{CAMPUSES.map((c) => <p key={c.id}><strong>{c.name}</strong><br />{c.address}<br /><a href={`tel:${c.tel}`}>{c.phone}</a></p>)}<p><Link to="/contact">Write to us</Link></p></div>
        <Portals />
        <p className="fine">Artwork by Beacon Hill students. Design concept, not the live website.</p>
      </footer>
    </>
  )
}
