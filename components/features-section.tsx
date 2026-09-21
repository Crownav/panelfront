import { Shield, Zap, Clock } from "lucide-react"
import { SectionHeading } from "./section-heading"

const features = [
  {
    icon: Shield,
    title: "Security & Compliance Protection",
    body: "Resilient infrastructure designed to keep legitimate content online with layered security, abuse prevention, and responsible service controls.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    body: "SSD NVMe storage, powerful Intel Xeon processors, and optimized LiteSpeed servers deliver blazing-fast load times. Your visitors will experience instant page loads every time.",
  },
  {
    icon: Clock,
    title: "24/7 Expert Support",
    body: "Round-the-clock technical support from our experienced team. Whether it's a simple question or a critical issue, we're always here to help you succeed.",
  },
]

export function FeaturesSection() {
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <SectionHeading
        title="Why Choose Luma?"
        subtitle="Industry-leading features designed for uptime, performance, and protection. Our infrastructure is built for legitimate projects that need secure, reliable hosting 24/7."
      />
      <div className="mx-auto mt-14 grid max-w-6xl gap-6 md:grid-cols-3">
        {features.map((f) => (
          <div key={f.title} className="hx-card p-7">
            <f.icon className="h-9 w-9 text-[var(--hx-magenta)]" />
            <h3 className="mt-5 text-lg font-bold text-white">{f.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/55">
              {f.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
