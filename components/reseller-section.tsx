import {
  Palette,
  DollarSign,
  ShieldCheck,
  Zap,
  LifeBuoy,
  BarChart3,
  Check,
} from "lucide-react"
import { PricingCards, type Plan } from "./pricing-cards"

const benefits = [
  {
    icon: Palette,
    title: "White-Label Branding",
    body: "Completely rebrand our services as your own. Your logo, your domain, your brand identity. Clients never know we exist—they see only your business, building trust and loyalty in your company name.",
  },
  {
    icon: DollarSign,
    title: "Unlimited Profit Potential",
    body: "Set your own pricing, create custom packages, and keep 100% of the markup. No commissions, no revenue sharing—just pure profit. Scale from a few clients to thousands while maintaining complete pricing control.",
  },
  {
    icon: ShieldCheck,
    title: "Full WHM Control",
    body: "Complete WHM/cPanel access to create, manage, suspend, and delete client accounts. Configure packages, set resource limits, and handle everything from a powerful centralized dashboard designed for resellers.",
  },
  {
    icon: Zap,
    title: "Scalable Resources",
    body: "Start small and grow big. Upgrade your reseller plan as your client base expands. No downtime, no migration hassles—just seamless scaling that grows with your business ambitions and revenue goals.",
  },
  {
    icon: LifeBuoy,
    title: "Dedicated Support Team",
    body: "Priority reseller support with dedicated account managers. Get help with technical issues, billing questions, and client management. We're here to ensure your reseller business runs smoothly 24/7/365.",
  },
  {
    icon: BarChart3,
    title: "Automated Billing Integration",
    body: "Seamlessly integrate with WHMCS, Blesta, or your preferred billing system. Automate account creation, suspension, termination, and invoicing. Focus on growing your business while automation handles the rest.",
  },
]

const perfectFor = [
  "Private nameservers with your brand",
  "SSL certificates for all client websites",
  "Softaculous auto-installer (400+ apps)",
  "Advanced migration tools",
  "Automated daily backups",
  "Free WHMCS license included",
]

const stats = [
  { label: "Monthly Revenue", value: "$12,450" },
  { label: "Active Clients", value: "287" },
  { label: "Avg. Profit per Client", value: "$43.38" },
  { label: "Growth Rate", value: "+23%" },
]

const resellerPlans: Plan[] = [
  {
    name: "Reseller 25 cPanel",
    description: "Entry-level reseller hosting with 25 cPanel accounts",
    monthly: 400,
    cta: "Get Started as Reseller →",
    features: [
      "25 cPanel Accounts",
      "WHM Access",
      "Unlimited Bandwidth",
      "SSD Storage",
      "Free SSL Certificates",
      "Same 1, 6 and 12 month billing cycles with standard discounts",
    ],
  },
  {
    name: "Reseller 50 cPanel",
    description: "Professional reseller hosting with 50 cPanel accounts",
    monthly: 700,
    popular: true,
    cta: "Get Started as Reseller →",
    features: [
      "50 cPanel Accounts",
      "WHM Access",
      "Unlimited Bandwidth",
      "SSD Storage",
      "Free SSL Certificates",
      "Same 1, 6 and 12 month billing cycles with standard discounts",
    ],
  },
  {
    name: "Reseller 100 cPanel",
    description: "High-capacity reseller hosting with 100 cPanel accounts",
    monthly: 1200,
    cta: "Get Started as Reseller →",
    features: [
      "100 cPanel Accounts",
      "WHM Access",
      "Unlimited Bandwidth",
      "SSD Storage",
      "Free SSL Certificates",
      "Same 1, 6 and 12 month billing cycles with standard discounts",
    ],
  },
]

export function ResellerSection() {
  return (
    <section className="border-y border-white/5 bg-[#0b0b12] px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          <span className="hx-gradient-text">
            Reseller Hosting: Build Your Own Hosting Empire
          </span>
        </h2>
        <p className="mt-5 leading-relaxed text-white/55">
          Transform into a hosting provider with our powerful reseller packages.
          White-label our secure infrastructure, set your own prices, and build
          a compliant hosting business without the overhead of managing servers.
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
        {benefits.map((b) => (
          <div key={b.title} className="hx-card p-7">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-[var(--hx-magenta)]/12">
              <b.icon className="h-5 w-5 text-[var(--hx-magenta)]" />
            </span>
            <h3 className="mt-5 text-lg font-bold text-white">{b.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/55">{b.body}</p>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-16 grid max-w-6xl items-center gap-10 rounded-2xl border border-white/10 bg-[#0a0a12] p-8 lg:grid-cols-2">
        <div>
          <h3 className="text-2xl font-bold text-white">
            Perfect for Agencies, Developers &amp; Entrepreneurs
          </h3>
          <p className="mt-4 leading-relaxed text-white/55">
            Whether you&apos;re a web design agency offering hosting to clients,
            a freelance developer monetizing your expertise, or an entrepreneur
            building a hosting company from scratch, our reseller plans provide
            everything you need to succeed.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {perfectFor.map((p) => (
              <li key={p} className="flex items-start gap-2.5">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--hx-cyan)]" />
                <span className="text-sm text-white/80">{p}</span>
              </li>
            ))}
          </ul>
          <a
            href="#reseller-plans"
            className="hx-btn-primary mt-8 inline-block rounded-lg px-6 py-3 text-sm font-semibold"
          >
            View Reseller Plans →
          </a>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-xl border border-white/10 bg-[#0d0d16] p-5 text-center"
            >
              <div className="text-2xl font-extrabold hx-gradient-text">
                {s.value}
              </div>
              <div className="mt-1 text-xs text-white/50">{s.label}</div>
            </div>
          ))}
          <p className="col-span-2 text-center text-xs italic text-white/35">
            * Example revenue from a typical reseller hosting business
          </p>
        </div>
      </div>

      <div id="reseller-plans" className="mx-auto mt-20 max-w-3xl text-center">
        <h3 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          <span className="hx-gradient-text">
            Antired Reseller Hosting Packages
          </span>
        </h3>
        <p className="mt-5 leading-relaxed text-white/55">
          Built for agencies and power users who manage multiple websites. These
          reseller plans use the same 1, 6 and 12 month billing cycles and
          6-month/annual discounts as our standard hosting packages.
        </p>
      </div>
      <div className="mx-auto mt-14 max-w-6xl">
        <PricingCards plans={resellerPlans} idPrefix="reseller" />
      </div>
    </section>
  )
}
