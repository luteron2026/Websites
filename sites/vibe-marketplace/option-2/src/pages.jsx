import { useState } from 'react'
import { Routes, Route, Link, useSearchParams } from 'react-router-dom'
import { Img, Out, Form, Gallery, useTitle } from './core.jsx'
import * as D from './data.js'

export function Page({ title, intro, photo, children }) {
  useTitle('Vibe', title)
  return (
    <>
      <header className="cover">
        <Img id={photo} eager />
        <div className="cover-text wrap rise"><h1>{title}</h1>{intro && <p>{intro}</p>}</div>
      </header>
      {children}
    </>
  )
}

export const Inquire = ({ about, children = 'Check your date', className = 'btn' }) => <Link className={className} to={about ? `/inquire?about=${encodeURIComponent(about)}` : '/inquire'}>{children}</Link>

export function Packages({ list, about }) {
  return (
    <ul className="packages">
      {list.map(([name, price, items]) => (
        <li key={name} className="reveal"><h3>{name}</h3><p className="price">{price}</p><ul>{items.map((i) => <li key={i}>{i}</li>)}</ul><Inquire about={about} className="btn ghost">Ask about {name}</Inquire></li>
      ))}
    </ul>
  )
}

const Strip = ({ ids }) => <div className="strip wrap">{ids.map((i) => <Img key={i} id={i} />)}</div>

function Florals() {
  return (
    <Page title="Florals" photo="pink-bouquet" intro={D.FLORAL_INTRO}>
      {D.FLORALS.map(([t, text, p]) => (
        <section key={t} className="section wrap split mid service"><Img id={p} /><div><h2>{t}</h2><p className="lead">{text}</p><Inquire about="Wedding florals">Start a floral quote</Inquire></div></section>
      ))}
      <section className="section wrap"><h2>Elopement packages</h2><Packages list={D.ELOPE} about="Elopement" /></section>
      <section className="section"><Strip ids={['cascade', 'boutonniere', 'arbor-roses', 'cake']} /></section>
    </Page>
  )
}

function Photography() {
  return (
    <Page title="Photography" photo="field-walk" intro="With Vibe Photography, the beauty of your day will feel exciting and natural. Looking back at your images, you should feel the way you did when you said “I do.”">
      <section className="section wrap"><h2>Wedding collections</h2><Packages list={D.PHOTO_PACKAGES} about="Wedding photography" /></section>
      <section className="section"><Strip ids={['umbrella', 'coastal-kiss', 'veil-bridge', 'proposal']} /></section>
      <section className="section wrap">
        <h2>Sessions</h2>
        <ul className="rows">{D.SESSIONS.map(([n, p, t]) => <li key={n}><h3>{n}</h3><p>{t}</p><strong className="price">{p}</strong></li>)}</ul>
        <p className="narrow">Elopements are priced by location. Extra hours of coverage can be added to any wedding collection.</p>
        <Inquire about="Photo session">Book a session</Inquire>
      </section>
      <section className="section wrap">
        <h2>Wedding content creation</h2>
        <p className="narrow lead">Photo and video for your phone, sent the next day, so you can relive the moments you saw and the ones you missed.</p>
        <Packages list={D.CONTENT_CREATION} about="Content creation" />
        <p className="meta">Extra hours $200 each. Day-of social takeover $300. Extra reel $75. Next-day story recap $150.</p>
      </section>
    </Page>
  )
}

function Cart() {
  return (
    <Page title="The Flower Cart" photo="cart" intro="A mobile flower shop that comes to your party anywhere in Southern California.">
      <section className="section wrap"><p className="lead narrow">{D.CART_NOTE}</p><Packages list={D.CART} about="Flower cart" /></section>
      <section className="section"><Strip ids={['cart-wrap', 'cart-tie', 'cart-posy', 'bud-vases']} /></section>
    </Page>
  )
}

function Rentals() {
  return (
    <Page title="Rentals and woodwork" photo="wood-arch" intro="Pieces for your event, lawn games for your guests and barn doors for your home.">
      <section className="section wrap">
        <h2>Event rentals</h2>
        <ul className="cards">{D.RENTALS.map(([n, t, p]) => <li key={n} className="card reveal"><Img id={p} /><div><h3>{n}</h3><p>{t}</p></div></li>)}</ul>
      </section>
      <section className="section wrap">
        <h2>Lawn games</h2>
        <ul className="cards">{D.GAMES.map(([n, price, p]) => <li key={n} className="card reveal"><Img id={p} /><div><h3>{n}</h3><p className="meta">{price}</p></div></li>)}</ul>
        <p style={{ marginTop: '2rem' }}><Inquire about="Rentals">Ask about rentals</Inquire></p>
      </section>
      <section className="section wrap split">
        <div><h2>Custom barn doors</h2><p className="lead">{D.DOORS_TEXT}</p><div className="row"><a className="btn ghost" href={`mailto:${D.CO.email}?subject=Barn door`}>Email your measurements</a><a href={`tel:${D.CO.tel}`}>{D.CO.phone}</a></div></div>
        <div className="quad">{['door-double', 'door-sitting', 'door-dark', 'door-plank'].map((i) => <Img key={i} id={i} />)}</div>
      </section>
    </Page>
  )
}

function Portfolio() {
  return (
    <Page title="Portfolio" photo="arbor-couple" intro="Real weddings, bouquets and portraits. Choose any photo to see it larger.">
      <section className="section wrap wide"><Gallery items={D.PORTFOLIO} /></section>
    </Page>
  )
}

export function Quotes({ limit = 4 }) {
  return <div className="quotes">{D.QUOTES.slice(0, limit).map(([q, by]) => <figure key={by} className="reveal"><blockquote><p>“{q}”</p></blockquote><figcaption>{by}</figcaption></figure>)}</div>
}

function About() {
  return (
    <Page title="About Vibe" photo="cart-wrap" intro="A family business in Santa Clarita since December 2013.">
      <section className="section wrap split">
        <div>{D.STORY.map((s) => <p key={s} className="lead">{s}</p>)}<p>Hair and makeup are available for your wedding morning.</p></div>
        <dl className="facts">{D.TEAM.map(([n, r]) => <div key={n}><dt>{n}</dt><dd>{r}</dd></div>)}</dl>
      </section>
      <section className="section"><Strip ids={['hair-window', 'makeup', 'hair-waves', 'invitations']} /></section>
      <section className="section wrap"><h2>Kind words</h2><Quotes /></section>
    </Page>
  )
}

const SERVICES = ['Wedding florals', 'Wedding photography', 'Photo session', 'Content creation', 'Elopement', 'Flower cart', 'Rentals']

function InquirePage() {
  const [params] = useSearchParams()
  const [picked, setPicked] = useState(() => SERVICES.filter((s) => s === params.get('about')))
  const toggle = (s) => setPicked((p) => (p.includes(s) ? p.filter((x) => x !== s) : [...p, s]))
  return (
    <Page title="Tell us your date" photo="invitations" intro="Share the day, the place and what you have in mind.">
      <section className="section wrap split">
        <div>
          <h2>What are you looking for?</h2>
          <div className="filters" role="group" aria-label="Services">{SERVICES.map((s) => <button type="button" key={s} aria-pressed={picked.includes(s)} onClick={() => toggle(s)}>{s}</button>)}</div>
          <p className="meta" aria-live="polite">{picked.length ? `Selected: ${picked.join(', ')}` : 'Pick as many as you like.'}</p>
          <p>Prefer to talk? <a href={`tel:${D.CO.tel}`}>{D.CO.phone}</a> or <a href={`mailto:${D.CO.email}`}>{D.CO.email}</a></p>
        </div>
        <Form to={D.CO.email} submit="Send inquiry" fields={[['name', 'Your name', 'text', true], ['email', 'Email', 'email', true], ['tel', 'Phone', 'tel'], ['date', 'Event date', 'date', true], ['venue', 'Venue or city'], ['guests', 'Guest count', 'number'], ['notes', 'Colors, flowers, ideas', 'textarea']]} />
      </section>
    </Page>
  )
}

export default function Pages({ home }) {
  return (
    <Routes>
      <Route path="/" element={home} />
      <Route path="/florals" element={<Florals />} />
      <Route path="/photography" element={<Photography />} />
      <Route path="/flower-cart" element={<Cart />} />
      <Route path="/rentals" element={<Rentals />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/about" element={<About />} />
      <Route path="/inquire" element={<InquirePage />} />
      <Route path="*" element={home} />
    </Routes>
  )
}
