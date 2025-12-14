import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import TrustedBy from '@/components/sections/TrustedBy'
import PainPoints from '@/components/sections/PainPoints'
import ServicesPackaged from '@/components/sections/ServicesPackaged'
import Results from '@/components/sections/Results'
import HowWeWork from '@/components/sections/HowWeWork'
import Partners from '@/components/sections/Partners'
import CTA from '@/components/sections/CTA'

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

