import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/homepage/Hero'
import TrustedBy from '@/components/sections/homepage/TrustedBy'
import PainPoints from '@/components/sections/homepage/PainPoints'
import ServicesPackaged from '@/components/sections/homepage/ServicesPackaged'
import Results from '@/components/sections/homepage/Results'
import HowWeWork from '@/components/sections/homepage/HowWeWork'
import Partners from '@/components/sections/homepage/Partners'
import CTA from '@/components/sections/homepage/CTA'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <TrustedBy />
        <PainPoints />
        <ServicesPackaged />
        <Results />
        <HowWeWork />
        <Partners />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
