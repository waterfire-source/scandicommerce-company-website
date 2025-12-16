import PartnerCard, { Partner } from './PartnerCard'

const partners: Partner[] = [
  {
    id: 1,
    name: 'Shopify Plus',
    category: 'Platform',
    description:
      'Official Shopify Plus partner since 2018. Direct access to Shopify resources and priority support.',
    benefits: [
      'Priority support access',
      'Beta feature access',
      'Direct Shopify contacts',
    ],
    image: '/images/partners/partnerGrid/shopify-plus.jpg',
  },
  {
    id: 2,
    name: 'Klaviyo',
    category: 'Email & SMS',
    description:
      'Certified Klaviyo partner for email marketing, SMS, and customer data management.',
    benefits: [
      'Advanced segmentation',
      'Revenue attribution',
      'Automated flows',
    ],
    image: '/images/partners/partnerGrid/klaviyo.png',
  },
  {
    id: 3,
    name: 'Gorgias',
    category: 'Customer Support',
    description:
      'Helpdesk integration for seamless customer support connected to your store data.',
    benefits: [
      'Unified customer view',
      'Automated responses',
      'Revenue tracking',
    ],
    image: '/images/partners/partnerGrid/gorgias.jpg',
  },
  {
    id: 4,
    name: 'Yotpo',
    category: 'Reviews & UGC',
    description:
      'Product reviews, ratings, and user-generated content to build trust and increase conversions.',
    benefits: ['Review collection', 'SEO-friendly reviews', 'Photo reviews'],
    image: '/images/partners/partnerGrid/yotpo.jpg',
  },
  {
    id: 5,
    name: 'Okendo',
    category: 'Reviews',
    description:
      'Advanced review platform with attributes, surveys, and rich customer insights.',
    benefits: ['Attribute-based reviews', 'Customer surveys', 'Rich insights'],
    image: '/images/partners/partnerGrid/okendo.jpg',
    logo: '/images/partners/partnerGrid/okendo-logo.png',
  },
  {
    id: 6,
    name: 'Stamped',
    category: 'Loyalty',
    description:
      'Loyalty programs and rewards to increase customer lifetime value.',
    benefits: ['Points & rewards', 'Referral programs', 'VIP tiers'],
    image: '/images/partners/partnerGrid/stamped.jpg',
    logo: '/images/partners/partnerGrid/stamped-logo.png',
  },
  {
    id: 7,
    name: 'Nosto',
    category: 'Personalization',
    description:
      'AI-powered personalization for product recommendations and content.',
    benefits: ['Smart recommendations', 'A/B testing', 'Behavioral targeting'],
    image: '/images/partners/partnerGrid/nosto.png',
  },
  {
    id: 8,
    name: 'Algolia',
    category: 'Search',
    description:
      'Lightning-fast search with typo-tolerance and smart merchandising.',
    benefits: ['Instant search', 'Smart ranking', 'Analytics'],
    image: '/images/partners/partnerGrid/algolia.jpg',
  },
]

export default function PartnersGrid() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-6 lg:mb-8">
        {partners.map(partner => (
          <PartnerCard
            key={partner.id}
            partner={partner}
            imageSizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ))}
      </div>
    </section>
  )
}
