import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { InfoPage } from '../components/Shell.jsx'
import { SPECS, STEPS } from '../data.js'
import { COMPONENTS } from '../content.js'

const WHY = [
  ['Insulates', 'A granular mineral envelope holds heat in hot lines and keeps chilled lines cold.'],
  ['Isolates', 'Separates the pipe from surrounding soil and moisture.'],
  ['Protects', 'Inert minerals with a dielectric coating protect the pipe from corrosion. Cathodic protection is not required, but is compatible.'],
]
const TILES = [
  ['Why Gilsulate?', 'Lower installed cost, immediate availability.', '/product/why'],
  ['What is Gilsulate?', 'Composition, properties, installation.', '/product/what'],
  ['Setting the Standard', 'Nearly 75 years of pour-in-place.', '/product/standard'],
  ['Sustainability', 'Energy efficiency as the cornerstone.', '/product/sustainability'],
  ['Required Components', 'What to have on site before you pour.', '/product/components'],
]

export function ProductOverview() {
  return (
    <InfoPage eyebrow="Product" title="A poured envelope that does the work of three systems."
      lead="Gilsulate 500XR is a patented, white, granular insulation made of inert, inorganic, non-toxic minerals. It is poured around raw, uncoated pipe and consolidated in place.">
      <div className="reveal grid gap-px border border-line bg-line md:grid-cols-3">
        {WHY.map(([t, d], i) => (
          <div key={t} className="bg-ink p-8 md:p-10">
            <div className="label text-heat">0{i + 1}</div>
            <h2 className="display mt-6 text-3xl">{t}</h2>
            <p className="mt-3 leading-relaxed text-slate-400">{d}</p>
          </div>
        ))}
      </div>
      <div className="reveal grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {TILES.map(([t, d, to]) => (
          <Link key={to} to={to} className="group flex min-h-[170px] flex-col justify-between bg-ink p-7 transition-colors hover:bg-slate2">
            <ArrowUpRight className="self-end text-slate-600 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-heat" />
            <div><h3 className="display text-2xl group-hover:text-heat">{t}</h3><p className="mt-2 text-sm text-slate-400">{d}</p></div>
          </Link>
        ))}
      </div>
    </InfoPage>
  )
}

export function ProductWhat() {
  return (
    <InfoPage eyebrow="Product" title="What is Gilsulate?"
      lead="A granular, pour-in-place insulation for underground pipes, tanks and structures, used for decades at universities, medical centers and military bases.">
      <div className="reveal grid gap-10 lg:grid-cols-[1fr_1.4fr]">
        <h2 className="display text-3xl">Key facts at a glance</h2>
        <dl className="border-t border-line">
          {SPECS.map(([k, v]) => (
            <div key={k} className="grid gap-1 border-b border-line py-4 sm:grid-cols-[200px_1fr] sm:gap-6">
              <dt className="label pt-1 text-slate-400">{k}</dt>
              <dd className="leading-relaxed text-slate-200">{v}</dd>
            </div>
          ))}
        </dl>
      </div>
      <div>
        <h2 className="display reveal text-3xl">How it&rsquo;s installed</h2>
        <div className="mt-8 grid gap-px border border-line bg-line md:grid-cols-4">
          {STEPS.map((s) => (
            <div key={s.n} className="reveal group bg-ink p-7 transition-colors hover:bg-slate2">
              <div className="display text-5xl text-heat/30 transition-colors group-hover:text-heat">{s.n}</div>
              <h3 className="display mt-6 text-xl">{s.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </InfoPage>
  )
}

export function ProductComponents() {
  return (
    <InfoPage eyebrow="Product" title="Required components."
      lead="Installation is quick and needs little skill. Have equipment and materials on the jobsite before start-up.">
      <div className="reveal border-t border-line">
        {COMPONENTS.map(([k, v]) => (
          <div key={k} className="grid gap-2 border-b border-line py-5 md:grid-cols-[320px_1fr] md:gap-8">
            <h2 className="display text-xl">{k}</h2>
            <p className="text-slate-300">{v}</p>
          </div>
        ))}
      </div>
    </InfoPage>
  )
}
