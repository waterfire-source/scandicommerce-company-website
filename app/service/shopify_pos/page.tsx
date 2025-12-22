import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/service/shopify_pos/Hero'
import OmnichannelFeatures from '@/components/sections/service/shopify_pos/OmnichannelFeatures'
import PerfectFor from '@/components/sections/service/shopify_pos/PerfectFor'
import ReadyForOmnichannel from '@/components/sections/service/shopify_pos/ReadyForOmnichannel'

const ShopifyPOSPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <OmnichannelFeatures />
        <PerfectFor />
        <ReadyForOmnichannel />
        <Footer />
      </main>
    </div>
  )
}

export default ShopifyPOSPage
