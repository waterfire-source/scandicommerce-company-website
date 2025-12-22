'use client'

import Image from 'next/image'

const featuredProducts = [
  {
    id: 1,
    name: 'Baby Onesie',
    image: '/images/merch/onesie.svg',
  },
  {
    id: 2,
    name: 'Classic Crewneck',
    image: '/images/merch/crewneck.svg',
  },
  {
    id: 3,
    name: 'Classic T-Shirt',
    image: '/images/merch/tshirt.svg',
  },
  {
    id: 4,
    name: 'Classic Hoodie',
    image: '/images/merch/hoodie-white.svg',
  },
]

export default function QualityShowcase() {
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
          {featuredProducts.map((product, index) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-lg overflow-hidden aspect-square"
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                <span className="text-white font-medium text-sm">
                  {product.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

