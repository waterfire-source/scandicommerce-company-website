import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import CaseStudies from '@/components/sections/work/CaseStudies'
import CTA from '@/components/sections/work/CTA'
import Hero from '@/components/sections/work/Hero'

export default function Work() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <CaseStudies />
        <CTA />
        <Footer />
      </main>
    </div>
  )
}
