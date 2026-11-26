import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Img, useTitle } from './core.jsx'
import { Inquire, Quotes } from './pages.jsx'
import { CART, CART_NOTE } from './data.js'

const SHOP = [
  ['Wedding florals', '/florals', 'garland-hands', 'Quoted for your day'],
  ['Elopements', '/florals', 'vineyard', 'from $749'],
  ['Wedding photography', '/photography', 'field-walk', 'from $3,500'],
  ['Photo sessions', '/photography', 'family-sit', 'from $250'],
  ['Event rentals', '/rentals', 'seat-sign', 'Ask for a list'],
  ['Barn doors', '/rentals', 'door-double', 'Made to order'],
]

function CartPicker() {
  const [at, setAt] = useState(0)
  const [name, price, items] = CART[at]
  return (
    <section className="picker" aria-labelledby="cart-h">
      <div className="wrap">
        <Img id="cart-posy" />
        <div>
          <h2 id="cart-h">Book the Flower Cart</h2>
          <p>{CART_NOTE}</p>
          <div className="filters" role="group" aria-label="Cart packages">{CART.map(([n], i) => <button type="button" key={n} aria-pressed={i === at} onClick={() => setAt(i)}>{n}</button>)}</div>
          <div className="ticket" aria-live="polite">
            <h3>{name}</h3><p className="price">{price}</p>
            <ul>{items.map((i) => <li key={i}>{i}</li>)}</ul>
            <Inquire about="Flower cart">Reserve the cart</Inquire>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  useTitle('Vibe | Wedding Florals and Photography in Santa Clarita')
  return (
    <>
      <section className="hero wrap">
        <div className="rise">
          <h1>Fresh flowers, <em>wheeled right to you.</em></h1>
          <p className="lead">Wedding flowers, photography and our mobile flower shop, from a family studio in Santa Clarita.</p>
          <div className="row"><Inquire>Check your date</Inquire><Link to="/portfolio" className="btn ghost">See our work</Link></div>
        </div>
        <div className="frames rise"><Img id="cart" eager /><Img id="cart-wrap" eager /></div>
      </section>

      <section className="section wrap" aria-labelledby="shop-h">
        <h2 id="shop-h">What we make</h2>
        <ul className="shop">
          {SHOP.map(([t, to, p, price]) => <li key={t} className="reveal"><Link to={to}><Img id={p} decorative /><h3>{t}</h3><p>{price}</p></Link></li>)}
        </ul>
      </section>

      <CartPicker />

      <section className="section wrap"><h2>Notes from brides</h2><Quotes /></section>

      <section className="wrap ribbon" aria-label="Wedding photographs">{['smiles', 'color-arch', 'peony', 'pier', 'bud-vases'].map((p) => <Img key={p} id={p} />)}</section>
    </>
  )
}
