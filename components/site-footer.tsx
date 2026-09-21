import { Logo } from "./logo"

const columns = [
  {
    title: "Products",
    links: ["Shared Hosting", "Reseller Hosting", "Server Licenses", "Luma Mailer", "Luma Redirector"],
  },
  {
    title: "Company",
    links: ["About", "Contact", "Live Support", "Blog", "Status"],
  },
  {
    title: "Legal",
    links: ["Terms of Service", "Privacy Policy", "Acceptable Use", "Refund Policy"],
  },
]

export function SiteFooter() {
  return (
    <>
      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="hx-glow-magenta mx-auto max-w-5xl rounded-3xl border border-white/10 bg-gradient-to-b from-[#12101c] to-[#0b0b12] p-10 text-center sm:p-14">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            <span className="hx-gradient-text">Ready to launch on secure hosting?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-white/55">
            Join thousands of businesses running on resilient infrastructure
            with 24/7 expert support and a 99.99% uptime guarantee.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="#hosting" className="hx-btn-primary rounded-xl px-7 py-3 text-sm font-semibold">
              View Hosting Plans
            </a>
            <a href="#signup" className="hx-btn-ghost rounded-xl px-7 py-3 text-sm font-semibold">
              Get Started Free
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/5 bg-[#08080d] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
              Enterprise-grade secure cPanel hosting, reseller solutions, and
              server licenses for legitimate businesses.
            </p>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-white">{col.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-white/50 transition-colors hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-12 max-w-6xl border-t border-white/5 pt-8 text-center text-sm text-white/40">
          © {new Date().getFullYear()} Luma. All rights reserved.
        </div>
      </footer>
    </>
  )
}
