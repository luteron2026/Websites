// Fig. 2: a drafting-style cross-section of the trench, drawn in the manual's two spot colours.
const KEY = [
  ['A', 'Finished grade'], ['B', 'Compacted backfill'], ['C', '500XR envelope, consolidated'],
  ['D', 'Hot line (carrier pipe)'], ['E', 'Chilled line (carrier pipe)'], ['F', 'Undisturbed soil'],
]

function Mark({ l, x, y, tx, ty }) {
  return (
    <g>
      <line x1={x} y1={y} x2={tx} y2={ty} stroke="var(--ink)" strokeWidth="1" />
      <circle cx={tx} cy={ty} r="2.5" fill="var(--ink)" />
      <circle cx={x} cy={y} r="14" fill="var(--paper)" stroke="var(--ink)" />
      <text x={x} y={y + 5} textAnchor="middle" fontSize="15" fill="var(--ink)">{l}</text>
    </g>
  )
}

export default function Section() {
  return (
    <figure className="drawing">
      <svg viewBox="0 0 600 460" role="img" aria-labelledby="sec-t">
        <title id="sec-t">Cross-section of a trench: a hot line and a chilled line surrounded by a consolidated 500XR envelope, covered with backfill.</title>
        <defs>
          <pattern id="soil" width="12" height="12" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="12" stroke="var(--ink)" strokeWidth="1" opacity=".5" />
          </pattern>
          <pattern id="fill" width="22" height="18" patternUnits="userSpaceOnUse">
            <path d="M3 5l4-2 2 4zM14 12l5 1-3 3z" fill="none" stroke="var(--ink)" strokeWidth=".8" opacity=".6" />
            <circle cx="16" cy="4" r="1" fill="var(--ink)" opacity=".5" />
          </pattern>
          <pattern id="grain" width="9" height="9" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.1" fill="var(--ink)" opacity=".5" />
            <circle cx="6.5" cy="6" r=".7" fill="var(--ink)" opacity=".45" />
          </pattern>
        </defs>
        <path d="M30 70H150V420H450V70H570V445H30Z" fill="url(#soil)" />
        <path d="M30 70H150V420H450V70H570" fill="none" stroke="var(--ink)" strokeWidth="1.6" />
        <rect x="150" y="70" width="300" height="110" fill="url(#fill)" />
        <rect x="150" y="180" width="300" height="240" fill="url(#grain)" stroke="var(--ink)" strokeWidth="1.6" />
        <circle cx="235" cy="300" r="48" fill="var(--paper)" stroke="var(--red)" strokeWidth="10" />
        <circle cx="370" cy="300" r="40" fill="var(--paper)" stroke="var(--blue)" strokeWidth="9" />
        {[[235, 300, 62], [370, 300, 52]].map(([cx, cy, r]) => (
          <g key={cx} stroke="var(--ink)" strokeWidth=".8" strokeDasharray="14 4 3 4">
            <line x1={cx - r} y1={cy} x2={cx + r} y2={cy} /><line x1={cx} y1={cy - r} x2={cx} y2={cy + r} />
          </g>
        ))}
        <line x1="30" y1="70" x2="570" y2="70" stroke="var(--ink)" strokeWidth="2.5" />
        <Mark l="A" x={90} y={30} tx={125} ty={70} />
        <Mark l="B" x={505} y={125} tx={410} ty={125} />
        <Mark l="C" x={505} y={215} tx={420} ty={215} />
        <Mark l="D" x={95} y={260} tx={197} ty={270} />
        <Mark l="E" x={505} y={340} tx={405} ty={318} />
        <Mark l="F" x={90} y={375} tx={125} ty={402} />
      </svg>
      <ol>{KEY.map(([l, t]) => <li key={l}><b>{l}</b>{t}</li>)}</ol>
      <figcaption><b>Fig. 2.</b> Typical two-pipe trench. Illustrative, not to scale.</figcaption>
    </figure>
  )
}
