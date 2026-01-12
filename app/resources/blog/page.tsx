import ArticlesGrid from '@/components/sections/resources/ArticlesGrid'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import FeaturedArticle from '@/components/sections/resources/FeaturedArticle'
import Hero from '@/components/sections/resources/Hero'
import GetShopifyInsitesDelivered from '@/components/sections/resources/GetShopifyInsitesDelivered'

export default function Resources() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <FeaturedArticle />
        <ArticlesGrid />
        <GetShopifyInsitesDelivered />
        <Footer />
      </main>
    </div>
  )
}
