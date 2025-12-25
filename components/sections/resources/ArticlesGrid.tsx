'use client'

import { useEffect, useState } from 'react'
import ArticleCard from './ArticleCard'

const articles = [
  {
    id: 1,
    title: 'How We Migrated 50,000 Products from Magento to Shopify in 2 Weeks',
    description:
      'A detailed case study of our largest migration project and the lessons we learned.',
    category: 'Migration',
    date: 'Jan 15, 2025',
    readTime: '12 min',
    image: '/images/resources/articles/1.jpg',
    slug: 'migrated-50000-products-magento-shopify',
  },
  {
    id: 2,
    title: 'Shopify POS vs Traditional Retail Systems: Complete Comparison',
    description:
      'Everything you need to know about choosing the right POS system for your retail business.',
    category: 'POS',
    date: 'Jan 10, 2025',
    readTime: '10 min',
    image: '/images/resources/articles/2.png',
    slug: 'shopify-pos-vs-traditional-retail-systems',
  },
  {
    id: 3,
    title: 'AI-Powered Product Recommendations: Increase AOV by 40%',
    description:
      'Learn how to implement AI-driven product recommendations and boost your average order value.',
    category: 'AI & Automation',
    date: 'Jan 8, 2025',
    readTime: '6 min',
    image: '/images/resources/articles/3.jpg',
    slug: 'ai-powered-product-recommendations',
  },
  {
    id: 4,
    title: 'From Zero to 1M NOK: Building a Fashion Brand on Shopify',
    description:
      'A complete case study showing how we helped a Norwegian fashion brand achieve their first million.',
    category: 'Case Studies',
    date: 'Jan 5, 2025',
    readTime: '15 min',
    image: '/images/resources/articles/4.jpg',
    slug: 'zero-to-1m-nok-fashion-brand-shopify',
  },
  {
    id: 5,
    title: 'Complete Guide to Shopify Markets for Nordic E-commerce',
    description:
      'Master multi-market selling with Shopify Markets and expand across the Nordic region.',
    category: 'Shopify Tips',
    date: 'Jan 3, 2025',
    readTime: '9 min',
    image: '/images/resources/articles/5.jpg',
    slug: 'shopify-markets-nordic-ecommerce-guide',
  },
]

export default function ArticlesGrid() {
  const [isXlAndAbove, setIsXlAndAbove] = useState<boolean>(true)

  const fullRowsOfThree = Math.floor(articles.length / 3)
  const remainingCards = articles.length % 3

  const fullRowsArticles = articles.slice(0, fullRowsOfThree * 3)
  const remainingArticles = articles.slice(fullRowsOfThree * 3)

  const getRemainingGridClass = () => {
    if (remainingCards === 0) return ''
    if (remainingCards === 1) return 'grid-cols-1 md:grid-cols-1 lg:grid-cols-1'
    if (remainingCards === 2) return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-2'
    return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
  }

  useEffect(() => {
    const updateItemsPerPage = () => {
      const width = window.innerWidth
      setIsXlAndAbove(width >= 1280)
    }

    updateItemsPerPage()

    window.addEventListener('resize', updateItemsPerPage)

    return () => window.removeEventListener('resize', updateItemsPerPage)
  }, [])

  return (
    <section className="bg-white py-16 lg:py-24">
      {isXlAndAbove && (
        <>
          {fullRowsOfThree > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-0">
              {fullRowsArticles.map((article, index) => (
                <ArticleCard key={article.id || index} article={article} />
              ))}
            </div>
          )}

          {remainingCards > 0 && (
            <div className={`grid ${getRemainingGridClass()}`}>
              {remainingArticles.map((article, index) => (
                <ArticleCard
                  key={article.id || fullRowsOfThree * 3 + index}
                  article={article}
                />
              ))}
            </div>
          )}
        </>
      )}

      {!isXlAndAbove && (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mb-0">
          {articles.map((article, index) => (
            <ArticleCard
              key={article.id || fullRowsOfThree * 3 + index}
              article={article}
            />
          ))}
        </div>
      )}

      {/* Load More Button */}
      <div className="text-center mt-12">
        <button className="bg-[#03C1CA] text-white px-8 py-3 lg:px-10 lg:py-4 font-semibold hover:bg-[#03a8b0] transition-colors">
          Load More Articles
        </button>
      </div>
    </section>
  )
}
