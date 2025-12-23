interface UseCase {
  title: string
  description: string
}

const useCases: UseCase[] = [
  {
    title: 'Omnichannel Retail',
    description:
      'Seamlessly blend online and offline shopping experiences for your customers',
  },
  {
    title: 'Event Sales',
    description:
      'Sell at markets, pop-ups, and events with reliable mobile POS',
  },
  {
    title: 'Showroom Model',
    description: 'Display in-store, fulfill online with integrated inventory',
  },
]

export default function PerfectFor() {
  return (
    <section className="bg-[#F8F8F8] py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#222222] mb-4">
            Perfect for
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className={`flex flex-col items-center text-center px-6 lg:px-8 lg:py-8 py-4 lg:border-r border-[#565454] ${
                index === 0 ? 'lg:border-l border-[#565454]' : ''
              }`}
            >
              <h3 className="text-xl sm:text-2xl xl:text-[32px] font-bold text-[#03C1CA] mb-4 lg:mb-7">
                {useCase.title}
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-[#565454]">
                {useCase.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
