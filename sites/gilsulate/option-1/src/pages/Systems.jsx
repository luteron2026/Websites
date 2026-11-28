import { useState } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { Flame, Snowflake, Droplets, Layers, ArrowRight } from 'lucide-react'
import { PageHero, Blocks, CtaBand, Stats } from '../components/Shell.jsx'
import { useReveal } from '../components/ui.jsx'
import { APPS, APP_CATS } from '../data.js'
import { SYSTEM_NOTES } from '../content.js'

export const slug = (s) => s.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
const ICON = { 'Heating & energy': Flame, Cooling: Snowflake, 'Process & fuel': Droplets, 'Structures & protection': Layers }
const TONE = { 'Heating & energy': 'text-heat', Cooling: 'text-chill', 'Process & fuel': 'text-amber-300', 'Structures & protection': 'text-slate-300' }

export function SystemsHub() {
  const [cat, setCat] = useState('All')
  const ref = useReveal()
  const list = APPS.filter(([, c]) => cat === 'All' || c === cat)
  return (
    <div ref={ref}>
      <PageHero eyebrow="Systems" title="If it runs underground, it can be insulated."
        lead={`${APPS.length} documented uses, from chilled water on a university campus to molten sulphur lines. Filter by system type.`} />
      <section className="py-14">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8">
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter systems">
            {APP_CATS.map((c) => (
              <button key={c} onClick={() => setCat(c)} aria-pressed={cat === c}
                className={`label border px-4 py-3 transition-colors ${cat === c ? 'border-heat bg-heat text-ink' : 'border-line text-slate-300 hover:border-heat hover:text-heat'}`}>{c}</button>
            ))}
          </div>
          <div className="mt-10 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {list.map(([n, c]) => {
              const I = ICON[c]
              return (
                <Link to={`/systems/${slug(n)}`} key={n} className="group flex min-h-[170px] flex-col justify-between bg-ink p-6 transition-colors hover:bg-slate2">
                  <I size={22} className={TONE[c]} />
                  <div>
                    <h2 className="display text-xl leading-tight">{n}</h2>
                    <p className="label mt-3 flex items-center gap-2 text-slate-400 transition-colors group-hover:text-heat">{c} <ArrowRight size={12} className="opacity-0 transition-opacity group-hover:opacity-100" /></p>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export function SystemDetail() {
  const { id } = useParams()
  const ref = useReveal()
  const item = APPS.find(([n]) => slug(n) === id)
  if (!item) return <Navigate to="/systems" replace />
  const [name, cat] = item
  const notes = SYSTEM_NOTES[name]
  const related = APPS.filter(([n, c]) => c === cat && n !== name).slice(0, 4)
  const blocks = [
    { h: 'How it works', p: notes || [`Gilsulate 500XR is poured around raw carrier pipe to form a seamless insulation and corrosion-protection envelope for ${name.toLowerCase()}. Send pipe sizes, temperatures and a schedule, and Gilsulate will recommend a design.`] },
    { h: 'Why 500XR here', list: ['Insulates, isolates and protects against corrosion in one material', 'Field-applied, so no special-order fittings or fabrication lead time', 'One product for any pipe size, pipe count or burial depth'] },
  ]
  return (
    <div ref={ref}>
      <PageHero eyebrow={`Systems · ${cat}`} title={name} lead="Request a recommendation for your project, or review the product basics below." />
      <section className="py-16">
        <div className="mx-auto max-w-[1280px] space-y-12 px-5 md:px-8">
          <Stats items={[['35–800°F', 'Carrier pipe temperature range'], ['Pour in place', 'No mixing on site'], ['1 or 60 cu ft', 'Bag sizes, at use density']]} />
          <Blocks blocks={blocks} />
          <div className="reveal border-t border-line pt-8">
            <div className="label text-slate-400">Related systems</div>
            <div className="mt-4 flex flex-wrap gap-2">
              {related.map(([n]) => <Link key={n} to={`/systems/${slug(n)}`} className="label border border-line px-4 py-3 text-slate-300 hover:border-heat hover:text-heat">{n}</Link>)}
              <Link to="/systems" className="label border border-heat bg-heat px-4 py-3 text-ink">All systems</Link>
            </div>
          </div>
        </div>
      </section>
      <CtaBand title={`Planning ${name.toLowerCase()}?`} />
    </div>
  )
}
