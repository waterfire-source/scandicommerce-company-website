'use client'

import Link from 'next/link'
import { Package } from '@/lib/packages'
import LiquidBlob from '@/components/ui/LiquidBlob'

interface PackageHeroProps {
  pkg: Package
}

function StarRating({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 >= 0.5

  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => {
        if (star <= fullStars) {
          return (
            <svg
              key={star}
              className="w-5 h-5 text-amber-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          )
        } else if (star === fullStars + 1 && hasHalfStar) {
          return (
            <div key={star} className="relative w-5 h-5">
              <svg
                className="w-5 h-5 text-gray-300 absolute"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <div className="absolute inset-0 overflow-hidden" style={{ width: '50%' }}>
                <svg
                  className="w-5 h-5 text-amber-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>
          )
        } else {
          return (
            <svg
              key={star}
              className="w-5 h-5 text-gray-300"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          )
        }
      })}
    </div>
  )
}

export default function PackageHero({ pkg }: PackageHeroProps) {
  return (
    <section className="relative bg-[#F8F8F8] py-16 lg:py-20 overflow-hidden min-h-[600px]">
      {/* LiquidBlob - same style as homepage hero */}
      <LiquidBlob
        page="services"
        rotation={5}
        className="top-[-20%] right-[-30%] w-[100%] h-[140%] hidden lg:block"
        enableMouseFollow={true}
      />

      {/* Decorative light cyan ellipse in center area */}
      <div 
        className="absolute hidden lg:block pointer-events-none"
        style={{
          top: '20%',
          left: '38%',
          width: '220px',
          height: '280px',
          background: 'rgba(29, 239, 250, 0.2)',
          borderRadius: '50%',
          transform: 'rotate(-10deg)',
        }}
      />

      {/* Small decorative circle */}
      <div 
        className="absolute hidden lg:block pointer-events-none"
        style={{
          top: '8%',
          right: '35%',
          width: '60px',
          height: '60px',
          background: 'rgba(29, 239, 250, 0.15)',
          borderRadius: '50%',
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-16">
          {/* Left Section - Package Details */}
          <div className="flex flex-col w-full lg:w-1/2 py-4">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
              {pkg.title}
            </h1>
            <p className="text-lg text-gray-600 mb-5">
              {pkg.subtitle}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-5">
              <StarRating rating={pkg.rating} />
              <span className="text-base text-gray-500">
                {pkg.ratingValue} ({pkg.reviewCount} reviews)
              </span>
            </div>

            {/* Description */}
            <p className="text-base text-gray-600 mb-8 leading-relaxed max-w-lg">
              {pkg.description}
            </p>

            {/* Price with inline payment type */}
            <div className="flex items-baseline gap-3 mb-1">
              <span className="text-4xl font-bold text-gray-900">
                {pkg.price}
              </span>
              <span className="text-base text-gray-500">{pkg.priceType}</span>
            </div>

            {/* Timeline */}
            <p className="text-base text-gray-600 mb-6">
              Timeline: {pkg.timeline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-[#03C1CA] hover:bg-[#02a9b1] text-white font-semibold py-3 px-8 text-center transition-colors duration-200"
              >
                Book Discovery Call
              </Link>
              <Link
                href="#"
                className="border border-gray-300 hover:border-gray-400 text-gray-700 font-semibold py-3 px-8 text-center transition-colors duration-200 bg-white"
              >
                Download Scope
              </Link>
            </div>
          </div>

          {/* Right Section - Package Highlights Card */}
          <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-end z-10">
            {/* Package Highlights Card - positioned over the blob */}
            <div 
              className="relative bg-[#03C1CA] p-8 lg:p-10 text-white max-w-md"
              style={{
                borderRadius: '50% 50% 45% 55% / 55% 45% 55% 45%',
                minHeight: '380px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <h2 className="text-2xl lg:text-3xl font-bold mb-6">
                Package Highlights
              </h2>
              <ul className="space-y-3 mb-4">
                {pkg.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-white mt-0.5">•</span>
                    <span className="text-white text-base leading-relaxed">
                      {highlight}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-[#A8F0F5] text-base mt-4">
                +{pkg.included.length - pkg.highlights.length} more deliverables included
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

