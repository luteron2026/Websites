import { useState } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { Plus, ArrowUpRight, Mail } from 'lucide-react'
import { InfoPage } from '../components/Shell.jsx'
import { FAQ, CO } from '../data.js'
import { CASE_STUDIES, DOCS } from '../content.js'

const TILES = [
  ['FAQ', 'Twenty straight answers on bags, consolidation, rain and returns.', '/tech/faq'],
  ['Case Studies', 'Universities, EPC firms and government projects.', '/tech/case-studies'],
  ['Density', 'Why “use density” decides coverage and performance.', '/tech/density'],
  ['Tech Documents', 'Manual, CAD details, brochures and training.', '/tech/documents'],
]

export function TechHub() {
  return (
    <InfoPage eyebrow="Tech info" title="Everything an engineer needs to specify it."
      lead="Documentation, answers and project history, organized by what you&rsquo;re trying to do.">
      <div className="reveal grid gap-px border border-line bg-line sm:grid-cols-2">
        {TILES.map(([t, d, to]) => (
          <Link key={to} to={to} className="group flex min-h-[200px] flex-col justify-between bg-ink p-8 transition-colors hover:bg-slate2">
            <ArrowUpRight className="self-end text-slate-600 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-heat" />
            <div><h2 className="display text-3xl group-hover:text-heat">{t}</h2><p className="mt-2 text-slate-400">{d}</p></div>
          </Link>
        ))}
      </div>
    </InfoPage>
  )
}

export function TechFaq() {
  const [open, setOpen] = useState(0)
  return (
    <InfoPage eyebrow="Tech info" title="Straight answers.">
      <div className="reveal max-w-3xl border-t border-line">
        {FAQ.map(([q, a], i) => (
          <div key={q} className="border-b border-line">
            <button onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i} className="flex w-full items-center justify-between gap-6 py-5 text-left">
              <span className="display text-xl md:text-2xl">{q}</span>
              <Plus size={20} className={`shrink-0 text-heat transition-transform ${open === i ? 'rotate-45' : ''}`} />
            </button>
            <div className={`grid transition-all duration-300 ${open === i ? 'grid-rows-[1fr] pb-6' : 'grid-rows-[0fr]'}`}>
              <p className="max-w-2xl overflow-hidden leading-relaxed text-slate-400">{a}</p>
            </div>
          </div>
        ))}
      </div>
    </InfoPage>
  )
}

export function TechDensity() {
  return (
    <InfoPage eyebrow="Tech info" title="Density, explained."
      lead="500XR is sold and specified by use density, not loose bulk density."
      stats={[['1 cu ft', 'Per bag at use density'], ['~1.3 cu ft', 'Bag volume at loose bulk density'], ['30%+', 'Settlement some fine powders can show']]}
      blocks={[
        { h: 'Use density', p: ['Installed use density affects coverage and thermal performance. 500XR is consolidated to its use density before backfill and does not rely on backfill to compact.'] },
        { h: 'Which density?', p: ['ASTM has more than 40 density definitions, and different tests give different results. Gilsulate uses ASTM D4253 and a modified ASTM D1895 Method C, applying 400 and 1,000 psf loads for longer durations to simulate soil loading.'] },
        { h: 'Settlement', p: ['Most bulk solids settle, and finer powders settle more. Consolidating 500XR with a concrete-type vibrator before backfill lets fine particles migrate between larger ones and lets trapped air escape.'] },
        { h: 'Why it matters', p: ['Heat loss, thermal efficiency and freeze-protection calculations depend on the envelope dimensions and the material’s thermal conductivity. Conductivity is tested per ASTM C177 and, for 500XR, is stated at use density.'] },
      ]} />
  )
}

export function TechDocs() {
  return (
    <InfoPage eyebrow="Tech info" title="Tech documents."
      lead="Request any of these and we&rsquo;ll send them to your inbox.">
      <div className="reveal border-t border-line">
        {DOCS.map(([t, d]) => (
          <div key={t} className="flex flex-wrap items-center justify-between gap-4 border-b border-line py-6">
            <div><h2 className="display text-2xl">{t}</h2><p className="mt-1 text-slate-400">{d}</p></div>
            <a className="btn btn-line" href={`mailto:${CO.email}?subject=${encodeURIComponent('Request: ' + t)}`}><Mail size={14} />Request</a>
          </div>
        ))}
      </div>
    </InfoPage>
  )
}

export function CaseIndex() {
  return (
    <InfoPage eyebrow="Tech info" title="Case studies."
      lead="Universities, EPC firms and government clients that specify 500XR.">
      <div className="reveal grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {CASE_STUDIES.map((c, i) => (
          <Link key={c.slug} to={`/tech/case-studies/${c.slug}`} className="group flex min-h-[220px] flex-col justify-between bg-ink p-7 transition-colors hover:bg-slate2">
            <span className="label text-slate-500">0{i + 1}</span>
            <div><h2 className="display text-2xl leading-tight group-hover:text-heat">{c.name}</h2><p className="label mt-3 text-heat">{c.type}</p></div>
          </Link>
        ))}
      </div>
    </InfoPage>
  )
}

export function CaseDetail() {
  const { id } = useParams()
  const c = CASE_STUDIES.find((x) => x.slug === id)
  if (!c) return <Navigate to="/tech/case-studies" replace />
  const meta = [['Client', c.name], ['Location', c.loc], ['Length', c.size], ['Completed', c.year], ['Category', c.category]].filter(([, v]) => v)
  return (
    <InfoPage eyebrow="Case study" title={c.name} lead={c.type}
      blocks={c.body ? [{ h: 'Overview', p: c.body }] : [{ h: 'Project brief', p: ['Full project details, specifications and results for this installation are available on request.'] }]}>
      {meta.length > 1 && (
        <dl className="reveal grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
          {meta.map(([k, v]) => <div key={k} className="bg-slate2 p-5"><dt className="label text-slate-500">{k}</dt><dd className="display mt-2 text-lg">{v}</dd></div>)}
        </dl>
      )}
      <Link to="/tech/case-studies" className="label reveal inline-block text-slate-300 hover:text-heat">← All case studies</Link>
    </InfoPage>
  )
}
