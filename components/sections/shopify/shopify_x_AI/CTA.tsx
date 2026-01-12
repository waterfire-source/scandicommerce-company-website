'use client'

import Link from 'next/link'

export default function CTA() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#222222] mb-6">
            Ready to Enhance Your Shopify Store with AI?
          </h2>
          <p className="text-base lg:text-lg text-[#565454] mb-8">
            Let&apos;s discuss how we can leverage AI-powered tools to help you build faster, create better customer experiences, and optimize your Shopify business.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#03C1CA] text-white px-8 py-4 font-medium hover:bg-[#03C1CA]/90 transition-colors"
          >
            Book a meeting
          </Link>
        </div>
      </div>
    </section>
  )
}

