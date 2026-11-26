import { Link } from 'react-router-dom'
import { Img, useTitle } from './core.jsx'
import { Campuses, Planner, Quotes } from './pages.jsx'
import { PILLARS, STEPS } from './data.js'

export default function Home() {
  useTitle('Beacon Hill Classical Academy')
  return (
    <>
      <section className="hero">
        <div className="wrap">
          <div className="rise">
            <h1>School three days. Four. Or five.</h1>
            <p className="lead">A classical Christian school in Camarillo where families choose full time or a school-and-home week, from kindergarten to grade 12.</p>
            <div className="photos"><Img id="young-artist" eager /><Img id="circle-game" eager /></div>
          </div>
          <Planner heading="See your week and cost" />
        </div>
      </section>

      <section className="wrap section"><h2>What you are choosing</h2><ul className="pillars">{PILLARS.map(([t, d]) => <li key={t} className="reveal"><h3>{t}</h3><p>{d}</p></li>)}</ul></section>

      <section className="how">
        <div className="wrap">
          <h2>How to join</h2>
          <ol>{STEPS.map(([t, d]) => <li key={t}><h3>{t}</h3><p>{d}</p></li>)}</ol>
          <Link to="/admissions" className="btn">Admissions details</Link>
        </div>
      </section>

      <section className="strip">{['volleyball', 'weaving', 'retreat-hume', 'painting'].map((p) => <Img key={p} id={p} />)}</section>

      <section className="wrap section"><h2>Parents say</h2><Quotes /></section>
      <section className="wrap section"><h2>Visit us</h2><Campuses /></section>
    </>
  )
}
