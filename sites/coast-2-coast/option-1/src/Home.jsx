import { Link } from 'react-router-dom'
import { Img, useTitle, media } from './core.jsx'
import { Finder, Register } from './pages.jsx'
import { AFTER, PROMISE, SUMMER } from './data.js'

export default function Home() {
  useTitle('C2C Camps | After-School Care and Summer Camp')
  return (
    <>
      <section className="hero">
        <div className="wrap">
          <div className="rise">
            <h1>The best part of the day starts after the bell.</h1>
            <p className="lead">Christ-centered after-school care and summer camp for K5 to 8th grade, in California and South Carolina.</p>
            <div className="row"><Register>Register now</Register><a className="btn ghost" href="#finder" onClick={(e) => { e.preventDefault(); document.getElementById('finder').scrollIntoView() }}>Find a location</a></div>
          </div>
          <div className="bubbles">{['paint', 'hoop', 'pumpkins'].map((p) => <Img key={p} id={p} eager />)}</div>
        </div>
      </section>

      <section className="trust wrap" aria-label="Awards">
        <p>Voted best summer camp</p>
        <img src={media('award-kaboom.png')} alt="2026 Kaboom first place" width="400" height="400" />
        <img src={media('award-acorn.png')} alt="Camarillo Acorn Best of 2026" width="600" height="600" />
        <p>Caring for kids since 1988</p>
      </section>

      <section className="section wrap programs">
        {[['After school', AFTER.lead, 'circle', '/after-school', 'a'], ['Summer camp', `${SUMMER.lead} ${SUMMER.hours}`, 'sandcastle', '/summer-camp', 'b']].map(([t, text, p, to, k]) => (
          <Link key={to} to={to} className={`program ${k} reveal`}><Img id={p} decorative /><div><h2>{t}</h2><p>{text}</p><span>See the program</span></div></Link>
        ))}
      </section>

      <section id="finder" className="finder-band"><div className="wrap"><Finder /></div></section>

      <section className="section wrap" aria-labelledby="why">
        <h2 id="why">Why families stay</h2>
        <ul className="why">{PROMISE.map(([t, d]) => <li key={t}><h3>{t}</h3><p>{d}</p></li>)}</ul>
      </section>

      <section className="strip" aria-label="Photos from camp">
        {['aquarium', 'reading', 'pizza', 'trio', 'airfield'].map((p) => <Img key={p} id={p} />)}
      </section>
      <p className="center"><Link to="/photos" className="btn ghost">More photos</Link></p>
    </>
  )
}
