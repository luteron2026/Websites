import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { Img, Out, Form, Gallery, useTitle } from './core.jsx'
import * as D from './data.js'

export function Page({ title, intro, photo, children }) {
  useTitle('Beacon Hill Classical Academy', title)
  return (
    <>
      <header className="cover">
        <Img id={photo} eager />
        <div className="wrap cover-text rise"><h1>{title}</h1>{intro && <p>{intro}</p>}</div>
      </header>
      {children}
    </>
  )
}

export const Apply = ({ className = 'btn', children = 'Apply' }) => <Out className={className} href={D.LINKS.apply}>{children}</Out>

const money = (n) => `$${n.toLocaleString('en-US')}`
const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']

// Grade and program in, week schedule, hours, campus and published cost out.
export function Planner({ heading = 'Plan your student’s week' }) {
  const [grade, setGrade] = useState('3')
  const [program, setProgram] = useState('collab')
  const p = D.plan(grade, program)
  return (
    <div className="planner">
      <h2>{heading}</h2>
      <div className="pick">
        <label>Grade<select value={grade} onChange={(e) => setGrade(e.target.value)}>{D.GRADES.map((g) => <option key={g} value={g}>{g === 'Kindergarten' ? g : `Grade ${g}`}</option>)}</select></label>
        <div role="group" aria-label="Program">
          {[['collab', 'Collaborative'], ['full', 'Full time']].map(([k, t]) => <button type="button" key={k} aria-pressed={k === program} onClick={() => setProgram(k)}>{t}</button>)}
        </div>
      </div>
      <div aria-live="polite">
        <ol className="week">{DAYS.map((d, i) => <li key={d} className={p.days[i] ? 'school' : 'home'}><b>{d}</b><span>{p.days[i] ? 'On campus' : 'At home'}</span></li>)}</ol>
        <dl className="facts">
          <div><dt>Hours</dt><dd>{p.hours}</dd></div>
          <div><dt>Campus</dt><dd>{p.campus.name}, {p.campus.address}</dd></div>
          <div><dt>Tuition</dt><dd><strong className="price">{money(p.tuition)}</strong> for 2026–27, plus {money(p.fee)} books and materials{p.senior ? ' and a $400 commencement fee' : ''}</dd></div>
        </dl>
        {program === 'full' && /^[1-5]$/.test(grade) && <p className="meta">{D.GRAMMAR_NOTE}</p>}
      </div>
      <div className="row"><Out className="btn" href={p.campus.tour}>Tour the {p.campus.name}</Out><Link to="/tuition">Discounts and fees</Link></div>
    </div>
  )
}

export function Quotes() {
  return <div className="quotes">{D.QUOTES.map(([q, by]) => <figure key={by} className="reveal"><blockquote><p>“{q}”</p></blockquote><figcaption>{by}</figcaption></figure>)}</div>
}

export function Campuses() {
  return (
    <div className="campuses">
      {D.CAMPUSES.map((c) => (
        <article key={c.id}><h3>{c.name}</h3><p className="meta">{c.grades}</p><p>{c.address}<br /><a href={`tel:${c.tel}`}>{c.phone}</a></p><div className="row"><Out className="btn" href={c.tour}>Schedule a tour</Out><Out href={D.mapUrl(c.address)}>Map</Out></div></article>
      ))}
    </div>
  )
}

function About() {
  return (
    <Page title="One school, one mission" photo="prayer" intro={D.MISSION}>
      <section className="section wrap"><ul className="cards">{D.PILLARS.map(([t, d]) => <li key={t} className="card plain"><div><h3>{t}</h3><p>{d}</p></div></li>)}</ul></section>
      <section className="section wrap split">
        <div><h2><span lang="la">{D.CO.latin}</span></h2><p className="lead">{D.CO.english}</p><p>We recite our motto in Latin because it reminds us that we belong to a long tradition that has cherished this philosophy.</p></div>
        <div><h2>Our vision</h2><p className="lead">{D.VISION}</p><p>Beacon Hill is not tied to any one church. It is an extension of the Church.</p><p>Dennis Deutsch, Head of School, is one of the founding four of the academy.</p></div>
      </section>
      <section className="section wrap"><h2>From our families</h2><Quotes /></section>
    </Page>
  )
}

function Programs() {
  return (
    <Page title="The Trivium" photo="circle-game" intro="Classical education trains the mind in three stages, matched to how children grow.">
      {D.TRIVIUM.map(([n, g, t, p]) => <section key={n} className="section wrap split mid stage"><Img id={p} /><div><p className="meta">{g}</p><h2>{n}</h2><p className="lead">{t}</p></div></section>)}
      <section className="section wrap"><Planner heading="Full time or collaborative?" /><p className="narrow" style={{ marginTop: '1.5rem' }}>About a third of students attend five days. In the collaborative program, parents follow teachers’ lesson plans on home days, with all necessary materials provided by the school.</p></section>
    </Page>
  )
}

function Admissions() {
  return (
    <Page title="Joining Beacon Hill" photo="weaving" intro="Four steps, from application to enrollment.">
      <section className="section wrap"><ol className="steps">{D.STEPS.map(([t, d]) => <li key={t} className="reveal"><h3>{t}</h3><p>{d}</p></li>)}</ol><div className="row"><Apply>Start the 2026–27 application</Apply><Link to="/visit">Tour first</Link></div></section>
      <section className="section wrap split"><div><h2>Age guide</h2><p>{D.AGES}</p></div><div><h2>What families agree to</h2><p>Students should understand that parents delegate their authority to the school during the school day, and that all authority comes from God.</p></div></section>
    </Page>
  )
}

function Tuition() {
  return (
    <Page title="Tuition 2026–27" photo="young-artist" intro="Published annual tuition, fees and discounts.">
      <section className="section wrap">
        <div className="table"><table><thead><tr><th scope="col">Level</th><th scope="col">Collaborative</th><th scope="col">Full time</th></tr></thead><tbody>{D.TUITION.map(([l, a, b]) => <tr key={l}><th scope="row">{l}</th><td>{a}</td><td>{b}</td></tr>)}</tbody></table></div>
        <p className="meta">{D.GRAMMAR_NOTE}</p>
      </section>
      <section className="section wrap split"><dl className="facts">{D.FEES.map(([t, v]) => <div key={t}><dt>{t}</dt><dd>{v}</dd></div>)}</dl><div><h2>Paying and help</h2><p>Current families pay through FACTS. Ask the office about applying for a scholarship.</p><div className="row"><Out className="btn" href={D.LINKS.facts}>FACTS sign in</Out><Link to="/contact">Ask about scholarships</Link></div></div></section>
    </Page>
  )
}

function Life() {
  return (
    <Page title="Student life" photo="team" intro="Chapel, art, athletics, retreats and trips.">
      <section className="section wrap split">
        <div><h2>Chapel and music</h2><p>Mornings begin with students singing hymns, psalms and spiritual songs together.</p><h2>Gryphon athletics</h2><p>Soccer, basketball, volleyball and more from the Logic School up.</p><Out className="btn ghost" href={D.LINKS.athletics}>Athletics calendar</Out></div>
        <div className="stack"><Img id="volleyball" /><Img id="retreat-catalina" /></div>
      </section>
      <section className="section wrap"><h2>The student gallery</h2><Gallery filters={false} items={D.ART.map((a) => [a])} /></section>
    </Page>
  )
}

function Visit() {
  return (
    <Page title="Come and see" photo="all-school" intro="Two campuses in Camarillo. Book a tour of the one that fits your student.">
      <section className="section wrap"><Campuses /></section>
    </Page>
  )
}

function Contact() {
  return (
    <Page title="Contact the school" photo="circle-game" intro="Call either office, or send a question.">
      <section className="section wrap split">
        <div><dl className="facts">{D.CAMPUSES.map((c) => <div key={c.id}><dt>{c.name}</dt><dd><a href={`tel:${c.tel}`}>{c.phone}</a><br />{c.address}</dd></div>)}</dl></div>
        <Form to="the school office" submit="Send question" fields={[['name', 'Name', 'text', true], ['email', 'Email', 'email', true], ['tel', 'Phone', 'tel', true], ['grade', 'Student’s grade', 'select', D.GRADES], ['notes', 'Question or comment', 'textarea', true]]} />
      </section>
    </Page>
  )
}

export function Portals() {
  return <ul className="portals">{[['Scholae', D.LINKS.login], ['Canvas', D.LINKS.canvas], ['FACTS', D.LINKS.facts], ['Calendar', D.LINKS.calendar], ['Store', D.LINKS.store], ['Give', D.LINKS.giving]].map(([t, u]) => <li key={t}><Out href={u}>{t}</Out></li>)}</ul>
}

export default function Pages({ home }) {
  return (
    <Routes>
      <Route path="/" element={home} />
      <Route path="/about" element={<About />} />
      <Route path="/programs" element={<Programs />} />
      <Route path="/admissions" element={<Admissions />} />
      <Route path="/tuition" element={<Tuition />} />
      <Route path="/life" element={<Life />} />
      <Route path="/visit" element={<Visit />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={home} />
    </Routes>
  )
}
