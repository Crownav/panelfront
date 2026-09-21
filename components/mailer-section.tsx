import { Mail, Play } from "lucide-react"

const chips = ["Server-side tracking", "Campaign scheduling", "Link Gate protection"]

export function MailerSection() {
  return (
    <section
      id="mailer"
      className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/2 -z-10 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.15),transparent_70%)]"
      />
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/90">
            <Mail className="h-4 w-4 text-[var(--hx-purple)]" />
              Luma Mailer
          </span>
          <h2 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            <span className="hx-gradient-text">
              Power, Speed &amp; Precision for Modern Email Campaigns
            </span>
          </h2>
          <p className="mt-6 max-w-lg leading-relaxed text-white/55">
            Server-side tracking, campaign scheduling, SMTP rotation, link
            protection and real analytics — all in one professional mailer
            platform.
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
              href="#mailer-learn"
              className="hx-btn-ghost rounded-lg px-6 py-3 text-sm font-semibold"
            >
              Learn More
            </a>
            <a
              href="#mailer-order"
              className="hx-btn-primary rounded-lg px-6 py-3 text-sm font-semibold"
            >
              Order Now
            </a>
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="relative grid h-64 w-64 place-items-center rounded-3xl bg-gradient-to-br from-[var(--hx-purple)]/40 to-[var(--hx-magenta)]/20 shadow-[0_0_60px_-10px_var(--hx-purple)]">
            <Mail className="h-24 w-24 text-white" strokeWidth={1.3} />
            <span className="absolute bottom-6 right-6 grid h-9 w-9 place-items-center rounded-full bg-black/40">
              <Play className="h-4 w-4 fill-white text-white" />
            </span>
          </div>
          {[
            "-top-4 left-6",
            "top-10 -right-2",
            "-bottom-4 left-16",
          ].map((pos, i) => (
            <span
              key={i}
              className={`hx-float absolute ${pos} grid h-12 w-12 place-items-center rounded-xl border border-[var(--hx-purple)]/50 bg-[#0d0d16]`}
              style={{ animationDelay: `${i * 1.2}s` }}
            >
              <Mail className="h-5 w-5 text-[var(--hx-purple)]" />
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
