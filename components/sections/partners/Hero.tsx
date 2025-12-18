import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative bg-[#F8F8F8] py-16 lg:py-24 overflow-hidden min-h-[calc(100vh-80px)] flex items-center justify-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:w-3/4 w-[95%] h-[70%]">
        <Image
          src="/images/work/hero/animation1.png"
          alt="animation1"
          fill
          className="w-full h-full"
        />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:w-[80%] w-[95%] h-[70%]">
        <Image
          src="/images/work/hero/animation2.png"
          alt="animation2"
          fill
          className="w-full h-full"
        />
      </div>
      <div className="absolute top-[35%] left-[32%] xl:block hidden w-40 h-40 rounded-full bg-[#1DEFFA33]"></div>
      <div className="absolute bottom-[44%] right-[32%] xl:block hidden w-[60px] h-[60px] rounded-full bg-[#1DEFFA33]"></div>
      <div className="container flex flex-col justify-center items-center mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-[960px]">
        <h1 className=" text-xl sm:text-4xl lg:text-5xl xl:text-[64px] font-bold text-center mb-4 sm:mb-6">
          <span className="xl:text-[#FFFFFF] text-[#222222] leading-[130%]">
            Partnering with the tools that
          </span>{' '}
          <span className="text-[#1DEFFA] leading-[130%]">grow your store</span>
        </h1>
        <p className="text-xs sm:text-base lg:text-lg xl:text-xl xl:text-[#FFFFFF] text-[#222222] text-center leading-relaxed px-6">
          We&apos;re certified partners with the best e-commerce tools. These
          partnerships mean better pricing, priority support, and deeper
          integrations for your store.
        </p>
      </div>
    </section>
  )
}
