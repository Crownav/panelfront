import { SectionHeading } from "./section-heading"
import { GlobeArt } from "./globe-art"
import { NetworkMap } from "./network-map"

const leftItems = [
  {
    title: "Global Network Infrastructure",
    body: "Our servers are strategically positioned across multiple continents to improve speed, redundancy, and reliability. Leverage our worldwide network to deliver content faster while maintaining strong operational controls.",
  },
  {
    title: "Resilient Architecture",
    body: "Every layer of our infrastructure is designed with resilience in mind. From redundant data centers to proactive monitoring, our platform supports stable service with responsible review of abuse reports and security incidents.",
  },
  {
    title: "99.99% Uptime Guarantee",
    body: "Enterprise SLA backed by redundant systems, automatic failover, and real-time monitoring. Our secure hosting helps your websites stay online during traffic spikes, technical issues, attacks, or infrastructure failures.",
  },
]

const rightItems = [
  {
    title: "Military-Grade Security",
    body: "Advanced DDoS protection, Web Application Firewall (WAF), malware scanning, and intrusion detection systems protect your assets 24/7. Our multi-layered security approach ensures that both your data and your reputation remain secure.",
  },
  {
    title: "High-Performance Storage",
    body: "SSD NVMe drives with RAID-10 configuration deliver exceptional I/O performance. Combined with LiteSpeed web servers and enterprise-grade caching, your websites load in milliseconds, providing an outstanding user experience.",
  },
  {
    title: "Full Root Access & Customization",
    body: "Complete control over your hosting environment with WHM/cPanel access, custom software installation, and the ability to configure every aspect of your server. Perfect for agencies, developers, and businesses with specific technical requirements.",
  },
]

export function InfrastructureSection() {
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <SectionHeading
        title="Enterprise-Grade Infrastructure"
        subtitle="Built on cutting-edge technology and designed for businesses that demand reliability, performance, and complete control over their hosting environment."
      />

      <div className="mx-auto mt-16 grid max-w-6xl items-center gap-10 lg:grid-cols-2">
        <div className="flex justify-center">
          <GlobeArt />
        </div>
        <div className="space-y-8">
          {leftItems.map((item) => (
            <div key={item.title}>
              <h3 className="text-2xl font-bold text-[var(--hx-cyan)]">
                {item.title}
              </h3>
              <p className="mt-3 leading-relaxed text-white/55">{item.body}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-16 grid max-w-6xl items-center gap-10 lg:grid-cols-2">
        <div className="order-2 space-y-8 lg:order-1">
          {rightItems.map((item) => (
            <div key={item.title}>
              <h3 className="text-2xl font-bold text-[var(--hx-cyan)]">
                {item.title}
              </h3>
              <p className="mt-3 leading-relaxed text-white/55">{item.body}</p>
            </div>
          ))}
        </div>
        <div className="order-1 lg:order-2">
          <NetworkMap />
        </div>
      </div>
    </section>
  )
}
