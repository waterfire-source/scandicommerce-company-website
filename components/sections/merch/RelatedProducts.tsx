'use client'

import Image from 'next/image'
import Link from 'next/link'

interface RelatedProduct {
  id: number
  name: string
  price: number
  currency: string
  image: string
  slug: string
}

interface RelatedProductsProps {
  products?: RelatedProduct[]
  title?: string
}

const defaultProducts: RelatedProduct[] = [
  {
    id: 1,
    name: 'Full-Zip Hoodie',
    price: 299,
    currency: 'NOK',
    image: '/images/merch/related/hoodie-1.svg',
    slug: 'full-zip-hoodie',
  },
  {
    id: 2,
    name: 'Full-Zip Hoodie',
    price: 799,
    currency: 'NOK',
    image: '/images/merch/related/hoodie-2.svg',
    slug: 'full-zip-hoodie-grey',
  },
  {
    id: 3,
    name: 'Minimal Cap',
    price: 249,
    currency: 'NOK',
    image: '/images/merch/related/cap.svg',
    slug: 'minimal-cap',
  },
  {
    id: 4,
    name: 'Canvas Tote',
    price: 199,
    currency: 'NOK',
    image: '/images/merch/related/tote.svg',
    slug: 'canvas-tote',
  },
]

export default function RelatedProducts({
  products = defaultProducts,
  title = 'You Might Also Like',
}: RelatedProductsProps) {
  return (
    <section className="bg-white py-12 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-[#222222] text-center mb-10 lg:mb-12">
          {title}
        </h2>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map(product => (
            <Link
              key={product.id}
              href={`/merch/${product.slug}`}
              className="group relative aspect-[3/4] overflow-hidden rounded-lg"
            >
              {/* Background Image */}
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                unoptimized={product.image.endsWith('.svg')}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-lg font-medium text-white mb-2">
                  {product.name}
                </h3>
                <span className="inline-block px-3 py-1 bg-black/50 backdrop-blur-sm rounded text-sm text-white">
                  {product.price} {product.currency}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
