export function GlobeArt() {
  return (
    <div className="relative h-80 w-80">
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.18),transparent_70%)]"
      />
      <svg
        viewBox="0 0 320 320"
        className="relative h-full w-full"
        role="img"
        aria-label="Global network illustration"
      >
        <defs>
          <linearGradient id="hx-globe" x1="0" y1="0" x2="320" y2="320">
            <stop offset="0" stopColor="#22d3ee" />
            <stop offset="1" stopColor="#a855f7" />
          </linearGradient>
        </defs>
        <g className="hx-spin-slow" style={{ transformOrigin: "160px 160px" }}>
          <circle
            cx="160"
            cy="160"
            r="110"
            fill="none"
            stroke="url(#hx-globe)"
            strokeWidth="1.3"
          />
          {[110, 80, 45].map((rx) => (
            <ellipse
              key={rx}
              cx="160"
              cy="160"
              rx={rx}
              ry="110"
              fill="none"
              stroke="url(#hx-globe)"
              strokeWidth="1"
              opacity="0.65"
            />
          ))}
          {[-40, 0, 40].map((off) => (
            <line
              key={off}
              x1="50"
              y1={160 + off}
              x2="270"
              y2={160 + off}
              stroke="url(#hx-globe)"
              strokeWidth="1"
              opacity="0.5"
            />
          ))}
        </g>
        {[
          [160, 50],
          [70, 120],
          [250, 120],
          [90, 210],
          [230, 215],
          [160, 270],
          [160, 160],
        ].map(([cx, cy], i) => (
          <rect
            key={i}
            x={cx - 5}
            y={cy - 5}
            width="10"
            height="10"
            rx="2"
            fill="#22d3ee"
            opacity="0.9"
          />
        ))}
      </svg>
    </div>
  )
}
