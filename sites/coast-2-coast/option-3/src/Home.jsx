import { Link } from 'react-router-dom'
import { Img, useTitle, media } from './core.jsx'
import { Register } from './pages.jsx'
import { LOCATIONS, PROMISE, STATES } from './data.js'

export default function Home() {
  useTitle('C2C Camps | After-School Care and Summer Camp')
  return (
    <>
      <section className="poster">
        <h1><span>Fun.</span><span>Faith.</span><span>Friends.</span></h1>
        <div className="mosaic">{['hoop', 'aquarium', 'paint', 'pumpkins', 'sandcastle', 'pizza'].map((p) => <Img key={p} id={p} eager />)}</div>
        <div className="under wrap">
          <p>After-school care and summer camp for K5 to 8th grade in Ventura County and Upstate South Carolina.</p>
          <div className="row"><Register>Register</Register><Link className="btn ghost" to="/locations">Find your camp</Link></div>
        </div>
      </section>

      <section className="halves">
        <Link to="/after-school" className="half one"><Img id="trio" decorative /><div><h2>After school</h2><p>Homework hour, games, chapel and Fun Friday trips.</p></div></Link>
        <Link to="/summer-camp" className="half two"><Img id="airfield" decorative /><div><h2>Summer</h2><p>Field trips every week, Water Day and open 7 to 6.</p></div></Link>
      </section>

      <section className="section wrap map" aria-labelledby="where">
        <h2 id="where">Two coasts, seven camps</h2>
        <div className="columns">
          {Object.entries(STATES).map(([k, v]) => (
            <div key={k}>
              <h3>{v}</h3>
              <ul>{LOCATIONS.filter((l) => l.state === k).map((l) => <li key={l.id}><Link to={`/locations/${l.id}`}><strong>{l.city}</strong><span>{l.host}</span></Link></li>)}</ul>
            </div>
          ))}
        </div>
      </section>

      <section className="won">
        <div className="wrap">
          <h2>Voted best summer camp</h2>
          <img src={media('award-kaboom.png')} alt="2026 Kaboom first place" width="400" height="400" />
          <img src={media('award-acorn.png')} alt="Camarillo Acorn Best of 2026" width="600" height="600" />
        </div>
      </section>

      <section className="section wrap split mid">
        <Img id="church" />
        <div><h2>Why we do it</h2>{PROMISE.map(([t, d]) => <div className="reason reveal" key={t}><h3>{t}</h3><p>{d}</p></div>)}<div className="row"><Link to="/photos" className="btn ghost">Camp photos</Link><Link to="/careers">Join the team</Link></div></div>
      </section>
    </>
  )
}
