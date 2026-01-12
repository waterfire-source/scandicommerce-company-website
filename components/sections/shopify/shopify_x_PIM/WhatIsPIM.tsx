'use client'

export default function WhatIsPIM() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#222222] text-center mb-8 lg:mb-12">
          What is a PIM System?
        </h2>

        <div className="max-w-5xl mx-auto space-y-6">
          <p className="text-base lg:text-lg text-[#565454] leading-relaxed">
            Product Information Management (PIM) is a centralized software solution that stores, manages, and enriches all your product data in one place. Think of PIM as your single source of truth for product information—descriptions, specifications, images, videos, pricing, categorization, and more. Unlike spreadsheets or basic databases, a PIM system is specifically designed to handle the complexities of product data while ensuring consistency across all sales channels.
          </p>

          <p className="text-base lg:text-lg text-[#565454] leading-relaxed">
            For Shopify merchants, a PIM system acts as the command center for your product catalog before that information reaches your storefront, making it easier to scale your business without sacrificing data quality or customer experience.
          </p>

          {/* Quote Block */}
          <div className="bg-[#1DEFFA15] border-l-4 border-[#03C1CA] p-6 lg:p-8 mt-8">
            <p className="text-base lg:text-lg text-[#565454] italic mb-4">
              &ldquo;A PIM solution becomes your single source of truth for product information—ensuring consistency, accuracy, and efficiency across all your sales channels.&rdquo;
            </p>
            <p className="text-[#03C1CA] font-semibold">
              — Scandicommerce Team
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

