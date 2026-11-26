import { Link } from 'react-router-dom'
import Home from './Home.jsx'
import Pages from './pages.jsx'
import { Main, Menu, NavLinks, Out, media } from './core.jsx'
import { CO, NAV, upcoming } from './data.js'

export default function App() {
  const next = upcoming()[0]
  return (
    <>
      {next && <p className="notice"><strong>{next.name}</strong> is {next.date}. <Link to={next.retreat ? '/retreats' : `/camps/${next.id}`}>Dates, price and sign up</Link></p>}
      <header className="head">
        <Link to="/" className="brand"><img src={media('logo.jpg')} alt="Victory Ranch home" width="550" height="90" /></Link>
        <nav aria-label="Primary"><NavLinks links={NAV} /></nav>
        <Menu links={[['Home', '/'], ...NAV]} />
      </header>
      <Main><Pages home={<Home />} /></Main>
      <footer className="foot">
        <div className="wrap">
          <div><h2>Questions? Call the office.</h2><p className="phone"><a href={`tel:${CO.tel}`}>{CO.phone}</a></p></div>
          <p>{CO.name}<br />{CO.addr1}<br />{CO.addr2}</p>
          <nav aria-label="Footer">{NAV.map(([t, to]) => <Link key={to} to={to}>{t}</Link>)}<Out href={CO.facebook}>Facebook</Out></nav>
        </div>
        <p className="wrap fine">Design concept, not the live website.</p>
      </footer>
    </>
  )
}
