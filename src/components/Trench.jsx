import { useMemo } from 'react'

// Seeded pseudo-random so the granular fill is stable between renders
function rng(seed) {
  let s = seed
  return () => ((s = (s * 16807) % 2147483647) - 1) / 2147483646
}

export default function Trench({ className = '' }) {
  const grains = useMemo(() => {
    const r = rng(42)
    return Array.from({ length: 360 }, () => ({
      x: 90 + r() * 420, y: 170 + r() * 290, r: 0.8 + r() * 2.1, o: 0.25 + r() * 0.55,
    }))
  }, [])
  const soil = useMemo(() => {
    const r = rng(7)
    return Array.from({ length: 140 }, () => ({ x: r() * 600, y: r() * 520, r: 0.6 + r() * 1.6 }))
  }, [])

  return (
    <svg viewBox="0 0 600 520" className={className} role="img"
      aria-label="Cross-section of a trench: a hot steam pipe and a chilled water pipe surrounded by a white granular 500XR insulation envelope, with heat staying inside the envelope">
      <defs>
        <radialGradient id="hotglow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FF6A2B" stopOpacity=".55" />
          <stop offset="100%" stopColor="#FF6A2B" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="coldglow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#38B6FF" stopOpacity=".4" />
          <stop offset="100%" stopColor="#38B6FF" stopOpacity="0" />
        </radialGradient>
        <clipPath id="env"><rect x="90" y="150" width="420" height="320" /></clipPath>
      </defs>

      {/* soil */}
      <rect width="600" height="520" fill="#141d28" />
      <g fill="#2a3a4c">{soil.map((g, i) => <circle key={i} cx={g.x} cy={g.y} r={g.r} />)}</g>
      <rect x="0" y="0" width="600" height="70" fill="#0d141c" />
      <line x1="0" y1="70" x2="600" y2="70" stroke="#2a3a4c" strokeWidth="2" />
      <text x="16" y="42" className="label" fill="#6b8299" fontSize="11" fontFamily="IBM Plex Mono">GRADE</text>

      {/* envelope */}
      <rect x="90" y="150" width="420" height="320" fill="#1b2633" />
      <g clipPath="url(#env)" fill="#dfe6ed">
        {grains.map((g, i) => <circle key={i} cx={g.x} cy={g.y} r={g.r} opacity={g.o} />)}
      </g>

      {/* heat glow, clipped: it never leaves the envelope */}
      <g clipPath="url(#env)" style={{ animation: 'pulse-heat 4s ease-in-out infinite' }}>
        <circle cx="210" cy="310" r="120" fill="url(#hotglow)" />
        <circle cx="390" cy="310" r="105" fill="url(#coldglow)" />
      </g>

      {/* expanding heat rings */}
      <g clipPath="url(#env)" fill="none" stroke="#FF6A2B">
        {[0, 1, 2].map((i) => (
          <circle key={i} cx="210" cy="310" r="44" strokeWidth="1.5" opacity="0">
            <animate attributeName="r" values="44;125" dur="4.5s" begin={`${i * 1.5}s`} repeatCount="indefinite" />
            <animate attributeName="opacity" values=".7;0" dur="4.5s" begin={`${i * 1.5}s`} repeatCount="indefinite" />
          </circle>
        ))}
      </g>

      {/* envelope outline */}
      <rect x="90" y="150" width="420" height="320" fill="none" stroke="#FF6A2B" strokeWidth="1.5"
        strokeDasharray="10 10" style={{ animation: 'flow 1.6s linear infinite' }} />

      {/* pipes */}
      <circle cx="210" cy="310" r="46" fill="#FF6A2B" />
      <circle cx="210" cy="310" r="46" fill="none" stroke="#0A1017" strokeWidth="3" />
      <circle cx="210" cy="310" r="30" fill="#ff8a55" />
      <circle cx="390" cy="310" r="46" fill="#38B6FF" />
      <circle cx="390" cy="310" r="46" fill="none" stroke="#0A1017" strokeWidth="3" />
      <circle cx="390" cy="310" r="30" fill="#7ccfff" />

      {/* callouts */}
      <g fontFamily="IBM Plex Mono" fontSize="11" letterSpacing="1.4">
        <line x1="210" y1="264" x2="210" y2="110" stroke="#FF6A2B" />
        <rect x="140" y="92" width="140" height="22" fill="#FF6A2B" />
        <text x="150" y="107" fill="#0A1017" fontWeight="500">STEAM 400°F</text>
        <line x1="390" y1="264" x2="390" y2="110" stroke="#38B6FF" />
        <rect x="320" y="92" width="140" height="22" fill="#38B6FF" />
        <text x="330" y="107" fill="#0A1017" fontWeight="500">CHILLED 42°F</text>
        <text x="98" y="490" fill="#8aa0b6">500XR ENVELOPE · SOIL STAYS NEUTRAL</text>
      </g>
    </svg>
  )
}
