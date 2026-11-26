import { Routes, Route, Link } from 'react-router-dom'
import { Img, Out, Form, Gallery, useTitle } from './core.jsx'
import * as D from './data.js'

export function Page({ title, intro, photo, children }) {
  useTitle('Carousel Ranch', title)
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

export const Donate = ({ className = 'btn', children = 'Donate' }) => <Out className={className} href={D.LINKS.donate}>{children}</Out>
const Link2 = ({ href, className, children }) => (href.startsWith('http') ? <Out className={className} href={href}>{children}</Out> : <a className={className} href={href}>{children}</a>)

export function Wreaths() {
  if (!D.wreathsOpen()) return null
  return (
    <section className="wreaths wrap" aria-labelledby="wreath-h">
      <Img id="wreath" />
      <div>
        <h2 id="wreath-h">Holiday wreaths</h2>
        <p><strong>{D.WREATHS.date}.</strong></p>
        <dl>{D.WREATHS.sizes.map(([s, p]) => <div key={s}><dt>{s}</dt><dd>{p}</dd></div>)}</dl>
        <p>Prices plus tax. Call to order.</p>
        <a className="btn" href={`tel:${D.CO.tel}`}>Call {D.CO.phone}</a>
      </div>
    </section>
  )
}

export function Quotes() {
  return <div className="quotes">{D.QUOTES.map(([q, by]) => <figure key={by} className="reveal"><blockquote><p>“{q}”</p></blockquote><figcaption>{by}</figcaption></figure>)}</div>
}

function Therapy() {
  return (
    <Page title="Equestrian therapy" photo="balance" intro="Horses take our students into a new world, with a sense of independence and freedom that defies their disability.">
      <aside className="wrap notice"><p><strong>Waitlist update.</strong> {D.PAUSED}</p><Out className="btn" href={D.LINKS.waitlist}>Join the notification list</Out></aside>
      <section className="section wrap split mid"><div>{D.THERAPY.map((t, i) => <p key={t} className={i ? undefined : 'lead'}>{t}</p>)}</div><div className="quad">{['ring-toss', 'basketball', 'wings', 'laughing'].map((p) => <Img key={p} id={p} />)}</div></section>
      <section className="section wrap"><h2>What riding builds</h2><div className="benefits">{D.BENEFITS.map(([t, list]) => <article key={t}><h3>{t}</h3><ul>{list.map((l) => <li key={l}>{l}</li>)}</ul></article>)}</div></section>
      <section className="section wrap"><h2>From families</h2><Quotes /></section>
    </Page>
  )
}

function Work() {
  return (
    <Page title="Ready to Work!" photo="tack-shop" intro="Vocational training that gets young adults with special needs ready for what comes after school.">
      <section className="section wrap narrow"><p className="lead">{D.RTW.why}</p><p>{D.RTW.split}</p></section>
      {D.RTW.levels.map(([t, text, p]) => <section key={t} className="section wrap split mid level"><Img id={p} /><div><h2>{t}</h2><p className="lead">{text}</p></div></section>)}
      <section className="section wrap"><div className="row"><Out className="btn" href={D.LINKS.rtw}>Apply for Ready to Work!</Out><a href={`tel:${D.CO.tel}`}>Questions? {D.CO.phone}</a></div></section>
    </Page>
  )
}

function Horses() {
  return (
    <Page title="Our horses" photo="resting" intro="We could not do this without them. Each one is chosen to suit the student who rides.">
      <section className="section wrap split"><div><h2>Meet the team</h2><ul className="names">{D.HORSES.map((h) => <li key={h}>{h}</li>)}</ul><p><a className="btn" href={`mailto:${D.CO.email}?subject=Horse%20sponsorship`}>Sponsor a horse</a></p></div><div>{D.HORSE_NOTES.map(([n, t]) => <article key={n}><h3>{n}</h3><p>{t}</p></article>)}</div></section>
      <section className="section wrap"><h2>Around the stables</h2><Gallery filters={false} items={D.HERD.map((h) => [h])} /></section>
    </Page>
  )
}

function Volunteer() {
  return (
    <Page title="Volunteer" photo="with-horse" intro={D.VOLUNTEER.intro}>
      <section className="section wrap"><ul className="cards">{D.VOLUNTEER.jobs.map(([t, d, p]) => <li key={t} className="card reveal"><Img id={p} /><div><h3>{t}</h3><p>{d}</p></div></li>)}</ul></section>
      <section className="section wrap split">
        <div><h2>Before you come</h2><dl className="facts"><div><dt>Hours</dt><dd>{D.VOLUNTEER.hours}</dd></div><div><dt>Age</dt><dd>{D.VOLUNTEER.age}</dd></div></dl><div className="row"><Out className="btn ghost" href={D.LINKS.guidelines}>Volunteer guidelines</Out><Out href={D.LINKS.release}>Information and release form</Out></div></div>
        <Form to={D.CO.email} submit="Ask to visit" fields={[['name', 'Name', 'text', true], ['email', 'Email', 'email', true], ['tel', 'Phone', 'tel', true], ['day', 'Best day', 'select', ['Tuesday', 'Wednesday', 'Thursday', 'Friday']], ['notes', 'About you', 'textarea']]} />
      </section>
    </Page>
  )
}

export function Ways() {
  return <ul className="cards">{D.GIVE.map(([t, d, href, label, p]) => <li key={t} className="card reveal"><Img id={p} /><div><h3>{t}</h3><p>{d}</p><Link2 href={href} className="btn ghost">{label}</Link2></div></li>)}</ul>
}

function Give() {
  return (
    <Page title="Give" photo="rider-help" intro="Partners, sponsors and neighbors make every lesson possible.">
      <section className="section"><Wreaths /></section>
      <section className="section wrap"><h2>Ways to support the Ranch</h2><Ways /><p className="meta" style={{ marginTop: '1.5rem' }}>Carousel Ranch is a 501(c)(3) nonprofit. Federal tax ID {D.CO.taxId}.</p></section>
    </Page>
  )
}

function About() {
  return (
    <Page title="Our story" photo="barn" intro={D.CO.tagline}>
      <section className="section wrap split"><div>{D.STORY.map((s, i) => <p key={s} className={i ? undefined : 'lead'}>{s}</p>)}</div><div><h2>Leadership</h2><dl className="facts">{D.TEAM.map(([n, r]) => <div key={n}><dt>{n}</dt><dd>{r}</dd></div>)}</dl></div></section>
      <section className="section wrap"><h2>Ranch days</h2><Gallery filters={false} items={['hug', 'seated', 'kneeling', 'smile-rider', 'rings', 'vaulting', 'petting', 'grooming', 'family-horse', 'lead'].map((p) => [p])} /></section>
    </Page>
  )
}

function Contact() {
  return (
    <Page title="Contact us" photo="arena" intro="Ask about programs, visits and support.">
      <section className="section wrap split">
        <dl className="facts"><div><dt>Phone</dt><dd><a href={`tel:${D.CO.tel}`}>{D.CO.phone}</a></dd></div><div><dt>Email</dt><dd><a href={`mailto:${D.CO.email}`}>{D.CO.email}</a></dd></div><div><dt>Ranch</dt><dd>{D.CO.address}<br /><Out href={D.CO.map}>Map and directions</Out></dd></div></dl>
        <Form to={D.CO.email} submit="Send message" fields={[['name', 'Name', 'text', true], ['email', 'Email', 'email', true], ['tel', 'Phone', 'tel'], ['topic', 'About', 'select', ['Equestrian therapy', 'Ready to Work!', 'Volunteering', 'Giving', 'Something else']], ['notes', 'Message', 'textarea', true]]} />
      </section>
    </Page>
  )
}

export default function Pages({ home }) {
  return (
    <Routes>
      <Route path="/" element={home} />
      <Route path="/equestrian-therapy" element={<Therapy />} />
      <Route path="/ready-to-work" element={<Work />} />
      <Route path="/horses" element={<Horses />} />
      <Route path="/volunteer" element={<Volunteer />} />
      <Route path="/give" element={<Give />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={home} />
    </Routes>
  )
}
