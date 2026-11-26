import { useState } from 'react'
import { Phone, Mail, MapPin, Check } from 'lucide-react'
import { Eyebrow, useReveal } from '../components/ui.jsx'
import { CO } from '../data.js'

const ROLES = ['Owner', 'Engineer', 'Contractor', 'EPC', 'Military', 'Other']
const field = 'w-full border border-line bg-slate2 px-4 py-3.5 text-[15px] text-white placeholder:text-slate-500 focus:border-heat focus:outline-none'

export default function Contact() {
  const ref = useReveal()
  const [state, setState] = useState('idle')
  const submit = (e) => {
    e.preventDefault()
    setState('sending')
    setTimeout(() => setState('sent'), 1200)
  }
  return (
    <div ref={ref}>
      <section className="grid-bg border-b border-line pb-14 pt-[calc(72px+4rem)]">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8">
          <div className="reveal"><Eyebrow>Contact</Eyebrow></div>
          <h1 className="display reveal mt-5 max-w-4xl text-[clamp(2.8rem,7vw,5.8rem)]" data-d=".1">Request a quote.</h1>
          <p className="reveal mt-6 max-w-2xl text-lg text-slate-300" data-d=".2">Pipe sizes, operating temperatures, trench length and timeline are enough to start.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-[1280px] gap-14 px-5 md:px-8 lg:grid-cols-[1.5fr_1fr]">
          <form onSubmit={submit} className="reveal space-y-5" aria-live="polite">
            {state === 'sent' ? (
              <div className="border border-line bg-slate2 p-10">
                <Check className="text-heat" size={32} />
                <h2 className="display mt-5 text-3xl">Thanks. We&rsquo;ll be in touch.</h2>
                <p className="mt-3 text-slate-400">Demo form: nothing was sent. In production this posts to {CO.email}.</p>
              </div>
            ) : (
              <>
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block"><span className="label text-slate-400">Name</span><input required className={`${field} mt-2`} autoComplete="name" /></label>
                  <label className="block"><span className="label text-slate-400">Company</span><input className={`${field} mt-2`} autoComplete="organization" /></label>
                  <label className="block"><span className="label text-slate-400">Email</span><input required type="email" className={`${field} mt-2`} autoComplete="email" /></label>
                  <label className="block"><span className="label text-slate-400">Phone</span><input type="tel" className={`${field} mt-2`} autoComplete="tel" /></label>
                </div>
                <fieldset>
                  <legend className="label text-slate-400">I am a</legend>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {ROLES.map((r, i) => (
                      <label key={r} className="cursor-pointer">
                        <input type="radio" name="role" defaultChecked={i === 0} className="peer sr-only" />
                        <span className="label block border border-line px-4 py-3 text-slate-300 peer-checked:border-heat peer-checked:bg-heat peer-checked:text-ink peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-heat">{r}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>
                <label className="block"><span className="label text-slate-400">Project details</span>
                  <textarea rows={6} className={`${field} mt-2`} placeholder="Pipe type and size, operating temperature, length, location, schedule" />
                </label>
                <button className="btn btn-heat" disabled={state === 'sending'}>{state === 'sending' ? 'Sending…' : 'Send request'}</button>
              </>
            )}
          </form>

          <aside className="reveal space-y-px border border-line bg-line self-start" data-d=".15">
            {[
              [Phone, 'Call', CO.phone, `tel:${CO.tel}`],
              [Mail, 'Email', CO.email, `mailto:${CO.email}`],
              [MapPin, 'Visit', `${CO.addr1}, ${CO.addr2}`, null],
            ].map(([I, l, v, h]) => (
              <div key={l} className="bg-ink p-6">
                <I size={18} className="text-heat" />
                <div className="label mt-4 text-slate-500">{l}</div>
                {h ? <a href={h} className="display mt-1 block text-2xl hover:text-heat">{v}</a> : <p className="mt-1 text-slate-300">{v}</p>}
              </div>
            ))}
            <div className="bg-slate2 p-6 text-sm leading-relaxed text-slate-400">
              <div className="label mb-2 text-heat">Our commitment</div>
              Mission and quality policy available on request.
            </div>
          </aside>
        </div>
      </section>
    </div>
  )
}
