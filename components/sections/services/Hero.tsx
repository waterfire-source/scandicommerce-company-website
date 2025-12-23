'use client'

import LiquidBlob from '@/components/ui/LiquidBlob'

export default function Hero() {
  return (
    <section className="relative bg-[#F8F8F8] py-16 lg:py-24 overflow-hidden min-h-[60vh] flex items-center justify-center">
      <LiquidBlob
        page="services"
        rotation={0}
        className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] md:w-[120%] lg:w-[115%] xl:w-[100%] h-[130%] hidden lg:block"
        enableMouseFollow={true}
      />

      <div className="absolute top-[35%] left-[28%] xl:block hidden w-28 h-28 rounded-full bg-[#1DEFFA33]"></div>
      <div className="absolute bottom-[42%] right-[30%] xl:block hidden w-[50px] h-[50px] rounded-full bg-[#1DEFFA33]"></div>

      <div className="container flex flex-col justify-center items-center mx-auto px-4 sm:px-6 lg:px-8 relative z-10 gap-[32px]">
        <div className="flex flex-col justify-start items-center gap-[32px] sm:w-3/4 2xl:w-1/2 w-full">
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-center mb-2 sm:mb-4">
            <span className="xl:text-[#FFFFFF] text-[#222222]">
              Choose your
            </span>{' '}
            <span className="text-[#1DEFFA]">Shopify growth</span>
            <br />
            <span className="xl:text-[#FFFFFF] text-[#222222]">package</span>
          </h1>

          <p className="text-base lg:text-lg xl:text-xl xl:text-[#FFFFFF] text-[#222222] text-center leading-relaxed px-4">
            Transparent pricing, clear deliverables, and no surprises. Select the package
            that fits your needs.
          </p>
        </div>
      </div>
    </section>
  )
}

