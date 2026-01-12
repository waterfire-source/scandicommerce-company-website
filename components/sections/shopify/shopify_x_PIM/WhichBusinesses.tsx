'use client'

interface BusinessCard {
  title: string
  description: string
}

const businessCards: BusinessCard[] = [
  {
    title: 'Growing Catalog',
    description: 'Your catalog exceeds 100 products and managing details in Shopify alone has become time-consuming and error-prone.',
  },
  {
    title: 'Multi-Channel Sales',
    description: 'You sell across multiple channels beyond your Shopify store (marketplaces, social commerce, etc.) and need consistent information everywhere.',
  },
  {
    title: 'Complex Products',
    description: 'Your products have complex specifications with numerous attributes and variants that are difficult to manage directly in Shopify.',
  },
  {
    title: 'Team Collaboration',
    description: 'Multiple team members need to collaborate on product information updates, requiring better workflow management.',
  },
  {
    title: 'International Expansion',
    description: "You're expanding internationally and need to manage translations and localized content for multiple markets.",
  },
  {
    title: 'Scaling Business',
    description: "You're experiencing rapid growth and need systems that can scale with your business without creating bottlenecks.",
  },
]

export default function WhichBusinesses() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#222222] mb-4">
            Which Businesses Need a PIM Solution?
          </h2>
          <p className="text-base lg:text-lg text-[#565454] max-w-5xl mx-auto">
            While virtually any e-commerce business can benefit from better product data management, certain indicators suggest your Shopify store would particularly benefit from implementing a PIM system:
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {businessCards.map((card, index) => {
            // Last item in each row (3rd and 6th items for 3-column grid)
            const isLastInRow = (index + 1) % 3 === 0
            return (
              <div
                key={index}
                className={`border-l border-[#E5E5E5] p-6 lg:p-8 ${isLastInRow ? 'lg:border-r' : ''}`}
              >
                <h3 className="text-lg lg:text-xl font-semibold text-[#03C1CA] mb-3 text-center">
                  {card.title}
                </h3>
                <p className="text-sm lg:text-base text-[#565454] text-center">
                  {card.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Bottom Note */}
        <p className="text-center text-base lg:text-lg text-[#565454] mt-12 max-w-5xl mx-auto">
          Even smaller Shopify merchants with ambitious growth plans often find that implementing PIM early creates a competitive advantage as they scale.
        </p>
      </div>
    </section>
  )
}

