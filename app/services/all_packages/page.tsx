import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import Hero from '@/components/sections/services/all_packages/Hero'
import PricingPackages from '@/components/sections/services/all_packages/PricingPackages'
import FAQ from '@/components/sections/services/all_packages/FAQ'

export default function ServicesAllPackages() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <PricingPackages />
        <FAQ />
        <Footer />
      </main>
    </div>
  )
}
