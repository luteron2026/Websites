import { Link } from 'react-router-dom'
import { Img, useTitle } from './core.jsx'
import { Donate, Events, Impact, Ways } from './pages.jsx'
import { CO, IMPACT_YEAR, PROGRAMS } from './data.js'

export default function Home() {
  useTitle('Family Promise SCV')
  return (
    <>
      <section className="hero">
        <div className="wrap">
          <div className="rise">
            <h1>Keep a Santa Clarita family <mark>home.</mark></h1>
            <p className="lead">Shelter, rent help, food and case management for local families facing homelessness.</p>
            <div className="row"><a className="btn sun" href="#ways" onClick={(e) => { e.preventDefault(); document.getElementById('ways').scrollIntoView() }}>I can help</a><Link className="btn ghost" to="/get-help">I need help</Link></div>
          </div>
          <div className="stack-photos"><Img id="playing" eager /><Img id="drive" eager /></div>
        </div>
      </section>

      <section className="wrap section" id="ways"><h2>What can you give?</h2><Ways /></section>

      <section className="blue"><div className="wrap"><h2>{IMPACT_YEAR}: what neighbors did</h2><Impact /></div></section>

      <section className="wrap section split">
        <div><h2>On the calendar</h2><Events /></div>
        <div className="giftbox"><h2>Give today</h2><Donate /></div>
      </section>

      <section className="wrap programs" aria-label="Programs">
        {PROGRAMS.map(([n, t]) => <Link key={n} to="/programs" className="reveal"><h3>{n}</h3><p>{t}</p></Link>)}
      </section>

      <section className="help">
        <div className="wrap"><h2>Facing homelessness with a child, or while pregnant?</h2><a className="btn sun" href={`tel:${CO.helpTel}`}>Call {CO.helpPhone}</a></div>
      </section>
    </>
  )
}
