import { Link, useParams, Navigate } from 'react-router-dom'
import { InfoPage } from '../components/Shell.jsx'
import { CLIENTS, PRODUCT_PAGES } from '../content.js'
import { media } from '../data.js'

export function ClientPage() {
  const { id } = useParams()
  const c = CLIENTS[id]
  if (!c) return <Navigate to="/" replace />
  return <InfoPage eyebrow="Clients" title={c.title} lead={c.lead} quote={c.quote} stats={c.stats} blocks={c.blocks} />
}

export function TextPage({ id }) {
  const p = PRODUCT_PAGES[id]
  return <InfoPage eyebrow={p.eyebrow} title={p.title} lead={p.lead} stats={p.stats} blocks={p.blocks} />
}

export function News() {
  return (
    <InfoPage eyebrow="News & info" title="Where to find energy savings and reduce operating costs."
      lead="July 19, 2023">
      <div className="reveal max-w-2xl space-y-5 text-[17px] leading-relaxed text-slate-300">
        <p>Owners and engineers spend a significant amount of their time searching for ways to save energy and reduce operating costs. Earlier underground pipe insulation methods often were not suited to long-term savings.</p>
        <p>Gilsulate&rsquo;s guiding principle is customer success, delivered through high-quality products, on-time delivery, competitive pricing and excellent customer service.</p>
        <Link to="/product/sustainability" className="label inline-block text-heat">Read about sustainability →</Link>
      </div>
    </InfoPage>
  )
}

export function About() {
  return (
    <InfoPage eyebrow="About us" title="Who we are."
      lead="A woman-owned manufacturer in Santa Clarita, California, and the maker of Gilsulate 500XR."
      stats={[['2002', 'Gilsulate International incorporated'], ['1943', 'Development of the original product began'], ['WOSB', 'Woman-owned small business']]}
      blocks={[
        { h: 'Laura Duncan, President and Owner', p: ['A self-described straight shooter, born and raised in the Midwest, Laura is passionate about helping clients with the patented controlled-density insulation she manufactures. She takes pride in solving client challenges so that clients’ businesses succeed, and keeps an open-door policy for client contact.'] },
        { h: 'The company', p: ['Gilsulate was the first commercially successful granular pour-in-place insulation for underground piping. Laura incorporated Gilsulate International in 2002 and acquired the assets, patent, trade name and technologies from American Thermal Products.'] },
      ]}>
      <img src={media('TAPPA-Laura-1-300x300-1.jpg')} alt="Laura Duncan, President and Owner of Gilsulate International" className="reveal h-48 w-48 object-cover grayscale" />
    </InfoPage>
  )
}
