import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'

// Fade-in on scroll, as an enhancement only: content is visible by default (CSS),
// and anything that is on screen or already scrolled past is always revealed,
// so fast scrolling, printing and screenshots never leave sections blank.
export function useReveal() {
  const ref = useRef(null)
  useLayoutEffect(() => {
    const el = ref.current
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let pending = Array.from(el.querySelectorAll('.reveal'))
    gsap.set(pending, { opacity: 0, y: 24 })
    let raf = 0
    const check = () => {
      raf = 0
      const limit = window.innerHeight * 0.92
      pending = pending.filter((t) => {
        if (t.getBoundingClientRect().top > limit) return true
        gsap.to(t, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: Number(t.dataset.d || 0) })
        return false
      })
      if (!pending.length) stop()
    }
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(check) }
    const show = () => { gsap.killTweensOf(pending); gsap.set(pending, { opacity: 1, y: 0 }); pending = []; stop() }
    const stop = () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      window.removeEventListener('beforeprint', show)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    window.addEventListener('beforeprint', show)
    check()
    return () => { stop(); if (raf) cancelAnimationFrame(raf) }
  }, [])
  return ref
}

export function CountUp({ to, suffix = '', dur = 1400 }) {
  const [v, setV] = useState(0)
  const ref = useRef(null)
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      io.disconnect()
      const t0 = performance.now()
      const tick = (t) => {
        const p = Math.min((t - t0) / dur, 1)
        setV(Math.round(to * (1 - Math.pow(1 - p, 3))))
        if (p < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    })
    io.observe(ref.current)
    return () => io.disconnect()
  }, [to, dur])
  return <span ref={ref}>{v}{suffix}</span>
}

export function Eyebrow({ children, tone = 'heat' }) {
  return (
    <div className={`label flex items-center gap-3 ${tone === 'heat' ? 'text-heat' : 'text-slate-600'}`}>
      <span className="h-px w-6 shrink-0 bg-current md:w-8" />{children}
    </div>
  )
}

export function Logo({ light = true }) {
  return (
    <div className="flex items-center gap-3">
      <svg width="34" height="34" viewBox="0 0 34 34" aria-hidden="true">
        <circle cx="17" cy="9" r="7.5" fill="#38B6FF" />
        <circle cx="17" cy="25" r="7.5" fill="#E0287A" />
      </svg>
      <div className="leading-none">
        <div className={`font-display text-[19px] font-extrabold tracking-tight ${light ? 'text-white' : 'text-ink'}`}>GILSULATE</div>
        <div className="label mt-1 text-[9px] text-heat">500XR</div>
      </div>
    </div>
  )
}
