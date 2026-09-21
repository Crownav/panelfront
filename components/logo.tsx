export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg
        width="34"
        height="34"
        viewBox="0 0 40 40"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <defs>
          <linearGradient id="hx-logo-grad" x1="0" y1="0" x2="40" y2="40">
            <stop offset="0" stopColor="#22d3ee" />
            <stop offset="0.5" stopColor="#a855f7" />
            <stop offset="1" stopColor="#ff2e97" />
          </linearGradient>
        </defs>
        <path
          d="M20 2 L35 10.5 V29.5 L20 38 L5 29.5 V10.5 Z"
          stroke="url(#hx-logo-grad)"
          strokeWidth="2"
          fill="rgba(168,85,247,0.08)"
        />
        <path
          d="M14 27 V13 M14 20 H26 M26 13 V27"
          stroke="url(#hx-logo-grad)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
      <span className="text-xl font-extrabold tracking-tight hx-gradient-pink">
        Luma
      </span>
    </span>
  )
}
