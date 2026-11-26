import { Link } from 'react-router-dom'
import { Img, Out, useTitle } from './core.jsx'
import { Campuses, Quotes, Apply } from './pages.jsx'
import { CAMPUSES, CO, MISSION, PILLARS, TRIVIUM } from './data.js'

export default function Home() {
  useTitle('Beacon Hill Classical Academy')
  return (
    <>
      <section className="hero">
        <Img id="prayer" eager />
        <div className="wrap rise">
          <h1>{CO.motto}</h1>
          <p>Classical Christian education for kindergarten through grade 12 in Camarillo.</p>
          <div className="row">{CAMPUSES.map((c) => <Out key={c.id} className="btn" href={c.tour}>Tour {c.grades.replace('Grades ', '')}</Out>)}<Apply className="btn ghost">Apply</Apply></div>
        </div>
      </section>

      <section className="wrap section mission"><p>{MISSION}</p></section>

      <section className="trivium" aria-labelledby="tri">
        <div className="wrap">
          <h2 id="tri">Three stages of a mind</h2>
          <ol>{TRIVIUM.map(([n, g, t, p]) => <li key={n} className="reveal"><Img id={p} decorative /><p className="meta">{g}</p><h3>{n}</h3><p>{t.split('. ')[0].replace(/\.$/, '')}.</p></li>)}</ol>
          <Link to="/programs" className="btn ghost">Programs and schedules</Link>
        </div>
      </section>

      <section className="wrap section split mid">
        <Img id="circle-game" />
        <div><h2>Four pillars</h2><dl className="facts">{PILLARS.map(([t, d]) => <div key={t}><dt>{t}</dt><dd>{d}</dd></div>)}</dl></div>
      </section>

      <section className="wrap section"><h2>What families say</h2><Quotes /></section>

      <section className="visit"><div className="wrap"><h2>One school, two campuses</h2><Campuses /></div></section>
    </>
  )
}
