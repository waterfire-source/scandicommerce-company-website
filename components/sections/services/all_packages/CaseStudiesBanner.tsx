'use client'

import Link from 'next/link'

interface CaseStudiesBannerProps {
  packageName: string
}

export default function CaseStudiesBanner({ packageName }: CaseStudiesBannerProps) {
  return (
    <section className="bg-[#F8F8F8] py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Teal banner with rounded corners */}
          <div className="bg-[#03C1CA] rounded-lg py-16 lg:py-20 px-8 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              See how others succeeded with this package
            </h2>
            <p className="text-base lg:text-lg text-white/90 mb-8">
              Read real case studies from brands that chose the {packageName} package
            </p>
            <Link
              href="/work"
              className="inline-block bg-white hover:bg-gray-50 text-gray-700 font-medium py-3 px-8 border border-gray-200 transition-colors duration-200"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

