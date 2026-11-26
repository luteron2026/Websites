import { useState } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { Page, Chapters, Details, PullQuote, Figure, Index } from './parts.jsx'
import { SPECS, STEPS, FAQ, APPS, APP_CATS, CO, media } from './data.js'
import { CLIENTS, PRODUCT_PAGES, COMPONENTS, CASE_STUDIES, DOCS, SYSTEM_NOTES } from './content.js'
import { NAV, slug } from './nav.js'

const TEXT = {
  why: ['Why Gilsulate?', 'trench', 'crane'], standard: ['Setting the standard', 'crane', 'trench'],
  sustainability: ['Sustainability', 'lng', 'tank'], mission: ['Mission statement', 'hardhats'], quality: ['Quality policy', 'hardhats'],
}

export function TextPage({ id }) {
  const p = PRODUCT_PAGES[id]
  const [title, cover, second] = TEXT[id]
  const [first, ...rest] = p.blocks
  return (
    <Page title={title} photo={cover} intro={p.lead}>
      {p.stats && <Details rows={p.stats} />}
      <Chapters blocks={[first]} />
      {second && <Figure id={second} className="wrap wide" />}
      <Chapters blocks={rest} />
    </Page>
  )
}

export function ProductOverview() {
  const notes = ['Composition, properties and installation.', 'Lower installed cost and immediate availability.', 'The history of pour-in-place insulation at Gilsulate.', 'Energy efficiency and what it saves.', 'What to have on site before you pour.']
  return (
    <Page title="The product" photo="crane" intro="Gilsulate 500XR is a white, granular insulation made of inert, inorganic, non-toxic minerals. It is poured around raw pipe and consolidated in place.">
      <Chapters blocks={[
        { h: 'It insulates', p: ['A granular mineral envelope holds heat in hot lines and keeps chilled lines cold.'] },
        { h: 'It isolates', p: ['The envelope separates the pipe from surrounding soil and moisture.'] },
        { h: 'It protects', p: ['It guards the pipe against corrosion. Cathodic protection is not required, but is compatible.'] },
      ]} />
      <Index items={NAV[0].items.slice(1).map(([t, to], i) => [t, notes[i], to])} />
    </Page>
  )
}

export function ProductWhat() {
  return (
    <Page title="What is Gilsulate?" photo="pipes" intro="A granular, pour-in-place insulation for underground pipes, tanks and structures, used for decades at universities, medical centers and military bases.">
      <Chapters blocks={STEPS.map((s) => ({ h: s.t, p: [s.d] }))} />
      <Figure id="trench" className="wrap wide" />
      <div className="wrap narrow chapter"><h2>Specifications</h2></div>
      <Details rows={SPECS} />
    </Page>
  )
}

export function Components() {
  return (
    <Page title="Required components" photo="crane" intro="Installation is quick and needs little skill. Have equipment and materials on the jobsite before start-up.">
      <Details rows={COMPONENTS} />
    </Page>
  )
}

export function Systems() {
  const [cat, setCat] = useState('All')
  const list = APPS.filter(([, c]) => cat === 'All' || c === cat)
  return (
    <Page title="Systems" photo="tank" intro="From chilled water on a university campus to molten sulphur lines.">
      <div className="wrap filter" role="group" aria-label="Filter by system type">
        {APP_CATS.map((c) => <button type="button" key={c} aria-pressed={cat === c} onClick={() => setCat(c)}>{c}</button>)}
      </div>
      <p className="sr" aria-live="polite">{list.length} applications shown</p>
      <Index items={list.map(([n, c]) => [n, c, `/systems/${slug(n)}`])} />
    </Page>
  )
}

export function SystemDetail() {
  const { id } = useParams()
  const item = APPS.find(([n]) => slug(n) === id)
  if (!item) return <Navigate to="/systems" replace />
  const [name, cat] = item
  const photo = { 'Heating & energy': 'trench', Cooling: 'tank', 'Process & fuel': 'lng', 'Structures & protection': 'crane' }[cat]
  const p = SYSTEM_NOTES[name] || [`Gilsulate 500XR is poured around raw carrier pipe to form a seamless insulation and corrosion-protection envelope for ${name.toLowerCase()}. Send pipe sizes, temperatures and a schedule, and Gilsulate will recommend a design.`]
  return (
    <Page key={id} title={name} photo={photo} intro={p[0]}>
      <Chapters blocks={[
        ...(p.length > 1 ? [{ h: 'In service', p: p.slice(1) }] : []),
        { h: 'Why 500XR here', list: ['Insulates, isolates and protects against corrosion in one material', 'Field-applied, so no special-order fittings or fabrication lead time', 'One product for any pipe size, pipe count or burial depth'] },
      ]} />
      <Details rows={[['Carrier pipe temperature', '35–800°F'], ['Mixing', 'None. Pour in place'], ['Bag sizes', '1 cu ft or 60 cu ft, at use density']]} />
      <div className="wrap narrow chapter"><h2>Related applications</h2></div>
      <Index items={APPS.filter(([n, c]) => c === cat && n !== name).map(([n, c]) => [n, c, `/systems/${slug(n)}`])} />
    </Page>
  )
}

export function TechHub() {
  const notes = ['Universities, EPC firms and government projects.', 'Bags, consolidation, rain, safety and returns.', 'Why use density decides coverage and performance.', 'Manual, CAD details, brochures and training.']
  return (
    <Page title="Technical information" photo="pipes" intro="Documentation, answers and project history for those who specify and install.">
      <Index items={NAV[3].items.slice(1).map(([t, to], i) => [t, notes[i], to])} />
    </Page>
  )
}

export function Faq() {
  return (
    <Page title="Questions and answers" photo="trench">
      <div className="wrap narrow faq">
        {FAQ.map(([q, a], i) => <details key={q} open={i === 0}><summary>{q}</summary><p>{a}</p></details>)}
      </div>
    </Page>
  )
}

export function Density() {
  return (
    <Page title="Density" photo="crane" intro="500XR is sold and specified by use density, not loose bulk density.">
      <Details rows={[['Yield per bag at use density', '1 cu ft'], ['Bag volume at loose bulk density', 'About 1.3 cu ft'], ['Settlement some fine powders can show', '30% or more']]} />
      <Chapters blocks={[
        { h: 'Use density', p: ['Installed use density affects coverage and thermal performance. 500XR is consolidated to its use density before backfill and does not rely on backfill to compact.'] },
        { h: 'Which density?', p: ['ASTM has more than 40 density definitions, and different tests give different results. Gilsulate uses ASTM D4253 and a modified ASTM D1895 Method C, applying 400 and 1,000 psf loads for longer durations to simulate soil loading.'] },
        { h: 'Settlement', p: ['Most bulk solids settle, and finer powders settle more. Consolidating 500XR with a concrete-type vibrator before backfill lets fine particles migrate between larger ones and lets trapped air escape.'] },
        { h: 'Why it matters', p: ['Heat loss, thermal efficiency and freeze-protection calculations depend on the envelope dimensions and the material’s thermal conductivity. Conductivity is tested per ASTM C177 and, for 500XR, is stated at use density.'] },
      ]} />
    </Page>
  )
}

export function Documents() {
  return (
    <Page title="Documents" photo="hardhats" intro="Choose a document and we’ll send it to your inbox.">
      <ul className="wrap narrow docs">
        {DOCS.map(([t, d]) => (
          <li key={t}>
            <div><h2>{t}</h2><p>{d}</p></div>
            <a className="textlink" href={`mailto:${CO.email}?subject=${encodeURIComponent('Request: ' + t)}`} aria-label={`Request by email: ${t}`}>Request</a>
          </li>
        ))}
      </ul>
    </Page>
  )
}

export function Cases() {
  return (
    <Page title="Projects" photo="trench" intro="Universities, EPC firms and government clients that specify 500XR.">
      <Index items={CASE_STUDIES.map((c) => [c.name, c.type, `/tech/case-studies/${c.slug}`])} />
    </Page>
  )
}

const CASE_PHOTOS = ['pipes', 'trench', 'tank', 'crane']

export function CaseDetail() {
  const { id } = useParams()
  const i = CASE_STUDIES.findIndex((x) => x.slug === id)
  if (i < 0) return <Navigate to="/tech/case-studies" replace />
  const c = CASE_STUDIES[i]
  const next = CASE_STUDIES[(i + 1) % CASE_STUDIES.length]
  const rows = [['Client', c.name], ['Work', c.type], ['Location', c.loc], ['Length', c.size], ['Completed', c.year], ['Category', c.category]].filter(([, v]) => v)
  return (
    <Page key={id} title={c.name} photo={CASE_PHOTOS[i % CASE_PHOTOS.length]} note="Photograph for illustration; not taken on this project."
      intro={c.body ? c.body[0] : `${c.type}. Full project details, specifications and results for this installation are available on request.`}>
      <Details rows={rows} />
      {c.body && <Chapters blocks={[{ h: 'The specification', p: [c.body[1]] }, { h: 'The decision', p: [c.body[2]] }]} />}
      <p className="wrap narrow next">Next project <Link to={`/tech/case-studies/${next.slug}`}>{next.name}</Link></p>
    </Page>
  )
}

const CLIENT_PAGES = { owner: ['For owners', 'hardhats'], engineer: ['For engineers', 'tank'], contractor: ['For contractors', 'crane'], epc: ['For EPC firms', 'lng'], military: ['For the military', 'pipes'] }

export function ClientPage() {
  const { id } = useParams()
  const c = CLIENTS[id]
  if (!c) return <Navigate to="/" replace />
  const [title, photo] = CLIENT_PAGES[id]
  return (
    <Page key={id} title={title} photo={photo} intro={c.lead}>
      {c.quote && <PullQuote {...c.quote} />}
      <Chapters blocks={c.blocks} />
      {c.stats && <Details rows={c.stats.map(([k, v]) => [v, k])} />}
    </Page>
  )
}

export function News() {
  return (
    <Page title="News" photo="lng">
      <div className="wrap narrow chapter">
        <h2>Where to find energy savings and reduce operating costs</h2>
        <p className="date"><time dateTime="2023-07-19">July 19, 2023</time></p>
        <p>Owners and engineers spend a significant amount of their time searching for ways to save energy and reduce operating costs. Earlier underground pipe insulation methods often were not suited to long-term savings.</p>
        <p>Gilsulate&rsquo;s guiding principle is customer success, delivered through high-quality products, on-time delivery, competitive pricing and excellent customer service.</p>
        <Link to="/product/sustainability" className="textlink">Read about sustainability</Link>
      </div>
    </Page>
  )
}

export function About() {
  return (
    <Page title="About us" photo="hardhats" intro="A woman-owned manufacturer in Santa Clarita, California, and the maker of Gilsulate 500XR.">
      <section className="wrap maker">
        <img src={media('laura.jpg')} alt="Laura Duncan" width="300" height="300" />
        <div>
          <h2>Laura Duncan, President and Owner</h2>
          <p>A self-described straight shooter, born and raised in the Midwest, Laura is passionate about helping clients with the patented controlled-density insulation she manufactures. She takes pride in solving client challenges so that clients’ businesses succeed, and keeps an open-door policy for client contact.</p>
        </div>
      </section>
      <Chapters blocks={[{ h: 'The company', p: ['Gilsulate was the first commercially successful granular pour-in-place insulation for underground piping. Laura incorporated Gilsulate International in 2002 and acquired the assets, patent, trade name and technologies from American Thermal Products.'] }]} />
      <Details rows={[['Development of the original product began', '1943'], ['Gilsulate International incorporated', '2002'], ['Business status', 'Woman-owned small business']]} />
    </Page>
  )
}

const ROLES = ['Owner', 'Engineer', 'Contractor', 'EPC', 'Military', 'Other']

export function Contact() {
  const [sent, setSent] = useState(false)
  return (
    <Page title="Contact" photo="trench" intro="Pipe sizes, operating temperatures, trench length and timeline are enough to start a quote.">
      <div className="wrap contact">
        {sent ? (
          <div role="status">
            <h2>Thanks, we have your details.</h2>
            <p>This is a design preview, so nothing was sent. On the live site this form would go to {CO.email}.</p>
            <button type="button" className="button" onClick={() => setSent(false)}>Send another</button>
          </div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setSent(true) }}>
            <p className="date">Fields marked * are required.</p>
            <label>Name *<input required name="name" autoComplete="name" /></label>
            <label>Company<input name="company" autoComplete="organization" /></label>
            <label>Email *<input required type="email" name="email" autoComplete="email" /></label>
            <label>Phone<input type="tel" name="phone" autoComplete="tel" /></label>
            <label>Your role<select name="role">{ROLES.map((r) => <option key={r}>{r}</option>)}</select></label>
            <label>Project details<textarea rows="5" name="details" /></label>
            <button className="button">Send request</button>
          </form>
        )}
        <aside>
          <h2>Or call</h2>
          <p><a className="phone" href={`tel:${CO.tel}`}>{CO.phone}</a></p>
          <p><a href={`mailto:${CO.email}`}>{CO.email}</a></p>
          <address>{CO.name}<br />{CO.addr1}<br />{CO.addr2}</address>
        </aside>
      </div>
    </Page>
  )
}
