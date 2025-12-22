import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/merch/Hero'
import ProductGrid from '@/components/sections/merch/ProductGrid'
import QualityShowcase from '@/components/sections/merch/QualityShowcase'
import Newsletter from '@/components/sections/merch/Newsletter'

export const metadata = {
  title: 'Merch | ScandiCommerce',
  description: 'Wear the brand behind high-performance Shopify builds. Premium quality, minimal design, maximum comfort.',
}

export default function Merch() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ProductGrid />
        <QualityShowcase />
        <Newsletter />
        <Footer />
      </main>
    </div>
  )
}