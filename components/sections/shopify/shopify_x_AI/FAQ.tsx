'use client'

interface FAQItem {
  question: string
  answer: string
}

const faqItems: FAQItem[] = [
  {
    question: 'How does AI actually help my Shopify store?',
    answer: 'AI tools can help in three key areas: speeding up development and implementation, creating more personalized customer experiences, and automating routine store management tasks. The right applications can save you time, enhance customer satisfaction, and potentially improve conversion rates.',
  },
  {
    question: 'Do I need technical knowledge to benefit from these tools?',
    answer: 'No, you don\'t need technical expertise. We handle the integration and setup of AI-powered tools, providing you with intuitive interfaces and training so you can easily manage these systems as part of your regular store operations.',
  },
  {
    question: 'Are AI-powered tools expensive to implement?',
    answer: 'Many AI-powered tools for Shopify are available through subscription models that scale with your business. We help you select solutions that offer the best value and ROI for your specific needs, focusing on tools that can deliver meaningful improvements to your operations or customer experience.',
  },
]

export default function FAQ() {
  return (
    <section className="bg-[#F8F8F8] py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#222222] text-center mb-12 lg:mb-16">
          Common Questions About AI in Shopify
        </h2>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-6">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 lg:p-8"
            >
              <h3 className="text-base sm:text-lg font-semibold text-[#222222] mb-3">
                {item.question}
              </h3>
              <p className="text-sm sm:text-base text-[#565454] leading-relaxed">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

