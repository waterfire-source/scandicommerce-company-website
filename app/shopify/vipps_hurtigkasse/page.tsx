import HeaderWrapper from '@/components/layout/HeaderWrapper'
import FooterWrapper from '@/components/layout/FooterWrapper'
import Hero from '@/components/sections/shopify/vipps_hurtigkasse/Hero'
import Features from '@/components/sections/shopify/vipps_hurtigkasse/Features'
import HowToGetStarted from '@/components/sections/shopify/vipps_hurtigkasse/HowToGetStarted'
import Pricing from '@/components/sections/shopify/vipps_hurtigkasse/Pricing'
import OrderForm from '@/components/sections/shopify/vipps_hurtigkasse/OrderForm'
import Support from '@/components/sections/shopify/vipps_hurtigkasse/Support'

export const metadata = {
  title: 'Vipps Quick Checkout for Shopify | Scandicommerce',
  description: 'Give your customers an easier shopping experience with Vipps Quick Checkout. Full integration with Shopify, support for capture, refund, shipping and discount codes.',
}

export default function VippsHurtigkassePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderWrapper />
      <main className="flex-grow">
        <Hero />
        <Features />
        <HowToGetStarted />
        <Pricing />
        <OrderForm />
        <Support />
      </main>
      <FooterWrapper />
    </div>
  )
}
