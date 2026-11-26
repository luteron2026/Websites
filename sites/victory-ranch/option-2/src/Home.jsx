import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Img, Out, useTitle } from './core.jsx'
import { CAMPS, RETREATS, STORY, upcoming } from './data.js'

const DAY = [
  ['Morning', 'Bible study and chapel', 'bible-table'],
  ['Midday', 'Horses out on the trail', 'two-riders'],
  ['Afternoon', 'The pool and the water slide', 'swimmers'],
  ['Evening', 'Archery, relays and late games', 'archery'],
]

export default function Home() {
  useTitle('Victory Ranch | Christian Camp and Retreat Center')
  const strip = useRef(null)
  const slide = (d) => strip.current.scrollBy({ left: d * strip.current.clientWidth * 0.8, behavior: 'smooth' })
  const next = upcoming()[0]
  return (
    <>
      <section className="opener">
        <div className="panels" aria-hidden="true">
          {['rider', 'cowboy', 'black-horse', 'target'].map((p) => <div key={p}><Img id={p} eager decorative /></div>)}
        </div>
        <div className="wrap title rise">
          <h1>Out past<br />the pepper trees</h1>
          <p>Victory Ranch is a Christian camp and retreat center on 87 acres in the San Jacinto foothills.</p>
          {next && <p className="next"><span>{next.name}, {next.date}</span>{next.register ? <Out href={next.register}>Register</Out> : <Link to="/retreats">Details</Link>}</p>}
        </div>
      </section>

      <section className="section wrap words"><p>{STORY[0]} <em>{STORY[2].split('. ')[0]}.</em></p></section>

      <section className="reel-sec" aria-labelledby="reel-h">
        <div className="wrap reel-head">
          <h2 id="reel-h">The camps</h2>
          <div><button type="button" onClick={() => slide(-1)} aria-label="Scroll camps left">←</button><button type="button" onClick={() => slide(1)} aria-label="Scroll camps right">→</button></div>
        </div>
        <ul className="reel" ref={strip}>
          {CAMPS.map((c) => (
            <li key={c.id}><Link to={`/camps/${c.id}`}><Img id={c.photo} decorative /><span><small>{c.who}</small><strong>{c.name}</strong><em>{c.date} · {c.price}</em></span></Link></li>
          ))}
        </ul>
      </section>

      <section className="section wrap day" aria-labelledby="day-h">
        <h2 id="day-h">A day at camp</h2>
        <ol>{DAY.map(([t, d, p]) => <li key={t} className="reveal"><Img id={p} /><div><h3>{t}</h3><p>{d}</p></div></li>)}</ol>
      </section>

      <section className="band">
        <Img id="work-week" />
        <div className="wrap">
          <h2>Your group,<br />our canyon</h2>
          <p>Bunk housing for over 200, home-cooked meals, a chapel that seats 200 and an amphitheater under the stars.</p>
          <Link to="/rentals" className="btn">Rent the Ranch</Link>
        </div>
      </section>

      <section className="section wrap split">
        {RETREATS.map((r) => (
          <Link to="/retreats" key={r.id} className="card reveal"><Img id={r.photo} decorative /><div><p className="meta">{r.date}</p><h3>{r.name}</h3><p>{r.text}</p></div></Link>
        ))}
      </section>
    </>
  )
}
