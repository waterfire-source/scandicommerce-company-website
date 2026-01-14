import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/services/migrate/Hero'
import Platforms from '@/components/sections/services/migrate/Platforms'
import RisksAndProtection from '@/components/sections/services/migrate/RisksAndProtection'
import MigrationProcess from '@/components/sections/services/migrate/MigrationProcess'
import RealMigrationResults from '@/components/sections/services/migrate/RealMigrationResults'
import MigrationCTA from '@/components/sections/services/migrate/MigrationCTA'
import { client } from '@/sanity/lib/client'
import { migratePageQuery } from '@/sanity/lib/queries'

// Disable caching - always fetch fresh data from Sanity
export const dynamic = 'force-dynamic'
export const revalidate = 0

interface MigratePageData {
  _id: string
  pageTitle: string
  slug: string
  hero?: {
    heroTitle?: {
      text?: string
      highlight?: string
    }
    heroDescription?: string
    heroButtons?: Array<{
      text: string
      link: string
      variant?: string
    }>
  }
  platforms?: {
    platformsTitle?: string
    platformsItems?: Array<{
      name: string
      duration: string
    }>
  }
  risksProtection?: {
    risksTitle?: string
    risksItems?: Array<{
      text: string
    }>
    protectionTitle?: string
    protectionItems?: Array<{
      title: string
      description: string
    }>
  }
  process?: {
    processTitle?: string
    processSubtitle?: string
    processPhases?: Array<{
      week: string
      title: string
      activities: string[]
    }>
  }
  results?: {
    resultsTitle?: string
    resultsItems?: Array<{
      metric: string
      title: string
      description: string
    }>
  }
  cta?: {
    ctaTitle?: string
    ctaDescription?: string
    ctaButtonText?: string
    ctaButtonLink?: string
  }
}

async function getPageData(): Promise<MigratePageData | null> {
  try {
    const data = await client.fetch<MigratePageData>(
      migratePageQuery,
      {},
      { next: { revalidate: 0 } }
    )
    return data
  } catch (error) {
    console.error('Error fetching Migrate page:', error)
    return null
  }
}

export default async function MigratePage() {
  const pageData = await getPageData()

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero hero={pageData?.hero} />
        <Platforms platforms={pageData?.platforms} />
        <RisksAndProtection risksProtection={pageData?.risksProtection} />
        <MigrationProcess process={pageData?.process} />
        <RealMigrationResults results={pageData?.results} />
        <MigrationCTA cta={pageData?.cta} />
        <Footer />
      </main>
    </div>
  )
}
