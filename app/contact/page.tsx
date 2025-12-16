import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import Hero from '@/components/sections/contact/Hero'
import ContactCards from '@/components/sections/contact/ContactCards'
import BookingSection from '@/components/sections/contact/BookingSection'
import MapSection from '@/components/sections/contact/MapSection'
import FAQ from '@/components/sections/contact/FAQ'

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ContactCards />
        <BookingSection />
        <MapSection />
        <FAQ />
        <Footer />
      </main>
    </div>
  )
}
