'use client'

import { useState } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/shopify/shopify_TCO_calculator/Hero'
import CalculatorForm from '@/components/sections/shopify/shopify_TCO_calculator/CalculatorForm'

export default function ShopifyTCOCalculatorPage() {
  const [selectedPlatform, setSelectedPlatform] = useState<string>('WooCommerce')

  const handlePlatformSelect = (platform: string) => {
    setSelectedPlatform(platform)
    // Scroll to calculator form
    const formElement = document.getElementById('calculator-form')
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero onPlatformSelect={handlePlatformSelect} />
        <div id="calculator-form">
          <CalculatorForm selectedPlatform={selectedPlatform} />
        </div>
      </main>
      <Footer />
    </div>
  )
}
