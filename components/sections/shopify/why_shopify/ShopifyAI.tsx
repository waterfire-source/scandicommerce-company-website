'use client'

interface AISolution {
  number: number
  title: string
  description: string
}

const aiSolutions: AISolution[] = [
  {
    number: 1,
    title: 'Intelligent Product Recommendations',
    description: 'AI-powered recommendation engines that analyze purchasing patterns, browsing behavior, and inventory data to suggest relevant products to customers, increasing average order value.',
  },
  {
    number: 2,
    title: 'Automated Inventory Management',
    description: 'Systems that predict inventory needs based on historical data, seasonal trends, and real-time sales velocity, helping avoid stockouts and overstock situations.',
  },
  {
    number: 3,
    title: 'Enhanced Customer Service Automation',
    description: 'AI-powered chatbots and support systems that integrate directly with your Shopify store data to provide immediate, accurate responses to common customer questions.',
  },
]

export default function ShopifyAI() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#222222] text-center mb-4 lg:mb-6">
            Shopify + AI: The Future of E-commerce
          </h2>
          <p className="text-base lg:text-lg text-[#565454] text-center mb-12 lg:mb-16 max-w-3xl mx-auto">
            Our specialized focus allows us to develop innovative AI solutions specifically optimized for Shopify&apos;s architecture
          </p>

          <div className="space-y-6 lg:space-y-8">
            {aiSolutions.map((solution) => (
              <div
                key={solution.number}
                className="bg-[#F8F8F8] rounded-lg p-6 lg:p-8 flex items-start gap-6"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-[#03C1CA] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-2xl lg:text-3xl">
                    {solution.number}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl lg:text-2xl font-bold text-[#222222] mb-3">
                    {solution.title}
                  </h3>
                  <p className="text-base lg:text-lg text-[#565454] leading-relaxed">
                    {solution.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

