import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { InfrastructureSection } from "@/components/infrastructure-section"
import { CpanelSection } from "@/components/cpanel-section"
import { HostingSection } from "@/components/hosting-section"
import { ResellerSection } from "@/components/reseller-section"
import { MailerSection } from "@/components/mailer-section"
import { RedirectorSection } from "@/components/redirector-section"
import { LicensesSection } from "@/components/licenses-section"
import { FaqSection } from "@/components/faq-section"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <SiteHeader />
      <main>
        <HeroSection />
        <FeaturesSection />
        <InfrastructureSection />
        <CpanelSection />
        <HostingSection />
        <ResellerSection />
        <MailerSection />
        <RedirectorSection />
        <LicensesSection />
        <FaqSection />
      </main>
      <SiteFooter />
    </div>
  )
}
