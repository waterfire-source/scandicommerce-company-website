'use client'

import React from 'react'
import Link from 'next/link'

export default function Partners() {
  return (
    <section className="bg-gray-50 py-12 md:py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:grid md:grid-cols-3 max-w-4xl mx-auto mb-8 md:mb-12">
          <Link
            href="/services"
            className="border-t md:border-t-0 md:border-l border-gray-300 py-4 text-center"
          >
            <span className="text-gray-900 font-semibold text-base md:text-lg hover:text-teal transition-colors">
              Browse services
            </span>
          </Link>
          <Link
            href="/partners/klaviyo"
            className="border-t md:border-t-0 md:border-l border-gray-300 py-4 text-center"
          >
            <span className="text-gray-900 font-semibold text-base md:text-lg hover:text-teal transition-colors">
              Klaviyo Partner
            </span>
          </Link>
          <Link
            href="/partners/yotpo"
            className="border-t border-b md:border-b-0 md:border-t-0 md:border-l md:border-r border-gray-300 py-4 text-center"
          >
            <span className="text-gray-900 font-semibold text-base md:text-lg hover:text-teal transition-colors">
              Yotpo Partner
            </span>
          </Link>
        </div>

        <div className="text-center">
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto px-4 md:px-0">
            Official Shopify partner since 2018. We only work with Shopify, so you do not pay for
            our learning curve.
          </p>
        </div>
      </div>
    </section>
  )
}