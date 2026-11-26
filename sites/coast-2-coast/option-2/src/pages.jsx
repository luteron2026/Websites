import { useState } from 'react'
import { Routes, Route, Link, useParams } from 'react-router-dom'
import { Img, Out, Form, Gallery, useTitle } from './core.jsx'
import * as D from './data.js'

export function Page({ title, intro, photo, children }) {
  useTitle('C2C Camps', title)
  return (
    <>
      <header className="cover wrap">
        <div className="cover-text rise"><h1>{title}</h1>{intro && <p>{intro}</p>}</div>
        <Img id={photo} eager />
      </header>
      {children}
    </>
  )
}

// Pick a state, then a site.
export function Finder({ initial = 'CA', heading = 'Find your location' }) {
  const [state, setState] = useState(initial)
  return (
    <div className="finder">
      <h2>{heading}</h2>
      <div className="switch" role="group" aria-label="State">
        {Object.entries(D.STATES).map(([k, v]) => <button type="button" key={k} aria-pressed={k === state} onClick={() => setState(k)}>{v}</button>)}
      </div>
      <ul className="sites">
        {D.LOCATIONS.filter((l) => l.state === state).map((l) => (
          <li key={l.id}><Link to={`/locations/${l.id}`}><Img id={l.photo} decorative /><span><strong>{l.city}</strong><small>{l.host}</small></span></Link></li>
        ))}
      </ul>
    </div>
  )
}

export const Register = ({ children = 'Register', className = 'btn' }) => <Out className={className} href={D.LINKS.register}>{children}</Out>

function Program({ title, photo, data, children }) {
  return (
    <Page title={title} photo={photo} intro={data.lead}>
      <section className="section wrap">
        <ul className="cards">
          {data.parts.map(([t, text, p]) => <li key={t} className="card reveal"><Img id={p} /><div><h3>{t}</h3><p>{text}</p></div></li>)}
        </ul>
      </section>
      {children}
      <section className="section wrap"><Finder heading={`Where to join ${title.toLowerCase()}`} /></section>
    </Page>
  )
}

function AfterSchool() {
  return (
    <Program title="After School" photo="trio" data={D.AFTER}>
      <section className="section wrap split">
        <div><h2>School holidays</h2><p className="lead">{D.AFTER.extra}</p></div>
        <div><h2>Ready for 2026–27?</h2><p>California families also sign licensing forms in person, with a pen.</p><div className="row"><Register>Register for after school</Register><Link to="/parents">Forms and prices</Link></div></div>
      </section>
    </Program>
  )
}

function Summer() {
  return (
    <Program title="Summer Camp" photo="airfield" data={D.SUMMER}>
      <section className="section wrap split">
        <div>
          <h2>Summer schedules</h2>
          <p>Summer 2027 schedules are not posted yet. Here is what 2026 looked like.</p>
          <ul className="doclist">{D.SUMMER_SCHEDULES.map(([t, u]) => <li key={t}><Out href={u}>{t}</Out></li>)}</ul>
        </div>
        <div><h2>{D.SUMMER.hours}</h2><p>Camp shirts are required on field trips. Drop-in summer campers are not under contract.</p><Out className="btn" href={D.LINKS.info}>Ask about summer 2027</Out></div>
      </section>
    </Program>
  )
}

function Locations() {
  return (
    <Page title="Locations" photo="church" intro="Seven sites: four in Ventura County, California, and three in Upstate South Carolina.">
      {Object.entries(D.STATES).map(([k, v]) => (
        <section className="section wrap" key={k}>
          <h2>{v}</h2>
          <ul className="cards">
            {D.LOCATIONS.filter((l) => l.state === k).map((l) => (
              <li key={l.id} style={{ display: 'flex' }}><Link className="card" to={`/locations/${l.id}`}><Img id={l.photo} decorative /><div><h3>{l.city}</h3><p>{l.host}</p><p className="meta">{l.address}</p></div></Link></li>
            ))}
          </ul>
        </section>
      ))}
    </Page>
  )
}

function Location() {
  const { id } = useParams()
  const l = D.LOCATIONS.find((x) => x.id === id)
  if (!l) return <Locations />
  const sc = l.state === 'SC'
  const docs = [D.DOCS.handbook, sc ? D.DOCS.scPrices : null, D.DOCS.fees, sc ? D.DOCS.scSnack : D.DOCS.caSnack, sc ? null : D.DOCS.licensing, D.DOCS.campership, D.DOCS.medication, D.DOCS.incidental].filter(Boolean)
  const map = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(l.address)}`
  return (
    <Page key={id} title={`C2C ${l.city}`} photo={l.photo} intro={`After-school care and summer camp in ${l.city}, ${l.state}, for K5 through 8th grade.`}>
      <section className="section wrap split">
        <div>
          <h2>Visit</h2>
          <dl className="facts">
            <div><dt>Where</dt><dd>{l.host}<br />{l.address}<br /><Out href={map}>Map and directions</Out></dd></div>
            <div><dt>Call</dt><dd><a href={`tel:${D.CO.tel}`}>{D.CO.phone}</a></dd></div>
            <div><dt>Billing</dt><dd>{l.billing ? <a href={`mailto:${l.billing}`}>{l.billing}</a> : 'Call the office or ask your site director.'}</dd></div>
            {!sc && <div><dt>Tuition</dt><dd>Ask your site director for the California price sheet.</dd></div>}
          </dl>
          <div className="row"><Register>Register for {l.city}</Register>{l.schedule && <Out href={l.schedule}>2026 summer schedule</Out>}</div>
        </div>
        <div>
          <h2>Forms and prices</h2>
          <ul className="doclist">{docs.map(([t, u]) => <li key={t}><Out href={u}>{t}</Out></li>)}</ul>
        </div>
      </section>
      <section className="section wrap">
        <h2>After-school pickup</h2>
        {l.schools.length
          ? <><p>We pick up from these schools. Is yours missing? Ask the {l.city} director whether it can be added.</p><ul className="chips">{l.schools.map((s) => <li key={s}>{s}</li>)}</ul></>
          : <p>Call {D.CO.phone} to ask which schools the {l.city} site picks up from.</p>}
      </section>
    </Page>
  )
}

function Parents() {
  const [q, setQ] = useState('')
  const faqs = D.FAQS.filter(([a, b]) => (a + b).toLowerCase().includes(q.trim().toLowerCase()))
  return (
    <Page title="For parents" photo="reading" intro="Forms, prices and straight answers in one place.">
      <section className="section wrap split">
        <div>
          <h2>Common questions</h2>
          <label className="search">Search the answers<input type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="auto-pay, shirts, holidays" /></label>
          {faqs.map(([a, b]) => <details key={a}><summary>{a}</summary><div>{b}</div></details>)}
          {!faqs.length && <p role="status">No match. Call {D.CO.phone} and we will help.</p>}
        </div>
        <div>
          <h2>Forms and documents</h2>
          <ul className="doclist">{Object.values(D.DOCS).map(([t, u]) => <li key={t}><Out href={u}>{t}</Out></li>)}<li><Out href={D.LINKS.records}>Request financial records</Out></li></ul>
          <Register>2026–27 registration form</Register>
        </div>
      </section>
    </Page>
  )
}

function Careers() {
  return (
    <Page title="Work at C2C" photo="airfield" intro="Teach kids about Jesus, play great games, build lasting friendships and get paid while you do it.">
      <section className="section wrap split">
        <div>
          <h2>Who we look for</h2>
          <ul className="ticks"><li>Dedicated Christians who want to invest in a child’s growth</li><li>People ready to mentor, encourage and be a role model</li><li>Staff who can pass a background check and complete training</li><li>Energy for homework help, crafts, games and field trips</li></ul>
          <Out className="btn" href={D.LINKS.jobs}>Apply online</Out>
        </div>
        <div><Img id="circle" /></div>
      </section>
    </Page>
  )
}

function Donate() {
  const [amount, setAmount] = useState(50)
  const [monthly, setMonthly] = useState(false)
  return (
    <Page title="Make a difference" photo="pumpkins" intro="Your gift helps kids learn, grow and laugh a little louder.">
      <section className="section wrap narrow donate">
        <div className="switch" role="group" aria-label="How often">
          {[['One time', false], ['Monthly', true]].map(([t, v]) => <button type="button" key={t} aria-pressed={monthly === v} onClick={() => setMonthly(v)}>{t}</button>)}
        </div>
        <div className="amounts" role="group" aria-label="Amount">
          {[20, 50, 100, 200].map((a) => <button type="button" key={a} aria-pressed={amount === a} onClick={() => setAmount(a)}>${a}</button>)}
        </div>
        <p><Out className="btn" href={D.LINKS.donate}>Give ${amount}{monthly ? ' a month' : ''}</Out></p>
        <p className="meta">This opens the current C2C donation page, where you confirm the amount and pay.</p>
      </section>
    </Page>
  )
}

function Contact() {
  return (
    <Page title="Talk to us" photo="hoop" intro="Ask about a site, a school pickup, tuition or summer.">
      <section className="section wrap split">
        <div><h2>Call</h2><p className="lead"><a href={`tel:${D.CO.tel}`}>{D.CO.phone}</a></p><p>For billing, open your <Link to="/locations">location page</Link>.</p></div>
        <Form to="the C2C office" submit="Send question" fields={[['name', 'Parent name', 'text', true], ['email', 'Email', 'email', true], ['tel', 'Phone', 'tel'], ['site', 'Location', 'select', D.LOCATIONS.map((l) => `${l.city}, ${l.state}`)], ['grade', 'Child’s grade', 'select', ['TK / K5', '1', '2', '3', '4', '5', '6', '7', '8']], ['notes', 'Your question', 'textarea', true]]} />
      </section>
    </Page>
  )
}

function Photos() {
  return (
    <Page title="Camp life" photo="aquarium" intro="A look at days at C2C.">
      <section className="section wrap"><Gallery filters={false} items={[['hoop'], ['sandcastle'], ['paint'], ['aquarium'], ['pizza'], ['pumpkins'], ['circle'], ['reading'], ['trio'], ['church'], ['airfield']]} /></section>
    </Page>
  )
}

export default function Pages({ home }) {
  return (
    <Routes>
      <Route path="/" element={home} />
      <Route path="/after-school" element={<AfterSchool />} />
      <Route path="/summer-camp" element={<Summer />} />
      <Route path="/locations" element={<Locations />} />
      <Route path="/locations/:id" element={<Location />} />
      <Route path="/parents" element={<Parents />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/donate" element={<Donate />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/photos" element={<Photos />} />
      <Route path="*" element={home} />
    </Routes>
  )
}
