import CaseStudy from './CaseStudy'

const caseStudies = [
  {
    title: 'Nordic Fashion Co.',
    category: 'Fashion & Apparel',
    tags: ['Migration', 'Growth Package'],
    challenge: 'Slow WooCommerce site with poor mobile experience',
    solution: 'Migrated to Shopify with custom theme and CRO optimization',
    results: [
      { value: '+156%', label: 'Conversion rate' },
      { value: '-68%', label: 'Page load time' },
      { value: '+2.1M kr', label: 'Additional revenue' },
    ],
    image: '/images/work/caseStudies/nordic.png',
    imageAlt: 'Nordic Fashion Co. store interior',
  },
  {
    title: 'Oslo Electronics',
    category: 'Consumer Electronics',
    tags: ['Premium Package', 'B2B'],
    challenge: 'Complex product catalog with poor search and filtering',
    solution: 'Custom Shopify Plus build with advanced search and B2B portal',
    results: [
      { value: '+89%', label: 'Search usage' },
      { value: '3x', label: 'AOV increase' },
      { value: '+127%', label: 'B2B orders' },
    ],
    image: '/images/work/caseStudies/oslo.jpg',
    imageAlt: 'Oslo Electronics store',
  },
  {
    title: 'Bergen Home Goods',
    category: 'Home & Living',
    tags: ['Foundation Package', 'Launch'],
    challenge: 'Launching D2C brand from scratch',
    solution: 'Foundation package with brand-focused design and SEO',
    results: [
      { value: '€450k', label: 'Year 1 revenue' },
      { value: '2.8%', label: 'Conversion rate' },
      { value: '12k', label: 'Email subscribers' },
    ],
    image: '/images/work/caseStudies/bergen.png',
    imageAlt: 'Bergen Home Goods showroom',
  },
]

export default function CaseStudies() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {caseStudies.map((study, index) => (
          <CaseStudy
            key={index}
            {...study}
            imagePosition={index % 2 === 0 ? 'left' : 'right'}
          />
        ))}
      </div>
    </section>
  )
}
