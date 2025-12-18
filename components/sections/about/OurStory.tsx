import Image from 'next/image'

export default function OurStory() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F5F5F5] grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="p-4 sm:p-8 lg:p-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#222222] mb-6 lg:mb-8">
              Our story
            </h2>
            <p className="text-xs sm:text-base lg:text-lg xl:text-2xl text-[#555555] leading-relaxed">
              We started ScandiCommerce in 2018 after years of frustration with
              traditional agency models. Too many proposals, unclear pricing,
              and scope creep were the norm. We asked ourselves: What if buying
              agency services felt like buying products? Clear features,
              transparent pricing, and no BS. Today, we&apos;re Norway&apos;s most
              transparent Shopify agency. Our clients know exactly what they&apos;re
              getting, what it costs, and when it will be delivered. No
              surprises, just results.
            </p>
          </div>

          {/* Right Column - Image */}
          <div className="relative w-full h-[400px] lg:h-[550px]">
            <Image
              src="/images/about/story/banner.png"
              alt="ScandiCommerce office space"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
