import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/shopify/shopify_POS/Hero'
import BleedingMoney from '@/components/sections/shopify/shopify_POS/BleedingMoney'
import OmnichannelFeatures from '@/components/sections/shopify/shopify_POS/OmnichannelFeatures'
import RevenueForm from '@/components/sections/shopify/shopify_POS/RevenueForm'

export default function ShopifyPOSPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <BleedingMoney />
        <OmnichannelFeatures />
        <RevenueForm />
      </main>
      <Footer />
    </div>
  )
}

