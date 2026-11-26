import { Link } from 'react-router-dom'
import { Img, useTitle } from './core.jsx'
import { Wreaths, Ways } from './pages.jsx'
import { CO, MISSION, PAUSED, QUOTES, RTW, STORY, THERAPY } from './data.js'

export default function Home() {
  useTitle('Carousel Ranch')
  return (
    <>
      <section className="hero">
        <Img id="balance" eager />
        <div className="wrap rise"><h1>{CO.tagline}</h1></div>
      </section>
      <section className="wrap section opening"><p>{MISSION}</p></section>

      <section className="wrap essay">
        <figure className="a"><Img id="resting" /><figcaption>Trust comes first.</figcaption></figure>
        <div className="t reveal"><h2>On horseback</h2><p>{THERAPY[0]}</p><p>{THERAPY[1]}</p><p className="meta">{PAUSED}</p><Link to="/equestrian-therapy">Read about therapy</Link></div>
        <figure className="b"><Img id="laughing" /></figure>
        <figure className="c"><Img id="seated" /></figure>
      </section>

      <blockquote className="wrap pull"><p>{QUOTES[0][0]}</p><footer>{QUOTES[0][1]}</footer></blockquote>

      <section className="work">
        <div className="wrap">
          <div className="reveal"><h2>Ready to Work!</h2><p>{RTW.why}</p><Link to="/ready-to-work" className="btn">The program</Link></div>
          <Img id="tack-work" /><Img id="rtw-team" />
        </div>
      </section>

      <section className="wrap section since"><span aria-hidden="true">1997</span><div><h2>One horse in a backyard</h2><p>{STORY[0]} {STORY[1]}</p><Link to="/about">The whole story</Link></div></section>

      <section className="section"><Wreaths /></section>
      <section className="wrap section"><h2>Stand beside a rider</h2><Ways /></section>
    </>
  )
}
