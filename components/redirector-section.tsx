import { Link2, BarChart3, Sparkles } from "lucide-react"

const chips = ["Per-link analytics", "Bot or real visits", "Destination replacement"]

export function RedirectorSection() {
  return (
    <section
      id="redirector"
      className="border-t border-white/5 bg-[#0b0b12] px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <div className="order-2 grid gap-5 lg:order-1">
          <div className="hx-card p-6">
            <BarChart3 className="h-7 w-7 text-[var(--hx-cyan)]" />
            <h3 className="mt-4 text-lg font-bold text-white">Analytics</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/55">
              View time, IP, location, device, browser, OS, organization and
              visit quality.
            </p>
          </div>
          <div className="hx-card p-6">
            <Sparkles className="h-7 w-7 text-[var(--hx-magenta)]" />
            <h3 className="mt-4 text-lg font-bold text-white">
              Auto-wrapped links
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-white/55">
              Use a clean managed wrapper for shorter redirect URLs with
              tracking, regeneration and destination replacement support.
            </p>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <span className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/90">
            <Link2 className="h-4 w-4 text-[var(--hx-cyan)]" />
              Luma Redirector
          </span>
          <h2 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            <span className="hx-gradient-text">
              Smart Redirect Links With Clean Click Intelligence
            </span>
          </h2>
          <p className="mt-6 max-w-lg leading-relaxed text-white/55">
            Create one managed redirect link, replace the destination URL,
            regenerate the public link and monitor real visitors, bots, devices,
            countries and organizations from your dashboard.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            {chips.map((c) => (
              <span
                key={c}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/75"
              >
                {c}
              </span>
            ))}
          </div>
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#redirector-learn"
              className="hx-btn-ghost rounded-lg px-6 py-3 text-sm font-semibold"
            >
              Learn More
            </a>
            <a
              href="#redirector-order"
              className="hx-btn-primary rounded-lg px-6 py-3 text-sm font-semibold"
            >
              Order Now
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
