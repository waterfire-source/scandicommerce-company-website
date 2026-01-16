'use client'

import React from 'react'
import Link from 'next/link'
import { HiShoppingCart, HiChartBar, HiChatBubbleBottomCenterText } from 'react-icons/hi2'

interface ServicesShowcaseData {
  title?: {
    text?: string
    highlight?: string
  }
  subtitle?: string
  categories?: Array<{
    title: string
    icon?: string
    description?: string
    price?: string
    link?: string
    linkText?: string
  }>
}

interface Package {
  title: string
  subtitle: string
  price: string
  priceType: string
  timeline: string
  rating: number
  ratingValue: string
  bestFor: string[]
  included: string[]
  description: string
  href: string
  buttonText?: string
}

interface PackagesData {
  packagesItems?: Package[]
}

interface ServicesPackagedProps {
  data?: ServicesShowcaseData
  packages?: PackagesData
}

const iconMap: Record<string, React.ReactNode> = {
  cart: <HiShoppingCart className="w-6 h-6" />,
  chart: <HiChartBar className="w-6 h-6" />,
  chat: <HiChatBubbleBottomCenterText className="w-6 h-6" />,
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-3 h-3 ${star <= Math.floor(rating) ? 'text-amber-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function ServicesPackaged({ data, packages: packagesData }: ServicesPackagedProps) {
  // Content variables from Sanity (section title/subtitle from Homepage)
  const titleText = data?.title?.text || 'Shopify services, packaged like products'
  const titleHighlight = data?.title?.highlight || 'packaged like products'
  const subtitle = data?.subtitle || 'Clear scope. Fixed price. Predictable delivery.'
  const categories = data?.categories
  
  // Use packages from All Packages page
  const displayPackages = packagesData?.packagesItems

  // Helper to render title with highlight
  const renderTitle = () => {
    if (!titleHighlight || !titleText.includes(titleHighlight)) {
      return titleText
    }
    const parts = titleText.split(titleHighlight)
    return (
      <>
        {parts[0]}
        <span className="text-teal">{titleHighlight}</span>
        {parts[1]}
      </>
    )
  }

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16 relative">
          <div
            className="absolute top-0 right-1/4 w-32 h-32 rounded-full opacity-20 -z-10"
            style={{
              background: 'radial-gradient(circle, rgba(3, 193, 202, 0.3) 0%, transparent 70%)',
              filter: 'blur(20px)',
            }}
          />
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">
            {renderTitle()}
          </h2>
          <p className="text-lg text-gray-600">
            {subtitle}
          </p>
        </div>

        {categories && categories.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 lg:mb-20">
            {categories.map((category, index) => (
              <div
                key={index}
                className="border-l border-r border-gray-200 px-6 lg:px-8 first:border-l-0 last:border-r-0"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                  <div className="text-teal">
                    {iconMap[category.icon || 'cart'] || iconMap.cart}
                  </div>
                </div>
                {category.description && (
                  <p className="text-gray-600 mb-4">{category.description}</p>
                )}
                {category.price && (
                  <p className="text-xl font-bold text-gray-900 mb-6">{category.price}</p>
                )}
                {category.link && (
                  <Link
                    href={category.link}
                    className="inline-flex items-center gap-2 text-teal font-semibold hover:text-teal-dark transition-colors"
                  >
                    {category.linkText || 'View services'}
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}

        {displayPackages && displayPackages.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayPackages.map((pkg, index) => (
              <div
                key={index}
                className="border-l border-r border-gray-200 px-6 lg:px-8 first:border-l-0 last:border-r-0 flex flex-col"
              >
                {/* Title & Subtitle */}
                <div className="mb-4">
                  {pkg.title && (
                    <h4 className="text-lg font-bold text-gray-900 mb-1">{pkg.title}</h4>
                  )}
                  {pkg.subtitle && (
                    <p className="text-sm text-gray-600">{pkg.subtitle}</p>
                  )}
                </div>

                {/* Price */}
                <div className="mb-4">
                  <div className="flex items-baseline gap-2">
                    {pkg.price && (
                      <span className="text-2xl font-bold text-teal">{pkg.price}</span>
                    )}
                    {pkg.priceType && (
                      <span className="text-xs text-gray-500">{pkg.priceType}</span>
                    )}
                  </div>
                  {pkg.timeline && (
                    <p className="text-xs text-gray-600 mt-1">Timeline: {pkg.timeline}</p>
                  )}
                </div>

                {/* Rating */}
                {pkg.rating && (
                  <div className="flex items-center gap-2 mb-4">
                    <StarRating rating={pkg.rating} />
                    {pkg.ratingValue && (
                      <span className="text-sm font-medium text-gray-700">{pkg.ratingValue}</span>
                    )}
                  </div>
                )}

                {/* Best For (limited to 3 items) */}
                {pkg.bestFor && pkg.bestFor.length > 0 && (
                  <ul className="space-y-2 mb-6 flex-grow">
                    {pkg.bestFor.slice(0, 3).map((item, idx) => (
                      <li key={idx} className="text-gray-600 text-sm">
                        • {item}
                      </li>
                    ))}
                  </ul>
                )}

                {/* View Details Button */}
                {pkg.href && (
                  <Link
                    href={pkg.href}
                    className="inline-block bg-teal text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-teal-dark transition-colors text-center w-full mt-auto"
                  >
                    {pkg.buttonText || 'View Details'}
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
