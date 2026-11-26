import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Img, useTitle } from './core.jsx'
import { CAMPS, upcoming, SPACES } from './data.js'

// Which camps take which grade. Grown-ups get the retreats instead.
const GRADES = [
  ['K–2', ['mini']], ['3', ['mini', 'junior']], ['4–5', ['junior', 'horsemanship']],
  ['6–8', ['winter', 'middle-school', 'horsemanship', 'junior', 'west']], ['9–12', ['winter', 'senior-high', 'horsemanship', 'west']],
]
const NOTE = { '6–8': 'Junior Camp is for grade 6 only. W.E.S.T. Week starts at grade 8.' }

function Finder() {
  const [g, setG] = useState('6–8')
  const ids = GRADES.find(([k]) => k === g)[1]
  const list = ids.map((id) => CAMPS.find((c) => c.id === id))
  return (
    <section className="finder wrap" aria-labelledby="find-h">
      <h2 id="find-h">What grade is your camper?</h2>
      <div className="grades" role="group" aria-label="Grade">
        {GRADES.map(([k]) => <button type="button" key={k} aria-pressed={k === g} onClick={() => setG(k)}>{k}</button>)}
      </div>
      <p className="count" aria-live="polite">{list.length} {list.length === 1 ? 'camp fits' : 'camps fit'} grade {g}. {NOTE[g]}</p>
      <ul>
        {list.map((c) => (
          <li key={`${g}-${c.id}`}><Link to={`/camps/${c.id}`}><Img id={c.photo} decorative /><span><strong>{c.name}</strong><small>{c.date}</small></span><b>{c.price}</b></Link></li>
        ))}
      </ul>
    </section>
  )
}

export default function Home() {
  useTitle('Victory Ranch | Christian Camp and Retreat Center')
  const events = upcoming().slice(0, 3)
  return (
    <>
      <section className="hero">
        <div className="wrap">
          <div className="rise">
            <h1>Horses, chapel and a pool full of friends.</h1>
            <p className="lead">Victory Ranch has run Christ-centered camps in Southern California since 1956.</p>
            <div className="row"><a className="btn" href="#find" onClick={(e) => { e.preventDefault(); document.getElementById('find').scrollIntoView() }}>Find my camp</a><Link className="btn ghost" to="/rentals">Plan a retreat</Link></div>
          </div>
          <div className="tiles">{['pool-friends', 'rider', 'friends', 'trail', 'target'].map((p) => <Img key={p} id={p} eager />)}</div>
        </div>
      </section>

      <div id="find"><Finder /></div>

      <section className="dates" aria-labelledby="dates-h">
        <div className="wrap">
          <h2 id="dates-h">Coming up</h2>
          <ol>
            {events.map((e) => {
              const d = new Date(`${e.start}T12:00:00`)
              return (
                <li key={e.id}>
                  <time dateTime={e.start}><b>{d.getDate()}</b>{d.toLocaleString('en-US', { month: 'short' })} {d.getFullYear()}</time>
                  <h3>{e.name}</h3>
                  <p>{e.text.split(/(?<=\.)\s/)[0]}</p>
                  <Link to={e.retreat ? '/retreats' : `/camps/${e.id}`}>See {e.name}</Link>
                </li>
              )
            })}
          </ol>
        </div>
      </section>

      <section className="section wrap" aria-labelledby="grounds-h">
        <h2 id="grounds-h">87 acres to use</h2>
        <ul className="bento">
          {SPACES.map(([n, cap, , p]) => <li key={n} className="reveal"><Link to="/rentals"><Img id={p} decorative /><span><strong>{n}</strong>{cap}</span></Link></li>)}
        </ul>
        <div className="row" style={{ marginTop: '2rem' }}><Link className="btn" to="/rentals">Rates and lodging</Link><Link to="/give">Support the New Cabin Fund</Link></div>
      </section>
    </>
  )
}
