import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import Trench from '../components/Trench.jsx'
import { Eyebrow, useReveal } from '../components/ui.jsx'
import { CtaBand } from '../components/Shell.jsx'
import { FACTS, APPS, media } from '../data.js'
import { CASE_STUDIES } from '../content.js'
import { slug } from './Systems.jsx'

const WHO = [
  ['Owner', 'Lower lifetime cost, fewer dig-ups.', '/clients/owner'],
  ['Engineer', 'Heat-loss numbers to back the spec.', '/clients/engineer'],
  ['Contractor', 'No fabrication lead time.', '/clients/contractor'],
  ['EPC', 'Ready to ship, ready to schedule.', '/clients/epc'],
  ['Military', 'From Alaska to Florida.', '/clients/military'],
]
const FEATURED = ['Chilled water distribution', 'District heating and cooling', 'Data centers', 'Steam and condensate return']

export default function Home() {
  const ref = useReveal()
  return (
    <div ref={ref}>
      <section className="relative isolate overflow-hidden">
        <img src={media('hero-trench.jpg')} alt="Crew inspecting multiple insulated pipes laid in a deep trench beside an excavator" className="absolute inset-0 -z-10 h-full w-full object-cover object-[70%_center]" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/90 via-ink/55 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-ink to-transparent" />
        <div className="mx-auto flex min-h-[min(88dvh,780px)] max-w-[1280px] flex-col justify-end px-5 pb-16 pt-32 md:px-8 md:pb-20">
          <div className="reveal"><Eyebrow>Underground pipe insulation since 1949</Eyebrow></div>
          <h1 className="display reveal mt-6 max-w-4xl text-[clamp(2.8rem,7vw,6rem)]" data-d=".1">
            Pipe that stays hot.<br />Or cold.<br /><span className="text-heat">For decades.</span>
          </h1>
          <p className="reveal mt-7 max-w-xl text-lg leading-relaxed text-slate-200" data-d=".2">
            Gilsulate 500XR is the patented, pour-in-place insulation and corrosion protection for underground piping, tanks and structures.
          </p>
          <div className="reveal mt-9 flex flex-wrap gap-4" data-d=".3">
            <Link to="/contact" className="btn btn-heat">Request a quote <ArrowRight size={15} /></Link>
            <Link to="/product" className="btn btn-line !border-white/40">Explore the product</Link>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-slate2">
        <div className="mx-auto grid max-w-[1280px] grid-cols-2 md:grid-cols-4">
          {FACTS.map((f, i) => (
            <div key={f.k} data-d={i * 0.08} className="reveal border-line p-6 md:p-8 [&:not(:last-child)]:border-r max-md:[&:nth-child(2)]:border-r-0 max-md:[&:nth-child(-n+2)]:border-b">
              <div className="display text-[clamp(1.8rem,3.4vw,2.8rem)] text-white">{f.k}</div>
              <p className="mt-2 text-sm leading-snug text-slate-400">{f.v}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto grid max-w-[1280px] items-center gap-12 px-5 py-20 md:px-8 lg:grid-cols-[1.1fr_1fr]">
          <figure className="reveal">
            <img src={media('bag-crane.jpg')} alt="A bulk bag marked Gilsulate 500 XR lifted by crane over an open trench" className="aspect-[16/10] w-full object-cover" loading="lazy" />
            <figcaption className="label mt-3 text-slate-500">500XR bulk bag, lifted into place on site</figcaption>
          </figure>
          <div>
            <div className="reveal"><Eyebrow>In the field</Eyebrow></div>
            <h2 className="display reveal mt-5 text-[clamp(2.2rem,4.6vw,3.8rem)]">Every trench is different. The material isn&rsquo;t.</h2>
            <p className="reveal mt-6 text-lg leading-relaxed text-slate-300">Poured on site around raw pipe, 500XR adapts to obstructions, bends and tight schedules that pre-insulated systems can&rsquo;t. Nothing to mix, nothing to fabricate.</p>
            <Link to="/product/what" className="btn btn-line reveal mt-8">How it&rsquo;s installed <ArrowRight size={15} /></Link>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-slate2 py-20">
        <div className="mx-auto grid max-w-[1280px] items-center gap-12 px-5 md:px-8 lg:grid-cols-[1fr_1fr]">
          <div>
            <div className="reveal"><Eyebrow>How it protects</Eyebrow></div>
            <h2 className="display reveal mt-5 text-[clamp(2.2rem,4.6vw,3.8rem)]">The heat stays where you put it.</h2>
            <p className="reveal mt-6 max-w-lg text-lg leading-relaxed text-slate-300">A granular mineral envelope surrounds hot and chilled lines alike, holding temperature in the pipe and moisture out. Illustrative cross-section.</p>
          </div>
          <div className="reveal border border-line bg-ink p-2"><Trench className="h-auto w-full" /></div>
        </div>
      </section>

      <section className="bg-paper py-20 text-ink">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8">
          <div className="reveal"><Eyebrow tone="ink">Find your page</Eyebrow></div>
          <h2 className="display reveal mt-4 text-[clamp(2.2rem,5vw,4rem)]">Who are you specifying for?</h2>
          <div className="mt-10 grid border-l border-t border-ink/15 sm:grid-cols-2 lg:grid-cols-5">
            {WHO.map(([t, d, to], i) => (
              <Link key={t} to={to} data-d={i * 0.06} className="reveal group flex min-h-[220px] flex-col justify-between border-b border-r border-ink/15 p-6 transition-colors hover:bg-ink hover:text-white">
                <ArrowUpRight className="self-end text-ink/40 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-heat" />
                <div>
                  <h3 className="display text-3xl">{t}</h3>
                  <p className="mt-2 text-sm text-ink/70 group-hover:text-slate-300">{d}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="reveal"><Eyebrow>Systems</Eyebrow></div>
              <h2 className="display reveal mt-4 text-[clamp(2.2rem,5vw,4rem)]">{APPS.length} ways it works underground.</h2>
            </div>
            <Link to="/systems" className="label reveal flex items-center gap-2 text-slate-300 hover:text-heat">All systems <ArrowRight size={14} /></Link>
          </div>
          <div className="mt-10 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {FEATURED.map((n, i) => (
              <Link key={n} to={`/systems/${slug(n)}`} data-d={i * 0.07} className="reveal group flex min-h-[200px] flex-col justify-between bg-ink p-7 transition-colors hover:bg-slate2">
                <span className="label text-slate-500">0{i + 1}</span>
                <h3 className="display text-2xl leading-tight group-hover:text-heat">{n}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-slate2 py-20">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="reveal"><Eyebrow>Our works</Eyebrow></div>
              <h2 className="display reveal mt-4 text-[clamp(2.2rem,5vw,4rem)]">Campuses that can&rsquo;t afford downtime.</h2>
            </div>
            <Link to="/tech/case-studies" className="label reveal flex items-center gap-2 text-slate-300 hover:text-heat">All case studies <ArrowRight size={14} /></Link>
          </div>
          <div className="mt-10 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {CASE_STUDIES.slice(0, 4).map((c, i) => (
              <Link key={c.slug} to={`/tech/case-studies/${c.slug}`} data-d={i * 0.07} className="reveal group relative flex min-h-[240px] flex-col justify-between bg-ink p-7 transition-colors hover:bg-ink/60">
                <span className="label text-slate-500">Case study 0{i + 1}</span>
                <div>
                  <h3 className="display text-2xl leading-tight">{c.name}</h3>
                  <p className="label mt-3 text-heat">{c.type}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Tell us about the trench." />
    </div>
  )
}
