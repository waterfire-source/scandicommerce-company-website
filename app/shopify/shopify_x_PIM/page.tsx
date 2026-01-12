import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/shopify/shopify_x_PIM/Hero'
import WhatIsPIM from '@/components/sections/shopify/shopify_x_PIM/WhatIsPIM'
import IntegratingPIM from '@/components/sections/shopify/shopify_x_PIM/IntegratingPIM'
import WhichBusinesses from '@/components/sections/shopify/shopify_x_PIM/WhichBusinesses'
import TimeSavings from '@/components/sections/shopify/shopify_x_PIM/TimeSavings'
import WhyGoodInvestment from '@/components/sections/shopify/shopify_x_PIM/WhyGoodInvestment'
import CombinedSection from '@/components/sections/shopify/shopify_x_PIM/CombinedSection'
import CTA from '@/components/sections/shopify/shopify_x_PIM/CTA'

export default function ShopifyXPIMPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <WhatIsPIM />
        <IntegratingPIM />
        <WhichBusinesses />
        <TimeSavings />
        <WhyGoodInvestment />
        <CombinedSection />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

