interface Platform {
  name: string
  duration: string
}

const platforms: Platform[] = [
  {
    name: 'WooCommerce',
    duration: 'Typical: 4-6 weeks',
  },
  {
    name: 'Magento',
    duration: 'Typical: 6-8 weeks',
  },
  {
    name: 'BigCommerce',
    duration: 'Typical: 4-6 weeks',
  },
  {
    name: 'Custom Platform',
    duration: 'Typical: 8-12 weeks',
  },
]

export default function Platforms() {
  return (
    <section className="bg-white py-16 lg:py-[170px]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F1D1D] text-center mb-12 lg:mb-16">
          We migrate from any platform
        </h2>

        {/* Platform Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className="bg-[#F8F8F8] p-6 lg:p-8 text-center shadow-md"
            >
              <h3 className="text-xl lg:text-2xl font-bold text-[#565454] mb-3">
                {platform.name}
              </h3>
              <p className="text-base lg:text-lg text-[#565454]">
                {platform.duration}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
