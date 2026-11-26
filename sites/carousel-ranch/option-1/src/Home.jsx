import { Link } from 'react-router-dom'
import { Img, useTitle } from './core.jsx'
import { Donate, Quotes, Wreaths } from './pages.jsx'
import { CO, MISSION, PAUSED, STORY } from './data.js'

export default function Home() {
  useTitle('Carousel Ranch')
  return (
    <>
      <section className="hero wrap">
        <div className="rise"><h1>A place where therapy is disguised as <em>fun.</em></h1><p className="lead">{MISSION}</p><div className="row"><Donate>Support a rider</Donate><Link className="btn ghost" to="/volunteer">Volunteer</Link></div></div>
        <div className="rounds rise"><Img id="ring-toss" eager /><Img id="basketball" eager /><Img id="kiss" eager /></div>
      </section>

      <section className="wrap programs" aria-label="Programs">
        <article><Img id="balance" /><div><h2>Equestrian therapy</h2><p>One-to-one riding that builds balance, strength, communication and confidence.</p><p className="small">{PAUSED.split(' Leave')[0]}</p><Link className="btn" to="/equestrian-therapy">The program and waitlist</Link></div></article>
        <article><Img id="tack-shop" /><div><h2>Ready to Work!</h2><p>Young adults learn job skills in our own shop and with local employers.</p><Link className="btn" to="/ready-to-work">Levels and how to apply</Link></div></article>
      </section>

      <section className="section"><Wreaths /></section>

      <section className="herd">
        <div className="wrap"><h2>The horses do the heavy lifting</h2><Link to="/horses">Meet the herd</Link></div>
        <ul>{['horse-5', 'horse-9', 'horse-2', 'horse-4', 'horse-6', 'horse-10'].map((h) => <li key={h}><Img id={h} /></li>)}</ul>
      </section>

      <section className="wrap section"><h2>What parents tell us</h2><Quotes /></section>

      <section className="wrap section split mid"><Img id="barn" /><div><h2>One student, one horse, one backyard</h2><p className="lead">{STORY[0]}</p><p>Today {CO.name} has a home of its own with a covered arena.</p><Link className="btn ghost" to="/about">Our story</Link></div></section>
    </>
  )
}
