'use client'

const selectionCriteria = [
  'Shopify Integration Depth: Look for native, certified integrations',
  'Scalability: Choose a solution that can grow with your business',
  'User-Friendliness: Ensure the interface is intuitive for your team',
  'Data Governance: Evaluate data validation and quality control capabilities',
  'Digital Asset Management: Consider how the system handles product images',
  'Implementation Timeline: Understand the setup process and time to value',
  'Support and Training: Assess available resources for your team\'s success',
]

interface Step {
  number: number
  title: string
  description: string
}

const steps: Step[] = [
  {
    number: 1,
    title: 'Audit Your Current Data',
    description: 'Assess your existing catalog structure and identify improvement opportunities',
  },
  {
    number: 2,
    title: 'Define Your Data Model',
    description: 'Establish product attributes, categories, and relationships',
  },
  {
    number: 3,
    title: 'Select a PIM Solution',
    description: 'Choose a platform that aligns with your business needs',
  },
  {
    number: 4,
    title: 'Plan Implementation',
    description: 'Create a realistic timeline with defined milestones',
  },
  {
    number: 5,
    title: 'Migrate & Clean Data',
    description: 'Transfer existing product information and enhance quality',
  },
  {
    number: 6,
    title: 'Configure Connection',
    description: 'Establish and test the Shopify integration',
  },
  {
    number: 7,
    title: 'Train Your Team',
    description: 'Ensure all users understand the new workflows',
  },
  {
    number: 8,
    title: 'Launch & Optimize',
    description: 'Go live and continually refine your processes',
  },
]

interface FAQItem {
  question: string
  answer: string
}

const faqItems: FAQItem[] = [
  {
    question: "How does PIM differ from Shopify's built-in product management?",
    answer: "While Shopify offers basic product management capabilities, PIM systems provide advanced features like bulk editing, data validation, workflow management, digital asset management, and multi-channel publishing. PIM solutions are purpose-built for handling complex product information at scale.",
  },
  {
    question: 'Can I still manage my products directly in Shopify after implementing a PIM?',
    answer: 'Yes, you typically can still make changes in Shopify. However, most businesses adopt a "PIM-first" approach where all product information changes are made in the PIM system and then synchronized to Shopify. This ensures consistency across all channels.',
  },
  {
    question: 'How long does it take to see ROI from a PIM implementation?',
    answer: "Most mid-sized Shopify merchants see full ROI within 6-12 months. The returns come from improved team productivity, higher conversion rates, lower return rates, and faster time-to-market for new products. The larger and more complex your catalog, the faster you'll typically see returns.",
  },
]

export default function CombinedSection() {
  return (
    <section className="bg-[#F8F8F8] py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Choosing the Right PIM Section */}
        <div className="mb-16 lg:mb-24">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#222222] mb-4">
              Choosing the Right PIM for Your Shopify Store
            </h2>
            <p className="text-base lg:text-lg text-[#565454] max-w-5xl mx-auto">
              With numerous PIM solutions available, selecting the right one requires careful consideration of your specific business needs:
            </p>
          </div>

          {/* Two Column Layout with wrapper */}
          <div className="bg-white max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left Column - Cyan Background */}
              <div className="bg-[#03C1CA] p-6 lg:p-8">
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-4">
                  Key Selection Criteria
                </h3>
                <p className="text-white/90 mb-6">
                  When choosing a PIM for your Shopify store, consider these factors:
                </p>
                <ul className="space-y-4">
                  {selectionCriteria.map((criterion, index) => (
                    <li key={index} className="flex items-start text-white">
                      <span className="mr-3 text-white">•</span>
                      <span className="text-sm lg:text-base">{criterion}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Column - White Background */}
              <div className="p-6 lg:p-8 flex flex-col justify-center">
                <p className="text-base lg:text-lg text-[#565454] mb-6">
                  <span className="font-bold text-[#222222]">The Impact:</span> Choosing the right PIM solution can dramatically improve your team&apos;s efficiency, accelerate your time-to-market, and enhance your overall customer experience.
                </p>
                <p className="text-base lg:text-lg text-[#565454] mb-6">
                  We can help you evaluate your specific requirements and recommend a PIM solution that aligns perfectly with your business goals, technical environment, and budget constraints.
                </p>
                <a href="/contact" className="text-[#03C1CA] hover:underline font-medium">
                  Find the perfect solution for your unique needs
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Getting Started Section */}
        <div className="mb-16 lg:mb-24 max-w-5xl mx-auto">
          <div className="bg-[#03C1CA] p-8 lg:p-12">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                Getting Started with PIM for Shopify
              </h2>
              <p className="text-base lg:text-lg text-white/90 max-w-5xl mx-auto">
                Implementing a PIM system for your Shopify store involves several key steps:
              </p>
            </div>

            {/* Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 mb-12">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="bg-[#1CD8E2] p-6"
                >
                  <h3 className="text-base lg:text-lg font-semibold text-white mb-2">
                    {step.number}. {step.title}
                  </h3>
                  <p className="text-sm text-white/90">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Implementation Timeline Note - inside the cyan box */}
            <p className="text-center text-base lg:text-lg text-white max-w-5xl mx-auto">
              Most Shopify merchants can complete a basic PIM implementation within 1-3 months, with more complex catalogs requiring additional time for data migration and enrichment.
            </p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16 lg:mb-24 max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#222222] text-center mb-12 lg:mb-16">
            Common Questions About PIM for Shopify
          </h2>

          {/* FAQ Items */}
          <div className="space-y-6">
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

        {/* Transform Experience Section */}
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#222222] text-center mb-8">
            Transform Your Product Experience with PIM
          </h2>

          {/* Content */}
          <div className="space-y-6 mb-8">
            <p className="text-base lg:text-lg text-[#565454] leading-relaxed">
              As your Shopify business grows, the quality of your product information directly impacts customer satisfaction, operational efficiency, and ultimately, your revenue. A PIM system provides the foundation for scaling your product catalog while maintaining exceptional data quality across all your sales channels.
            </p>

            <p className="text-base lg:text-lg text-[#565454] leading-relaxed">
              By centralizing your product information management before it reaches Shopify, you create a sustainable competitive advantage through better customer experiences, streamlined operations, and the ability to move quickly in a dynamic marketplace.
            </p>
          </div>

          {/* Quote Block */}
          <div className="bg-[#1DEFFA15] p-6 lg:p-8">
            <p className="text-sm lg:text-base text-[#565454]">
              &ldquo;Ready to explore how a PIM system can transform your Shopify operations? Contact our product information specialists today for a personalized consultation and demonstration.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

