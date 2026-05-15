import React from 'react';

/* ─── Orbit config ────────────────────────────────────────────────── */
const ORBITS = [
  {
    id: 'o1',
    radius: 100,
    duration: 14,
    delay: 0,
    items: [
      { label: 'Agent\nMarketplace', size: 52, opacity: 0.95 },
    ],
  },
  {
    id: 'o2',
    radius: 165,
    duration: 22,
    delay: -5,
    items: [
      { label: 'Cross-chain\nExecution Layer', size: 62, opacity: 0.9 },
      { label: 'ML-Specialized\nComputation', size: 60, opacity: 0.85, angleOffset: 180 },
    ],
  },
  {
    id: 'o3',
    radius: 240,
    duration: 34,
    delay: -12,
    items: [
      { label: 'Data\nAggregation', size: 56, opacity: 0.8 },
      { label: 'Ecosystem\nApplications', size: 68, opacity: 0.75, angleOffset: 120 },
      { label: 'AI\nIntelligence', size: 50, opacity: 0.7, angleOffset: 240 },
    ],
  },
  {
    id: 'o4',
    radius: 310,
    duration: 50,
    delay: -20,
    items: [
      { label: 'SoQuest', size: 38, opacity: 0.55, angleOffset: 45 },
      { label: 'Cross-Chain\nPortal', size: 36, opacity: 0.5, angleOffset: 165 },
      { label: 'Data\nAvailability', size: 40, opacity: 0.55, angleOffset: 285 },
    ],
  },
];

/* Floating particle dots on rings */
const PARTICLES = [
  { ring: 100, angle: 60, size: 3 },
  { ring: 100, angle: 200, size: 2 },
  { ring: 165, angle: 90, size: 2.5 },
  { ring: 165, angle: 310, size: 2 },
  { ring: 240, angle: 30, size: 3 },
  { ring: 240, angle: 200, size: 2 },
  { ring: 310, angle: 100, size: 2.5 },
];

function splitLines(text) {
  return text.split('\n');
}

export default function OrbitalDiagram() {
  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: '100%', maxWidth: 720, height: 720, margin: '0 auto' }}
    >
      {/* Glow backdrop */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 55% 55% at 50% 50%, rgba(0,0,0,0.04) 0%, transparent 70%)',
        }}
      />

      {/* SVG Layer – static rings + cross lines */}
      <svg
        viewBox="-360 -360 720 720"
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ overflow: 'visible' }}
      >
        {/* Dashed orbit rings */}
        {[100, 165, 240, 310].map((r, i) => (
          <circle
            key={r}
            cx={0} cy={0} r={r}
            fill="none"
            stroke="#000"
            strokeWidth={0.7}
            strokeDasharray={i % 2 === 0 ? '5 10' : '2 0'}
            opacity={i % 2 === 0 ? 0.13 : 0.055}
          />
        ))}

        {/* Cross lines */}
        <line x1="-380" y1="0" x2="380" y2="0" stroke="#000" strokeWidth={0.5} opacity={0.07} />
        <line x1="0" y1="-380" x2="0" y2="380" stroke="#000" strokeWidth={0.5} opacity={0.07} />
        <line x1="-270" y1="-270" x2="270" y2="270" stroke="#000" strokeWidth={0.5} opacity={0.05} />
        <line x1="270" y1="-270" x2="-270" y2="270" stroke="#000" strokeWidth={0.5} opacity={0.05} />

        {/* Static particles on rings */}
        {PARTICLES.map((p, i) => {
          const rad = (p.angle * Math.PI) / 180;
          return (
            <circle
              key={i}
              cx={Math.cos(rad) * p.ring}
              cy={Math.sin(rad) * p.ring}
              r={p.size}
              fill="#000"
              opacity={0.18}
            />
          );
        })}
      </svg>

      {/* CSS-animated orbital containers */}
      {ORBITS.map((orbit) =>
        orbit.items.map((item, idx) => {
          const angleOffset = item.angleOffset ?? 0;
          const half = item.size / 2;
          const lines = splitLines(item.label);
          const animName = `orbit-${orbit.id}-${idx}`;
          return (
            <div
              key={`${orbit.id}-${idx}`}
              className="absolute top-1/2 left-1/2"
              style={{
                width: 0,
                height: 0,
                animation: `${animName} ${orbit.duration}s linear infinite`,
                animationDelay: `${orbit.delay - (angleOffset / 360) * orbit.duration}s`,
              }}
            >
              {/* The actual node, offset by the orbital radius */}
              <div
                style={{
                  position: 'absolute',
                  left: orbit.radius,
                  top: 0,
                  transform: 'translate(-50%, -50%)',
                  width: item.size,
                  height: item.size,
                  opacity: item.opacity,
                  /* counter-rotate so text stays upright */
                  animation: `counter-${animName} ${orbit.duration}s linear infinite`,
                  animationDelay: `${orbit.delay - (angleOffset / 360) * orbit.duration}s`,
                }}
              >
                <div
                  className="w-full h-full rounded-full bg-white border border-black/15 flex flex-col items-center justify-center text-center shadow-sm"
                  style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}
                >
                  {lines.map((line, li) => (
                    <span
                      key={li}
                      style={{
                        fontSize: item.size > 56 ? 7 : 6.5,
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 400,
                        color: '#0a0a0a',
                        lineHeight: 1.35,
                        display: 'block',
                        padding: '0 3px',
                      }}
                    >
                      {line}
                    </span>
                  ))}
                </div>
              </div>

              {/* Keyframes injected inline */}
              <style>{`
                @keyframes ${animName} {
                  from { transform: rotate(${angleOffset}deg); }
                  to   { transform: rotate(${angleOffset + 360}deg); }
                }
                @keyframes counter-${animName} {
                  from { transform: translate(-50%, -50%) rotate(-${angleOffset}deg); }
                  to   { transform: translate(-50%, -50%) rotate(-${angleOffset + 360}deg); }
                }
              `}</style>
            </div>
          );
        })
      )}

      {/* Center P3 logo */}
      <div
        className="absolute top-1/2 left-1/2 z-20"
        style={{ transform: 'translate(-50%, -50%)' }}
      >
        {/* Glow pulse ring */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            animation: 'glowPulse 3s ease-in-out infinite',
            background: 'radial-gradient(circle, rgba(0,0,0,0.08) 0%, transparent 70%)',
            transform: 'scale(2.5)',
          }}
        />
        <style>{`
          @keyframes glowPulse {
            0%, 100% { opacity: 0.4; transform: scale(2.2); }
            50% { opacity: 1; transform: scale(2.8); }
          }
        `}</style>

        <div
          className="relative w-16 h-16 rounded-full bg-black flex items-center justify-center shadow-lg"
          style={{ boxShadow: '0 0 30px rgba(0,0,0,0.25), 0 0 60px rgba(0,0,0,0.1)' }}
        >
          {/* Official Port3 logo mark */}
          <img
            src="https://media.base44.com/images/public/69fe8e85075ccaadfcada284/3789f80d0_idsZG2fydu_logos.jpeg"
            alt="Port3"
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}