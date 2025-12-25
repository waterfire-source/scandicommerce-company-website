import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/merch/Hero'
import ProductGrid from '@/components/sections/merch/ProductGrid'
import QualityShowcase from '@/components/sections/merch/QualityShowcase'
import Newsletter from '@/components/sections/merch/Newsletter'
import { getShopifyProducts } from '@/lib/shopify'
import { Product } from '@/components/sections/merch/ProductCard'

export const metadata = {
  title: 'Merch | ScandiCommerce',
  description: 'Wear the brand behind high-performance Shopify builds. Premium quality, minimal design, maximum comfort.',
}

export default async function Merch() {
  let shopifyProducts: Product[] = []

  try {
    const products = await getShopifyProducts()

    shopifyProducts = products
      .map((p) => ({
        id: p.id,
        name: p.title,
        description: p.description || '',
        price: p.price,
        currency: p.currencyCode,
        image: p.image,
        collections: p.collections || [],
        slug: p.handle,
        availableForSale: p.availableForSale,
        tags: p.tags || [],
      }))
      .filter(p => p.collections.length > 0)
  } catch (error) {
    console.error('Error fetching Shopify products:', error)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ProductGrid initialProducts={shopifyProducts} />
        <QualityShowcase products={shopifyProducts} />
        <Newsletter />
        <Footer />
      </main>
    </div>
  )
}