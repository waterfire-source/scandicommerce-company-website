export default function Hero() {
  return (
    <section className="relative bg-[#F8F8F8] py-16 lg:py-24 overflow-hidden min-h-[calc(100vh-80px)] flex items-center justify-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 xl:w-1/2 md:w-3/4 w-[95%] h-7/10">
        <img
          src="/images/work/hero/animation1.png"
          alt="animation1"
          className="w-full h-full"
        />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 xl:w-[55%] md:w-[80%] w-[95%] h-7/10">
        <img
          src="/images/work/hero/animation2.png"
          alt="animation2"
          className="w-full h-full"
        />
      </div>
      <div className="absolute top-[35%] left-[32%] xl:block hidden w-40 h-40 rounded-full bg-[#1DEFFA1A]"></div>
      <div className="absolute bottom-[44%] right-[32%] xl:block hidden w-[60px] h-[60px] rounded-full bg-[#1DEFFA1A]"></div>
      <div className="container flex flex-col justify-center items-center mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-center mb-4 sm:mb-6">
          <span className="text-[#222222]">Our work speaks</span>{' '}
          <span className="text-[#03C1CA]">for itself</span>
        </h1>
        <p className="text-base lg:text-lg xl:text-xl text-[#565454] text-center max-w-xl sm:max-w-2xl leading-relaxed px-4">
          Transparent pricing, clear deliverables, and no surprises. Select the
          package that fits your needs.
        </p>
      </div>
    </section>
  )
}
