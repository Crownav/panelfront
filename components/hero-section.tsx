import { Zap } from "lucide-react"
import { ServerCluster } from "./server-cluster"

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-4 pb-24 pt-20 sm:px-6 lg:px-8"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[600px] bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(168,85,247,0.18),transparent)]"
      />
      <div className="mx-auto max-w-3xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-white/90">
          <Zap className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          Secure Hosting
        </span>
        <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
          <span className="hx-gradient-text">Secure cPanel Hosting</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
          Enterprise-grade hosting solutions built for resilience, performance,
          and legitimate business use. Host your content with confidence on
          secure infrastructure designed for uptime, stability, and responsible
          service management.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#hosting"
            className="hx-btn-primary rounded-xl px-7 py-3 text-base font-semibold"
          >
            View Hosting Plans
          </a>
          <a
            href="#signup"
            className="hx-btn-ghost rounded-xl px-7 py-3 text-base font-semibold"
          >
            Get Started Free
          </a>
        </div>
      </div>

      <div className="mx-auto mt-20 max-w-4xl">
        <ServerCluster />
      </div>
    </section>
  )
}
