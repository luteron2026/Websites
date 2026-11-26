import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { locate } from './manual.js'
import { media, CO } from './data.js'

export function Plate({ src, alt, fig, caption, pos = '50% 50%', ratio = '1920 / 718', eager }) {
  return (
    <figure className="plate">
      <div className="plate-mount">
        <img src={media(src)} alt={alt} style={{ aspectRatio: ratio, objectPosition: pos }} loading={eager ? 'eager' : 'lazy'} />
      </div>
      <figcaption><b>Fig. {fig}.</b> {caption}</figcaption>
    </figure>
  )
}

// One manual page: running head, section number, title, body, and "turn the page" links.
export function Page({ title, lead, children }) {
  const { pathname } = useLocation()
  const here = locate(pathname)
  useEffect(() => { document.title = `${title} | Gilsulate 500XR` }, [title])
  const prev = here && here.section.pages[here.index - 1]
  const next = here && here.section.pages[here.index + 1]
  return (
    <article className="page">
      {here && (
        <div className="running">
          <span>Section {here.section.n}. {here.section.title}</span>
          <span>{here.number}</span>
        </div>
      )}
      <h1>{title}</h1>
      {lead && <p className="lead">{lead}</p>}
      {children}
      {(prev || next) && (
        <nav className="turn" aria-label="Previous and next page">
          {prev ? <Link to={prev[1]}><small>Previous page</small>{prev[0]}</Link> : <span />}
          {next && <Link to={next[1]} className="turn-next"><small>Next page</small>{next[0]}</Link>}
        </nav>
      )}
      {pathname !== '/contact' && <ReplyCard />}
    </article>
  )
}

export function Clauses({ blocks }) {
  return blocks.map((b) => (
    <section className="clause" key={b.h}>
      <h2>{b.h}</h2>
      <div>
        {b.p?.map((t) => <p key={t}>{t}</p>)}
        {b.list && <ul>{b.list.map((l) => <li key={l}>{l}</li>)}</ul>}
      </div>
    </section>
  ))
}

export function Table({ caption, rows, head }) {
  return (
    <table className="ledger">
      {caption && <caption>{caption}</caption>}
      {head && <thead><tr>{head.map((h) => <th key={h} scope="col">{h}</th>)}</tr></thead>}
      <tbody>
        {rows.map(([k, ...rest]) => (
          <tr key={k}><th scope="row">{k}</th>{rest.map((v, i) => <td key={i}>{v}</td>)}</tr>
        ))}
      </tbody>
    </table>
  )
}

export function Testimony({ text, by }) {
  return (
    <figure className="testimony">
      <blockquote><p>&ldquo;{text}&rdquo;</p></blockquote>
      <figcaption>{by}</figcaption>
    </figure>
  )
}

export function ReplyCard() {
  return (
    <aside className="reply" aria-label="Request a quotation">
      <div>
        <h2>Send us the particulars.</h2>
        <p>Pipe sizes, operating temperatures, trench length and schedule are enough to begin.</p>
      </div>
      <div className="reply-act">
        <Link to="/contact" className="stamp">Request a quotation</Link>
        <a href={`tel:${CO.tel}`}>or telephone {CO.phone}</a>
      </div>
    </aside>
  )
}
