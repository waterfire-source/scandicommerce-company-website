'use client'

import React from 'react'
import Link from 'next/link'

export default function Partners() {
  return (
    <section className="bg-gray-50 py-12 lg:py-16 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center gap-8 mb-8 border-l-2 border-gray-400 pl-8">
          <Link
            href="/services"
            className="text-gray-700 font-medium hover:text-teal transition-colors text-base"
          >
            Browse services
          </Link>
          <div className="h-6 w-px bg-gray-300" />
          <Link
            href="/partners/klaviyo"
            className="text-gray-700 font-medium hover:text-teal transition-colors text-base"
          >
            Klaviyo Partner
          </Link>
          <div className="h-6 w-px bg-gray-300" />
          <Link
            href="/partners/yotpo"
            className="text-gray-700 font-medium hover:text-teal transition-colors text-base"
          >
            Yotpo Partner
          </Link>
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-600 max-w-2xl mx-auto">
            Official Shopify partner since 2018. We only work with Shopify, so you do not pay for
            our learning curve.
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-teal" />
    </section>
  )
}

