import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import Hero from '@/components/sections/partners/Hero'
import WhyOurPartnership from '@/components/sections/partners/WhyOurPartnership'
import PartnersGrid from '@/components/sections/partners/PartnersGrid'
import BecomeAPartner from '@/components/sections/partners/BecomeAPartner'

export default function Partners() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <WhyOurPartnership />
        <PartnersGrid />
        <BecomeAPartner />
        <Footer />
      </main>
    </div>
  )
}
