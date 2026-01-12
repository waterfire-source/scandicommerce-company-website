import Image from 'next/image'
import Link from 'next/link'
import { HiCalendar, HiClock } from 'react-icons/hi2'

export default function FeaturedArticle() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center shadow-lg">
          {/* Left Column - Laptop Image */}
          <div className="relative w-full h-[400px] lg:h-[450px] xl:h-[560px]">
            <Image
              src="/images/resources/featured_article/banner.png"
              alt="Shopify dashboard on laptop"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Right Column - Blog Post Card */}
          <div className="bg-white p-6 lg:p-8 border border-[#5654544D] h-full w-full flex flex-col justify-center items-start gap-10">
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-[#03C1CA] text-white text-sm font-medium">
                Shopify Tips
              </span>
              <span className="px-3 py-1 bg-gray-200 text-gray-700 text-sm font-medium">
                Featured
              </span>
            </div>

            <div className="flex flex-col justify-start items-start gap-7 sm:gap-[42px]">
              <div className="flex flex-col justify-start items-start gap-5 sm:gap-[30px]">
                {/* Headline */}
                <h2 className="text-lg sm:text-xl xl:text-2xl 2xl:text-[32px] font-bold text-[#1F1D1D]">
                  10 Essential Shopify Apps for Norwegian E-commerce in 2025
                </h2>

                {/* Description */}
                <p className="text-xs sm:text-sm xl:text-sm 2xl:text-base text-[#565454] leading-relaxed">
                  Discover the must-have apps that will transform your Norwegian
                  Shopify store and boost conversions.
                </p>
              </div>

              <div className="flex flex-col justify-start items-start gap-4 sm:gap-[33px]">
                {/* Metadata */}
                <div className="flex flex-wrap gap-4 text-sm text-[#565454]">
                  <div className="flex items-center gap-2">
                    <HiCalendar className="w-4 h-4" />
                    <span>Jan 15, 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <HiClock className="w-4 h-4" />
                    <span>8 min read</span>
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                  href="/resources/10-essential-shopify-apps-norwegian-ecommerce-2025"
                  className="inline-block bg-black text-base text-white px-6 py-3 lg:px-8 lg:py-4 font-semibold hover:bg-gray-800 transition-colors"
                >
                  Read Article
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
