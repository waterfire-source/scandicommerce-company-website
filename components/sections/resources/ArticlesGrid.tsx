'use client'

import { useEffect, useState } from 'react'
import ArticleCard from './ArticleCard'
import { articles as allArticles } from '@/lib/articles'

// Transform articles from lib format to ArticleCard format
const articles = allArticles.map((article) => ({
  id: article.id,
  title: article.title,
  description: article.description,
  category: article.category,
  date: article.date,
  readTime: article.readTime.replace(' read', ''),
  image: article.image,
  slug: article.slug,
}))

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
