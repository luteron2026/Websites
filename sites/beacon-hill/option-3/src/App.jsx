import { Link } from 'react-router-dom'
import Home from './Home.jsx'
import Pages, { Apply, Portals } from './pages.jsx'
import { Main, Menu, NavLinks, media } from './core.jsx'
import { CAMPUSES, NAV } from './data.js'

export default function App() {
  return (
    <>
      <header className="head">
        <Link to="/" className="brand"><img src={media('crest.jpg')} alt="" width="205" height="227" /><span>Beacon Hill Classical Academy</span></Link>
        <nav aria-label="Primary"><NavLinks links={NAV} /></nav>
        <Apply />
        <Menu links={[['Home', '/'], ...NAV, ['Contact', '/contact']]} />
      </header>
      <Main><Pages home={<Home />} /></Main>
      <footer className="foot">
        <div className="wrap">
          <section aria-label="For current families"><h2>For current families</h2><Portals /></section>
          <div>{CAMPUSES.map((c) => <p key={c.id}><strong>{c.name}, {c.grades}</strong><br />{c.address}<br /><a href={`tel:${c.tel}`}>{c.phone}</a></p>)}<p><Link to="/contact">Contact the school</Link></p></div>
          <p className="fine">Design concept, not the live website.</p>
        </div>
      </footer>
    </>
  )
}
