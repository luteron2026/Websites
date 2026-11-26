import { useState } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { Page, Blocks, Facts, Quote, Photo, PHOTOS } from './parts.jsx'
import { SPECS, STEPS, FAQ, APPS, APP_CATS, CO, media } from './data.js'
import { CLIENTS, PRODUCT_PAGES, COMPONENTS, CASE_STUDIES, DOCS, SYSTEM_NOTES } from './content.js'
import { NAV, slug } from './nav.js'

const TEXT = {
  why: ['Why Gilsulate?', 'trench'], standard: ['Setting the standard', 'crane'], sustainability: ['Sustainability', 'lng'],
  mission: ['Mission statement'], quality: ['Quality policy'],
}

export function TextPage({ id }) {
  const p = PRODUCT_PAGES[id]
  const [title, photo] = TEXT[id]
  return (
    <Page title={title} intro={p.lead} photo={photo}>
      {p.stats && <Facts rows={p.stats} />}
      <Blocks blocks={p.blocks} />
    </Page>
  )
}

export function ProductOverview() {
  const notes = ['Composition, properties and installation.', 'Lower installed cost and immediate availability.', 'Nearly 75 years of pour-in-place insulation.', 'Energy efficiency and what it saves.', 'What to have on site before you pour.']
  return (
    <Page title="Our product" photo="crane" intro="Gilsulate 500XR is a patented, white, granular insulation made of inert, inorganic, non-toxic minerals. It is poured around raw pipe and consolidated in place.">
      <section className="block">
        <h2>One material, three jobs</h2>
        <ul className="checks">
          <li><b>Insulates.</b> Holds heat in hot lines and keeps chilled lines cold.</li>
          <li><b>Isolates.</b> Separates the pipe from surrounding soil and moisture.</li>
          <li><b>Protects.</b> Guards against corrosion. Cathodic protection is not required, but is compatible.</li>
        </ul>
      </section>
      <ul className="rows">
        {NAV[0].items.slice(1).map(([t, to], i) => <li key={to}><Link to={to}><b>{t}</b><span>{notes[i]}</span></Link></li>)}
      </ul>
    </Page>
  )
}

export function ProductWhat() {
  return (
    <Page title="What is Gilsulate?" photo="pipes" intro="A granular, pour-in-place insulation for underground pipes, tanks and structures, used for decades at universities, medical centers and military bases.">
      <section className="block"><h2>Key facts</h2><Facts rows={SPECS} /></section>
      <section className="block">
        <h2>How it&rsquo;s installed</h2>
        <ol className="steps steps-stack">{STEPS.map((s) => <li key={s.n}><h3>{s.t}</h3><p>{s.d}</p></li>)}</ol>
      </section>
    </Page>
  )
}

export function Components() {
  return (
    <Page title="Required components" intro="Installation is quick and needs little skill. Have equipment and materials on the jobsite before start-up.">
      <Facts rows={COMPONENTS} />
    </Page>
  )
}

export function Systems() {
  const [q, setQ] = useState('')
  const [cat, setCat] = useState('All')
  const list = APPS.filter(([n, c]) => (cat === 'All' || c === cat) && n.toLowerCase().includes(q.trim().toLowerCase()))
  return (
    <Page title="Systems" photo="tank" intro="Find your application. Each one links to a short description and a way to ask for a design recommendation.">
      <div className="filters">
        <label>Search applications<input type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="e.g. chilled water" /></label>
        <label>System type<select value={cat} onChange={(e) => setCat(e.target.value)}>{APP_CATS.map((c) => <option key={c}>{c}</option>)}</select></label>
      </div>
      <p className="count" aria-live="polite">Showing {list.length} of {APPS.length}</p>
      {list.length === 0 ? (
        <p>Nothing matches that search. <button type="button" className="link" onClick={() => { setQ(''); setCat('All') }}>Clear the filters</button> or <Link to="/contact">ask us about your service</Link>.</p>
      ) : (
        <ul className="rows rows-two">
          {list.map(([n, c]) => <li key={n}><Link to={`/systems/${slug(n)}`}><b>{n}</b><span>{c}</span></Link></li>)}
        </ul>
      )}
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
    <Page key={id} title={name} photo={photo} intro={`${cat} application of Gilsulate 500XR.`}>
      <Blocks blocks={[
        { h: 'Overview', p },
        { h: 'Why 500XR here', list: ['Insulates, isolates and protects against corrosion in one material', 'Field-applied, so no special-order fittings or fabrication lead time', 'One product for any pipe size, pipe count or burial depth'] },
      ]} />
      <Facts rows={[['Carrier pipe temperature', '35–800°F'], ['Mixing', 'None. Pour in place'], ['Bag sizes', '1 cu ft or 60 cu ft, at use density']]} />
      <section className="block">
        <h2>Related applications</h2>
        <ul className="chips">{APPS.filter(([n, c]) => c === cat && n !== name).map(([n]) => <li key={n}><Link to={`/systems/${slug(n)}`}>{n}</Link></li>)}</ul>
        <Link to="/systems" className="more">All applications</Link>
      </section>
    </Page>
  )
}

export function TechHub() {
  const notes = ['Universities, EPC firms and government projects.', 'Bags, consolidation, rain, safety and returns.', 'Why use density decides coverage and performance.', 'Manual, CAD details, brochures and training.']
  return (
    <Page title="Technical information" photo="trench" intro="Documentation, answers and project history for those who specify and install.">
      <ul className="rows">
        {NAV[3].items.slice(1).map(([t, to], i) => <li key={to}><Link to={to}><b>{t}</b><span>{notes[i]}</span></Link></li>)}
      </ul>
    </Page>
  )
}

export function Faq() {
  return (
    <Page title="Frequently asked questions">
      <div className="faq">
        {FAQ.map(([q, a], i) => <details key={q} open={i === 0}><summary>{q}</summary><p>{a}</p></details>)}
      </div>
    </Page>
  )
}

export function Density() {
  return (
    <Page title="Density" intro="500XR is sold and specified by use density, not loose bulk density.">
      <Facts rows={[['Yield per bag at use density', '1 cu ft'], ['Bag volume at loose bulk density', 'About 1.3 cu ft'], ['Settlement some fine powders can show', '30% or more']]} />
      <Blocks blocks={[
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
    <Page title="Documents" intro="Choose a document and we’ll send it to your inbox.">
      <ul className="docs">
        {DOCS.map(([t, d]) => (
          <li key={t}>
            <div><h2>{t}</h2><p>{d}</p></div>
            <a className="btn btn-line" href={`mailto:${CO.email}?subject=${encodeURIComponent('Request: ' + t)}`} aria-label={`Request by email: ${t}`}>Request by email</a>
          </li>
        ))}
      </ul>
    </Page>
  )
}

export function Cases() {
  const [lead, ...rest] = CASE_STUDIES
  return (
    <Page title="Case studies" intro="Universities, EPC firms and government clients that specify 500XR.">
      <Link to={`/tech/case-studies/${lead.slug}`} className="feature">
        <Photo src={PHOTOS.crane[0]} alt="" pos={PHOTOS.crane[2]} />
        <div><h2>{lead.name}</h2><p>{lead.type}, {lead.size}, {lead.year}</p></div>
      </Link>
      <ul className="rows rows-two">
        {rest.map((c) => <li key={c.slug}><Link to={`/tech/case-studies/${c.slug}`}><b>{c.name}</b><span>{c.type}</span></Link></li>)}
      </ul>
    </Page>
  )
}

export function CaseDetail() {
  const { id } = useParams()
  const c = CASE_STUDIES.find((x) => x.slug === id)
  if (!c) return <Navigate to="/tech/case-studies" replace />
  const rows = [['Client', c.name], ['Work', c.type], ['Location', c.loc], ['Length', c.size], ['Completed', c.year], ['Category', c.category]].filter(([, v]) => v)
  return (
    <Page key={id} title={c.name} intro={c.type}>
      <Facts rows={rows} />
      <Blocks blocks={[c.body ? { h: 'Overview', p: c.body } : { h: 'Project details', p: ['Full project details, specifications and results for this installation are available on request.'] }]} />
      <Link to="/tech/case-studies" className="more">All case studies</Link>
    </Page>
  )
}

const CLIENT_PAGES = { owner: ['For owners', 'trench'], engineer: ['For engineers', 'tank'], contractor: ['For contractors', 'crane'], epc: ['For EPC firms', 'lng'], military: ['For the military', 'pipes'] }

export function ClientPage() {
  const { id } = useParams()
  const c = CLIENTS[id]
  if (!c) return <Navigate to="/" replace />
  const [title, photo] = CLIENT_PAGES[id]
  return (
    <Page key={id} title={title} intro={c.lead} photo={photo}>
      {c.quote && <Quote {...c.quote} />}
      {c.stats && <Facts rows={c.stats.map(([k, v]) => [v, k])} />}
      <Blocks blocks={c.blocks} />
    </Page>
  )
}

export function News() {
  return (
    <Page title="News">
      <article className="block">
        <h2>Where to find energy savings and reduce operating costs</h2>
        <p className="date"><time dateTime="2023-07-19">July 19, 2023</time></p>
        <p>Owners and engineers spend a significant amount of their time searching for ways to save energy and reduce operating costs. Earlier underground pipe insulation methods often were not suited to long-term savings.</p>
        <p>Gilsulate&rsquo;s guiding principle is customer success, delivered through high-quality products, on-time delivery, competitive pricing and excellent customer service.</p>
        <Link to="/product/sustainability" className="more">Read about sustainability</Link>
      </article>
    </Page>
  )
}

export function About() {
  return (
    <Page title="About us" photo="hardhats" intro="A woman-owned manufacturer in Santa Clarita, California, and the maker of Gilsulate 500XR.">
      <section className="bio">
        <img src={media('laura.jpg')} alt="Laura Duncan" width="300" height="300" />
        <div className="block">
          <h2>Laura Duncan, President and Owner</h2>
          <p>A self-described straight shooter, born and raised in the Midwest, Laura is passionate about helping clients with the patented controlled-density insulation she manufactures. She takes pride in solving client challenges so that clients’ businesses succeed, and keeps an open-door policy for client contact.</p>
        </div>
      </section>
      <Blocks blocks={[{ h: 'The company', p: ['Gilsulate was the first commercially successful granular pour-in-place insulation for underground piping. Laura incorporated Gilsulate International in 2002 and acquired the assets, patent, trade name and technologies from American Thermal Products.'] }]} />
      <Facts rows={[['Development of the original product began', '1943'], ['Gilsulate International incorporated', '2002'], ['Business status', 'Woman-owned small business']]} />
    </Page>
  )
}

const ROLES = ['Owner', 'Engineer', 'Contractor', 'EPC', 'Military', 'Other']

export function Contact() {
  const [sent, setSent] = useState(false)
  return (
    <Page title="Contact us" intro="Pipe sizes, operating temperatures, trench length and timeline are enough to start a quote.">
      <div className="contact">
        {sent ? (
          <div className="done" role="status">
            <h2>Thanks, we have your details.</h2>
            <p>This is a design preview, so nothing was sent. On the live site this form would go to {CO.email}.</p>
            <button type="button" className="btn" onClick={() => setSent(false)}>Send another</button>
          </div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setSent(true); window.scrollTo(0, 0) }}>
            <p className="note">Fields marked * are required.</p>
            <div className="pair">
              <label>Name *<input required name="name" autoComplete="name" /></label>
              <label>Company<input name="company" autoComplete="organization" /></label>
              <label>Email *<input required type="email" name="email" autoComplete="email" /></label>
              <label>Phone<input type="tel" name="phone" autoComplete="tel" /></label>
            </div>
            <label>Your role<select name="role">{ROLES.map((r) => <option key={r}>{r}</option>)}</select></label>
            <label>Project details<textarea rows="6" name="details" placeholder="Pipe type and size, operating temperature, length, location, schedule" /></label>
            <button className="btn">Send request</button>
          </form>
        )}
        <aside>
          <h2>Reach us directly</h2>
          <p><a className="big" href={`tel:${CO.tel}`}>{CO.phone}</a></p>
          <p><a href={`mailto:${CO.email}`}>{CO.email}</a></p>
          <address>{CO.name}<br />{CO.addr1}<br />{CO.addr2}</address>
        </aside>
      </div>
    </Page>
  )
}
