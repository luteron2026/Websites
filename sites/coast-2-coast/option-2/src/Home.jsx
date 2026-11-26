import { Link } from 'react-router-dom'
import { Img, Out, useTitle, media } from './core.jsx'
import { Finder } from './pages.jsx'
import { DOCS, FAQS, LINKS, PROMISE } from './data.js'

const TASKS = [
  ['Register my child', 'The 2026–27 form', LINKS.register],
  ['See prices and forms', 'Tuition, fees and handbook', '/parents'],
  ['Check school pickup', 'Choose your location', '/locations'],
  ['Apply for a campership', 'Financial help form', DOCS.campership[1]],
]

export default function Home() {
  useTitle('C2C Camps | After-School Care and Summer Camp')
  return (
    <>
      <section className="wrap hero">
        <div className="rise">
          <h1>Care you can count on, from pickup to 6 p.m.</h1>
          <p className="lead">After-school care and summer day camp for K5 to 8th grade. Trained, background-checked Christian staff since 1988.</p>
        </div>
        <ul className="tasks rise">
          {TASKS.map(([t, d, to]) => {
            const body = <><strong>{t}</strong><span>{d}</span><i aria-hidden="true">{to.startsWith('/') ? '→' : '↗'}</i></>
            return <li key={t}>{to.startsWith('/') ? <Link to={to}>{body}</Link> : <Out href={to}>{body}</Out>}</li>
          })}
        </ul>
      </section>

      <figure className="wrap wide"><Img id="trio" eager pos="50% 35%" /></figure>

      <section className="wrap section day" aria-labelledby="day">
        <h2 id="day">What an afternoon looks like</h2>
        <ol>
          <li><Img id="church" /><h3>We pick them up</h3><p>From participating schools. Check the list on your location page.</p></li>
          <li><Img id="reading" /><h3>Homework hour</h3><p>A scheduled hour with counselors on hand to help.</p></li>
          <li><Img id="circle" /><h3>Games, crafts, chapel</h3><p>Time to move, make things and grow in faith.</p></li>
          <li><Img id="aquarium" /><h3>Fun Fridays</h3><p>Field trips to parks, museums and bowling alleys.</p></li>
        </ol>
        <Link to="/after-school" className="textlink">About the after-school program</Link>
      </section>

      <section className="wrap summer split mid">
        <Img id="airfield" />
        <div>
          <h2>Then summer</h2>
          <p className="lead">Field trips every week, Water Day, chapel and crafts, from 7 a.m. to 6 p.m.</p>
          <div className="awards"><img src={media('award-kaboom.png')} alt="2026 Kaboom first place" width="400" height="400" /><img src={media('award-acorn.png')} alt="Camarillo Acorn Best of 2026" width="600" height="600" /><span>Voted best summer camp in 2026</span></div>
          <Link to="/summer-camp" className="btn ghost">Summer camp</Link>
        </div>
      </section>

      <section className="wrap section"><Finder /></section>

      <section className="wrap section two">
        <div><h2>Our promise</h2><dl>{PROMISE.map(([t, d]) => <div key={t}><dt>{t}</dt><dd>{d}</dd></div>)}</dl></div>
        <div><h2>Parents ask</h2>{FAQS.slice(0, 4).map(([q, a]) => <details key={q}><summary>{q}</summary><div>{a}</div></details>)}<p><Link to="/parents" className="textlink">All questions and forms</Link></p></div>
      </section>
    </>
  )
}
