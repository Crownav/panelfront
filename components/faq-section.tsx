"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { SectionHeading } from "./section-heading"

const faqs = [
  {
    q: "What kind of hosting does Luma provide?",
    a: "We provide secure cPanel shared hosting, reseller hosting, and server software licenses built for legitimate businesses that need reliable uptime, performance, and responsible service management.",
  },
  {
    q: "How fast is account activation?",
    a: "Most hosting accounts and software licenses are activated instantly after payment confirmation. Complex configurations may take a short while as our team provisions your environment.",
  },
  {
    q: "Do you offer billing discounts?",
    a: "Yes. Choose 6-month billing to save 10%, or annual billing to save 30% on both standard hosting and reseller packages.",
  },
  {
    q: "Can I resell hosting under my own brand?",
    a: "Absolutely. Our reseller plans are fully white-label with private nameservers, WHM control, and a free WHMCS license so you can build your own hosting business.",
  },
  {
    q: "What security measures are included?",
    a: "Every plan includes DDoS protection, a Web Application Firewall, malware scanning, and intrusion detection, along with proactive monitoring and responsible abuse handling.",
  },
]

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="hx-card overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-semibold text-white">{q}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-[var(--hx-magenta)] transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <p className="px-6 pb-5 text-sm leading-relaxed text-white/60">{a}</p>
      )}
    </div>
  )
}

export function FaqSection() {
  return (
    <section id="faq" className="px-4 py-24 sm:px-6 lg:px-8">
      <SectionHeading title="Frequently Asked Questions" />
      <div className="mx-auto mt-12 max-w-3xl space-y-4">
        {faqs.map((f) => (
          <FaqItem key={f.q} {...f} />
        ))}
      </div>
    </section>
  )
}
