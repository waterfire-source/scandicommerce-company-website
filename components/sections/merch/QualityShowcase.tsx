'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Product } from '@/components/sections/merch/ProductCard'

interface QualityShowcaseProps {
  products?: Product[]
}

export default function QualityShowcase({ products = [] }: QualityShowcaseProps) {
  const featuredProducts = products
    .filter(product => {
      if (!product.availableForSale || !product.image) return false

      const tags = product.tags || []
      const isFeatured = tags.some(tag =>
        tag.toLowerCase() === 'featured' ||
        tag.toLowerCase() === 'quality-showcase' ||
        tag.toLowerCase() === 'quality'
      )

      return isFeatured
    })
    .slice(0, 4)

  const displayProducts = featuredProducts.length > 0
    ? featuredProducts
    : products
      .filter(product => product.availableForSale && product.image)
      .slice(0, 4)

  if (displayProducts.length === 0) {
    return null
  }

  return (
    <section className="bg-[#F8F8F8] py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-[#222222] mb-4">
            Quality You Can Feel
          </h2>
          <p className="text-base lg:text-lg text-[#666666] max-w-2xl mx-auto">
            Every piece is carefully selected for comfort, durability, and that perfect Scandinavian aesthetic.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {displayProducts.map((product, index) => (
            <Link
              key={product.id}
              href={`/merch/${product.slug}`}
              className="group relative bg-white rounded-lg overflow-hidden aspect-square block"
            >
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain p-6 transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                priority={index < 4}
                unoptimized={product.image.endsWith('.svg')}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 px-4">
                <div className="w-full text-center">
                  <span
                    className="text-white font-medium text-sm block line-clamp-2 leading-tight"
                    title={product.name}
                  >
                    {product.name}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

