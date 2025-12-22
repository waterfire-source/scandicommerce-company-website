interface ProcessPhase {
  week: string
  title: string
  activities: string[]
}

const phases: ProcessPhase[] = [
  {
    week: 'Week 1',
    title: 'Built for Commerce',
    activities: [
      'Current platform analysis',
      'Data inventory',
      'URL mapping',
      'Risk assessment',
    ],
  },
  {
    week: 'Week 2-4',
    title: 'Build & Migrate',
    activities: [
      'Shopify setup',
      'Theme development',
      'Data migration',
      'Integration setup',
    ],
  },
  {
    week: 'Week 5',
    title: 'Testing',
    activities: [
      'Functionality testing',
      'Data validation',
      'Performance testing',
      'User acceptance',
    ],
  },
  {
    week: 'Week 6',
    title: 'Launch',
    activities: ['Final preparations', 'DNS cutover', 'Monitoring', 'Support'],
  },
]

export default function MigrationProcess() {
  return (
    <section className="bg-white py-16 lg:py-[170px]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#222222] mb-4">
            Our migration process
          </h2>
          <p className="text-base lg:text-lg text-[#565454]">
            Typical 6-week timeline for standard migrations
          </p>
        </div>

        {/* Process Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {phases.map((phase, index) => (
            <div
              key={index}
              className="bg-[#F8F8F8] rounded-sm p-6 lg:p-8 shadow-md"
            >
              <div className="text-[#03C1CA] text-sm lg:text-base font-semibold mb-3">
                {phase.week}
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-[#222222] mb-4 lg:mb-6">
                {phase.title}
              </h3>
              <ul className="space-y-2 lg:space-y-3">
                {phase.activities.map((activity, activityIndex) => (
                  <li
                    key={activityIndex}
                    className="text-sm lg:text-base text-[#565454] flex items-start"
                  >
                    <span className="mr-2 text-[#565454]">•</span>
                    {activity}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
