'use client'

/* eslint-disable @next/next/no-img-element */
import React from 'react'

interface Brand {
  name: string
  logo: string
  alt: string
}

const brands: Brand[] = [
  { name: 'Telenor Group', logo: '/images/brands/telenor.png', alt: 'Telenor Group logo' },
  { name: 'Yara', logo: '/images/brands/yara.png', alt: 'Yara logo' },
  { name: 'Gjensidige', logo: '/images/brands/gjensidige.png', alt: 'Gjensidige logo' },
  { name: 'AkerBP', logo: '/images/brands/akerbp.png', alt: 'AkerBP logo' },
  { name: 'DNB', logo: '/images/brands/dnb.png', alt: 'DNB logo' },
  { name: 'SpareBank 1', logo: '/images/brands/sparebank1.png', alt: 'SpareBank 1 logo' },
  { name: 'KLP', logo: '/images/brands/klp.png', alt: 'KLP logo' },
  { name: 'Lerøy', logo: '/images/brands/leroy.png', alt: 'Lerøy logo' },
]

export default function TrustedBy() {
  const duplicatedBrands = [...brands, ...brands]

  return (
    <section className="bg-teal py-12 lg:py-16 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-white">
            Trusted by 50+ Norwegian brands
          </h2>
        </div>
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-scroll">
            <div className="flex gap-6 lg:gap-8 flex-shrink-0">
              {duplicatedBrands.map((brand, index) => (
                <div
                  key={`first-${index}`}
                  className="relative flex items-center justify-center h-20 flex-shrink-0"
                >
                  <img
                    src={brand.logo}
                    alt={brand.alt}
                    className="object-contain h-full w-auto"
                  />
                </div>
              ))}
            </div>
            <div className="flex gap-6 lg:gap-8 flex-shrink-0" aria-hidden="true">
              {duplicatedBrands.map((brand, index) => (
                <div
                  key={`second-${index}`}
                  className="relative flex items-center justify-center h-20 flex-shrink-0"
                >
                  <img
                    src={brand.logo}
                    alt={brand.alt}
                    className="object-contain h-full w-auto"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

