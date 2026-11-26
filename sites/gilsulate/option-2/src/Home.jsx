import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Section from './Section.jsx'
import { Plate, Table, Testimony, ReplyCard } from './parts.jsx'
import { SECTIONS, HISTORY } from './manual.js'
import { CASE_STUDIES } from './content.js'

export default function Home() {
  useEffect(() => { document.title = 'Gilsulate 500XR | Underground Pipe Insulation' }, [])
  return (
    <article className="page home">
      <header className="titlepage">
        <h1>Gilsulate <span>500XR</span></h1>
        <p>A pour-in-place insulation and corrosion protection for underground piping, tanks and structures.</p>
        <div className="imprint">
          <span>Patented. U.S. 4,231,884</span>
          <span>In commercial use since 1949</span>
          <span>Santa Clarita, California</span>
        </div>
      </header>

      <Plate src="bag-crane.jpg" fig="1" eager pos="48% 40%"
        alt="A bulk bag stencilled Gilsulate 500 XR hangs from a crane above a formed pipe trench while a worker guides it"
        caption="A semi-bulk bag of 500XR being brought over a formed trench." />

      <div className="spread">
        <div className="prose">
          <h2>Foreword</h2>
          <p className="dropcap">Gilsulate 500XR is a white, granular insulation made of inert, inorganic, non-toxic minerals. Raw, uncoated pipe is set in the trench, the material is poured around it, and it is consolidated where it lies. There is nothing to mix and nothing to fabricate.</p>
          <p>The finished envelope does three things. It insulates the line, holding heat in hot service and keeping chilled service cold. It separates the pipe from the surrounding soil and moisture. And it protects the pipe against corrosion.</p>
          <p>Because the material is poured on site, one product serves any pipe size, any number of pipes, and shallow or deep burial. An unexpected obstruction does not wait on a special-order fitting.</p>
          <p><Link to="/product/what">Read the full description and installation method</Link></p>
        </div>
        <Section />
      </div>

      <section className="toc" aria-labelledby="toc-h">
        <h2 id="toc-h">Contents</h2>
        <div className="toc-cols">
          {SECTIONS.map((s) => (
            <div key={s.n}>
              <h3>{s.n}. {s.title}</h3>
              <ul>
                {s.pages.map(([t, to], i) => (
                  <li key={to}><Link to={to}><span>{t}</span><i /><span>{s.n}.{i + 1}</span></Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <div className="spread spread-even">
        <section>
          <h2>A short history</h2>
          <Table rows={HISTORY} />
        </section>
        <section>
          <h2>Record of service</h2>
          <Testimony text="The ROI will beat expectations by 27%." by="Texas A&M Utilities and Energy Management" />
          <ul className="roll">
            {CASE_STUDIES.map((c) => <li key={c.slug}><Link to={`/tech/case-studies/${c.slug}`}>{c.name}</Link></li>)}
          </ul>
        </section>
      </div>

      <Plate src="trench.jpg" fig="3" pos="55% 50%"
        alt="Crew in safety vests looking into a deep trench carrying several pipes beside an excavator"
        caption="Multiple lines in one narrow trench." />

      <ReplyCard />
    </article>
  )
}
