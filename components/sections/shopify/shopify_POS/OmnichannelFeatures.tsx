'use client'

import React from 'react'

interface Feature {
  title: string
  description: string
  highlight: string
}

const features: Feature[] = [
  {
    title: 'Real-Time Inventory Sync',
    description: 'Never oversell again. Every transaction updates across all channels instantly, preventing the inventory disasters that cost you customers and money.',
    highlight: 'Saves 10+ hours per week',
  },
  {
    title: 'Unified Customer Profiles',
    description: 'See complete customer history across online and offline. Enable personalized recommendations and loyalty programs that increase lifetime value by 300%.',
    highlight: '300% lifetime value increase',
  },
  {
    title: 'One-Click Omnichannel Features',
    description: 'Buy online, pick up in-store. Ship from store. Local delivery. All the features that make customers spend more and come back faster.',
    highlight: '4x higher customer value',
  },
  {
    title: 'Zero Training Required',
    description: 'Your staff can use it immediately. Simple, intuitive interface that works on any tablet or smartphone. No complex manuals or expensive training.',
    highlight: 'Immediate implementation',
  },
  {
    title: 'Complete Analytics Integration',
    description: 'See which products perform best where, track staff performance, and get insights that help you make smarter inventory and marketing decisions.',
    highlight: 'Data-driven decisions',
  },
  {
    title: '24-Hour Implementation',
    description: 'We handle everything. Hardware setup, software configuration, data migration, and staff training. You\'re selling in-person within 24 hours.',
    highlight: 'Same-day results',
  },
]

// Badge icon component matching the design - teal circle with white verified badge
function BadgeIcon() {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Teal circle background */}
      <circle cx="28" cy="28" r="28" fill="#03C1CA" />
      {/* White wavy badge/seal shape */}
      <path 
        d="M28 13C28 13 30.5 16 33 16C35.5 16 38 13.5 40 15.5C42 17.5 40 20 40 22.5C40 25 43 27.5 43 28C43 28.5 40 31 40 33.5C40 36 42 38.5 40 40.5C38 42.5 35.5 40 33 40C30.5 40 28 43 28 43C28 43 25.5 40 23 40C20.5 40 18 42.5 16 40.5C14 38.5 16 36 16 33.5C16 31 13 28.5 13 28C13 27.5 16 25 16 22.5C16 20 14 17.5 16 15.5C18 13.5 20.5 16 23 16C25.5 16 28 13 28 13Z" 
        stroke="white" 
        strokeWidth="2" 
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Checkmark inside */}
      <path 
        d="M22 28L26 32L34 24" 
        stroke="white" 
        strokeWidth="2.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
}

export default function OmnichannelFeatures() {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Main content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {/* Title */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[42px] font-bold text-gray-900 leading-tight">
            We Build Your Omnichannel Empire
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="px-6 lg:px-10 py-8 lg:py-10 flex flex-col items-center text-center border-l border-r border-gray-200"
            >
              {/* Icon Badge */}
              <div className="mb-5">
                <BadgeIcon />
              </div>

              {/* Title */}
              <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed mb-4 max-w-xs">
                {feature.description}
              </p>

              {/* Highlight */}
              <p className="text-teal font-semibold text-sm">
                {feature.highlight}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom teal bar */}
      <div className="h-2 bg-teal w-full"></div>
    </section>
  )
}

