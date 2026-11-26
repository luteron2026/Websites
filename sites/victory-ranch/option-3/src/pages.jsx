import { Routes, Route, Link, useParams } from 'react-router-dom'
import { Img, Out, Form, Gallery, useTitle } from './core.jsx'
import * as D from './data.js'

export const SITE = 'Victory Ranch | Christian Camp and Retreat Center'

export function Page({ title: t, intro, photo, children }) {
  useTitle('Victory Ranch', t)
  return (
    <>
      <header className="cover">
        <Img id={photo} eager />
        <div className="wrap cover-text rise"><h1>{t}</h1>{intro && <p>{intro}</p>}</div>
      </header>
      {children}
    </>
  )
}

const status = (e) => (e.end >= new Date().toISOString().slice(0, 10) ? 'Register' : 'See details')

export function CampCards({ list = D.CAMPS }) {
  return (
    <ul className="cards">
      {list.map((c) => (
        <li key={c.id} className="reveal" style={{ display: 'flex' }}>
          <Link className="card" to={`/camps/${c.id}`}>
            <Img id={c.photo} decorative />
            <div><p className="meta">{c.who}</p><h3>{c.name}</h3><p>{c.date}</p><p className="price">{c.price}</p></div>
          </Link>
        </li>
      ))}
    </ul>
  )
}

function Camps() {
  const next = D.upcoming().filter((e) => !e.retreat)
  const past = D.CAMPS.filter((c) => !next.some((n) => n.id === c.id))
  return (
    <Page title="Camps" photo="teen-girls" intro="Summer weeks for grades 3 to 12, a first-camp day for the little ones, and Winter Camp after Christmas.">
      {next.length > 0 && <section className="section wrap"><h2>Registering now</h2><CampCards list={next} /></section>}
      <section className="section wrap"><h2>Summer and seasonal camps</h2><p className="narrow">These are the 2026 dates and prices. Summer 2027 dates will be posted here once the Ranch sets them.</p><CampCards list={past} /></section>
      <section className="section wrap split">
        <div><h2>What to bring</h2><p>{D.BRING}</p></div>
        <div><h2>Leave at home</h2><p>{D.LEAVE}</p><p>Campership funds may be available. Ask your local GARBC pastor for an application.</p></div>
      </section>
    </Page>
  )
}

function Camp() {
  const { id } = useParams()
  const c = D.CAMPS.find((x) => x.id === id)
  if (!c) return <Camps />
  const open = status(c) === 'Register'
  return (
    <Page key={id} title={c.name} photo={c.photo} intro={`${c.who} · ${c.date}`}>
      <section className="section wrap split">
        <div>
          <p className="lead">{c.text}</p>
          <dl className="facts">
            <div><dt>Dates</dt><dd>{c.date}</dd></div>
            <div><dt>Times</dt><dd>{c.times}</dd></div>
            <div><dt>Cost</dt><dd>{c.price}. {c.early}.</dd></div>
            <div><dt>For</dt><dd>{c.who}</dd></div>
          </dl>
          {open && c.register
            ? <div className="row"><Out className="btn" href={c.register}>Register online</Out><a href={`tel:${D.CO.tel}`}>Or call {D.CO.phone}</a></div>
            : <><p><strong>{open ? 'Ask the office to register.' : 'This session has finished.'}</strong> {!open && 'Call the office to hear about the next one.'}</p><a className="btn" href={`tel:${D.CO.tel}`}>Call {D.CO.phone}</a></>}
        </div>
        <div className="stack">{c.more.map((m) => <Img key={m} id={m} />)}</div>
      </section>
      <section className="section wrap split">
        <div><h2>What to bring</h2><p>{D.BRING}</p></div>
        <div><h2>Good to know</h2><p>Please leave at home: {D.LEAVE.toLowerCase()}</p><p>Mail time is a daily highlight. Send letters to your camper care of Victory Ranch, {D.CO.addr1}, {D.CO.addr2}.</p></div>
      </section>
    </Page>
  )
}

function Retreats() {
  return (
    <Page title="Retreats and gatherings" photo="ladies-group" intro="Weekends for women and men each spring and fall, and open days the whole family can come to.">
      {D.RETREATS.map((r) => (
        <section key={r.id} className="section wrap split mid">
          <div><h2>{r.name}</h2><p className="meta">{r.date} · {r.price}</p><p className="lead">{r.text}</p><a className="btn" href={`tel:${D.CO.tel}`}>Ask about spring</a></div>
          <div className="quad">{r.more.map((m) => <Img key={m} id={m} />)}</div>
        </section>
      ))}
      <section className="section wrap">
        <h2>Through the year</h2>
        <ul className="cards">
          {D.GATHERINGS.map((g) => <li key={g.name} className="card reveal"><Img id={g.photo} /><div><p className="meta">{g.when} · {g.price}</p><h3>{g.name}</h3><p>{g.text}</p></div></li>)}
        </ul>
      </section>
    </Page>
  )
}

function Rentals() {
  return (
    <Page title="Bring your group to the Ranch" photo="barn" intro="87 acres in the San Jacinto foothills, 25 miles east of Riverside, with room for more than 200 people year round.">
      <section className="section wrap">
        <h2>Places to meet, eat and play</h2>
        <ul className="cards">
          {D.SPACES.map(([n, cap, t, p]) => <li key={n} className="card reveal"><Img id={p} /><div><p className="meta">{cap}</p><h3>{n}</h3><p>{t}</p></div></li>)}
        </ul>
        <p className="narrow" style={{ marginTop: '2rem' }}>Wagon Wheel offers a meeting room for up to 30, and Victory Circle is an outdoor amphitheater and campfire spot for worship and gatherings.</p>
      </section>
      <section className="section wrap split">
        <div>
          <h2>Where you sleep</h2>
          <dl className="facts">{D.LODGING.map(([n, c, t]) => <div key={n}><dt>{n}</dt><dd><strong>{c}.</strong> {t}</dd></div>)}</dl>
        </div>
        <div>
          <h2>Rates</h2>
          <dl className="facts">{D.RATES.map(([n, p, t]) => <div key={n}><dt>{n}</dt><dd><strong className="price">{p}</strong> {t}</dd></div>)}</dl>
          <h3>Family camps</h3>
          <ul className="ticks">{D.FAMILY.map((f) => <li key={f}>{f}</li>)}</ul>
          <p>{D.TERMS} <Out href={D.CO.beliefs}>Read the doctrinal statement</Out>.</p>
        </div>
      </section>
      <section className="section wrap narrow" id="inquire">
        <h2>Ask about a date</h2>
        <Form to="the camp office" submit="Send rental inquiry" fields={[['name', 'Your name', 'text', true], ['church', 'Church or group', 'text', true], ['email', 'Email', 'email', true], ['tel', 'Phone', 'tel'], ['date', 'Preferred arrival', 'date'], ['size', 'Group size', 'number'], ['nights', 'Length of stay', 'select', ['Day use', '1 night', '2 nights', '3 nights or more']], ['notes', 'Anything we should know', 'textarea']]} />
      </section>
    </Page>
  )
}

function About() {
  return (
    <Page title="Since 1956" photo="trail" intro="Christ-centered camps in a canyon behind a row of pepper trees.">
      <section className="section wrap split">
        <div>{D.STORY.map((s, i) => <p key={i} className={i ? undefined : 'lead'}>{s}</p>)}<Out className="btn ghost" href={D.CO.beliefs}>What we believe</Out></div>
        <div className="stack"><Img id="work-week" /><Img id="study" /></div>
      </section>
      <section className="section wrap"><h2>Around the Ranch</h2><Gallery items={D.GALLERY} /></section>
    </Page>
  )
}

function Give() {
  return (
    <Page title="Help build what comes next" photo="work-week" intro="Gifts and volunteers keep camp within reach for the next group of kids.">
      <section className="section wrap split">
        <div>
          <h2>The New Cabin Fund</h2>
          <p className="lead">{D.PROJECT}</p>
          <p>To support this project, mark your gift “New Cabin Fund.”</p>
          <Out className="btn" href={D.CO.donate}>Give through the Ranch</Out>
        </div>
        <div><h2>What the Ranch needs</h2><ul className="ticks">{D.NEEDS.map((n) => <li key={n}>{n}</li>)}</ul><p>Call {D.CO.phone} before dropping anything off.</p></div>
      </section>
    </Page>
  )
}

function Contact() {
  return (
    <Page title="Visit the Ranch" photo="pool" intro={`${D.CO.addr1}, ${D.CO.addr2}`}>
      <section className="section wrap split">
        <div>
          <h2>Talk to the office</h2>
          <p className="lead"><a href={`tel:${D.CO.tel}`}>{D.CO.phone}</a></p>
          <p>If nobody can pick up, leave a message and repeat your number twice. We will call you back.</p>
          <p><Out href={D.CO.facebook}>Victory Ranch on Facebook</Out></p>
          <Form to="the camp office" fields={[['name', 'Name', 'text', true], ['email', 'Email', 'email', true], ['topic', 'About', 'select', ['Summer camp', 'Winter camp', 'Retreats', 'Renting the Ranch', 'Volunteering']], ['notes', 'Message', 'textarea', true]]} submit="Send message" />
        </div>
        <div>
          <h2>Driving directions</h2>
          <p><strong>Use these rather than your GPS.</strong> Map apps do not show the Ranch in the right spot.</p>
          {D.DIRECTIONS.map(([from, how]) => <details key={from}><summary>From {from}</summary><div>{how}</div></details>)}
          <p style={{ marginTop: '1.5rem' }}><Out className="btn ghost" href={D.CO.map}>Open a general map</Out></p>
        </div>
      </section>
    </Page>
  )
}

export default function Pages({ home }) {
  return (
    <Routes>
      <Route path="/" element={home} />
      <Route path="/camps" element={<Camps />} />
      <Route path="/camps/:id" element={<Camp />} />
      <Route path="/retreats" element={<Retreats />} />
      <Route path="/rentals" element={<Rentals />} />
      <Route path="/about" element={<About />} />
      <Route path="/give" element={<Give />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={home} />
    </Routes>
  )
}
