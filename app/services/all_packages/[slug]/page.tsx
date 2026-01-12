import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import PackageHero from '@/components/sections/services/all_packages/PackageHero'
import PackageTabs from '@/components/sections/services/all_packages/PackageTabs'
import FrequentlyAddedTogether from '@/components/sections/services/all_packages/FrequentlyAddedTogether'
import CaseStudiesBanner from '@/components/sections/services/all_packages/CaseStudiesBanner'
import { getPackageBySlug } from '@/lib/packages'
import { notFound } from 'next/navigation'

export default async function PackageDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const pkg = getPackageBySlug(slug)

  if (!pkg) {
    notFound()
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <PackageHero pkg={pkg} />
        <PackageTabs pkg={pkg} />
        <FrequentlyAddedTogether />
        <CaseStudiesBanner packageName={pkg.title} />
      </main>
      <Footer />
    </div>
  )
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const pkg = getPackageBySlug(slug)

  if (!pkg) {
    return {
      title: 'Package Not Found | ScandiCommerce',
      description: 'The package you are looking for could not be found.',
    }
  }

  return {
    title: `${pkg.title} Package | ScandiCommerce`,
    description: pkg.description,
  }
}

