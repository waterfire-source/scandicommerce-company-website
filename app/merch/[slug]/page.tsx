import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ProductHero from '@/components/sections/merch/ProductHero'
import ProductFeatures from '@/components/sections/merch/ProductFeatures'
import ProductDetails from '@/components/sections/merch/ProductDetails'
import SizeGuide from '@/components/sections/merch/SizeGuide'
import RelatedProducts from '@/components/sections/merch/RelatedProducts'
import { getShopifyProductByHandle, getShopifyRelatedProducts } from '@/lib/shopify'
import { notFound } from 'next/navigation'

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const shopifyProduct = await getShopifyProductByHandle(slug)

  if (!shopifyProduct) {
    notFound()
  }

  const relatedProducts = await getShopifyRelatedProducts(shopifyProduct.id)

  const product = {
    name: shopifyProduct.title,
    subtitle: shopifyProduct.tags.find(tag => tag.includes('®')) || shopifyProduct.collections[0]?.title || '',
    price: Math.round(shopifyProduct.price),
    currency: shopifyProduct.currencyCode,
    description: shopifyProduct.description || '',
    images: shopifyProduct.images && shopifyProduct.images.length > 0
      ? shopifyProduct.images
      : [shopifyProduct.image].filter(Boolean),
    rating: shopifyProduct.rating || 0,
    reviewCount: shopifyProduct.reviewCount || 0,
    isNewArrival: shopifyProduct.tags.some(tag =>
      tag.toLowerCase().includes('new') || tag.toLowerCase().includes('arrival')
    ),
  }

  const formattedRelatedProducts = relatedProducts.map(relatedProduct => ({
    id: relatedProduct.id,
    name: relatedProduct.title,
    price: relatedProduct.price,
    currency: relatedProduct.currencyCode,
    image: relatedProduct.image,
    slug: relatedProduct.handle,
  }))

  return (
    <>
      <Header />
      <main>
        <ProductHero product={product} />
        <ProductFeatures />
        <ProductDetails />
        <SizeGuide />
        <RelatedProducts products={formattedRelatedProducts} />
      </main>
      <Footer />
    </>
  )
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const shopifyProduct = await getShopifyProductByHandle(slug)

  if (!shopifyProduct) {
    return {
      title: 'Product Not Found | ScandiCommerce Merch',
      description: 'The product you are looking for could not be found.',
    }
  }

  return {
    title: `${shopifyProduct.title} | ScandiCommerce Merch`,
    description: shopifyProduct.description || `${shopifyProduct.title} from ScandiCommerce`,
  }
}
