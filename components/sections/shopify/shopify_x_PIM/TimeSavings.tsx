'use client'

interface SavingsCard {
  title: string
  description: string
  hours: string
}

const savingsCards: SavingsCard[] = [
  {
    title: 'Product Uploads',
    description: 'Reduce new product creation time by 70-80% through batch imports and templates',
    hours: '5-10',
  },
  {
    title: 'Content Updates',
    description: 'Make catalog-wide changes in minutes instead of days with bulk editing tools',
    hours: '4-8',
  },
  {
    title: 'Data Enrichment',
    description: 'Cut product enrichment time by 40-50% using automation and bulk editing features',
    hours: '6-10',
  },
  {
    title: 'Channel Expansion',
    description: 'Add new sales channels without duplicating data management efforts',
    hours: '3-6',
  },
  {
    title: 'Team Collaboration',
    description: 'Eliminate endless email threads and spreadsheet sharing with workflow tools',
    hours: '2-5',
  },
  {
    title: 'Error Correction',
    description: 'Identify and fix data issues in one place rather than across multiple platforms',
    hours: '2-4',
  },
]

export default function TimeSavings() {
  return (
    <section className="bg-[#1F1D1D] py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            How Much Time Can a PIM System Save?
          </h2>
          <p className="text-base lg:text-lg text-white/80 max-w-5xl mx-auto">
            The time-saving benefits of implementing a PIM system for your Shopify store are substantial and affect multiple aspects of your operations:
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto mb-12">
          {savingsCards.map((card, index) => (
            <div
              key={index}
              className="bg-[#2A2828] p-6 lg:p-8"
            >
              <h3 className="text-lg lg:text-xl font-semibold text-white mb-3 text-center">
                {card.title}
              </h3>
              <p className="text-sm lg:text-base text-white/70 text-center mb-4">
                {card.description}
              </p>
              <p className="text-[#03C1CA] font-semibold text-center">
                Hours saved per week: {card.hours}
              </p>
            </div>
          ))}
        </div>

        {/* Summary Banner */}
        <div className="bg-[#2A2828] p-6 lg:p-8 max-w-5xl mx-auto text-center">
          <h3 className="text-xl lg:text-2xl font-bold text-white mb-4">
            Total Time Savings: 20-30+ Hours Per Week
          </h3>
          <p className="text-sm lg:text-base text-white/70">
            For a typical mid-sized Shopify merchant, this translates to approximately 1,200+ hours saved annually—equivalent to more than half a full-time position that can be redirected to growth-focused activities.
          </p>
        </div>
      </div>
    </section>
  )
}

