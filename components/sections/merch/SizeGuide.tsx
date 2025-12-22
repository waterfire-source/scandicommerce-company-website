'use client'

interface SizeData {
  size: string
  chest: string
  length: string
  sleeve: string
}

interface SizeGuideProps {
  sizes?: SizeData[]
}

const defaultSizes: SizeData[] = [
  { size: 'XS', chest: '86-91 cm', length: '66 cm', sleeve: '81 cm' },
  { size: 'S', chest: '91-97 cm', length: '68 cm', sleeve: '84 cm' },
  { size: 'M', chest: '97-102 cm', length: '71 cm', sleeve: '86 cm' },
  { size: 'L', chest: '102-107 cm', length: '73 cm', sleeve: '89 cm' },
  { size: 'XL', chest: '107-112 cm', length: '76 cm', sleeve: '91 cm' },
  { size: 'XXL', chest: '112-117 cm', length: '78 cm', sleeve: '94 cm' },
]

export default function SizeGuide({ sizes = defaultSizes }: SizeGuideProps) {
  return (
    <section className="bg-white py-12 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 lg:mb-12">
          <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-[#222222] mb-4">
            Size Guide
          </h2>
          <p className="text-[#666666]">
            All measurements in centimeters. Need help choosing?{' '}
            <button className="text-[#666666] underline hover:text-[#03C1CA] transition-colors">
              Contact Support
            </button>
          </p>
        </div>

        {/* Table */}
        <div className="max-w-4xl mx-auto overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-[#E5E5E5]">
                <th className="text-left py-4 px-4 lg:px-6 text-sm font-medium text-[#666666]">
                  Size
                </th>
                <th className="text-left py-4 px-4 lg:px-6 text-sm font-medium text-[#666666]">
                  Chest
                </th>
                <th className="text-left py-4 px-4 lg:px-6 text-sm font-medium text-[#666666]">
                  Length
                </th>
                <th className="text-left py-4 px-4 lg:px-6 text-sm font-medium text-[#666666]">
                  Sleeve
                </th>
              </tr>
            </thead>
            <tbody>
              {sizes.map((sizeData, index) => (
                <tr
                  key={sizeData.size}
                  className={`border-b border-[#E5E5E5] ${
                    index % 2 === 0 ? 'bg-[#FAFAFA]' : 'bg-white'
                  }`}
                >
                  <td className="py-4 px-4 lg:px-6 text-sm text-[#222222] font-medium">
                    {sizeData.size}
                  </td>
                  <td className="py-4 px-4 lg:px-6 text-sm text-[#666666]">
                    {sizeData.chest}
                  </td>
                  <td className="py-4 px-4 lg:px-6 text-sm text-[#666666]">
                    {sizeData.length}
                  </td>
                  <td className="py-4 px-4 lg:px-6 text-sm text-[#666666]">
                    {sizeData.sleeve}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
