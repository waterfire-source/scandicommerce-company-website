import ArticlesGrid from '@/components/sections/resources/ArticlesGrid'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import FeaturedArticle from '@/components/sections/resources/FeaturedArticle'
import Hero from '@/components/sections/resources/Hero'
import GetShopifyInsitesDelivered from '@/components/sections/resources/GetShopifyInsitesDelivered'
import { client } from '@/sanity/lib/client'
import { blogPageQuery } from '@/sanity/lib/queries'

export const dynamic = 'force-dynamic'
export const revalidate = 0

interface BlogPageData {
  _id: string
  pageTitle?: string
  slug?: string
  hero?: {
    heroTitle?: {
      highlight?: string
      text?: string
    }
    heroDescription?: string
    searchPlaceholder?: string
  }
  featuredArticle?: {
    imageUrl?: string
    tags?: {
      label?: string
      isPrimary?: boolean
    }[]
    title?: string
    description?: string
    date?: string
    readTime?: string
    link?: string
    buttonText?: string
  }
  articlesGrid?: {
    articles?: {
      title?: string
      description?: string
      category?: string
      date?: string
      readTime?: string
      imageUrl?: string
      slug?: string
    }[]
    loadMoreButtonText?: string
  }
  newsletterCta?: {
    title?: string
    description?: string
    emailPlaceholder?: string
    buttonText?: string
  }
  seo?: {
    metaTitle?: string
    metaDescription?: string
  }
}

export default async function Resources() {
  const pageData: BlogPageData = await client.fetch(
    blogPageQuery,
    {},
    { next: { revalidate: 0 } }
  )

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero hero={pageData?.hero} />
        <FeaturedArticle featuredArticle={pageData?.featuredArticle} />
        <ArticlesGrid articlesGrid={pageData?.articlesGrid} />
        <GetShopifyInsitesDelivered newsletterCta={pageData?.newsletterCta} />
        <Footer />
      </main>
    </div>
  )
}
