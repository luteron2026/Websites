import { Link } from 'react-router-dom'
import { Img, useTitle } from './core.jsx'
import { Apply, Campuses, Quotes } from './pages.jsx'
import { CO, TRIVIUM, VISION } from './data.js'

const WALL = [['lion', 'Watercolor'], ['cathedral', 'Ink and wash'], ['squirrel', 'Block print'], ['david', 'Pencil study'], ['autumn-tree', 'Tempera'], ['birches', 'Watercolor']]

export default function Home() {
  useTitle('Beacon Hill Classical Academy')
  return (
    <>
      <section className="wrap hero">
        <div className="rise">
          <h1>Children who learn to see what is true, beautiful and good.</h1>
          <p className="lead">Beacon Hill is a classical Christian school in Camarillo for kindergarten through grade 12.</p>
          <div className="row"><Link className="btn" to="/visit">Visit a campus</Link><Apply className="btn ghost" /></div>
        </div>
      </section>

      <section className="wall" aria-label="Student artwork">
        {WALL.map(([id, medium]) => <figure key={id}><Img id={id} eager /><figcaption>Student work, {medium.toLowerCase()}</figcaption></figure>)}
      </section>

      <section className="wrap section lesson">
        <p className="latin"><i lang="la">{CO.latin}.</i> {CO.english}</p>
        <p>{VISION}</p>
      </section>

      {TRIVIUM.map(([n, g, t, p], i) => (
        <section key={n} className={`wrap chapter ${i % 2 ? 'flip' : ''}`}>
          <Img id={p} />
          <div className="reveal"><h2>{n}</h2><p className="meta">{g}</p><p>{t}</p></div>
        </section>
      ))}

      <section className="wrap section"><Link to="/programs" className="btn">Full-time and collaborative programs</Link></section>

      <section className="wide-photo"><Img id="circle-game" /></section>
      <section className="wrap section"><h2>Families on Beacon Hill</h2><Quotes /></section>
      <section className="wrap section"><h2>Two campuses in Camarillo</h2><Campuses /></section>
    </>
  )
}
