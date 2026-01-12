'use client'

interface ToolCategory {
  title: string
  description: string
}

const toolCategories: ToolCategory[] = [
  {
    title: 'Development Assistants',
    description: 'We use industry-leading AI coding assistants to help generate and optimize Shopify Liquid code, JavaScript, and CSS, enabling us to deliver quality results more efficiently.',
  },
  {
    title: 'Content Creation Tools',
    description: 'We leverage AI writing assistants to help create compelling product descriptions, blog content, and marketing copy that resonates with your target audience.',
  },
  {
    title: 'Customer Experience Apps',
    description: 'We integrate Shopify-compatible AI tools for personalization, intelligent search, recommendation engines, and chatbots to enhance the customer journey.',
  },
]

export default function AIToolsToolkit() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#222222] mb-4">
            AI-Powered Tools in Our Toolkit
          </h2>
        </div>

        {/* Three Columns */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {toolCategories.map((category, index) => {
            const isLastInRow = index === toolCategories.length - 1
            return (
              <div 
                key={index} 
                className={`text-center border-l border-[#E5E5E5] p-6 lg:p-8 ${isLastInRow ? 'md:border-r' : ''}`}
              >
                <h3 className="text-lg lg:text-xl font-semibold text-[#03C1CA] mb-4">
                  {category.title}
                </h3>
                <p className="text-sm lg:text-base text-[#565454] leading-relaxed">
                  {category.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Bottom Text */}
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-base lg:text-lg text-[#565454] leading-relaxed">
            We carefully select established AI tools that integrate seamlessly with Shopify to ensure reliability and performance. Our focus is always on delivering practical business value rather than implementing technology for its own sake.
          </p>
        </div>
      </div>
    </section>
  )
}

