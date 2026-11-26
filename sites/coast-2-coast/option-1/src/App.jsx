import { Link } from 'react-router-dom'
import Home from './Home.jsx'
import Pages, { Register } from './pages.jsx'
import { Main, Menu, NavLinks, Out, media } from './core.jsx'
import { CO, DOCS, NAV, SEASON } from './data.js'

export default function App() {
  return (
    <>
      <p className="season">{SEASON.text} <a href={`tel:${CO.tel}`}>Call {CO.phone}</a></p>
      <header className="head">
        <Link to="/" className="brand"><img src={media('logo.png')} alt="Coast 2 Coast Camps home" width="600" height="429" /></Link>
        <nav aria-label="Primary"><NavLinks links={NAV} /></nav>
        <Register />
        <Menu links={[['Home', '/'], ...NAV, ['Contact', '/contact']]} />
      </header>
      <Main><Pages home={<Home />} /></Main>
      <footer className="foot">
        <div className="wrap">
          <div><h2>Save your child’s spot.</h2><Register>Start registration</Register></div>
          <nav aria-label="Footer">{[...NAV, ['Photos', '/photos'], ['Contact', '/contact']].map(([t, to]) => <Link key={to} to={to}>{t}</Link>)}</nav>
          <p><a href={`tel:${CO.tel}`}>{CO.phone}</a><br /><Out href={DOCS.privacy[1]}>Privacy</Out> · <Out href={DOCS.terms[1]}>Terms</Out></p>
          <p className="fine">Design concept, not the live website.</p>
        </div>
      </footer>
    </>
  )
}
