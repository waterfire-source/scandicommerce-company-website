import Link from 'next/link'

export default function ReadyForOmnichannel() {
  return (
    <section className="bg-[#03C1CA] py-16 lg:py-[170px]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center flex flex-col items-center justify-start lg:gap-[91px] gap-16">
          <div className="flex flex-col items-center justify-start lg:gap-7 gap-4">
            <h2 className="lg:text-[48px] sm:text-4xl text-3xl font-bold text-white mb-4 lg:mb-6">
              Ready for omnichannel?
            </h2>

            <p className="lg:text-[24px] sm:text-lg text-base text-white">
              Let's discuss how Shopify POS fits your retail strategy
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-block bg-white text-[#1F1D1D] px-[30px] sm:px-[50px] py-3 lg:px-[80px] lg:py-[18px] font-semibold md:text-base text-sm hover:bg-gray-100 "
          >
            Book a Call
          </Link>
        </div>
      </div>
    </section>
  )
}
