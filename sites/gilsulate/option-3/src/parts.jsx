import { useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { NAV, inGroup } from './nav.js'
import { media, CO } from './data.js'

export function useTitle(title) {
  useEffect(() => { document.title = title ? `${title} | Gilsulate 500XR` : 'Gilsulate 500XR | Underground Pipe Insulation' }, [title])
}

export function Photo({ src, alt, pos = '50% 50%', className = '', eager }) {
  return <img className={className} src={media(src)} alt={alt} style={{ objectPosition: pos }} loading={eager ? 'eager' : 'lazy'} />
}

export const PHOTOS = {
  hardhats: ['hardhats.jpg', 'Four people in hard hats and safety vests on a city building site', '62% 50%'],
  trench: ['trench.jpg', 'Crew beside a deep trench carrying several pipes next to an excavator', '58% 50%'],
  crane: ['bag-crane.jpg', 'Bulk bag of Gilsulate 500 XR lifted by crane over an open trench', '46% 40%'],
  lng: ['lng-night.jpg', 'A gas carrier alongside a lit terminal at dusk', '60% 55%'],
  tank: ['tank-fog.jpg', 'Large storage tank in haze with a crane and excavation in the foreground', '72% 50%'],
  pipes: ['trench-pipes.jpg', 'White pipes and round piles in an open excavation', '50% 60%'],
}

// Standard inner page: breadcrumb, split title area with photo, side navigation, content.
export function Page({ title, intro, photo, children }) {
  const { pathname } = useLocation()
  const group = NAV.find((g) => inGroup(g, pathname))
  useTitle(title)
  const ph = photo && PHOTOS[photo]
  return (
    <>
      <div className="head">
        <div className={`wrap head-grid ${ph ? '' : 'head-plain'}`}>
          <div>
            <nav className="crumbs" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              {group && group.items && <><span aria-hidden="true">/</span><Link to={group.items[0][1]}>{group.label}</Link></>}
              <span aria-hidden="true">/</span><span aria-current="page">{title}</span>
            </nav>
            <h1>{title}</h1>
            {intro && <p>{intro}</p>}
          </div>
          {ph && <Photo src={ph[0]} alt={ph[1]} pos={ph[2]} eager />}
        </div>
      </div>
      <div className={`wrap body ${group?.items ? 'body-side' : ''}`}>
        {group?.items && (
          <nav className="side" aria-label={`${group.label} pages`}>
            {group.items.map(([t, to]) => <NavLink key={to} to={to} end={to === group.base}>{t}</NavLink>)}
          </nav>
        )}
        <div className="content">{children}</div>
      </div>
      {pathname !== '/contact' && <Help />}
    </>
  )
}

export function Blocks({ blocks }) {
  return blocks.map((b) => (
    <section className="block" key={b.h}>
      <h2>{b.h}</h2>
      {b.p?.map((t) => <p key={t}>{t}</p>)}
      {b.list && <ul className="checks">{b.list.map((l) => <li key={l}>{l}</li>)}</ul>}
    </section>
  ))
}

export function Facts({ rows }) {
  return <dl className="facts">{rows.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl>
}

export function Quote({ text, by }) {
  return (
    <figure className="quote">
      <blockquote><p>&ldquo;{text}&rdquo;</p></blockquote>
      <figcaption>{by}</figcaption>
    </figure>
  )
}

export function Help() {
  return (
    <section className="help">
      <div className="wrap">
        <div>
          <h2>Have a project in mind?</h2>
          <p>Send us pipe sizes, operating temperatures, trench length and schedule, and we&rsquo;ll help you work out whether 500XR fits.</p>
        </div>
        <div className="actions">
          <Link to="/contact" className="btn">Request a quote</Link>
          <a href={`tel:${CO.tel}`} className="btn btn-ghost">Call {CO.phone}</a>
        </div>
      </div>
    </section>
  )
}
