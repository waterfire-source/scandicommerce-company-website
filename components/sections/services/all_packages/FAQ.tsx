'use client'

interface FAQItem {
  question: string
  answer: string
}

const faqItems: FAQItem[] = [
  {
    question: 'Can I upgrade my package later?',
    answer:
      "Absolutely. Many clients start with Foundation and upgrade as they grow. We'll credit your initial investment toward the larger package.",
  },
  {
    question: 'What if I need something custom?',
    answer:
      'We can customize any package or create a bespoke solution. Book a discovery call to discuss your specific needs.',
  },
  {
    question: 'Do you offer payment plans?',
    answer:
      'Yes, we offer flexible payment schedules tied to project milestones. Typically 30% deposit, 40% at mid-point, 30% at launch.',
  },
]

export default function FAQ() {
  return (
    <section className="bg-[#03C1CA] py-12 sm:py-16 lg:py-24 relative overflow-hidden">
      {/* Decorative circles - hidden on mobile for cleaner look */}
      <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-20 sm:w-40 h-20 sm:h-40 rounded-full bg-white/5 hidden sm:block"></div>
      <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-16 sm:w-32 h-16 sm:h-32 rounded-full bg-white/5 hidden sm:block"></div>
      <div className="absolute top-1/2 left-10 sm:left-20 w-12 sm:w-24 h-12 sm:h-24 rounded-full bg-white/5 -translate-y-1/2 hidden lg:block"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center mb-8 sm:mb-12">
          Frequently asked questions
        </h2>

        <div className="max-w-4xl mx-auto space-y-3 sm:space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="bg-[#1CD8E2]/50 backdrop-blur-sm p-4 sm:p-6"
            >
              <h3 className="text-base sm:text-lg font-semibold text-white mb-2">
                {item.question}
              </h3>
              <p className="text-white/90 text-xs sm:text-sm leading-relaxed">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

