'use client'

import Link from 'next/link'
import { Package } from '@/lib/packages'
import LiquidBlob from '@/components/ui/LiquidBlob'

interface PackageHeroProps {
  pkg: Package
}

// Star rating component
function StarRating({ rating, maxStars = 5 }: { rating: number; maxStars?: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(maxStars)].map((_, index) => {
        const fillPercentage = Math.min(Math.max(rating - index, 0), 1) * 100
        return (
          <div key={index} className="relative w-5 h-5">
            {/* Empty star (gray background) */}
            <svg
              className="absolute inset-0 w-5 h-5 text-gray-300"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            {/* Filled star (clipped based on rating) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${fillPercentage}%` }}
            >
              <svg
                className="w-5 h-5 text-[#F59E0B]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default function PackageHero({ pkg }: PackageHeroProps) {
  return (
    <section className="relative bg-[#F8F8F8] py-16 lg:py-20 overflow-hidden min-h-[600px]">
      {/* LiquidBlob - same style as homepage hero */}
      <LiquidBlob
        page="homepage"
        rotation={10}
        className="top-[-5%] right-[-10%] w-[75%] h-[110%] hidden lg:block"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-16">
          {/* Left Section - Package Details */}
          <div className="flex flex-col w-full lg:w-1/2 py-4">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
              {pkg.title}
            </h1>
            <p className="text-lg text-gray-600 mb-4">
              {pkg.subtitle}
            </p>

            {/* Rating and Reviews */}
            {(pkg.rating > 0 || pkg.reviewCount > 0) && (
              <div className="flex items-center gap-2 mb-5">
                <StarRating rating={pkg.rating || 0} />
                <span className="text-gray-600 text-sm">
                  {pkg.ratingValue || pkg.rating?.toFixed(1) || '0'} ({pkg.reviewCount || 0} reviews)
                </span>
              </div>
            )}

            {/* Description */}
            <p className="text-base text-gray-600 mb-8 leading-relaxed max-w-lg">
              {pkg.description}
            </p>

            {/* Price with inline payment type */}
            <div className="flex items-baseline gap-3 mb-1">
              <span className="text-4xl font-bold text-gray-900 font-mono tracking-tight">
                {pkg.price}
              </span>
              <span className="text-base text-gray-500 font-sans">{pkg.priceType}</span>
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
          <div className="relative w-full lg:w-1/2 flex justify-center z-10">
            {/* Package Highlights Card */}
            <div className="relative p-8 lg:p-10 text-white max-w-md">
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
                +{pkg.moreDeliverablesCount !== undefined ? pkg.moreDeliverablesCount : (pkg.included.length - pkg.highlights.length)} more deliverables included
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

