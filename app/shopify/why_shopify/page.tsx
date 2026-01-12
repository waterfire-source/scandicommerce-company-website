import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/shopify/why_shopify/Hero'
import WhatIsShopify from '@/components/sections/shopify/why_shopify/WhatIsShopify'
import ShopifyFacts from '@/components/sections/shopify/why_shopify/ShopifyFacts'
import WhyBusinessesChooseShopify from '@/components/sections/shopify/why_shopify/WhyBusinessesChooseShopify'
import WhyScandicommerceSpecializes from '@/components/sections/shopify/why_shopify/WhyScandicommerceSpecializes'
import ShopifyAI from '@/components/sections/shopify/why_shopify/ShopifyAI'
import CTA from '@/components/sections/shopify/why_shopify/CTA'

export default function WhyShopifyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <WhatIsShopify />
        <ShopifyFacts />
        <WhyBusinessesChooseShopify />
        <WhyScandicommerceSpecializes />
        <ShopifyAI />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

