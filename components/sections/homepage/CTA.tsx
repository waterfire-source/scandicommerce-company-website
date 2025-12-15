'use client'

import React from 'react'
import Link from 'next/link'

export default function CTA() {
  return (
    <section className="relative bg-teal py-16 lg:py-44 overflow-hidden">
      <div
        className="absolute top-0 left-1/4 w-64 h-64 rounded-full opacity-20 -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, transparent 70%)',
          filter: 'blur(30px)',
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight mb-4">
            Ready to stop shopping for agencies and start shopping for services?
          </h2>

          <p className="text-lg text-gray-100 mb-8 lg:mb-12">
            Browse our packages or talk to us about your project
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/packages"
              className="bg-gray-900 text-white px-8 py-3 font-semibold hover:bg-gray-800 transition-colors text-center"
            >
              Browse Packages
            </Link>
            <Link
              href="/book-call"
              className="bg-white text-gray-900 px-8 py-3 font-semibold hover:bg-gray-100 transition-colors text-center"
            >
              Book a Discovery Call
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

