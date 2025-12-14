'use client'

import React from 'react'
import Link from 'next/link'
import { HiShoppingCart, HiChartBar, HiChatBubbleBottomCenterText } from 'react-icons/hi2'

interface ServiceCategory {
  title: string
  icon: React.ReactNode
  description: string
  price: string
}

interface FoundationPackage {
  subtitle: string
  price: string
  features: string[]
}

const serviceCategories: ServiceCategory[] = [
  {
    title: 'Build',
    icon: <HiShoppingCart className="w-6 h-6" />,
    description: 'New stores, migrations, custom development',
    price: 'From 49.000 kr',
  },
  {
    title: 'Optimize',
    icon: <HiChartBar className="w-6 h-6" />,
    description: 'CRO, speed, AI, analytics setup',
    price: 'From 29.000 kr',
  },
  {
    title: 'Support',
    icon: <HiChatBubbleBottomCenterText className="w-6 h-6" />,
    description: 'Retainers, training, ongoing help',
    price: 'From 9.000 kr/mo',
  },
]

const foundationPackages: FoundationPackage[] = [
  {
    subtitle: 'For new stores',
    price: 'From 49.000 kr',
    features: ['Basic setup', '6-8 weeks', 'Essential features'],
  },
  {
    subtitle: 'For new stores',
    price: 'From 49.000 kr',
    features: ['Advanced features', '8-10 weeks', 'Growth tools'],
  },
  {
    subtitle: 'For new stores',
    price: 'From 49.000 kr',
    features: ['Custom build', '12+ weeks', 'Premium support'],
  },
  {
    subtitle: 'For new stores',
    price: 'From 49.000 kr',
    features: ['Fully custom', 'Flexible timeline', 'Dedicated team'],
  },
]

export default function ServicesPackaged() {
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
            <span className="text-teal">Shopify services</span>, packaged like products
          </h2>
          <p className="text-lg text-gray-600">
            Pick what you need. Know what you pay. Get to work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 lg:mb-20">
          {serviceCategories.map((category, index) => (
            <div
              key={index}
              className="border-l border-r border-gray-200 px-6 lg:px-8 first:border-l-0 last:border-r-0"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                <div className="text-teal">{category.icon}</div>
              </div>
              <p className="text-gray-600 mb-4">{category.description}</p>
              <p className="text-xl font-bold text-gray-900 mb-6">{category.price}</p>
              <Link
                href="/services"
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
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {foundationPackages.map((pkg, index) => (
            <div
              key={index}
              className="border-l border-r border-gray-200 px-6 lg:px-8 first:border-l-0 last:border-r-0"
            >
              <h4 className="text-lg font-bold text-gray-900 mb-2">FOUNDATION</h4>
              <p className="text-sm text-gray-600 mb-4">{pkg.subtitle}</p>
              <p className="text-2xl font-bold text-teal mb-6">{pkg.price}</p>
              <ul className="space-y-2 mb-6">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-600 text-sm">
                    • {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="/services/foundation"
                className="inline-block bg-teal text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-teal-dark transition-colors text-center w-full"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

