'use client'

import Link from 'next/link'

export default function CTA() {
  return (
    <section className="bg-[#03C1CA] py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Leverage Shopify for Your Business?
          </h2>
          <p className="text-base lg:text-lg text-white mb-8 max-w-2xl mx-auto">
            Book a free 15-minute strategy call to discuss how our Shopify expertise can help you achieve your e-commerce goals.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[#222222] px-8 py-4 font-medium hover:bg-gray-100 transition-colors rounded"
          >
            Book a Free Call
          </Link>
        </div>
      </div>
    </section>
  )
}

