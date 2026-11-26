import { Link } from 'react-router-dom'
import Home from './Home.jsx'
import Pages from './pages.jsx'
import { Main, Menu, NavLinks, Out, media } from './core.jsx'
import { CO, NAV } from './data.js'

export default function App() {
  return (
    <>
      <p className="topline">Moreno Valley, California <span>Camps since 1956</span> <a href={`tel:${CO.tel}`}>{CO.phone}</a></p>
      <header className="head">
        <Link to="/" className="brand"><img src={media('logo.jpg')} alt="Victory Ranch home" width="550" height="90" /></Link>
        <nav aria-label="Primary"><NavLinks links={NAV} /></nav>
        <Link to="/camps" className="btn">Find a camp</Link>
        <Menu links={[['Home', '/'], ...NAV]} />
      </header>
      <Main><Pages home={<Home />} /></Main>
      <footer className="foot">
        <div className="wrap">
          <div><h2>Come out to the Ranch</h2><p>{CO.addr1}<br />{CO.addr2}</p><p><a href={`tel:${CO.tel}`}>{CO.phone}</a></p></div>
          <nav aria-label="Footer">{NAV.map(([t, to]) => <Link key={to} to={to}>{t}</Link>)}<Out href={CO.facebook}>Facebook</Out></nav>
          <p className="fine">A ministry of the Regular Baptist Conference of Southern California. Design concept, not the live website.</p>
        </div>
      </footer>
    </>
  )
}
