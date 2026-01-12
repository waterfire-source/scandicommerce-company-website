'use client'

interface FactCard {
  statistic: string
  description: string
  source: string
}

const facts: FactCard[] = [
  {
    statistic: '36%',
    description: 'Higher conversion rates on Shopify stores compared to other self-hosted platforms',
    source: 'Shopify Benchmarks Study, 2023',
  },
  {
    statistic: '99.98%',
    description: 'Uptime across all Shopify stores, even during peak sales events',
    source: 'Shopify Engineering Report',
  },
  {
    statistic: '4M+',
    description: 'Active websites powered by Shopify globally',
    source: 'Shopify Annual Report, 2024',
  },
  {
    statistic: '$200B+',
    description: 'Total merchandise value sold on Shopify annually',
    source: 'E-commerce Industry Report, 2023',
  },
  {
    statistic: '50%',
    description: 'Lower development time compared to custom-built e-commerce platforms',
    source: 'E-commerce Developer Survey',
  },
  {
    statistic: '11,000+',
    description: 'Apps and integrations available in the Shopify ecosystem',
    source: 'Shopify App Store',
  },
]

export default function ShopifyFacts() {
  return (
    <section className="bg-[#F8F8F8] py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#222222] text-center mb-12 lg:mb-16">
          The Numbers Don&apos;t Lie: Shopify By The Facts
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {facts.map((fact, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 lg:p-8 shadow-sm"
            >
              <div className="text-4xl lg:text-5xl font-bold text-[#03C1CA] mb-3">
                {fact.statistic}
              </div>
              <p className="text-sm lg:text-base text-[#565454] mb-4 leading-relaxed">
                {fact.description}
              </p>
              <p className="text-xs lg:text-sm text-[#888888]">
                {fact.source}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

