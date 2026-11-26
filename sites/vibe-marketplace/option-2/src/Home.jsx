import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Img, useTitle } from './core.jsx'
import { QUOTES } from './data.js'

const SLIDES = [['golden-couple', 'Florals and photography'], ['downtown', 'Weddings'], ['yosemite', 'Wherever you say yes'], ['greenery-door', 'Ceremony design'], ['umbrella', 'Portraits']]
const REEL = ['cascade', 'vineyard', 'lantern-bouquet', 'proposal', 'boho-bride', 'color-arch', 'beach-back', 'boutonniere']
const DOORS = [['Florals', '/florals', 'peony'], ['Photography', '/photography', 'coastal-kiss'], ['Flower Cart', '/flower-cart', 'cart-wrap'], ['Rentals', '/rentals', 'lanterns']]

function Slides() {
  const [at, setAt] = useState(0)
  const [play, setPlay] = useState(() => !window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  useEffect(() => {
    if (!play) return
    const t = setInterval(() => setAt((i) => (i + 1) % SLIDES.length), 5000)
    return () => clearInterval(t)
  }, [play])
  return (
    <section className="slides" aria-label="Featured photographs">
      {SLIDES.map(([id], i) => <div key={id} className={i === at ? 'on' : ''} aria-hidden={i !== at}><Img id={id} eager={i < 2} /></div>)}
      <div className="caption"><h1>Vibe</h1><p>{SLIDES[at][1]}</p></div>
      <div className="dots">
        {SLIDES.map(([id, label], i) => <button type="button" key={id} aria-label={`Show ${label}`} aria-current={i === at} onClick={() => { setAt(i); setPlay(false) }} />)}
        <button type="button" className="pause" onClick={() => setPlay(!play)}>{play ? 'Pause' : 'Play'}</button>
      </div>
    </section>
  )
}

export default function Home() {
  useTitle('Vibe | Wedding Florals and Photography in Santa Clarita')
  return (
    <>
      <Slides />
      <section className="wrap section intro"><p>A husband and wife studio in Santa Clarita, designing wedding flowers and photographing the people who carry them. <Link to="/about">Our story</Link></p></section>
      <div className="doors">
        {DOORS.map(([t, to, p]) => <Link key={to} to={to}><Img id={p} decorative /><h2>{t}</h2></Link>)}
      </div>
      <section className="section" aria-labelledby="reel-h">
        <div className="wrap reel-head"><h2 id="reel-h">Recent frames</h2><Link to="/portfolio">Full portfolio</Link></div>
        <div className="reel" tabIndex={0} aria-label="Photo strip, scroll sideways">{REEL.map((r) => <Img key={r} id={r} />)}</div>
      </section>
      <section className="wrap section words">
        {QUOTES.slice(0, 2).map(([q, by]) => <figure key={by} className="reveal"><blockquote><p>{q}</p></blockquote><figcaption>{by}</figcaption></figure>)}
      </section>
    </>
  )
}
