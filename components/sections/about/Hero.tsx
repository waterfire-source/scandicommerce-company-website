import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative bg-[#F8F8F8] py-16 lg:py-24 overflow-hidden min-h-[calc(100vh-80px)] flex items-center justify-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 xl:w-2/3 md:w-3/4 w-[95%] h-[70%]">
        <Image
          src="/images/about/hero/animation1.png"
          alt="animation1"
          fill
          className="w-full h-full"
        />
      </div>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 xl:w-[80%] md:w-[90%] w-[95%] h-[70%]">
        <Image
          src="/images/about/hero/animation2.png"
          alt="animation2"
          fill
          className="w-full h-full"
        />
      </div>
      <div className="absolute top-[35%] left-[25%] xl:block hidden w-40 h-40 rounded-full bg-[#1DEFFA33]"></div>
      <div className="absolute bottom-[44%] right-[32%] xl:block hidden w-[60px] h-[60px] rounded-full bg-[#1DEFFA33]"></div>
      <div className="container flex flex-col justify-center items-center mx-auto px-4 sm:px-6 lg:px-8 relative z-10 gap-[42px]">
        <div className="flex flex-col justify-start items-center gap-[53px] sm:w-3/4 2xl:w-1/2 w-full">
          {/* Main Headline */}
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-center mb-4 sm:mb-6">
            <span className="xl:text-[#FFFFFF] text-[#222222]">
              We make Shopify feel like it was
            </span>{' '}
            <span className="text-[#1DEFFA]">built for you</span>
          </h1>

          {/* Description */}
          <p className="text-base lg:text-lg xl:text-xl xl:text-[#FFFFFF] text-[#222222] text-center leading-relaxed px-4">
            A Norwegian Shopify agency that treats clients like customers, not
            just projects. We build e-commerce solutions for brands ready to
            grow.
          </p>
        </div>

        {/* Statistics */}
        <div className="flex flex-row gap-3 sm:gap-12 lg:gap-16 items-start justify-center bg-white sm:px-8 px-3 py-4">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-[#03C1CA] mb-2">
              50+
            </div>
            <div className="text-xs sm:text-sm md:text-base xl:text-lg text-[#565454]">
              Norwegian brands served
            </div>
          </div>

          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-[#03C1CA] mb-2">
              6
            </div>
            <div className="text-xs sm:text-sm md:text-base xl:text-lg text-[#565454]">
              Years Shopify-only
            </div>
          </div>

          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-[#03C1CA] mb-2">
              €12M+
            </div>
            <div className="text-xs sm:text-sm md:text-base xl:text-lg text-[#565454]">
              Revenue generated for clients
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
