"use client"

import { useState } from "react"
import { Check, Star } from "lucide-react"

export type BillingCycle = "1Month" | "6Months" | "1Year"

export type Plan = {
  name: string
  description: string
  monthly: number
  features: string[]
  cta: string
  popular?: boolean
}

const cycleMeta: Record<
  BillingCycle,
  { label: string; months: number; discount: number; note: string }
> = {
  "1Month": { label: "1 Month", months: 1, discount: 0, note: "monthly billing" },
  "6Months": { label: "6 Months", months: 6, discount: 0.1, note: "billed every 6 months" },
  "1Year": { label: "1 Year", months: 12, discount: 0.3, note: "billed annually" },
}

function formatPrice(monthly: number, cycle: BillingCycle) {
  const { months, discount } = cycleMeta[cycle]
  const effective = monthly * (1 - discount)
  return {
    perMonth: effective.toFixed(2),
    total: (effective * months).toFixed(2),
  }
}

export function PricingCards({
  plans,
  idPrefix,
}: {
  plans: Plan[]
  idPrefix: string
}) {
  const [cycle, setCycle] = useState<BillingCycle>("1Month")

  return (
    <div>
      <div className="mb-10 flex flex-wrap items-center justify-center gap-4">
        <span className="inline-flex items-center gap-2 rounded-lg border border-[var(--hx-cyan)]/40 bg-[var(--hx-cyan)]/5 px-4 py-2 text-sm font-medium text-white shadow-[0_0_20px_-8px_var(--hx-cyan)]">
          💎 Save 10% on 6-month plans
        </span>
        <span className="inline-flex items-center gap-2 rounded-lg border border-[var(--hx-magenta)]/40 bg-[var(--hx-magenta)]/5 px-4 py-2 text-sm font-medium text-white shadow-[0_0_20px_-8px_var(--hx-magenta)]">
          🎁 Save 30% on annual plans
        </span>
      </div>

      <div className="mb-12 flex justify-center">
        <div className="inline-flex gap-1 rounded-xl border border-white/10 bg-[#0b0b12] p-1">
          {(Object.keys(cycleMeta) as BillingCycle[]).map((key) => (
            <button
              key={key}
              onClick={() => setCycle(key)}
              className={`rounded-lg px-4 py-1.5 text-sm font-medium transition-colors ${
                cycle === key
                  ? "hx-btn-primary"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {cycleMeta[key].label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {plans.map((plan) => {
          const price = formatPrice(plan.monthly, cycle)
          return (
            <div
              key={plan.name}
              className={`hx-card relative flex flex-col p-7 ${
                plan.popular
                  ? "border-[var(--hx-magenta)]/60 shadow-[0_0_40px_-12px_var(--hx-magenta)]"
                  : ""
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 rounded-full bg-[var(--hx-magenta)] px-3 py-1 text-xs font-semibold text-white">
                  <Star className="h-3 w-3 fill-white" /> Most Popular
                </span>
              )}
              <h3 className="text-2xl font-bold text-[var(--hx-cyan)]">
                {plan.name}
              </h3>
              <p className="mt-1 text-sm text-white/50">{plan.description}</p>
              <div className="mt-5">
                <span className="text-4xl font-extrabold text-white">
                  ${price.perMonth}
                </span>
                <span className="text-sm text-white/50">
                  /month ({cycleMeta[cycle].note})
                </span>
                {cycle !== "1Month" && (
                  <p className="mt-1 text-xs text-white/40">
                    ${price.total} total
                  </p>
                )}
              </div>
              <ul className="mt-6 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--hx-magenta)]" />
                    <span className="text-sm text-white/80">{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href={`#${idPrefix}-${plan.name.replace(/\s+/g, "-").toLowerCase()}`}
                className={`mt-8 rounded-lg px-5 py-3 text-center text-sm font-semibold ${
                  plan.popular ? "hx-btn-primary" : "hx-btn-ghost"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          )
        })}
      </div>
    </div>
  )
}
