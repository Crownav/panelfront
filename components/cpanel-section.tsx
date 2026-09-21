import { Check } from "lucide-react"

const points = [
  "Resilient hosting architecture",
  "Privacy-conscious account setup",
  "Geographically diverse data centres",
  "DDoS & cPanel protection",
]

function HexBadge() {
  return (
    <div className="relative h-72 w-64">
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(236,59,208,0.16),transparent_70%)]"
      />
      <svg viewBox="0 0 260 300" className="relative h-full w-full" aria-hidden="true">
        <defs>
          <linearGradient id="hx-hex" x1="0" y1="0" x2="260" y2="300">
            <stop offset="0" stopColor="#22d3ee" />
            <stop offset="0.5" stopColor="#a855f7" />
            <stop offset="1" stopColor="#ff2e97" />
          </linearGradient>
        </defs>
        <path
          d="M130 12 L236 74 V226 L130 288 L24 226 V74 Z"
          fill="rgba(168,85,247,0.05)"
          stroke="url(#hx-hex)"
          strokeWidth="3"
        />
        <circle
          cx="130"
          cy="150"
          r="52"
          fill="none"
          stroke="#22d3ee"
          strokeWidth="2"
          strokeDasharray="4 6"
          className="hx-spin-slow"
          style={{ transformOrigin: "130px 150px" }}
        />
        <text
          x="130"
          y="168"
          textAnchor="middle"
          fontSize="52"
          fontWeight="800"
          fill="#f59e0b"
        >
          cP
        </text>
      </svg>
    </div>
  )
}

export function CpanelSection() {
  return (
    <section className="border-y border-white/5 bg-[#0b0b12] px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <div>
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            <span className="hx-gradient-text">Secure cPanel Hosting</span>
          </h2>
          <p className="mt-6 max-w-lg leading-relaxed text-white/55">
            Our secure cPanel hosting combines the familiar power of cPanel with
            resilient infrastructure and responsible account controls. Enjoy
            straightforward setup, flexible payments, and full control over your
            websites and applications.
          </p>
          <ul className="mt-8 space-y-4">
            {points.map((p) => (
              <li key={p} className="flex items-center gap-3">
                <span className="grid h-6 w-6 place-items-center rounded-full bg-[var(--hx-magenta)]/15">
                  <Check className="h-4 w-4 text-[var(--hx-magenta)]" />
                </span>
                <span className="text-white/85">{p}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center">
          <HexBadge />
        </div>
      </div>
    </section>
  )
}
