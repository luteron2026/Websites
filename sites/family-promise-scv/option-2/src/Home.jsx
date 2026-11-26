import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Img, Out, useTitle } from './core.jsx'
import { upcoming } from './data.js'
import { CO, HOUSE, IMPACT, IMPACT_YEAR, LINKS, MISSION, PROGRAMS, STAY } from './data.js'

function Rooms() {
  const [at, setAt] = useState(0)
  const [id, label] = HOUSE.rooms[at]
  return (
    <section className="wrap walk" aria-labelledby="walk-h">
      <div><h2 id="walk-h">Walk through Hope House</h2><ul>{HOUSE.rooms.map(([k, l], i) => <li key={k}><button type="button" aria-pressed={i === at} onClick={() => setAt(i)}>{l}</button></li>)}</ul><Link to="/house">About the house</Link></div>
      <figure aria-live="polite"><Img key={id} id={id} /><figcaption>{label}</figcaption></figure>
    </section>
  )
}

export default function Home() {
  useTitle('Family Promise SCV')
  const next = upcoming()[0]
  return (
    <>
      <section className="hero">
        <Img id="living" eager />
        <div className="note rise">
          <h1>A room, a table, a way forward.</h1>
          <p>{MISSION}</p>
          <div className="row"><Link to="/get-help" className="btn">Get help</Link><Out href={LINKS.give} className="btn ghost">Give</Out></div>
        </div>
      </section>
      {next && <p className="wrap next"><span>Next</span><strong>{next.name}</strong> {next.date}. {next.text} <Link to="/volunteer">Help out</Link></p>}

      <section className="wrap section stay">
        <h2>When a family moves in</h2>
        <div>{STAY.map(([t, d]) => <article key={t} className="reveal"><h3>{t}</h3><p>{d}</p></article>)}</div>
      </section>

      <Rooms />

      <section className="wrap section prog" aria-labelledby="prog">
        <h2 id="prog">Beyond the house</h2>
        <ul className="rows">{PROGRAMS.map(([n, t, items]) => <li key={n}><h3>{n}</h3><p>{t} Includes {items.join(', ').toLowerCase()}.</p><Link to="/programs">Details</Link></li>)}</ul>
      </section>

      <section className="numbers">
        <div className="wrap">
          <h2>{IMPACT_YEAR}</h2>
          <p>{IMPACT.slice(0, 4).map(([n, t]) => <span key={t}><b>{n}</b> {t}. </span>)}</p>
          <Link to="/impact" className="btn ghost">See the full year</Link>
        </div>
      </section>

      <section className="wrap section trio">
        <Img id="drive" /><div><h2>Neighbors make this work</h2><p>Dinners on Wednesdays, bags of groceries, supply drives and gifts. Call {CO.phone} or pick one online.</p><Link to="/volunteer" className="btn">Ways to help</Link></div><Img id="teens" />
      </section>
    </>
  )
}
