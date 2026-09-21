const nodes = [
  { label: "HUB", x: 260, y: 60, color: "#ec3bd0", r: 30 },
  { label: "US", x: 90, y: 130, color: "#22d3ee", r: 24 },
  { label: "EU", x: 430, y: 130, color: "#ec3bd0", r: 24 },
  { label: "SA", x: 110, y: 240, color: "#22d3ee", r: 24 },
  { label: "AS", x: 410, y: 240, color: "#a855f7", r: 24 },
]

export function NetworkMap() {
  const hub = nodes[0]
  return (
    <div className="rounded-2xl border border-white/10 bg-[#0a0a12] p-4">
      <svg
        viewBox="0 0 520 300"
        className="h-full w-full"
        role="img"
        aria-label="Global data center network map"
      >
        <defs>
          <pattern
            id="hx-grid"
            width="52"
            height="50"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M52 0 H0 V50"
              fill="none"
              stroke="rgba(255,255,255,0.05)"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="520" height="300" fill="url(#hx-grid)" />

        {nodes.slice(1).map((n) => (
          <line
            key={n.label}
            x1={hub.x}
            y1={hub.y}
            x2={n.x}
            y2={n.y}
            stroke={n.color}
            strokeWidth="1.5"
            className="hx-dash"
            opacity="0.7"
          />
        ))}

        {nodes.map((n) => (
          <g key={n.label}>
            <circle
              cx={n.x}
              cy={n.y}
              r={n.r}
              fill="rgba(10,10,18,0.85)"
              stroke={n.color}
              strokeWidth="2"
              style={{ filter: `drop-shadow(0 0 8px ${n.color})` }}
            />
            <text
              x={n.x}
              y={n.y + 5}
              textAnchor="middle"
              fontSize="14"
              fontWeight="700"
              fill={n.color}
            >
              {n.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  )
}
