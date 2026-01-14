'use client'

import LiquidBlob from '@/components/ui/LiquidBlob'
import { Article } from '@/lib/articles'
import { FiUser, FiCalendar, FiClock } from 'react-icons/fi'

interface ArticleHeroProps {
  article: Article
}

export default function ArticleHero({ article }: ArticleHeroProps) {
  // Split title to highlight specific part
  const highlightTitle = () => {
    const parts = article.title.split(article.titleHighlight)
    if (parts.length === 2) {
      return (
        <>
          <span className="text-[#03C1CA]">{article.titleHighlight}</span>
          <span className="text-[#565454]">{parts[1]}</span>
        </>
      )
    }
    return <span className="text-[#565454]">{article.title}</span>
  }

  return (
    <section className="relative bg-[#F8F8F8] py-16 lg:py-24 overflow-hidden min-h-[calc(100vh-80px)] flex items-center">
      {/* Blob Background - same style as homepage hero */}
      <LiquidBlob
        page="homepage"
        rotation={10}
        className="top-[-5%] right-[-10%] w-[75%] h-[110%] hidden lg:block"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="w-full lg:w-3/5">
          {/* Title */}
          <h1 className="text-[32px] sm:text-[42px] md:text-[48px] lg:text-[56px] xl:text-[64px] font-bold leading-[130%] tracking-[0%] mb-10 lg:mb-12">
            {highlightTitle()}
          </h1>

          {/* Meta Information - horizontal row like design */}
          <div className="flex flex-wrap items-center gap-6 md:gap-10 text-[#565454]">
            {/* Author */}
            <div className="flex items-center gap-2">
              <FiUser className="w-5 h-5" />
              <span className="text-sm md:text-base">{article.author.name}</span>
            </div>

            {/* Date */}
            <div className="flex items-center gap-2">
              <FiCalendar className="w-5 h-5" />
              <span className="text-sm md:text-base">{article.date}</span>
            </div>

            {/* Read Time */}
            <div className="flex items-center gap-2">
              <FiClock className="w-5 h-5" />
              <span className="text-sm md:text-base">{article.readTime}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
