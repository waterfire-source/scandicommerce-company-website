import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import WhyShopifyWins from '@/components/sections/services/WhyShopifyWins'
import CommonScenarios from '@/components/sections/services/CommonScenarios'
import HowWeWork from '@/components/sections/services/HowWeWork'
import Testimonial from '@/components/sections/services/Testimonial'
import ReadyToBuild from '@/components/sections/services/ReadyToBuild'

export default function ServicesShopifyDevelopment() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <WhyShopifyWins />
        <CommonScenarios />
        <HowWeWork />
        <Testimonial />
        <ReadyToBuild />
        <Footer />
      </main>
    </div>
  )
}

