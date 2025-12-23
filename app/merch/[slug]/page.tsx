import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ProductHero from '@/components/sections/merch/ProductHero'
import ProductFeatures from '@/components/sections/merch/ProductFeatures'
import ProductDetails from '@/components/sections/merch/ProductDetails'
import SizeGuide from '@/components/sections/merch/SizeGuide'
import RelatedProducts from '@/components/sections/merch/RelatedProducts'

const products: Record<string, {
  name: string
  subtitle: string
  price: number
  currency: string
  description: string
  images: string[]
  rating: number
  reviewCount: number
  isNewArrival: boolean
}> = {
  'classic-crewneck': {
    name: 'Classic Unisex Crewneck Sweatshirt',
    subtitle: 'Gildan® 18000',
    price: 599,
    currency: 'NOK',
    description: 'Premium unisex crewneck sweatshirt crafted from a soft cotton-polyester blend. Features subtle ScandiCommerce branding and a relaxed fit perfect for everyday wear. Designed in Norway with attention to quality and comfort.',
    images: [
      '/images/merch/crewneck.svg',
      '/images/merch/crewneck.svg',
      '/images/merch/tshirt.svg',
      '/images/merch/crewneck.svg',
    ],
    rating: 5,
    reviewCount: 47,
    isNewArrival: true,
  },
  'classic-hoodie': {
    name: 'Classic Unisex Hoodie',
    subtitle: 'Gildan® 18500',
    price: 599,
    currency: 'NOK',
    description: 'Premium unisex hoodie crafted from a soft cotton-polyester blend. Features subtle ScandiCommerce branding and a relaxed fit perfect for everyday wear. Designed in Norway with attention to quality and comfort.',
    images: [
      '/images/merch/hoodie-white.svg',
      '/images/merch/hoodie-dark.svg',
      '/images/merch/hoodie-white.svg',
      '/images/merch/hoodie-dark.svg',
    ],
    rating: 5,
    reviewCount: 32,
    isNewArrival: false,
  },
  'dark-hoodie': {
    name: 'Dark Unisex Hoodie',
    subtitle: 'Gildan® 18500',
    price: 599,
    currency: 'NOK',
    description: 'Premium dark unisex hoodie crafted from a soft cotton-polyester blend. Features subtle ScandiCommerce branding and a relaxed fit perfect for everyday wear. Designed in Norway with attention to quality and comfort.',
    images: [
      '/images/merch/hoodie-dark.svg',
      '/images/merch/hoodie-white.svg',
      '/images/merch/hoodie-dark.svg',
      '/images/merch/hoodie-white.svg',
    ],
    rating: 5,
    reviewCount: 28,
    isNewArrival: false,
  },
  'classic-tshirt': {
    name: 'Classic Unisex T-Shirt',
    subtitle: 'Gildan® 5000',
    price: 399,
    currency: 'NOK',
    description: 'Premium unisex t-shirt crafted from 100% cotton. Features subtle ScandiCommerce branding and a classic fit perfect for everyday wear. Designed in Norway with attention to quality and comfort.',
    images: [
      '/images/merch/tshirt.svg',
      '/images/merch/tshirt.svg',
      '/images/merch/tshirt.svg',
      '/images/merch/tshirt.svg',
    ],
    rating: 5,
    reviewCount: 63,
    isNewArrival: false,
  },
  'classic-mug': {
    name: 'Classic Ceramic Mug',
    subtitle: '11oz Ceramic',
    price: 199,
    currency: 'NOK',
    description: 'Premium ceramic mug featuring the ScandiCommerce logo. Perfect for your morning coffee or tea. Dishwasher and microwave safe.',
    images: [
      '/images/merch/mug.svg',
      '/images/merch/mug.svg',
      '/images/merch/mug.svg',
      '/images/merch/mug.svg',
    ],
    rating: 5,
    reviewCount: 89,
    isNewArrival: false,
  },
  'travel-tumbler': {
    name: 'Travel Stainless Tumbler',
    subtitle: '20oz Stainless Steel',
    price: 299,
    currency: 'NOK',
    description: 'Premium stainless steel tumbler with double-wall insulation. Keeps drinks hot for 6 hours or cold for 12 hours. Features the ScandiCommerce logo.',
    images: [
      '/images/merch/tumbler.svg',
      '/images/merch/tumbler.svg',
      '/images/merch/tumbler.svg',
      '/images/merch/tumbler.svg',
    ],
    rating: 5,
    reviewCount: 45,
    isNewArrival: true,
  },
  'phone-case': {
    name: 'Premium Phone Case',
    subtitle: 'iPhone & Android',
    price: 249,
    currency: 'NOK',
    description: 'Durable protective phone case with the ScandiCommerce logo. Shock-absorbing design with raised edges to protect screen and camera.',
    images: [
      '/images/merch/phone-case.svg',
      '/images/merch/phone-case.svg',
      '/images/merch/phone-case.svg',
      '/images/merch/phone-case.svg',
    ],
    rating: 4,
    reviewCount: 34,
    isNewArrival: false,
  },
  'water-bottle': {
    name: 'Insulated Water Bottle',
    subtitle: '32oz Stainless Steel',
    price: 349,
    currency: 'NOK',
    description: 'Premium insulated water bottle with triple-wall vacuum insulation. Keeps drinks cold for 24 hours. Features the ScandiCommerce logo.',
    images: [
      '/images/merch/bottle.svg',
      '/images/merch/bottle.svg',
      '/images/merch/bottle.svg',
      '/images/merch/bottle.svg',
    ],
    rating: 5,
    reviewCount: 52,
    isNewArrival: false,
  },
  'baby-onesie': {
    name: 'Baby Unisex Onesie',
    subtitle: 'Rabbit Skins® 4400',
    price: 299,
    currency: 'NOK',
    description: 'Premium baby onesie crafted from soft cotton. Features subtle ScandiCommerce branding and snap closures for easy changes.',
    images: [
      '/images/merch/onesie.svg',
      '/images/merch/onesie.svg',
      '/images/merch/onesie.svg',
      '/images/merch/onesie.svg',
    ],
    rating: 5,
    reviewCount: 21,
    isNewArrival: true,
  },
  'kids-tshirt': {
    name: 'Kids Unisex T-Shirt',
    subtitle: 'Gildan® 5000B',
    price: 299,
    currency: 'NOK',
    description: 'Premium kids t-shirt crafted from 100% cotton. Features subtle ScandiCommerce branding and a comfortable fit for active kids.',
    images: [
      '/images/merch/kids-tshirt.svg',
      '/images/merch/kids-tshirt.svg',
      '/images/merch/kids-tshirt.svg',
      '/images/merch/kids-tshirt.svg',
    ],
    rating: 5,
    reviewCount: 18,
    isNewArrival: false,
  },
  'long-sleeve-tee': {
    name: 'Long Sleeve Unisex Tee',
    subtitle: 'Gildan® 2400',
    price: 449,
    currency: 'NOK',
    description: 'Premium long sleeve t-shirt crafted from 100% cotton. Features subtle ScandiCommerce branding and a classic fit perfect for cooler weather.',
    images: [
      '/images/merch/longsleeve.svg',
      '/images/merch/longsleeve.svg',
      '/images/merch/longsleeve.svg',
      '/images/merch/longsleeve.svg',
    ],
    rating: 5,
    reviewCount: 37,
    isNewArrival: false,
  },
  'polo-shirt': {
    name: 'Classic Unisex Polo Shirt',
    subtitle: 'Gildan® 8800',
    price: 499,
    currency: 'NOK',
    description: 'Premium polo shirt crafted from a cotton-polyester blend. Features subtle ScandiCommerce branding and a professional fit.',
    images: [
      '/images/merch/polo.svg',
      '/images/merch/polo.svg',
      '/images/merch/polo.svg',
      '/images/merch/polo.svg',
    ],
    rating: 5,
    reviewCount: 29,
    isNewArrival: false,
  },
  'full-zip-hoodie': {
    name: 'Full-Zip Unisex Hoodie',
    subtitle: 'Gildan® 18600',
    price: 299,
    currency: 'NOK',
    description: 'Premium full-zip hoodie with a relaxed fit. Features subtle ScandiCommerce branding and front pockets.',
    images: [
      '/images/merch/hoodie-white.svg',
      '/images/merch/hoodie-dark.svg',
      '/images/merch/hoodie-white.svg',
      '/images/merch/hoodie-dark.svg',
    ],
    rating: 5,
    reviewCount: 41,
    isNewArrival: false,
  },
  'full-zip-hoodie-grey': {
    name: 'Full-Zip Grey Hoodie',
    subtitle: 'Gildan® 18600',
    price: 799,
    currency: 'NOK',
    description: 'Premium full-zip grey hoodie with a relaxed fit. Features subtle ScandiCommerce branding and front pockets.',
    images: [
      '/images/merch/hoodie-dark.svg',
      '/images/merch/hoodie-white.svg',
      '/images/merch/hoodie-dark.svg',
      '/images/merch/hoodie-white.svg',
    ],
    rating: 5,
    reviewCount: 23,
    isNewArrival: true,
  },
  'minimal-cap': {
    name: 'Minimal Baseball Cap',
    subtitle: 'Yupoong® 6245CM',
    price: 249,
    currency: 'NOK',
    description: 'Premium baseball cap with minimalist design. Features subtle ScandiCommerce branding and adjustable strap.',
    images: [
      '/images/merch/related/cap.svg',
      '/images/merch/related/cap.svg',
      '/images/merch/related/cap.svg',
      '/images/merch/related/cap.svg',
    ],
    rating: 5,
    reviewCount: 56,
    isNewArrival: false,
  },
  'canvas-tote': {
    name: 'Canvas Tote Bag',
    subtitle: 'Liberty Bags® 8502',
    price: 199,
    currency: 'NOK',
    description: 'Premium canvas tote bag with durable handles. Features subtle ScandiCommerce branding. Perfect for shopping or everyday use.',
    images: [
      '/images/merch/related/tote.svg',
      '/images/merch/related/tote.svg',
      '/images/merch/related/tote.svg',
      '/images/merch/related/tote.svg',
    ],
    rating: 5,
    reviewCount: 67,
    isNewArrival: false,
  },
}

// Default product for any slug
const defaultProduct = {
  name: 'Classic Unisex Crewneck Sweatshirt',
  subtitle: 'Gildan® 18000',
  price: 599,
  currency: 'NOK',
  description: 'Premium unisex crewneck sweatshirt crafted from a soft cotton-polyester blend. Features subtle ScandiCommerce branding and a relaxed fit perfect for everyday wear. Designed in Norway with attention to quality and comfort.',
  images: [
    '/images/merch/crewneck.svg',
    '/images/merch/crewneck.svg',
    '/images/merch/tshirt.svg',
    '/images/merch/crewneck.svg',
  ],
  rating: 5,
  reviewCount: 47,
  isNewArrival: true,
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = products[slug] || defaultProduct

  return (
    <>
      <Header />
      <main>
        <ProductHero product={product} />
        <ProductFeatures />
        <ProductDetails />
        <SizeGuide />
        <RelatedProducts />
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
  const product = products[slug] || defaultProduct

  return {
    title: `${product.name} | ScandiCommerce Merch`,
    description: product.description,
  }
}
