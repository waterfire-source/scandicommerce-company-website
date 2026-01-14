'use client'

import Link from 'next/link'
import { Package } from '@/lib/packages'
import LiquidBlob from '@/components/ui/LiquidBlob'

interface PackageHeroProps {
  pkg: Package
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
            <p className="text-lg text-gray-600 mb-5">
              {pkg.subtitle}
            </p>

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

