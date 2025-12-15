import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import Hero from '@/components/sections/about/Hero'
import MeetTheTeam from '@/components/sections/about/MeetTheTeam'
import OurStory from '@/components/sections/about/OurStory'
import OurValues from '@/components/sections/about/OurValues'
import TrustedPartnerships from '@/components/sections/about/TrustedPartnerships'
import WhyDifferent from '@/components/sections/about/WhyDifferent'
import WantWorkWithUs from '@/components/sections/about/WantWorkWithUs'

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <WhyDifferent />
        <OurStory />
        <OurValues />
        <MeetTheTeam />
        <TrustedPartnerships />
        <WantWorkWithUs />
        <Footer />
      </main>
    </div>
  )
}
