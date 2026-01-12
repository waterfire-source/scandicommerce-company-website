'use client'

const integrationPoints = [
  'Data Centralization: Your PIM becomes the primary repository for all product information',
  'Enrichment and Optimization: Enhance product data with SEO-friendly descriptions and rich media',
  'Automated Syndication: Push polished product information to Shopify automatically',
  'Multi-channel Consistency: Ensure high-quality product data across all platforms',
]

export default function IntegratingPIM() {
  return (
    <section className="bg-[#F8F8F8] py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#222222] mb-4">
            Seamlessly Integrating PIM with Shopify
          </h2>
          <p className="text-base lg:text-lg text-[#565454] max-w-5xl mx-auto">
            Shopify excels as an e-commerce platform, but as your product catalog grows, managing detailed product information directly in Shopify becomes increasingly challenging. This is where PIM systems create significant value.
          </p>
        </div>

        {/* Two Column Layout with white wrapper */}
        <div className="bg-white max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Column - Cyan Background */}
            <div className="bg-[#03C1CA] p-6 lg:p-8">
              <h3 className="text-xl lg:text-2xl font-bold text-white mb-4">
                How the Integration Works
              </h3>
              <p className="text-white/90 mb-6">
                Our PIM solutions seamlessly connect with your Shopify store through:
              </p>
              <ul className="space-y-4">
                {integrationPoints.map((point, index) => (
                  <li key={index} className="flex items-start text-white">
                    <span className="mr-3 text-white">•</span>
                    <span className="text-sm lg:text-base">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column - White Background */}
            <div className="p-6 lg:p-8 flex flex-col justify-center">
              <p className="text-base lg:text-lg text-[#565454] mb-6">
                <span className="font-bold text-[#222222]">The Impact:</span> Most leading PIM solutions offer dedicated Shopify connectors that establish a seamless data flow between systems. These connectors handle data mapping, scheduled synchronization, and real-time updates, creating a smooth operational workflow for your team.
              </p>
              <p className="text-base lg:text-lg text-[#565454] mb-6">
                With a proper PIM integration, you can manage thousands of products efficiently while maintaining perfect data consistency across your entire e-commerce ecosystem.
              </p>
              <a href="/contact" className="text-[#03C1CA] hover:underline font-medium">
                Streamlined product management workflow
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

