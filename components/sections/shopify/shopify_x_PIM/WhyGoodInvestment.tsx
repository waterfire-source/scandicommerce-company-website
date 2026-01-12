'use client'

interface InvestmentBenefit {
  title: string
  description: string
}

const benefits: InvestmentBenefit[] = [
  {
    title: 'Increased Conversion Rates',
    description: 'High-quality, complete product information builds customer confidence and reduces purchase barriers. Shopify stores with robust product content typically see conversion rate increases of 15-25% after implementing PIM.',
  },
  {
    title: 'Reduced Return Rates',
    description: 'When customers receive exactly what they expect based on accurate product information, return rates typically drop by 20-40%, directly improving your bottom line.',
  },
  {
    title: 'Improved Team Productivity',
    description: 'Your team can focus on strategic tasks rather than data entry, with most businesses reporting 30-50% improved productivity in merchandising operations.',
  },
  {
    title: 'Faster Time-to-Market',
    description: 'Launch new products 40-60% faster by streamlining the information management process from sourcing to publication.',
  },
  {
    title: 'Scalable Growth Foundation',
    description: 'Remove data bottlenecks that prevent catalog expansion and new channel opportunities, enabling sustainable business growth.',
  },
  {
    title: 'Enhanced Customer Experience',
    description: 'Consistent, rich product information creates a professional shopping experience that builds brand loyalty and customer retention.',
  },
]

export default function WhyGoodInvestment() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16 max-w-xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#222222] mb-4">
            Why is a PIM System a Good Investment?
          </h2>
          <p className="text-sm lg:text-base text-[#565454]">
            Investing in a PIM solution delivers both immediate operational benefits and long-term strategic advantages for Shopify merchants:
          </p>
        </div>

        {/* Numbered Benefits List */}
        <div className="max-w-xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-4 py-5">
              {/* Number Circle */}
              <div className="flex-shrink-0 w-10 h-10 bg-[#03C1CA] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-base">{index + 1}</span>
              </div>
              
              {/* Content */}
              <div className="pt-1">
                <h3 className="text-base lg:text-lg font-semibold text-[#222222] mb-1">
                  {benefit.title}
                </h3>
                <p className="text-xs lg:text-sm text-[#565454] leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note - Light cyan box */}
        <div className="bg-[#1DEFFA15] p-6 lg:p-8 max-w-5xl mx-auto mt-12">
          <p className="text-sm lg:text-base text-[#565454] leading-relaxed">
            For most Shopify merchants, PIM systems typically deliver full ROI within 6-12 months, making them one of the most valuable operational investments for growing e-commerce businesses.
          </p>
        </div>
      </div>
    </section>
  )
}

