'use client'

import React from 'react'
import Image from 'next/image'
import { HiXMark } from 'react-icons/hi2'

interface PainPoint {
  text: string
  rotate: number
  translateX: number
}

const leftPoints: PainPoint[] = [
  { text: 'Separate online and offline systems creating inventory nightmares', rotate: 0, translateX: 0 },
  { text: 'Manual reconciliation eating up 10+ hours per week', rotate: 1, translateX: 20 },
  { text: 'Missing out on omnichannel customers who spend 4x more', rotate: -2, translateX: 10 },
]

const rightPoints: PainPoint[] = [
  { text: 'Lost sales because customers can\'t find products in-store', rotate: 0, translateX: 0 },
  { text: 'Disconnected customer data means no personalization', rotate: -2, translateX: -20 },
  { text: 'Complex POS systems that require expensive training', rotate: 2, translateX: -10 },
]

export default function BleedingMoney() {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden min-h-[700px] lg:min-h-[800px]">
      {/* Background image with dark overlay */}
      <div className="absolute inset-0 z-0">
        {/* Background image - money/broom/dustpan */}
        <Image
          src="/images/shopify/shopify_POS/R (1).jpg"
          alt="Background"
          fill
          className="object-cover"
          style={{ filter: 'grayscale(100%)' }}
          priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 py-12 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title */}
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight">
              Your Current Setup Is Bleeding Money
            </h2>
          </div>

          {/* Cards Layout */}
          <div className="max-w-6xl mx-auto relative">
            {/* Two column layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 lg:gap-x-24 gap-y-6">
              {/* Left Column */}
              <div className="space-y-6 lg:space-y-8">
                {leftPoints.map((point, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 px-4 py-4 lg:px-6 lg:py-5 backdrop-blur-sm"
                    style={{
                      background: 'rgba(80, 80, 80, 0.5)',
                      transform: `rotate(${point.rotate}deg) translateX(${point.translateX}px)`,
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                    }}
                  >
                    <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-teal rounded-full flex-shrink-0">
                      <HiXMark className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <p className="text-white font-semibold text-sm sm:text-base">
                      {point.text}
                    </p>
                  </div>
                ))}
              </div>

              {/* Right Column */}
              <div className="space-y-6 lg:space-y-8">
                {rightPoints.map((point, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 px-4 py-4 lg:px-6 lg:py-5 backdrop-blur-sm"
                    style={{
                      background: 'rgba(80, 80, 80, 0.5)',
                      transform: `rotate(${point.rotate}deg) translateX(${point.translateX}px)`,
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                    }}
                  >
                    <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-teal rounded-full flex-shrink-0">
                      <HiXMark className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <p className="text-white font-semibold text-sm sm:text-base">
                      {point.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

