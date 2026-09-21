import { PricingCards, type Plan } from "./pricing-cards"

const plans: Plan[] = [
  {
    name: "Luma Basic",
    description: "Perfect for small websites and blogs",
    monthly: 60,
    cta: "Get Started →",
    features: [
      "🛂 1 cPanel account",
      "🔁 Unlimited domain changes",
      "🚀 Unlimited bandwidth",
      "⚙️ 24/7 Expert Support",
      "⚡️ Premium features Enabled",
    ],
  },
  {
    name: "Luma Pro",
    description: "Ideal for growing businesses",
    monthly: 80,
    popular: true,
    cta: "Get Started →",
    features: [
      "🛂 1 cPanel account",
      "🌐 Pre registered Domain included",
      "🔁 Unlimited domain changes",
      "🚀 Unlimited bandwidth",
      "⚙️ 24/7 Expert Support",
      "⚡️ Premium features Enabled",
    ],
  },
  {
    name: "Luma Max (Bundle)",
    description: "Maximum performance and resources",
    monthly: 300,
    cta: "Get Started →",
    features: [
      "📬 Inbox delivery redirect included",
      "🔗 Link-Gate Api",
      "📧 H-Mailer included",
      "⚙️ 24/7 Priority Support",
      "✔️ Everything in Luma Pro",
    ],
  },
]

export function HostingSection() {
  return (
    <section id="hosting" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          <span className="hx-gradient-text">Secure Shared Hosting packages</span>
        </h2>
        <p className="mt-5 leading-relaxed text-white/55">
          High-performance shared hosting packages ideal for single sites and
          small portfolios, with cPanel access, DDoS protection, and 24/7
          support on every plan.
        </p>
      </div>
      <div className="mx-auto mt-14 max-w-6xl">
        <PricingCards plans={plans} idPrefix="hosting" />
      </div>
    </section>
  )
}
