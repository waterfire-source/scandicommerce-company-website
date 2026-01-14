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
  }>
  packages?: Array<{
    tier?: string
    description?: string
    price: string
    features?: string[]
    buttonText?: string
    buttonLink?: string
  }>
}

interface ServicesPackagedProps {
  data?: ServicesShowcaseData
}

const iconMap: Record<string, React.ReactNode> = {
  cart: <HiShoppingCart className="w-6 h-6" />,
  chart: <HiChartBar className="w-6 h-6" />,
  chat: <HiChatBubbleBottomCenterText className="w-6 h-6" />,
}

export default function ServicesPackaged({ data }: ServicesPackagedProps) {
  // Content variables from Sanity
  const titleText = data?.title?.text
  const titleHighlight = data?.title?.highlight
  const subtitle = data?.subtitle
  const categories = data?.categories
  const packages = data?.packages

  // Helper to render title with highlight
  const renderTitle = () => {
    if (!titleText) return null
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
        {(titleText || subtitle) && (
          <div className="text-center mb-12 lg:mb-16 relative">
            <div
              className="absolute top-0 right-1/4 w-32 h-32 rounded-full opacity-20 -z-10"
              style={{
                background: 'radial-gradient(circle, rgba(3, 193, 202, 0.3) 0%, transparent 70%)',
                filter: 'blur(20px)',
              }}
            />
            {titleText && (
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">
                {renderTitle()}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg text-gray-600">
                {subtitle}
              </p>
            )}
          </div>
        )}

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
                    View services
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

        {packages && packages.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className="border-l border-r border-gray-200 px-6 lg:px-8 first:border-l-0 last:border-r-0"
              >
                {pkg.tier && (
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{pkg.tier}</h4>
                )}
                {pkg.description && (
                  <p className="text-sm text-gray-600 mb-4">{pkg.description}</p>
                )}
                {pkg.price && (
                  <p className="text-2xl font-bold text-teal mb-6">{pkg.price}</p>
                )}
                {pkg.features && pkg.features.length > 0 && (
                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="text-gray-600 text-sm">
                        • {feature}
                      </li>
                    ))}
                  </ul>
                )}
                {pkg.buttonLink && (
                  <Link
                    href={pkg.buttonLink}
                    className="inline-block bg-teal text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-teal-dark transition-colors text-center w-full"
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
