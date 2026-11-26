import { Link } from 'react-router-dom'
import { Img, Out, useTitle } from './core.jsx'
import { CAMPS, CO, GATHERINGS, STORY, upcoming } from './data.js'

export default function Home() {
  useTitle('Victory Ranch | Christian Camp and Retreat Center')
  const next = upcoming()[0]
  return (
    <>
      <section className="hero wrap">
        <div className="rise">
          <h1>A week out here stays with you.</h1>
          <p className="lead">Christ-centered camps and retreats on 87 acres of pepper trees, horses and canyon sky, 25 miles east of Riverside.</p>
          <div className="row"><Link to="/camps" className="btn">See the camps</Link><Link to="/rentals" className="btn ghost">Bring your group</Link></div>
        </div>
        <div className="collage rise">
          <figure className="a"><Img id="rider" eager /></figure>
          <figure className="b"><Img id="barn" eager /></figure>
          <figure className="c"><Img id="foam" eager /></figure>
        </div>
      </section>

      {next && (
        <section className="ticket" aria-label="Next on the calendar">
          <div className="wrap">
            <p className="stub">Next up</p>
            <div><h2>{next.name}</h2><p>{next.date}{next.who && ` · ${next.who}`}</p></div>
            <p className="fee"><strong>{next.price}</strong><span>{next.early}</span></p>
            {next.register ? <Out className="btn light" href={next.register}>Register online</Out> : <Link className="btn light" to="/retreats">Details</Link>}
          </div>
        </section>
      )}

      <section className="section wrap program" aria-labelledby="camps-h">
        <h2 id="camps-h">Find your week</h2>
        <ol>
          {CAMPS.map((c) => (
            <li key={c.id} className="reveal">
              <Link to={`/camps/${c.id}`}>
                <Img id={c.photo} decorative />
                <h3>{c.name}</h3>
                <p>{c.who}</p>
                <p>{c.date}</p>
                <p className="price">{c.price}</p>
              </Link>
            </li>
          ))}
        </ol>
        <p className="meta">Summer dates and prices shown are for 2026.</p>
      </section>

      <section className="story">
        <div className="wrap split mid">
          <div className="quad"><Img id="chapel" /><Img id="trail" /><Img id="dinner" /><Img id="target" /></div>
          <div><h2>An oasis behind the pepper trees</h2><p className="lead">{STORY[0]}</p><p>{STORY[1]}</p><Link to="/about" className="btn ghost">Our story</Link></div>
        </div>
      </section>

      <section className="section wrap" aria-labelledby="year-h">
        <h2 id="year-h">Days the whole family can come</h2>
        <ul className="cards">
          {GATHERINGS.map((g) => <li className="card reveal" key={g.name}><Img id={g.photo} /><div><h3>{g.name}</h3><p>{g.text}</p><p className="meta">{g.when} · {g.price}</p></div></li>)}
        </ul>
      </section>

      <section className="rent wrap">
        <Img id="pool" />
        <div><h2>Retreat here with your church</h2><p>Meals, bunks and meeting space for groups from 25 to over 200. Two nights and five meals from $137 a person.</p><div className="row"><Link to="/rentals" className="btn">Facilities and rates</Link><a href={`tel:${CO.tel}`}>{CO.phone}</a></div></div>
      </section>
    </>
  )
}
