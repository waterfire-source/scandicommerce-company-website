'use client'

import LiquidBlob from '@/components/ui/LiquidBlob'

export default function Hero() {
  return (
    <section className="relative bg-[#F8F8F8] py-16 lg:py-24 overflow-hidden min-h-[calc(100vh-80px)] flex items-center justify-center">
      <LiquidBlob
        page="homepage"
        rotation={0}
        className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] md:w-[120%] lg:w-[115%] xl:w-[110%] h-[130%] hidden lg:block"
        enableMouseFollow={true}
      />

      <div className="container flex flex-col justify-center items-center mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col justify-start items-center gap-8 sm:w-3/4 2xl:w-1/2 w-full">
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-center mb-4 sm:mb-6">
            <span className="xl:text-[#FFFFFF] text-[#222222]">
              Why Scandicommerce chose
            </span>{' '}
            <span className="xl:text-[#FFFFFF] text-[#222222]">
              Shopify?
            </span>
          </h1>

          <p className="text-base lg:text-lg xl:text-xl xl:text-[#FFFFFF] text-[#222222] text-center leading-relaxed px-4 max-w-2xl">
            The data-backed reasons why we&apos;ve chosen to specialize in Shopify and why it&apos;s the right platform for serious e-commerce businesses
          </p>
        </div>
      </div>
    </section>
  )
}

