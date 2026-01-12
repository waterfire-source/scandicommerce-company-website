import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/shopify/shopify_platform/Hero'
import BleedingMoney from '@/components/sections/shopify/shopify_platform/BleedingMoney'
import ShopifyEmpires from '@/components/sections/shopify/shopify_platform/ShopifyEmpires'
import RevenueForm from '@/components/sections/shopify/shopify_platform/RevenueForm'
import SuccessStories from '@/components/sections/shopify/shopify_platform/SuccessStories'

export default function ShopifyPlatformPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <BleedingMoney />
        <ShopifyEmpires />
        <RevenueForm />
        <SuccessStories />
      </main>
      <Footer />
    </div>
  )
}

