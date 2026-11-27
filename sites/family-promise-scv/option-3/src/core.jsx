import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { PHOTOS } from './photos.js'

export const media = (f) => `${import.meta.env.BASE_URL}media/${f}`

// A photo by name, with its real size so the layout does not jump while it loads.
export function Img({ id, eager, decorative, pos, className, sizes }) {
  const p = PHOTOS[id]
  return (
    <img src={media(p.f)} alt={decorative ? '' : p.alt} width={p.w} height={p.h} className={className} sizes={sizes}
      style={{ '--ar': (p.w / p.h).toFixed(3), '--nw': `${p.w}px`, objectPosition: pos || p.pos }} loading={eager ? 'eager' : 'lazy'} decoding="async" />
  )
}

export function useTitle(site, title) {
  useEffect(() => { document.title = title ? `${title} | ${site}` : site }, [site, title])
}

// An outside link (registration forms, PDFs, maps). Opens in a new tab.
export function Out({ href, children, ...rest }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>{children}</a>
}

// Page frame: skip link, scroll to top and focus the content on each route change.
export function Main({ children }) {
  const { pathname } = useLocation()
  const main = useRef(null)
  const first = useRef(true)
  useEffect(() => {
    window.scrollTo(0, 0)
    if (first.current) { first.current = false; return }
    main.current?.focus({ preventScroll: true })
  }, [pathname])
  return (
    <>
      <button type="button" className="skip" onClick={() => main.current?.focus()}>Skip to content</button>
      <main ref={main} tabIndex={-1}>{children}</main>
    </>
  )
}

// Full-screen menu in a native dialog: focus is trapped and Escape closes it.
export function Menu({ links, label = 'Menu', className = '', children }) {
  const dialog = useRef(null)
  const { pathname } = useLocation()
  useEffect(() => dialog.current.close(), [pathname])
  return (
    <>
      <button type="button" className={`menu-btn ${className}`} aria-haspopup="dialog" onClick={() => dialog.current.showModal()}>{label}</button>
      <dialog ref={dialog} className="menu" aria-label="All pages">
        <button type="button" className="menu-close" onClick={() => dialog.current.close()}>Close</button>
        <nav aria-label="All pages">
          {links.map(([t, to]) => <Link key={to} to={to} aria-current={pathname === to ? 'page' : undefined} onClick={() => dialog.current.close()}>{t}</Link>)}
        </nav>
        {children}
      </dialog>
    </>
  )
}

export function NavLinks({ links }) {
  const { pathname } = useLocation()
  return links.map(([t, to]) => {
    const on = pathname === to || (to !== '/' && pathname.startsWith(to + '/'))
    return <Link key={to} to={to} aria-current={on ? 'page' : undefined}>{t}</Link>
  })
}

// Preview form: validates in the browser and says plainly that nothing was sent.
// fields: [name, label, type, options|required]
export function Form({ fields, submit = 'Send', to }) {
  const [sent, setSent] = useState(false)
  if (sent) {
    return (
      <div className="form-done" role="status">
        <h3>Thank you. That is everything we need.</h3>
        <p>This is a design preview, so nothing was sent. On the live site this would go to {to}.</p>
        <button type="button" className="btn" onClick={() => setSent(false)}>Start over</button>
      </div>
    )
  }
  return (
    <form className="form" onSubmit={(e) => { e.preventDefault(); setSent(true) }}>
      {fields.map(([name, label, type = 'text', extra]) => {
        const required = extra === true
        return (
          <label key={name} className={type === 'textarea' ? 'wide' : undefined}>
            <span>{label}{required && ' *'}</span>
            {type === 'select'
              ? <select name={name}>{extra.map((o) => <option key={o}>{o}</option>)}</select>
              : type === 'textarea'
                ? <textarea name={name} rows="5" required={required} />
                : <input name={name} type={type} required={required} autoComplete={{ name: 'name', email: 'email', tel: 'tel' }[name] || 'off'} />}
          </label>
        )
      })}
      <div className="wide form-foot">
        <button type="submit" className="btn">{submit}</button>
        <small>* Required</small>
      </div>
    </form>
  )
}

// Filterable gallery with a large viewer. items: [photoId, category]
export function Gallery({ items, filters = true }) {
  const cats = ['All', ...new Set(items.map(([, c]) => c).filter(Boolean))]
  const [cat, setCat] = useState('All')
  const [at, setAt] = useState(null)
  const dialog = useRef(null)
  const shown = items.filter(([, c]) => cat === 'All' || c === cat)
  useEffect(() => { if (at !== null && !dialog.current.open) dialog.current.showModal() }, [at])
  const step = (d) => setAt((i) => (i + d + shown.length) % shown.length)
  return (
    <>
      {filters && cats.length > 2 && (
        <div className="filters" role="group" aria-label="Filter photos">
          {cats.map((c) => <button type="button" key={c} aria-pressed={c === cat} onClick={() => setCat(c)}>{c}</button>)}
        </div>
      )}
      <ul className="gallery">
        {shown.map(([id], i) => (
          <li key={id}>
            <button type="button" onClick={() => setAt(i)} aria-label={`Enlarge: ${PHOTOS[id].alt}`}><Img id={id} decorative /></button>
          </li>
        ))}
      </ul>
      <dialog ref={dialog} className="viewer" aria-label="Photo viewer" onClose={() => setAt(null)}
        onKeyDown={(e) => { if (e.key === 'ArrowRight') step(1); if (e.key === 'ArrowLeft') step(-1) }}
        onClick={(e) => { if (e.target === e.currentTarget) dialog.current.close() }}>
        {at !== null && shown[at] && <Img id={shown[at][0]} eager />}
        <div>
          <button type="button" onClick={() => step(-1)}>Previous</button>
          <button type="button" onClick={() => dialog.current.close()}>Close</button>
          <button type="button" onClick={() => step(1)}>Next</button>
        </div>
      </dialog>
    </>
  )
}
