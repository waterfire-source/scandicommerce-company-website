'use client'

import Link from 'next/link'

const scenarios = [
  {
    title: 'Replatforming from WooCommerce',
    description: 'Migrate from slow, maintenance-heavy WordPress to a modern commerce platform',
    href: '/contact',
  },
  {
    title: 'Launching D2C',
    description: 'Go direct to consumer with a professional store that converts',
    href: '/contact',
  },
  {
    title: 'Scaling to Multi-Store',
    description: 'Manage multiple brands or markets from a unified platform',
    href: '/contact',
  },
  {
    title: 'Adding B2B Commerce',
    description: 'Serve both retail and wholesale customers from one store',
    href: '/contact',
  },
]

export default function CommonScenarios() {
  return (
    <section className="bg-[#F8F8F8] py-12 sm:py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
            Common scenarios we solve
          </h2>
        </div>

        {/* Scenarios Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {scenarios.map((scenario, index) => (
            <div
              key={index}
              className={`py-6 sm:py-8 lg:py-10 px-4 sm:px-6 lg:px-10 border-l-2 border-[#03C1CA] ${
                index % 2 === 0 ? 'md:border-r md:border-r-gray-200' : ''
              } ${
                index < 2 ? 'border-b border-b-gray-200' : ''
              } ${
                index >= 2 && index < scenarios.length ? 'max-md:border-b max-md:border-b-gray-200' : ''
              } ${
                index === scenarios.length - 1 ? 'max-md:border-b-0' : ''
              }`}
            >
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                {scenario.title}
              </h3>
              <p className="text-xs sm:text-sm lg:text-base text-gray-500 mb-4 sm:mb-6 leading-relaxed">
                {scenario.description}
              </p>
              <Link
                href={scenario.href}
                className="inline-flex items-center text-[#03C1CA] text-xs sm:text-sm font-semibold hover:underline"
              >
                See how we help
                <svg
                  className="ml-1.5 sm:ml-2 w-3.5 h-3.5 sm:w-4 sm:h-4"
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
      </div>
    </section>
  )
}

