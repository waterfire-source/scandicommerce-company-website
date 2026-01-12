'use client'

import LiquidBlob from '@/components/ui/LiquidBlob'

const stats = [
  { value: '30%', label: 'Conversion rate' },
  { value: '24H', label: 'Setup time' },
  { value: '∞', label: 'Growth potential' },
]

export default function Hero() {
  return (
    <section className="relative bg-[#F8F8F8] py-16 lg:py-24 overflow-hidden min-h-[calc(100vh-80px)] flex items-center justify-center">
      <LiquidBlob
        page="homepage"
        rotation={0}
        className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] md:w-[120%] lg:w-[115%] xl:w-[110%] h-[130%] hidden lg:block"
        enableMouseFollow={true}
      />

      <div className="absolute top-[35%] left-[25%] xl:block hidden w-40 h-40 rounded-full bg-[#1DEFFA33]"></div>
      <div className="absolute bottom-[44%] right-[32%] xl:block hidden w-[60px] h-[60px] rounded-full bg-[#1DEFFA33]"></div>

      <div className="container flex flex-col justify-center items-center mx-auto px-4 sm:px-6 lg:px-8 relative z-10 gap-[42px]">
        <div className="flex flex-col justify-start items-center gap-8 sm:w-3/4 2xl:w-1/2 w-full">
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-center mb-4 sm:mb-6">
            <span className="xl:text-[#FFFFFF] text-[#222222]">
              Turn Your Online Store into
            </span>{' '}
            <span className="text-[#1DEFFA]">A</span>
            <br />
            <span className="text-[#1DEFFA]">Omnichannel</span>{' '}
            <span className="xl:text-[#FFFFFF] text-[#222222]">
              Empire
            </span>
          </h1>

          <p className="text-base lg:text-lg xl:text-xl xl:text-[#FFFFFF] text-[#222222] text-center leading-relaxed px-4 max-w-2xl">
            Get 20-80% revenue increases with professional Shopify POS setup. We handle everything so you can start selling in-person immediately. No consultations. No endless meetings. Just results.
          </p>
        </div>

        {/* Stats Card */}
        <div className="bg-[#E8FAFA] border border-[#00BFC8]/30 rounded-lg px-8 py-6 mt-4">
          <div className="flex items-center gap-12 lg:gap-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-[#00BFC8] mb-1">
                  {stat.value}
                </div>
                <div className="text-xs lg:text-sm text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

