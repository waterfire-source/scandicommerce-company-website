import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import Hero from '@/components/sections/services/shopify_development/Hero'
import WhyShopifyWins from '@/components/sections/services/shopify_development/WhyShopifyWins'
import CommonScenarios from '@/components/sections/services/shopify_development/CommonScenarios'
import HowWeWork from '@/components/sections/services/shopify_development/HowWeWork'
import Testimonial from '@/components/sections/services/shopify_development/Testimonial'
import ReadyToBuild from '@/components/sections/services/shopify_development/ReadyToBuild'

export default function ServicesShopifyDevelopment() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
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
