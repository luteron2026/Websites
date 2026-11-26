import { Link } from 'react-router-dom'
import { Img, useTitle } from './core.jsx'
import { Quotes } from './pages.jsx'
import { STORY } from './data.js'

const INDEX = [
  ['Florals', '/florals', 'peony', 'Bouquets, ceremony and reception flowers'],
  ['Photography', '/photography', 'umbrella', 'Weddings, proposals and families'],
  ['The Flower Cart', '/flower-cart', 'cart', 'A flower shop that comes to the party'],
  ['Rentals', '/rentals', 'hex-arch', 'Arches, lanterns, games and barn doors'],
]

export default function Home() {
  useTitle('Vibe | Wedding Florals and Photography in Santa Clarita')
  return (
    <>
      <section className="spread wrap">
        <figure className="tall"><Img id="sunset-bride" eager /></figure>
        <div className="words rise">
          <h1>Flowers and photographs for the day you keep.</h1>
          <p>Wedding design from a Santa Clarita family studio, working across Southern California since 2013.</p>
          <Link to="/portfolio" className="textlink">View the portfolio</Link>
        </div>
        <figure className="small"><Img id="bouquet-hand" eager /></figure>
      </section>

      <section className="wrap section pull"><p>We keep up with both <em>trend</em> and <em>tradition</em>, and combine the two into the right look for each couple.</p></section>

      <ol className="contents wrap">
        {INDEX.map(([t, to, p, d]) => (
          <li key={to} className="reveal"><Link to={to}><Img id={p} decorative /><div><h2>{t}</h2><p>{d}</p></div></Link></li>
        ))}
      </ol>

      <section className="plate"><Img id="golden-couple" /></section>

      <section className="wrap section"><h2 className="center">From our couples</h2><Quotes limit={3} /></section>

      <section className="wrap section duo">
        <Img id="arch-roses" />
        <div><h2>Travis and Jayden</h2><p>{STORY[0]}</p><Link to="/about" className="textlink">Meet the team</Link></div>
        <Img id="veil-bridge" />
      </section>
    </>
  )
}
