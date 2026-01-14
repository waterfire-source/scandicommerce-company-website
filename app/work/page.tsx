import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import CaseStudies from '@/components/sections/work/CaseStudies'
import CTA from '@/components/sections/work/CTA'
import Hero from '@/components/sections/work/Hero'
import { client } from '@/sanity/lib/client'
import { workPageQuery } from '@/sanity/lib/queries'

export const dynamic = 'force-dynamic'
export const revalidate = 0

interface WorkPageData {
  _id: string
  pageTitle?: string
  slug?: string
  hero?: {
    heroTitle?: {
      text?: string
      highlight?: string
    }
    heroDescription?: string
  }
  caseStudies?: {
    studies?: {
      title?: string
      category?: string
      tags?: string[]
      challenge?: string
      solution?: string
      results?: {
        value?: string
        label?: string
      }[]
      imageUrl?: string
      imageAlt?: string
      link?: string
    }[]
  }
  cta?: {
    title?: string
    description?: string
    buttonText?: string
    buttonLink?: string
  }
  seo?: {
    metaTitle?: string
    metaDescription?: string
  }
}

export default async function Work() {
  const pageData: WorkPageData = await client.fetch(
    workPageQuery,
    {},
    { next: { revalidate: 0 } }
  )

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero hero={pageData?.hero} />
        <CaseStudies caseStudies={pageData?.caseStudies} />
        <CTA cta={pageData?.cta} />
        <Footer />
      </main>
    </div>
  )
}
