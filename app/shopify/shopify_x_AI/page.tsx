import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/shopify/shopify_x_AI/Hero'
import EnhancingWithAI from '@/components/sections/shopify/shopify_x_AI/EnhancingWithAI'
import HowWeLeverageAI from '@/components/sections/shopify/shopify_x_AI/HowWeLeverageAI'
import AIToolsToolkit from '@/components/sections/shopify/shopify_x_AI/AIToolsToolkit'
import HowWeApplyAI from '@/components/sections/shopify/shopify_x_AI/HowWeApplyAI'
import AIEnhancedProcess from '@/components/sections/shopify/shopify_x_AI/AIEnhancedProcess'
import FAQ from '@/components/sections/shopify/shopify_x_AI/FAQ'
import CTA from '@/components/sections/shopify/shopify_x_AI/CTA'

export default function ShopifyXAIPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <EnhancingWithAI />
        <HowWeLeverageAI />
        <AIToolsToolkit />
        <HowWeApplyAI />
        <AIEnhancedProcess />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

