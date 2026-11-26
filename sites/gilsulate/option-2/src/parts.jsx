import { useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { NAV, inGroup } from './nav.js'
import { media, CO } from './data.js'

export const PHOTOS = {
  trench: ['trench.jpg', 'Crew beside a deep trench carrying several pipes next to an excavator', '55% 50%'],
  crane: ['bag-crane.jpg', 'Bulk bag of Gilsulate 500 XR lifted by crane over a formed trench', '47% 45%'],
  lng: ['lng-night.jpg', 'A gas carrier alongside a lit terminal at dusk', '62% 55%'],
  tank: ['tank-fog.jpg', 'Large storage tank in haze with a crane and excavation in the foreground', '70% 50%'],
  pipes: ['trench-pipes.jpg', 'White pipes and round piles in an open excavation', '50% 65%'],
  hardhats: ['hardhats.jpg', 'Four people in hard hats and safety vests on a city building site', '64% 45%'],
}

export function Photo({ id, pos, eager, decorative }) {
  const [file, alt, at] = PHOTOS[id]
  return <img src={media(file)} alt={decorative ? '' : alt} style={{ objectPosition: pos || at }} loading={eager ? 'eager' : 'lazy'} />
}

export function Figure({ id, caption, className = '' }) {
  return (
    <figure className={`figure ${className}`}>
      <Photo id={id} />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  )
}

export function useTitle(title) {
  useEffect(() => { document.title = title ? `${title} | Gilsulate 500XR` : 'Gilsulate 500XR | Underground Pipe Insulation' }, [title])
}

// Inner page: full-width photograph carrying the title, section links, then the article.
export function Page({ title, intro, photo = 'trench', note, children }) {
  const { pathname } = useLocation()
  const group = NAV.find((g) => inGroup(g, pathname))
  useTitle(title)
  return (
    <>
      <header className="cover">
        <Photo id={photo} eager />
        <div className="wrap"><h1>{title}</h1></div>
      </header>
      {note && <p className="wrap cover-note">{note}</p>}
      {group?.items && (
        <nav className="strand" aria-label={`${group.label} pages`}>
          <div className="wrap">{group.items.map(([t, to]) => <NavLink key={to} to={to} end={to === group.base}>{t}</NavLink>)}</div>
        </nav>
      )}
      <article className="article">
        {intro && <p className="wrap narrow standfirst">{intro}</p>}
        {children}
      </article>
      {pathname !== '/contact' && <Closer />}
    </>
  )
}

export function Chapters({ blocks }) {
  return blocks.map((b) => (
    <section className="wrap narrow chapter" key={b.h}>
      <h2>{b.h}</h2>
      {b.p?.map((t) => <p key={t}>{t}</p>)}
      {b.list && <ul>{b.list.map((l) => <li key={l}>{l}</li>)}</ul>}
    </section>
  ))
}

export function Details({ rows }) {
  return <dl className="wrap narrow details">{rows.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl>
}

export function PullQuote({ text, by }) {
  return (
    <figure className="wrap pull">
      <blockquote><p>&ldquo;{text}&rdquo;</p></blockquote>
      <figcaption>{by}</figcaption>
    </figure>
  )
}

export function Index({ items }) {
  return (
    <ul className="wrap index">
      {items.map(([title, note, to]) => (
        <li key={to}><Link to={to}><strong>{title}</strong><span>{note}</span></Link></li>
      ))}
    </ul>
  )
}

export function Closer() {
  return (
    <section className="closer">
      <div className="wrap">
        <h2>Tell us about your trench.</h2>
        <p>Pipe sizes, operating temperatures, length and schedule are enough to start.</p>
        <div className="closer-act">
          <Link to="/contact" className="button">Request a quote</Link>
          <a href={`tel:${CO.tel}`}>{CO.phone}</a>
        </div>
      </div>
    </section>
  )
}
