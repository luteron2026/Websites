import { Link } from 'react-router-dom'
import { Img, useTitle } from './core.jsx'
import { Events, Impact } from './pages.jsx'
import { CO, IMPACT_YEAR, MISSION, MOTTO, PROGRAMS } from './data.js'

export default function Home() {
  useTitle('Family Promise SCV')
  return (
    <>
      <section className="hero">
        <div className="wrap">
          <div className="rise"><h1>{MOTTO}</h1><p className="lead">{MISSION}</p></div>
          <figure className="rise"><Img id="children" eager /></figure>
        </div>
      </section>

      <section className="doors wrap" aria-label="How can we help?">
        <Link to="/get-help" className="door need"><h2>I need help</h2><p>See who we serve and reach a case manager.</p><span>{CO.helpPhone}</span></Link>
        <Link to="/volunteer" className="door give"><h2>I want to help</h2><p>Bring a dinner, drop off groceries or give.</p><span>Find your way in</span></Link>
      </section>

      <section className="section wrap"><h2>Coming up</h2><Events /></section>

      <section className="band">
        <div className="wrap"><h2>{IMPACT_YEAR} in numbers</h2><Impact /></div>
      </section>

      <section className="section wrap" aria-labelledby="prog">
        <h2 id="prog">How we help a family</h2>
        <ol className="path">{PROGRAMS.map(([n, t, , p]) => <li key={n} className="reveal"><Img id={p} decorative /><h3>{n}</h3><p>{t}</p></li>)}</ol>
        <Link to="/programs" className="btn ghost">All programs</Link>
      </section>

      <section className="wrap split mid house">
        <Img id="living" />
        <div><h2>Come see Williams Hope House</h2><p>A resource center and four interim homes, built with local builder Williams Homes.</p><Link to="/house" className="btn">Walk through it</Link></div>
      </section>
    </>
  )
}
