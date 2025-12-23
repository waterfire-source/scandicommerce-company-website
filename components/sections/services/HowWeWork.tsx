'use client'

const steps = [
  {
    number: 1,
    title: 'Discovery Workshop',
    description: 'Understand your business, customers, and growth goals',
  },
  {
    number: 2,
    title: 'Platform Assessment',
    description: 'Evaluate your current setup and migration requirements',
  },
  {
    number: 3,
    title: 'Custom Development',
    description: 'Build your Shopify store with features tailored to your needs',
  },
  {
    number: 4,
    title: 'Launch & Optimize',
    description: 'Go live with ongoing support and optimization',
  },
]

export default function HowWeWork() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
            How we work with Shopify
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              {/* Number Circle */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-[#03C1CA] rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-5 lg:mb-6">
                <span className="text-white text-lg sm:text-xl lg:text-2xl font-bold">{step.number}</span>
              </div>

              {/* Title */}
              <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 mb-2 sm:mb-3">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

