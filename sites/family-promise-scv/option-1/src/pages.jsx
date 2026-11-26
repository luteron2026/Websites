import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { Img, Out, Form, Gallery, useTitle } from './core.jsx'
import * as D from './data.js'

export function Page({ title, intro, photo, children }) {
  useTitle('Family Promise SCV', title)
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

export const Action = ({ link, className = 'btn' }) => (link[1].startsWith('mailto:') ? <a className={className} href={link[1]}>{link[0]}</a> : <Out className={className} href={link[1]}>{link[0]}</Out>)

export function Impact() {
  return <dl className="impact">{D.IMPACT.map(([n, t]) => <div key={t} className="reveal"><dt>{n}</dt><dd>{t}</dd></div>)}</dl>
}

// Pick what you can give; see only the ways that match.
export function Ways() {
  const [kind, setKind] = useState('All')
  const list = D.WAYS.filter((w) => kind === 'All' || w.kind === kind)
  return (
    <>
      <div className="filters" role="group" aria-label="What can you give?">
        {['All', 'Time', 'Goods', 'Money'].map((k) => <button type="button" key={k} aria-pressed={k === kind} onClick={() => setKind(k)}>{k}</button>)}
      </div>
      <ul className="cards ways">
        {list.map((w) => <li key={w.id} className="card"><Img id={w.photo} /><div><h3>{w.title}</h3><p>{w.text}</p><Action link={w.link} className="btn ghost" /></div></li>)}
      </ul>
    </>
  )
}

export function Events() {
  const next = D.upcoming()
  return next.length ? (
    <ul className="rows events">{next.map((e) => <li key={e.name}><h3>{e.name}</h3><p><strong>{e.date}.</strong> {e.text}</p><a className="btn ghost" href={`mailto:${D.CO.email}?subject=${encodeURIComponent(e.name)}`}>Ask how to help</a></li>)}</ul>
  ) : <p>No dates are posted right now. Call {D.CO.phone} to ask what is coming up.</p>
}

function Eligibility() {
  const [a, setA] = useState({})
  const q = [['child', 'Is there a child under 18 in your care, or are you pregnant?'], ['area', 'Are you in or near the Santa Clarita Valley?']]
  const done = q.every(([k]) => a[k])
  return (
    <div className="check">
      <h2>A quick first check</h2>
      {q.map(([k, label]) => (
        <fieldset key={k}><legend>{label}</legend>{['Yes', 'No'].map((v) => <button type="button" key={v} aria-pressed={a[k] === v} onClick={() => setA({ ...a, [k]: v })}>{v}</button>)}</fieldset>
      ))}
      <div className="result" aria-live="polite">
        {a.child === 'No' ? <p><strong>{D.WHO.no}</strong></p>
          : done && a.area === 'Yes' ? <p><strong>We may be able to help.</strong> Call the case management team at <a href={`tel:${D.CO.helpTel}`}>{D.CO.helpPhone}</a>.</p>
            : done ? <p><strong>Call us and we will point you the right way:</strong> <a href={`tel:${D.CO.helpTel}`}>{D.CO.helpPhone}</a>.</p>
              : <p>Answer both questions. Nothing you tap here is saved or sent.</p>}
      </div>
    </div>
  )
}

function GetHelp() {
  return (
    <Page title="Need a safe place?" photo="entry" intro={`Call our case management team at ${D.CO.helpPhone}, or email ${D.CO.helpEmail}.`}>
      <section className="section wrap split">
        <div>
          <p><a className="btn big" href={`tel:${D.CO.helpTel}`}>Call {D.CO.helpPhone}</a></p>
          <h2>Who we serve</h2>
          <ul className="ticks">{D.WHO.yes.map((w) => <li key={w}>{w}</li>)}</ul>
          <p>{D.WHO.no}</p>
        </div>
        <Eligibility />
      </section>
      <section className="section wrap split">
        <div><h2>Interim house guidelines</h2><ul className="ticks">{D.GUIDELINES.map((g) => <li key={g}>{g}</li>)}</ul><p>{D.GUIDE_NOTE}</p></div>
        <div><h2>Food support</h2><p>{D.FOOD}</p><Out className="btn ghost" href={D.LINKS.food}>Register for food support</Out><h3 style={{ marginTop: '2rem' }}>Office hours</h3><p>{D.CO.hours}<br />{D.CO.address}</p></div>
      </section>
    </Page>
  )
}

function Programs() {
  return (
    <Page title="Support at every step" photo="living" intro="Help shaped to where a family is, from keeping a lease to staying stable years later.">
      {D.PROGRAMS.map(([n, t, items, p]) => (
        <section key={n} className="section wrap split mid program"><Img id={p} /><div><h2>{n}</h2><p className="lead">{t}</p><ul className="ticks">{items.map((i) => <li key={i}>{i}</li>)}</ul></div></section>
      ))}
      <section className="section wrap"><Link className="btn" to="/get-help">Ask for help</Link></section>
    </Page>
  )
}

function House() {
  return (
    <Page title="Williams Hope House" photo="dining" intro={D.HOUSE.lead}>
      <section className="section wrap"><ul className="cards">{D.STAY.map(([t, d]) => <li key={t} className="card plain"><div><h3>{t}</h3><p>{d}</p></div></li>)}</ul></section>
      <section className="section wrap rooms">
        {D.HOUSE.rooms.map(([id, label]) => <figure key={id} className="reveal"><Img id={id} /><figcaption>{label}</figcaption></figure>)}
      </section>
      <section className="section wrap split mid"><Img id="build" /><div><h2>How it was built</h2><p>On YouTube, search “Williams Homes Family Promise” to follow the build.</p><Link className="btn" to="/donate">Help keep the doors open</Link></div></section>
    </Page>
  )
}

function Volunteer() {
  return (
    <Page title="Give an hour, a meal, a bag" photo="drive" intro="Individuals, families, church groups, clubs and companies all have a place here.">
      <section className="section wrap"><Ways /></section>
      <section className="section wrap split">
        <div><h2>Tell us about yourself</h2><p>Not sure where you fit? Send a note, or email <a href={`mailto:${D.CO.volunteerEmail}`}>{D.CO.volunteerEmail}</a>.</p></div>
        <Form to={D.CO.volunteerEmail} submit="Send my interest" fields={[['name', 'Name', 'text', true], ['email', 'Email', 'email', true], ['tel', 'Phone', 'tel'], ['group', 'I am', 'select', ['An individual', 'A family', 'A church group', 'A school or club', 'A company']], ['notes', 'How would you like to help?', 'textarea']]} />
      </section>
    </Page>
  )
}

const AMOUNTS = [25, 50, 100, 250]
export function Donate() {
  const [amount, setAmount] = useState(50)
  return (
    <div className="donate">
      <div className="amounts" role="group" aria-label="Gift amount">{AMOUNTS.map((a) => <button type="button" key={a} aria-pressed={a === amount} onClick={() => setAmount(a)}>${a}</button>)}</div>
      <p><Out className="btn" href={D.LINKS.give}>Give ${amount}</Out></p>
      <p className="meta">You will confirm the amount on the secure giving page. Tax ID {D.CO.taxId}.</p>
    </div>
  )
}

function Give() {
  return (
    <Page title={D.MOTTO} photo="children" intro="Every gift, large or small, helps a family find stability.">
      <section className="section wrap split">
        <div><h2>Make a gift</h2><Donate /></div>
        <div>
          <h2>Or give goods</h2>
          <p>Gift cards for Target, Walmart, grocery stores and gas fill urgent gaps.</p>
          <div className="row"><Out className="btn ghost" href={D.LINKS.supplies}>Supply wish list</Out><Out className="btn ghost" href={D.LINKS.wishlist}>Second wish list</Out></div>
          <p style={{ marginTop: '1.5rem' }}>Mail checks to {D.CO.mail}.<br />Drop-offs: {D.CO.address}. {D.CO.hours}</p>
        </div>
      </section>
      <section className="section wrap"><h2>More ways</h2><Ways /></section>
    </Page>
  )
}

function ImpactPage() {
  return (
    <Page title={`What ${D.IMPACT_YEAR} made possible`} photo="playing" intro={D.MISSION}>
      <section className="section wrap"><Impact /></section>
      <section className="section wrap split"><div><h2>Where it started</h2><p className="lead">{D.HISTORY}</p></div><div><h2>Our vision</h2><p className="lead">A nation in which every family has a home, a livelihood and the chance to build a better future.</p></div></section>
      <section className="section wrap"><h2>Around the Valley</h2><Gallery filters={false} items={[['drive'], ['teens'], ['golf'], ['sign'], ['aerial'], ['build'], ['house'], ['lounge']]} /></section>
    </Page>
  )
}

function Contact() {
  return (
    <Page title="Contact us" photo="sign" intro={D.CO.hours}>
      <section className="section wrap split">
        <dl className="facts">
          <div><dt>Need help</dt><dd><a href={`tel:${D.CO.helpTel}`}>{D.CO.helpPhone}</a><br /><a href={`mailto:${D.CO.helpEmail}`}>{D.CO.helpEmail}</a></dd></div>
          <div><dt>General</dt><dd><a href={`tel:${D.CO.tel}`}>{D.CO.phone}</a><br /><a href={`mailto:${D.CO.email}`}>{D.CO.email}</a></dd></div>
          <div><dt>Visit</dt><dd>{D.CO.address}<br /><Out href={D.CO.map}>Map and directions</Out></dd></div>
          <div><dt>Mail</dt><dd>{D.CO.mail}</dd></div>
        </dl>
        <Form to={D.CO.email} submit="Send message" fields={[['name', 'Name', 'text', true], ['email', 'Email', 'email', true], ['notes', 'Message', 'textarea', true]]} />
      </section>
    </Page>
  )
}

export default function Pages({ home }) {
  return (
    <Routes>
      <Route path="/" element={home} />
      <Route path="/get-help" element={<GetHelp />} />
      <Route path="/programs" element={<Programs />} />
      <Route path="/house" element={<House />} />
      <Route path="/volunteer" element={<Volunteer />} />
      <Route path="/donate" element={<Give />} />
      <Route path="/impact" element={<ImpactPage />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={home} />
    </Routes>
  )
}
