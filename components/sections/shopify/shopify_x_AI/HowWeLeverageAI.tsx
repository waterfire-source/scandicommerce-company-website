'use client'

interface AICapability {
  title: string
  description: string
  features: string[]
  bgColor: string
  impact: {
    title: string
    paragraphs: string[]
    link: string
  }
}

const capabilities: AICapability[] = [
  {
    title: 'Enhanced Development Efficiency',
    description: 'We use AI-powered development tools to streamline the Shopify implementation process:',
    features: [
      'AI-assisted code generation for custom theme features',
      'Automated testing and quality assurance',
      'Rapid content creation for store pages',
      'Streamlined problem-solving and debugging',
    ],
    bgColor: 'bg-[#03C1CA]',
    impact: {
      title: 'The Impact:',
      paragraphs: [
        'By incorporating AI-powered tools into our development workflow, we can complete projects more efficiently while maintaining high quality standards.',
        'For you, this means getting your Shopify store up and running faster, implementing new features more quickly, and staying ahead of market trends.',
      ],
      link: 'Significantly reduced development timelines',
    },
  },
  {
    title: 'Improved Customer Experiences',
    description: 'We integrate best-in-class AI tools to enhance how customers interact with your store:',
    features: [
      'Smart product recommendation apps',
      'Intelligent search functionality that understands customer intent',
      'Targeted content display based on user behavior',
      'Automated email marketing tools that adapt to customer actions',
    ],
    bgColor: 'bg-[#1F1D1D]',
    impact: {
      title: 'The Impact:',
      paragraphs: [
        'These tools help create more relevant shopping experiences that respond to customer preferences and behaviors, potentially increasing engagement and conversion rates.',
        'By strategically implementing these proven solutions, we help you offer the kind of personalized experience customers have come to expect from leading e-commerce brands.',
      ],
      link: 'Enhanced customer engagement through personalization',
    },
  },
  {
    title: 'Efficient Store Management',
    description: 'We implement AI-powered tools that simplify running your Shopify store:',
    features: [
      'Content generation assistants for product descriptions',
      'Inventory management tools with predictive features',
      'Customer support automation through chatbots',
      'Data analysis tools for business insights',
    ],
    bgColor: 'bg-[#03C1CA]',
    impact: {
      title: 'The Impact:',
      paragraphs: [
        'These tools help reduce the time spent on routine tasks, allowing you to focus more on business strategy and growth opportunities.',
        'By automating repetitive aspects of store management, you can operate more efficiently while still providing excellent customer service.',
      ],
      link: 'More efficient operations and resource allocation',
    },
  },
]

export default function HowWeLeverageAI() {
  return (
    <section className="bg-[#F8F8F8] py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#222222] mb-4">
            How We Leverage AI-Powered Tools in Shopify
          </h2>
        </div>

        {/* Capability Cards */}
        <div className="max-w-5xl mx-auto space-y-8">
          {capabilities.map((capability, index) => (
            <div key={index} className="bg-white">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Left Column - Dynamic Background Color */}
                <div className={`${capability.bgColor} p-8 lg:p-10`}>
                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-4">
                    {capability.title}
                  </h3>
                  <p className="text-white/90 mb-6 text-sm lg:text-base">
                    {capability.description}
                  </p>
                  <ul className="space-y-3">
                    {capability.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-white">
                        <span className="mr-3 text-white">•</span>
                        <span className="text-sm lg:text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right Column - White Background */}
                <div className="p-6 lg:p-8 flex flex-col justify-center">
                  <p className="text-base lg:text-lg text-[#565454] mb-4">
                    <span className="font-bold text-[#222222]">{capability.impact.title}</span>{' '}
                    {capability.impact.paragraphs[0]}
                  </p>
                  <p className="text-base lg:text-lg text-[#565454] mb-6">
                    {capability.impact.paragraphs[1]}
                  </p>
                  <a href="/contact" className="text-[#03C1CA] hover:underline font-medium">
                    {capability.impact.link}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

