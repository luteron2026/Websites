import { useState } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { Page, Plate, Clauses, Table, Testimony } from './parts.jsx'
import Section from './Section.jsx'
import { SPECS, STEPS, FAQ, APPS, APP_CATS, CO, media } from './data.js'
import { CLIENTS, PRODUCT_PAGES, COMPONENTS, CASE_STUDIES, DOCS, SYSTEM_NOTES } from './content.js'
import { SECTIONS, HISTORY, slug } from './manual.js'

const TITLES = {
  why: 'Why Gilsulate?', standard: 'Setting the Standard', sustainability: 'Sustainability',
  mission: 'Mission Statement', quality: 'Quality Policy',
}

const FIGS = {
  why: ['4', 'trench.jpg', 'Crew beside a deep trench carrying several pipes', 'Field conditions rarely match the drawing exactly.', '55% 50%'],
  standard: ['5', 'bag-crane.jpg', 'Bulk bag of Gilsulate 500 XR lifted over a trench', 'Material delivered to the trench in semi-bulk bags.', '48% 50%'],
  sustainability: ['6', 'lng-night.jpg', 'A gas carrier alongside a lit terminal at dusk, pipe racks in the foreground', 'Energy infrastructure at dusk.', '50% 50%'],
}

export function TextPage({ id }) {
  const p = PRODUCT_PAGES[id]
  const f = FIGS[id]
  return (
    <Page title={TITLES[id]} lead={p.lead}>
      {f && <Plate fig={f[0]} src={f[1]} alt={f[2]} caption={f[3]} pos={f[4]} />}
      {p.stats && <Table rows={p.stats} />}
      <Clauses blocks={p.blocks} />
    </Page>
  )
}

export function ProductOverview() {
  return (
    <Page title="The Product" lead="One poured envelope that insulates the line, separates it from the soil, and protects it from corrosion.">
      <div className="spread">
        <div className="prose">
          <h2>Three duties, one material</h2>
          <h3>Insulation</h3>
          <p>A granular mineral envelope holds heat in hot lines and keeps chilled lines cold.</p>
          <h3>Isolation</h3>
          <p>The envelope separates the pipe from surrounding soil and moisture.</p>
          <h3>Corrosion protection</h3>
          <p>Inert minerals with a dielectric coating protect the pipe. Cathodic protection is not required, but is compatible.</p>
        </div>
        <Section />
      </div>
      <h2 className="rule-h">In this section</h2>
      <ul className="leaders">
        {SECTIONS[0].pages.slice(1).map(([t, to], i) => <li key={to}><Link to={to}><span>{t}</span><i /><span>1.{i + 2}</span></Link></li>)}
      </ul>
    </Page>
  )
}

export function ProductWhat() {
  return (
    <Page title="What is Gilsulate?" lead="A granular, pour-in-place insulation for underground pipes, tanks and structures, used for decades at universities, medical centers and military bases.">
      <Table caption="Table 1. Properties of 500XR" rows={SPECS} />
      <h2 className="rule-h">Method of installation</h2>
      <ol className="method">
        {STEPS.map((s) => <li key={s.n}><h3>{s.t}</h3><p>{s.d}</p></li>)}
      </ol>
      <Plate fig="7" src="trench-pipes.jpg" ratio="3 / 2" alt="White pipes and round piles in an open excavation, a large storage tank in haze behind" caption="Open excavation with pipe runs, storage tank beyond." />
    </Page>
  )
}

export function Components() {
  return (
    <Page title="Required Components" lead="Installation is quick and needs little skill. Have equipment and materials on the jobsite before start-up.">
      <Table caption="Table 2. Jobsite checklist" head={['Item', 'Description']} rows={COMPONENTS} />
    </Page>
  )
}

export function Systems() {
  const [q, setQ] = useState('')
  const hits = APPS.filter(([n]) => n.toLowerCase().includes(q.trim().toLowerCase()))
  return (
    <Page title="Index of Applications" lead={`${APPS.length} documented uses, from chilled water on a university campus to molten sulphur lines.`}>
      <label className="finder">Find an application
        <input type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="e.g. steam" />
      </label>
      <p className="sr" aria-live="polite">{hits.length} applications shown</p>
      {hits.length === 0 && <p>No application matches &ldquo;{q}&rdquo;. <Link to="/contact">Describe your service to us</Link> and we will advise.</p>}
      <div className="index-cols">
        {APP_CATS.slice(1).map((cat) => {
          const list = hits.filter(([, c]) => c === cat)
          if (!list.length) return null
          return (
            <section key={cat}>
              <h2>{cat}</h2>
              <ul>{list.map(([n]) => <li key={n}><Link to={`/systems/${slug(n)}`}>{n}</Link></li>)}</ul>
            </section>
          )
        })}
      </div>
      <Plate fig="8" src="tank-fog.jpg" ratio="1920 / 651" pos="65% 50%" alt="A large storage tank marked Cheniere in haze, with a crane and excavation in the foreground" caption="Terminal construction with storage tank." />
    </Page>
  )
}

export function SystemDetail() {
  const { id } = useParams()
  const item = APPS.find(([n]) => slug(n) === id)
  if (!item) return <Navigate to="/systems" replace />
  const [name, cat] = item
  const related = APPS.filter(([n, c]) => c === cat && n !== name)
  const p = SYSTEM_NOTES[name] || [`Gilsulate 500XR is poured around raw carrier pipe to form a seamless insulation and corrosion-protection envelope for ${name.toLowerCase()}. Send pipe sizes, temperatures and a schedule, and Gilsulate will recommend a design.`]
  return (
    <Page key={id} title={name} lead={`Listed under ${cat.toLowerCase()}.`}>
      <Clauses blocks={[
        { h: 'Application', p },
        { h: 'Reasons to use 500XR', list: ['Insulates, isolates and protects against corrosion in one material', 'Field-applied, so there is no special-order fitting or fabrication lead time', 'One product for any pipe size, pipe count or burial depth'] },
      ]} />
      <Table rows={[['Carrier pipe temperature', '35–800°F'], ['Mixing', 'None. Pour in place'], ['Bag sizes', '1 cu ft or 60 cu ft, at use density']]} />
      <h2 className="rule-h">See also</h2>
      <ul className="roll">{related.map(([n]) => <li key={n}><Link to={`/systems/${slug(n)}`}>{n}</Link></li>)}</ul>
      <p><Link to="/systems">Return to the index</Link></p>
    </Page>
  )
}

export function TechHub() {
  const notes = ['Bags, consolidation, rain, safety and returns.', 'Why use density decides coverage and performance.', 'Universities, EPC firms and government projects.', 'Manual, CAD details, brochures and training.']
  return (
    <Page title="Technical Information" lead="Documentation, answers and project history for those who specify and install.">
      <dl className="described">
        {SECTIONS[2].pages.slice(1).map(([t, to], i) => (
          <div key={to}><dt><Link to={to}>{t}</Link></dt><dd>{notes[i]}</dd></div>
        ))}
      </dl>
    </Page>
  )
}

export function Faq() {
  return (
    <Page title="Questions & Answers" lead="The questions designers and installers ask most.">
      <ol className="qa">
        {FAQ.map(([q, a]) => <li key={q}><h2>{q}</h2><p>{a}</p></li>)}
      </ol>
    </Page>
  )
}

export function Density() {
  return (
    <Page title="Density" lead="500XR is sold and specified by use density, not loose bulk density.">
      <Table caption="Table 3. Bag volume and yield" rows={[['Yield per bag at use density', '1 cu ft'], ['Bag volume at loose bulk density', 'about 1.3 cu ft'], ['Settlement some fine powders can show', '30% or more']]} />
      <Clauses blocks={[
        { h: 'Use density', p: ['Installed use density affects coverage and thermal performance. 500XR is consolidated to its use density before backfill and does not rely on backfill to compact.'] },
        { h: 'Which density?', p: ['ASTM has more than 40 density definitions, and different tests give different results. Gilsulate uses ASTM D4253 and a modified ASTM D1895 Method C, applying 400 and 1,000 psf loads for longer durations to simulate soil loading.'] },
        { h: 'Settlement', p: ['Most bulk solids settle, and finer powders settle more. Consolidating 500XR with a concrete-type vibrator before backfill lets fine particles migrate between larger ones and lets trapped air escape.'] },
        { h: 'Why it matters', p: ['Heat loss, thermal efficiency and freeze-protection calculations depend on the envelope dimensions and the material’s thermal conductivity. Conductivity is tested per ASTM C177 and, for 500XR, is stated at use density.'] },
      ]} />
    </Page>
  )
}

export function Documents() {
  const [picked, setPicked] = useState([])
  const toggle = (t) => setPicked((p) => (p.includes(t) ? p.filter((x) => x !== t) : [...p, t]))
  const href = `mailto:${CO.email}?subject=${encodeURIComponent('Document request')}&body=${encodeURIComponent('Please send:\n' + picked.map((t) => '- ' + t).join('\n'))}`
  return (
    <Page title="Documents" lead="Tick what you need and send one request by email.">
      <fieldset className="order">
        <legend className="sr">Documents available</legend>
        {DOCS.map(([t, d]) => (
          <label key={t}>
            <input type="checkbox" checked={picked.includes(t)} onChange={() => toggle(t)} />
            <span><b>{t}</b>{d}</span>
          </label>
        ))}
      </fieldset>
      {picked.length
        ? <a className="stamp" href={href}>Email request for {picked.length} {picked.length === 1 ? 'document' : 'documents'}</a>
        : <p><i>Nothing ticked yet.</i></p>}
    </Page>
  )
}

export function Cases() {
  return (
    <Page title="Case Studies" lead="A register of clients and the work.">
      <table className="ledger">
        <thead><tr><th scope="col">Client</th><th scope="col">Work</th></tr></thead>
        <tbody>
          {CASE_STUDIES.map((c) => (
            <tr key={c.slug}><th scope="row"><Link to={`/tech/case-studies/${c.slug}`}>{c.name}</Link></th><td>{c.type}</td></tr>
          ))}
        </tbody>
      </table>
    </Page>
  )
}

export function CaseDetail() {
  const { id } = useParams()
  const c = CASE_STUDIES.find((x) => x.slug === id)
  if (!c) return <Navigate to="/tech/case-studies" replace />
  const rows = [['Client', c.name], ['Work', c.type], ['Location', c.loc], ['Length', c.size], ['Completed', c.year], ['Category', c.category]].filter(([, v]) => v)
  return (
    <Page key={id} title={c.name}>
      <Table caption="Project record" rows={rows} />
      <Clauses blocks={[c.body
        ? { h: 'Account', p: c.body }
        : { h: 'Account', p: ['Full project details, specifications and results for this installation are available on request.'] }]} />
      <p><Link to="/tech/case-studies">Return to the register</Link></p>
    </Page>
  )
}

const CLIENT_TITLES = { owner: 'For Owners', engineer: 'For Engineers', contractor: 'For Contractors', epc: 'For EPC Firms', military: 'For the Military' }

export function ClientPage() {
  const { id } = useParams()
  const c = CLIENTS[id]
  if (!c) return <Navigate to="/" replace />
  return (
    <Page key={id} title={CLIENT_TITLES[id]} lead={c.lead}>
      {c.quote && <Testimony {...c.quote} />}
      {c.stats && <Table rows={c.stats.map(([k, v]) => [v, k])} />}
      <Clauses blocks={c.blocks} />
    </Page>
  )
}

export function News() {
  return (
    <Page title="Notes from the Company">
      <section className="clause">
        <h2>Energy savings and operating costs<time dateTime="2023-07-19">July 19, 2023</time></h2>
        <div>
          <p>Owners and engineers spend a significant amount of their time searching for ways to save energy and reduce operating costs. Earlier underground pipe insulation methods often were not suited to long-term savings.</p>
          <p>Gilsulate&rsquo;s guiding principle is customer success, delivered through high-quality products, on-time delivery, competitive pricing and excellent customer service.</p>
          <p><Link to="/product/sustainability">Read about sustainability</Link></p>
        </div>
      </section>
    </Page>
  )
}

export function About() {
  return (
    <Page title="The Company" lead="A woman-owned manufacturer in Santa Clarita, California, and the maker of Gilsulate 500XR.">
      <div className="spread spread-portrait">
        <div className="prose">
          <h2>Laura Duncan, President and Owner</h2>
          <p>A self-described straight shooter, born and raised in the Midwest, Laura is passionate about helping clients with the patented controlled-density insulation she manufactures. She takes pride in solving client challenges so that clients’ businesses succeed, and keeps an open-door policy for client contact.</p>
          <h2>The firm</h2>
          <p>Gilsulate was the first commercially successful granular pour-in-place insulation for underground piping. Laura incorporated Gilsulate International in 2002 and acquired the assets, patent, trade name and technologies from American Thermal Products.</p>
        </div>
        <figure className="portrait">
          <img src={media('laura.jpg')} alt="Laura Duncan" width="300" height="300" />
          <figcaption>Laura Duncan</figcaption>
        </figure>
      </div>
      <Table caption="Principal dates" rows={HISTORY} />
    </Page>
  )
}

const ROLES = ['Owner', 'Engineer', 'Contractor', 'EPC', 'Military', 'Other']

export function Contact() {
  const [sent, setSent] = useState(false)
  return (
    <Page title="Request a Quotation" lead="Pipe sizes, operating temperatures, trench length and schedule are enough to begin.">
      <div className="spread spread-portrait">
        {sent ? (
          <div className="clause-done" role="status">
            <h2>Thank you. Your particulars are noted.</h2>
            <p>This is a design preview, so nothing was sent. On the live site this form would go to {CO.email}.</p>
            <button type="button" className="stamp" onClick={() => setSent(false)}>Fill in another</button>
          </div>
        ) : (
          <form className="form" onSubmit={(e) => { e.preventDefault(); setSent(true); window.scrollTo(0, 0) }}>
            <p><i>Fields marked * are required.</i></p>
            <label>Name *<input required name="name" autoComplete="name" /></label>
            <label>Company<input name="company" autoComplete="organization" /></label>
            <label>Email *<input required type="email" name="email" autoComplete="email" /></label>
            <label>Telephone<input type="tel" name="phone" autoComplete="tel" /></label>
            <fieldset>
              <legend>I am writing as</legend>
              {ROLES.map((r, i) => <label key={r}><input type="radio" name="role" value={r} defaultChecked={i === 0} />{r}</label>)}
            </fieldset>
            <label>Particulars of the project<textarea name="details" rows="6" placeholder="Pipe type and size, operating temperature, length, location, schedule" /></label>
            <button className="stamp">Send request</button>
          </form>
        )}
        <address>
          <h2>By post or telephone</h2>
          <p>{CO.name}<br />{CO.addr1}<br />{CO.addr2}</p>
          <p><a href={`tel:${CO.tel}`}>{CO.phone}</a><br /><a href={`mailto:${CO.email}`}>{CO.email}</a></p>
        </address>
      </div>
    </Page>
  )
}
