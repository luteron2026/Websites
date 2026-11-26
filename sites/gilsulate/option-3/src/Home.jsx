import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Photo, PHOTOS, Quote, Help, useTitle } from './parts.jsx'
import { STEPS, APPS, APP_CATS, media } from './data.js'
import { CLIENTS, CASE_STUDIES } from './content.js'
import { slug } from './nav.js'

const ROLES = [
  ['owner', 'Owners', 'trench'], ['engineer', 'Engineers', 'tank'], ['contractor', 'Contractors', 'crane'],
  ['epc', 'EPC firms', 'lng'], ['military', 'Military', 'pipes'],
]

function RolePicker() {
  const [i, setI] = useState(0)
  const tabs = useRef([])
  const [id, , photo] = ROLES[i]
  const c = CLIENTS[id]
  const ph = PHOTOS[photo]
  const key = (e) => {
    const step = { ArrowRight: 1, ArrowLeft: -1 }[e.key]
    if (!step) return
    e.preventDefault()
    const n = (i + step + ROLES.length) % ROLES.length
    setI(n)
    tabs.current[n].focus()
  }
  return (
    <section className="wrap section" aria-labelledby="who-h">
      <h2 id="who-h">What matters to you on this project?</h2>
      <div className="tabs" role="tablist" aria-label="Your role" onKeyDown={key}>
        {ROLES.map(([rid, label], n) => (
          <button key={rid} ref={(el) => (tabs.current[n] = el)} role="tab" id={`tab-${rid}`} aria-controls="role-panel"
            aria-selected={n === i} tabIndex={n === i ? 0 : -1} onClick={() => setI(n)}>{label}</button>
        ))}
      </div>
      <div className="panel" role="tabpanel" id="role-panel" aria-labelledby={`tab-${id}`} key={id}>
        <Photo src={ph[0]} alt={ph[1]} pos={ph[2]} />
        <div>
          <p className="panel-lead">{c.lead}</p>
          {c.quote ? <Quote {...c.quote} /> : <ul className="checks">{c.blocks.map((b) => <li key={b.h}>{b.h}</li>)}</ul>}
          <Link to={`/clients/${id}`} className="more">Read the page for {id === 'epc' ? 'EPC firms' : id === 'military' ? 'the military' : `${id}s`}</Link>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  useTitle()
  const featured = CASE_STUDIES[0]
  return (
    <>
      <section className="hero">
        <Photo className="hero-img" src="hardhats.jpg" alt={PHOTOS.hardhats[1]} pos="62% 40%" eager />
        <div className="wrap">
          <div className="hero-card">
            <h1>Underground pipe insulation, poured in place.</h1>
            <p>Gilsulate 500XR insulates and protects buried piping, tanks and structures against heat loss, moisture and corrosion. In commercial use since 1949.</p>
            <div className="actions">
              <Link to="/contact" className="btn">Request a quote</Link>
              <Link to="/product/what" className="btn btn-line">See how it works</Link>
            </div>
          </div>
        </div>
      </section>

      <RolePicker />

      <section className="tint">
        <div className="wrap section">
          <div className="split-head">
            <h2>Four steps from open trench to backfill</h2>
            <p>Raw, uncoated pipe goes in the trench and the material is poured around it. There is nothing to mix and nothing to fabricate.</p>
          </div>
          <ol className="steps">
            {STEPS.map((s) => <li key={s.n}><h3>{s.t}</h3><p>{s.d}</p></li>)}
          </ol>
          <Photo className="wide" src="trench.jpg" alt={PHOTOS.trench[1]} pos="55% 55%" />
        </div>
      </section>

      <section className="wrap section">
        <div className="split-head">
          <h2>Where 500XR is used</h2>
          <p>{APPS.length} documented applications. <Link to="/systems">Search the full list</Link></p>
        </div>
        <div className="uses">
          {APP_CATS.slice(1).map((cat) => (
            <div key={cat}>
              <h3>{cat}</h3>
              <ul>
                {APPS.filter(([, c]) => c === cat).slice(0, 6).map(([n]) => <li key={n}><Link to={`/systems/${slug(n)}`}>{n}</Link></li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="story">
        <Photo src="bag-crane.jpg" alt={PHOTOS.crane[1]} pos="46% 40%" />
        <div>
          <h2>{featured.name}</h2>
          <p>{featured.type} in {featured.loc}: {featured.size}, completed {featured.year}.</p>
          <p>A heat transfer analysis based on the cost to generate chilled water projected a return on investment 27% better than expected.</p>
          <Link to={`/tech/case-studies/${featured.slug}`} className="btn btn-white">Read the case study</Link>
        </div>
      </section>

      <section className="wrap section two">
        <div>
          <h2>Also specified by</h2>
          <ul className="rows">
            {CASE_STUDIES.slice(1).map((c) => (
              <li key={c.slug}><Link to={`/tech/case-studies/${c.slug}`}><b>{c.name}</b><span>{c.type}</span></Link></li>
            ))}
          </ul>
        </div>
        <div className="founder">
          <img src={media('laura.jpg')} alt="Laura Duncan" width="300" height="300" loading="lazy" />
          <h2>Talk to the people who make it</h2>
          <p>Gilsulate International is a woman-owned manufacturer in Santa Clarita, California. President and owner Laura Duncan keeps an open-door policy for client contact.</p>
          <Link to="/about" className="more">About the company</Link>
        </div>
      </section>

      <Help />
    </>
  )
}
