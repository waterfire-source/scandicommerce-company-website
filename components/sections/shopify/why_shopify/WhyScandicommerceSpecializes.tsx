'use client'

interface SpecializationCard {
  title: string
  description: string
}

const specializations: SpecializationCard[] = [
  {
    title: 'Better Client Outcomes',
    description: 'We tracked results across platforms and found our Shopify clients consistently saw higher conversion rates, faster implementations, and fewer technical issues than those on other platforms.',
  },
  {
    title: 'Deeper Expertise Through Focus',
    description: 'By concentrating on one platform instead of spreading our knowledge across many, we\'ve developed specialized expertise that allows us to solve complex challenges other agencies can\'t.',
  },
  {
    title: 'Certified Partner Advantages',
    description: 'As a Shopify Partner working toward Select Partner status, we gain early access to new features, direct support channels, and collaboration opportunities with Shopify\'s team.',
  },
  {
    title: 'AI Integration Opportunities',
    description: 'Shopify\'s robust API and app infrastructure provides the ideal foundation for implementing advanced AI solutions for personalization, automation, and analytics.',
  },
]

export default function WhyScandicommerceSpecializes() {
  return (
    <section className="bg-[#F8F8F8] py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#222222] text-center mb-6 lg:mb-8">
            Why Scandicommerce Specializes in Shopify
          </h2>
          <p className="text-base lg:text-lg text-[#565454] text-center mb-12 lg:mb-16 max-w-3xl mx-auto">
            Our decision to focus exclusively on Shopify wasn&apos;t made lightly. It came after years of experience with multiple e-commerce platforms and seeing consistent patterns in client results:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {specializations.map((specialization, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 lg:p-8 shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl lg:text-2xl font-bold text-[#03C1CA] mb-4">
                  {specialization.title}
                </h3>
                <p className="text-base lg:text-lg text-[#565454] leading-relaxed">
                  {specialization.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

