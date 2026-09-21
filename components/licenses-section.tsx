import { KeyRound, Check } from "lucide-react"
import { SectionHeading } from "./section-heading"

const licenses = [
  {
    name: "cPanel / WHM License",
    description: "Official cPanel & WHM licenses for your own servers and VPS.",
    features: ["Instant activation", "Admin & unlimited tiers", "IP-based licensing"],
  },
  {
    name: "LiteSpeed License",
    description: "High-performance LiteSpeed web server licensing with caching.",
    features: ["1GB – Unlimited workers", "LSCache included", "Monthly or annual"],
  },
  {
    name: "WHMCS License",
    description: "Automate billing, provisioning and client management.",
    features: ["Full branded ownership", "Recurring billing", "Free with resellers"],
  },
]

export function LicensesSection() {
  return (
    <section id="licenses" className="px-4 py-24 sm:px-6 lg:px-8">
      <SectionHeading
        title="Server Licenses"
        subtitle="Get the software licenses that power your infrastructure. Instant activation, transparent pricing, and responsible provisioning for legitimate businesses."
      />
      <div className="mx-auto mt-14 grid max-w-6xl gap-6 md:grid-cols-3">
        {licenses.map((l) => (
          <div key={l.name} className="hx-card flex flex-col p-7">
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-[var(--hx-purple)]/30 to-[var(--hx-magenta)]/20">
              <KeyRound className="h-6 w-6 text-[var(--hx-magenta)]" />
            </span>
            <h3 className="mt-5 text-xl font-bold text-white">{l.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/55">
              {l.description}
            </p>
            <ul className="mt-5 space-y-2.5">
              {l.features.map((f) => (
                <li key={f} className="flex items-center gap-2.5">
                  <Check className="h-4 w-4 text-[var(--hx-cyan)]" />
                  <span className="text-sm text-white/80">{f}</span>
                </li>
              ))}
            </ul>
            <a
              href={`#license-${l.name.replace(/\W+/g, "-").toLowerCase()}`}
              className="hx-btn-ghost mt-7 rounded-lg px-5 py-2.5 text-center text-sm font-semibold"
            >
              View Pricing →
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
