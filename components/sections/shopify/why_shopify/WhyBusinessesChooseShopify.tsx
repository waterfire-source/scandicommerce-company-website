'use client'

interface Reason {
  number: number
  title: string
  description: string
  bulletPoints?: string[]
  concludingParagraph?: string
}

const reasons: Reason[] = [
  {
    number: 1,
    title: 'Speed to Market',
    description: 'Businesses launching on Shopify get to market 58% faster than those using custom solutions. In e-commerce, time is literally money – every day not selling is revenue lost forever.',
  },
  {
    number: 2,
    title: 'Built-in Reliability & Security',
    description: 'Shopify invests millions in infrastructure that individual businesses could never afford on their own. This includes PCI compliance, SSL certificates, and 24/7 monitoring. During Black Friday/Cyber Monday, Shopify routinely handles over 10,000 transactions per minute without performance issues.',
  },
  {
    number: 3,
    title: 'Lower Total Cost of Ownership',
    description: 'Studies show that the 3-year total cost of ownership for Shopify is typically 40-60% lower than self-hosted platforms. While monthly subscription fees are visible, they eliminate many hidden costs:',
    bulletPoints: [
      'Security updates and patching',
      'Server maintenance and scaling',
      'PCI compliance management',
      'Development costs for core functionality',
    ],
  },
  {
    number: 4,
    title: 'Enterprise-Grade Features for Everyone',
    description: 'Shopify democratizes access to advanced e-commerce features that were once only available to large enterprises:',
    bulletPoints: [
      'Advanced analytics and reporting',
      'Abandoned cart recovery',
      'Multi-channel selling capabilities',
      'Global tax and shipping compliance',
    ],
  },
  {
    number: 5,
    title: 'Powerful Ecosystem & Integrations',
    description: 'Shopify\'s extensive ecosystem of 11,000+ apps and integrations is a game-changer for businesses of all sizes:',
    bulletPoints: [
      'Marketing Tools: Email marketing, social media, SEO, and advertising apps that integrate directly with your store data',
      'Fulfillment Solutions: Easy connections to shipping carriers, dropshipping suppliers, and fulfillment services',
      'Customer Support: Help desk, live chat, and customer feedback tools that work seamlessly with your store',
      'Accounting & Finance: Tax calculators, accounting software connections, and financial analytics',
      'Inventory Management: Advanced inventory systems that sync across all sales channels',
    ],
    concludingParagraph: 'This ecosystem means you can easily extend your store\'s functionality without custom development, saving time and resources while staying competitive.',
  },
]

export default function WhyBusinessesChooseShopify() {
  return (
    <section className="bg-[#222222] py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center mb-12 lg:mb-16">
            Why Businesses Choose Shopify
          </h2>

          <div className="space-y-6 lg:space-y-8">
            {reasons.map((reason) => (
              <div
                key={reason.number}
                className="bg-[#2A2A2A] rounded-lg p-6 lg:p-8"
              >
                <div className="space-y-4">
                  <h3 className="text-xl lg:text-2xl font-bold text-[#03C1CA]">
                    {reason.number}. {reason.title}
                  </h3>
                  <p className="text-base lg:text-lg text-white leading-relaxed">
                    {reason.description}
                  </p>
                  {reason.bulletPoints && (
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      {reason.bulletPoints.map((point, index) => {
                        // Check if the point has a bold category (format: "Category: description")
                        const parts = point.split(':')
                        if (parts.length === 2) {
                          return (
                            <li
                              key={index}
                              className="text-base lg:text-lg text-white leading-relaxed"
                            >
                              <strong className="font-bold">{parts[0]}:</strong>
                              {parts[1]}
                            </li>
                          )
                        }
                        return (
                          <li
                            key={index}
                            className="text-base lg:text-lg text-white leading-relaxed"
                          >
                            {point}
                          </li>
                        )
                      })}
                    </ul>
                  )}
                  {reason.concludingParagraph && (
                    <p className="text-base lg:text-lg text-white leading-relaxed mt-4">
                      {reason.concludingParagraph}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

