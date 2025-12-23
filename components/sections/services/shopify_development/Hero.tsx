'use client'

import Link from 'next/link'
import LiquidBlob from '@/components/ui/LiquidBlob'

export default function Hero() {
  return (
    <section className="relative bg-[#F8F8F8] py-16 lg:py-24 overflow-hidden min-h-[calc(100vh-80px)] flex items-center justify-center">
      <LiquidBlob
        page="about"
        rotation={0}
        className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] md:w-[120%] lg:w-[115%] xl:w-[110%] h-[130%] hidden lg:block"
        enableMouseFollow={true}
      />

      <div className="absolute top-[35%] left-[25%] xl:block hidden w-40 h-40 rounded-full bg-[#1DEFFA33]"></div>
      <div className="absolute bottom-[44%] right-[32%] xl:block hidden w-[60px] h-[60px] rounded-full bg-[#1DEFFA33]"></div>

      <div className="container flex flex-col justify-center items-center mx-auto px-4 sm:px-6 lg:px-8 relative z-10 gap-[42px]">
        <div className="flex flex-col justify-start items-center gap-[53px] sm:w-3/4 2xl:w-1/2 w-full">
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-center mb-4 sm:mb-6">
            <span className="xl:text-[#FFFFFF] text-[#222222]">
              Shopify for
            </span>{' '}
            <span className="text-[#1DEFFA]">serious</span>{' '}
            <span className="xl:text-[#FFFFFF] text-[#222222]">brands</span>
          </h1>

          <p className="text-base lg:text-lg xl:text-xl xl:text-[#FFFFFF] text-[#222222] text-center leading-relaxed px-4">
            We&apos;ve been building on Shopify since 2018. Over 50 Norwegian
            brands trust us to create stores that convert, scale, and deliver
            results.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full">
          <Link
            href="/contact"
            className="bg-[#1DEFFA] min-w-[286px] text-[#1F1D1D] px-8 py-4 hover:bg-[#1DEFFA]/90 transition-colors text-center w-full sm:w-auto"
          >
            Talk to a Shopify Expert
          </Link>
          <Link
            href="/resources"
            className="bg-white min-w-[286px] text-[#1F1D1D] px-8 py-4 hover:bg-gray-100 transition-colors text-center w-full sm:w-auto"
          >
            View Packages
          </Link>
        </div>
      </div>
    </section>
  )
}
