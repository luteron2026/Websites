import { Link } from 'react-router-dom'
import { Img, Out, useTitle } from './core.jsx'
import { Quotes, Wreaths } from './pages.jsx'
import { LINKS, MISSION, PAUSED, VOLUNTEER } from './data.js'

const I_AM = [
  ['A parent of a child', 'Therapy and the waitlist', '/equestrian-therapy', 'ring-toss'],
  ['A young adult, or family of one', 'Job training', '/ready-to-work', 'tack-team'],
  ['Someone with time to give', 'Volunteer', '/volunteer', 'lesson'],
  ['Someone who wants to give', 'Donate, sponsor or partner', '/give', 'petting'],
]

export default function Home() {
  useTitle('Carousel Ranch')
  return (
    <>
      <section className="wrap hero">
        <div className="rise"><h1>Horses help our students succeed.</h1><p className="lead">{MISSION}</p></div>
        <Img id="staff-sidewalk" eager />
      </section>
      <section className="wrap section" aria-labelledby="iam">
        <h2 id="iam">Choose what fits you</h2>
        <ul className="choose">{I_AM.map(([who, what, to, p]) => <li key={to}><Link to={to}><Img id={p} decorative /><span><small>I am</small><strong>{who}</strong><em>{what}</em></span></Link></li>)}</ul>
      </section>
      <section className="status">
        <div className="wrap"><div><h2>Therapy waitlist</h2><p>{PAUSED}</p><Out className="btn" href={LINKS.waitlist}>Tell me when you reopen</Out></div><div><h2>Volunteer hours</h2><p>{VOLUNTEER.hours} {VOLUNTEER.age}</p><Link className="btn ghost" to="/volunteer">How to start</Link></div></div>
      </section>
      <section className="section"><Wreaths /></section>
      <section className="wrap section"><h2>Parents say</h2><Quotes /></section>
    </>
  )
}
