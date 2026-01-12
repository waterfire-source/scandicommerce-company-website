'use client'

interface ProcessStep {
  number: number
  title: string
  description: string
}

const processSteps: ProcessStep[] = [
  {
    number: 1,
    title: 'Discovery & Planning',
    description: 'We assess your business goals and identify opportunities where AI-powered tools can have the most significant impact on your Shopify store.',
  },
  {
    number: 2,
    title: 'AI-Enhanced Development',
    description: 'We use AI assistants to accelerate the development process while maintaining quality, from theme customization to feature implementation.',
  },
  {
    number: 3,
    title: 'Tool Integration',
    description: 'We carefully integrate selected AI-powered apps and tools that align with your business needs and objectives.',
  },
  {
    number: 4,
    title: 'Optimization & Support',
    description: 'We provide ongoing support to fine-tune AI tool configurations based on real-world performance data from your store.',
  },
]

export default function AIEnhancedProcess() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#222222] mb-4">
            Our AI-Enhanced Shopify Process
          </h2>
        </div>

        {/* Process Steps */}
        <div className="max-w-3xl mx-auto space-y-8">
          {processSteps.map((step) => (
            <div key={step.number} className="flex items-start gap-6">
              {/* Step Number */}
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#03C1CA] flex items-center justify-center">
                <span className="text-white font-bold text-lg">{step.number}</span>
              </div>

              {/* Step Content */}
              <div className="flex-1 pt-2">
                <h3 className="text-lg lg:text-xl font-semibold text-[#222222] mb-2">
                  {step.title}
                </h3>
                <p className="text-sm lg:text-base text-[#565454] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

