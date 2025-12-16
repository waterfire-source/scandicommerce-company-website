'use client'

import React from 'react'
import Link from 'next/link'
import { HiXMark } from 'react-icons/hi2'

interface PainPoint {
  text: string
}

const painPoints: PainPoint[] = [
  { text: 'No pricing until you\'ve had 3 calls' },
  { text: 'Weeks waiting for proposals' },
  { text: 'Unclear scope & hidden fees' },
  { text: 'Agency drama and endless revisions' },
]

export default function PainPoints() {
  return (
    <section className="relative bg-gray-50 py-16 lg:py-24 overflow-hidden">
      <div
        className="absolute top-0 left-1/4 w-32 h-32 rounded-full opacity-20 -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(3, 193, 202, 0.3) 0%, transparent 70%)',
          filter: 'blur(20px)',
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-56">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight px-2">
            Tired of <span className="text-teal">proposal ping-pong</span> with agencies?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16 lg:mb-20">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="bg-white p-4 sm:p-6 shadow-md hover:shadow-lg transition-shadow flex flex-col items-center justify-center gap-3 sm:gap-4 min-h-[140px] sm:h-40"
            >
              <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-teal rounded-full flex-shrink-0">
                <HiXMark className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <p className="text-[#565454] font-semibold text-xs sm:text-sm text-center leading-tight">{point.text}</p>
            </div>
          ))}
        </div>

        <div className="text-center mb-4 sm:mb-6">
          <p className="text-base sm:text-lg lg:text-xl text-gray-900">
            We built something different.
          </p>
        </div>

        <div className="text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-defaultText font-semibold text-base sm:text-lg hover:text-teal-dark transition-colors"
          >
            Explore our product-style services
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
      </div>
    </section>
  )
}

