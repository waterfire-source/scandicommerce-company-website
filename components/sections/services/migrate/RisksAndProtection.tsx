import { HiXMark } from 'react-icons/hi2'
import { IoCheckmarkSharp } from 'react-icons/io5'

interface Risk {
  text: string
}

interface Protection {
  title: string
  description: string
}

const risks: Risk[] = [
  { text: 'Lost SEO rankings and traffic' },
  { text: 'Broken product URLs and 404 errors' },
  { text: 'Missing customer data and order history' },
  { text: 'Downtime during migration' },
]

const protections: Protection[] = [
  {
    title: 'SEO Preservation',
    description: 'All URLs mapped, redirects in place, metadata transferred',
  },
  {
    title: 'Zero Downtime',
    description: 'We build in parallel and cutover outside business hours',
  },
  {
    title: 'Complete Data Migration',
    description:
      'Products, customers, orders, and reviews transferred accurately',
  },
  {
    title: 'Testing & QA',
    description: 'Thorough testing before launch to catch any issues',
  },
]

export default function RisksAndProtection() {
  return (
    <section className="bg-[#F8F8F8] py-16 lg:py-[170px]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column: Migration risks we eliminate */}
          <div>
            <h2 className="text-xl sm:text-3xl xl:text-4xl lg:text-start text-center font-bold text-[#1F1D1D] mb-8 lg:mb-12">
              Migration risks we eliminate
            </h2>
            <div className="space-y-4 lg:space-y-6">
              {risks.map((risk, index) => (
                <div
                  key={index}
                  className="bg-white h-[98px] p-6 flex items-center gap-4 backdrop-blur-[10px]"
                >
                  <HiXMark className="w-6 h-6 text-[#000000] flex-shrink-0" />
                  <p className="text-base lg:text-lg text-[#565454]">
                    {risk.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: How we protect your business */}
          <div>
            <h2 className="text-xl sm:text-3xl xl:text-4xl lg:text-start text-center font-bold text-[#1F1D1D] mb-8 lg:mb-12">
              How we protect your business
            </h2>
            <div className="space-y-4 lg:space-y-6">
              {protections.map((protection, index) => (
                <div
                  key={index}
                  className="bg-white h-[98px] p-6 flex items-center gap-4 backdrop-blur-[10px]"
                >
                  <IoCheckmarkSharp className="w-6 h-6 text-[#03C1CA] flex-shrink-0" />
                  <div>
                    <h3 className="text-base lg:text-lg font-bold text-[#565454] mb-1">
                      {protection.title}
                    </h3>
                    <p className="text-sm lg:text-base text-[#565454]">
                      {protection.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
