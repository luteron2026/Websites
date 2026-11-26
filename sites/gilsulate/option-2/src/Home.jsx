import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Photo, Figure, Closer, useTitle } from './parts.jsx'
import { STEPS, APPS, APP_CATS, media } from './data.js'
import { CLIENTS, CASE_STUDIES } from './content.js'
import { slug } from './nav.js'

const WHO = [
  ['owner', 'Owners', 'hardhats', 'Return, reliability and lead time.'],
  ['engineer', 'Engineers', 'tank', 'One material for any layout, with heat-loss calculations.'],
  ['contractor', 'Contractors', 'crane', 'No special-order fittings to wait on.'],
  ['epc', 'EPC firms', 'lng', 'Project review, CAD details and supply from stock.'],
  ['military', 'Military', 'pipes', 'District heating, runway lighting and exhaust ducts.'],
]

function Who() {
  const [on, setOn] = useState(0)
  return (
    <section className="who" aria-labelledby="who-h">
      <h2 id="who-h" className="wrap">Who we work with</h2>
      <ul>
        {WHO.map(([id, label, photo, line], i) => (
          <li key={id} className={i === on ? 'on' : ''} onMouseEnter={() => setOn(i)} onFocus={() => setOn(i)}>
            <Link to={`/clients/${id}`}>
              <Photo id={photo} decorative />
              <span><strong>{label}</strong><em>{line}</em></span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

// The photograph stays in view while the installation steps scroll past it.
function Install() {
  return (
    <section className="wrap install" aria-labelledby="install-h">
      <div className="install-photo">
        <Figure id="crane" caption="A semi-bulk bag of 500XR is brought over a formed trench." />
      </div>
      <div>
        <h2 id="install-h">How it goes into the ground</h2>
        <ol>
          {STEPS.map((s) => <li key={s.n}><h3>{s.t}</h3><p>{s.d}</p></li>)}
        </ol>
        <Link to="/product/what" className="textlink">Composition, properties and specifications</Link>
      </div>
    </section>
  )
}

export default function Home() {
  useTitle()
  const [lead, ...others] = CASE_STUDIES
  const quote = CLIENTS.contractor.quote
  return (
    <>
      <header className="opener">
        <Photo id="trench" eager />
        <div className="wrap">
          <h1>Gilsulate goes into the trench with your pipe.</h1>
          <p>500XR is a patented, pour-in-place insulation and corrosion protection for underground piping, tanks and structures.</p>
        </div>
      </header>

      <section className="wrap statement">
        <p>Set raw pipe in the trench, pour the material around it and consolidate it. One product covers any pipe size, any number of pipes, and shallow or deep burial. <span>It has been in commercial use since 1949.</span></p>
        <div>
          <Link to="/product" className="button">The product</Link>
          <Link to="/contact" className="textlink">Request a quote</Link>
        </div>
      </section>

      <Install />

      <figure className="bleed">
        <Photo id="lng" />
        <figcaption className="wrap">
          <blockquote><p>&ldquo;{quote.text}&rdquo;</p></blockquote>
          <cite>{quote.by}</cite>
        </figcaption>
      </figure>

      <section className="wrap stories" aria-labelledby="stories-h">
        <h2 id="stories-h">Projects</h2>
        <Link to={`/tech/case-studies/${lead.slug}`} className="story-lead">
          <Photo id="pipes" decorative />
          <div>
            <h3>{lead.name}</h3>
            <p>A heat transfer analysis projected a return on investment 27% better than expected on {lead.size} of chilled and hot water distribution.</p>
            <span className="textlink">Read the story</span>
          </div>
        </Link>
        <ul className="names">
          {others.map((c) => <li key={c.slug}><Link to={`/tech/case-studies/${c.slug}`}><strong>{c.name}</strong><span>{c.type}</span></Link></li>)}
        </ul>
      </section>

      <Who />

      <section className="wrap uses" aria-labelledby="uses-h">
        <h2 id="uses-h">{APPS.length} places it is used</h2>
        {APP_CATS.slice(1).map((cat) => (
          <div key={cat} className="use-row">
            <h3>{cat}</h3>
            <ul>{APPS.filter(([, c]) => c === cat).map(([n]) => <li key={n}><Link to={`/systems/${slug(n)}`}>{n}</Link></li>)}</ul>
          </div>
        ))}
      </section>

      <section className="wrap maker">
        <img src={media('laura.jpg')} alt="Laura Duncan" width="300" height="300" loading="lazy" />
        <div>
          <h2>Made by a company you can call</h2>
          <p>Gilsulate International is a woman-owned manufacturer in Santa Clarita, California. President and owner Laura Duncan keeps an open-door policy for client contact.</p>
          <Link to="/about" className="textlink">About the company</Link>
        </div>
      </section>

      <Closer />
    </>
  )
}
