import { media } from '../data.js'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Eyebrow, useReveal } from './ui.jsx'
import { groupFor } from '../nav.js'

// Placeholder stock photography (Pexels), keyed by site section.
const HERO_IMG = {
  '/clients': media('lng-night.jpg'),
  '/product': media('bag-crane.jpg'),
  '/systems': media('hero-trench.jpg'),
  '/tech': media('terminal-fog.jpg'),
  '/about': media('lng-night.jpg'),
}

export function PageHero({ eyebrow, title, lead, children }) {
  const { pathname } = useLocation()
  const key = Object.keys(HERO_IMG).find((k) => pathname.startsWith(k))
  return (
    <section className={`relative overflow-hidden border-b border-line pb-14 pt-[calc(72px+3.5rem)] ${key ? '' : 'grid-bg'}`}>
      {key && (
        <>
          <img src={HERO_IMG[key]} alt="" className="absolute inset-0 h-full w-full object-cover opacity-70" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/30" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink to-transparent" />
        </>
      )}
      <div className="relative mx-auto max-w-[1280px] px-5 md:px-8">
        <div className="reveal"><Eyebrow>{eyebrow}</Eyebrow></div>
        <h1 className="display reveal mt-5 max-w-4xl text-[clamp(2.6rem,6.4vw,5.4rem)]" data-d=".1">{title}</h1>
        {lead && <p className="reveal mt-6 max-w-2xl text-lg leading-relaxed text-slate-300" data-d=".2">{lead}</p>}
        {children}
      </div>
    </section>
  )
}

export function SubNav() {
  const { pathname } = useLocation()
  const g = groupFor(pathname)
  if (!g) return null
  return (
    <div className="sticky top-[72px] z-30 border-b border-line bg-ink/95 backdrop-blur">
      <nav aria-label={`${g.label} pages`} className="mx-auto flex max-w-[1280px] overflow-x-auto px-5 md:px-8">
        {g.items.map(([t, to]) => (
          <NavLink key={to} to={to} end className={({ isActive }) =>
            `label shrink-0 border-b-2 px-4 py-4 transition-colors ${isActive ? 'border-heat text-heat' : 'border-transparent text-slate-400 hover:text-white'}`}>{t}</NavLink>
        ))}
      </nav>
    </div>
  )
}

export function Stats({ items }) {
  return (
    <div className="reveal grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
      {items.map(([k, v]) => (
        <div key={k} className="bg-slate2 p-7">
          <div className="display text-4xl text-white md:text-5xl">{k}</div>
          <p className="mt-3 text-sm leading-snug text-slate-400">{v}</p>
        </div>
      ))}
    </div>
  )
}

export function Quote({ text, by }) {
  return (
    <figure className="reveal border-l-4 border-heat bg-slate2 p-8 md:p-10">
      <blockquote className="display text-[clamp(1.6rem,3.2vw,2.6rem)] leading-tight">&ldquo;{text}&rdquo;</blockquote>
      <figcaption className="label mt-5 text-slate-400">{by}</figcaption>
    </figure>
  )
}

export function Blocks({ blocks }) {
  return (
    <div className="space-y-12">
      {blocks.map((b, i) => (
        <div key={b.h} data-d={i * 0.05} className="reveal grid gap-4 border-t border-line pt-8 md:grid-cols-[260px_1fr] md:gap-10">
          <h2 className="display text-2xl">{b.h}</h2>
          <div className="max-w-2xl space-y-4 text-[17px] leading-relaxed text-slate-300">
            {b.p?.map((t) => <p key={t}>{t}</p>)}
            {b.list && (
              <ul className="space-y-2">
                {b.list.map((l) => <li key={l} className="flex gap-3"><span className="mt-[11px] h-1.5 w-1.5 shrink-0 bg-heat" />{l}</li>)}
              </ul>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export function CtaBand({ title = 'Tell us about your project.', to = '/contact', label = 'Request a quote' }) {
  return (
    <section className="border-t border-line bg-slate2">
      <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-6 px-5 py-14 md:px-8">
        <h2 className="display text-[clamp(1.8rem,3.6vw,3rem)]">{title}</h2>
        <Link to={to} className="btn btn-heat">{label} <ArrowRight size={15} /></Link>
      </div>
    </section>
  )
}

// Generic content page: hero, optional sub-nav, stats, quote, blocks, CTA.
export function InfoPage({ eyebrow, title, lead, quote, stats, blocks, children }) {
  const ref = useReveal()
  return (
    <div ref={ref}>
      <PageHero eyebrow={eyebrow} title={title} lead={lead} />
      <SubNav />
      <section className="py-16">
        <div className="mx-auto max-w-[1280px] space-y-12 px-5 md:px-8">
          {stats && <Stats items={stats} />}
          {quote && <Quote {...quote} />}
          {blocks && <Blocks blocks={blocks} />}
          {children}
        </div>
      </section>
      <CtaBand />
    </div>
  )
}
