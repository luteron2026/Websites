import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { media } from '../data.js'

export function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const items = el.querySelectorAll('.reveal')
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          gsap.to(e.target, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: Number(e.target.dataset.d || 0) })
          io.unobserve(e.target)
        }
      })
    }, { threshold: 0.12 })
    items.forEach((i) => io.observe(i))
    return () => io.disconnect()
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
    <div className={`label flex items-center gap-3 ${tone === 'heat' ? 'text-heat' : 'text-slate-500'}`}>
      <span className="h-px w-8 bg-current" />{children}
    </div>
  )
}

export function Logo({ light = true }) {
  return (
    <div className="flex items-center gap-3">
      <img src={media('logo.png')} alt="" width="245" height="238" className="h-[52px] w-auto rounded-sm bg-white" />
      <div className="leading-none">
        <div className={`font-display text-[19px] font-extrabold tracking-tight ${light ? 'text-white' : 'text-ink'}`}>GILSULATE</div>
        <div className="label mt-1 text-[9px] text-heat">500XR</div>
      </div>
    </div>
  )
}
