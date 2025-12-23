import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import PricingPackages from '@/components/sections/services/PricingPackages'
import FAQ from '@/components/sections/services/FAQ'

export default function ServicesAllPackages() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <PricingPackages />
        <FAQ />
        <Footer />
      </main>
    </div>
  )
}

