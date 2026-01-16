'use client'

import { useState, useEffect } from 'react'
import HeaderWrapper from '@/components/layout/HeaderWrapper'
import FooterWrapper from '@/components/layout/FooterWrapper'
import Hero from '@/components/sections/shopify/shopify_TCO_calculator/Hero'
import CalculatorForm from '@/components/sections/shopify/shopify_TCO_calculator/CalculatorForm'
import { client } from '@/sanity/lib/client'
import { shopifyTcoCalculatorPageQuery } from '@/sanity/lib/queries'

interface ShopifyTcoCalculatorPageData {
  _id: string
  pageTitle: string
  slug: string
  hero?: {
    heroTitle?: {
      text?: string
      highlight?: string
    }
    heroDescription?: string
    platforms?: string[]
  }
}

export default function ShopifyTCOCalculatorPage() {
  const [selectedPlatform, setSelectedPlatform] = useState<string>('WooCommerce')
  const [pageData, setPageData] = useState<ShopifyTcoCalculatorPageData | null>(null)

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await client.fetch<ShopifyTcoCalculatorPageData>(
          shopifyTcoCalculatorPageQuery,
          {},
          { next: { revalidate: 0 } }
        )
        setPageData(data)
      } catch (error) {
        console.error('Error fetching TCO Calculator page:', error)
      }
    }
    fetchData()
  }, [])

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
      <HeaderWrapper />
      <main className="flex-grow">
        <Hero hero={pageData?.hero} onPlatformSelect={handlePlatformSelect} />
        <div id="calculator-form">
          <CalculatorForm selectedPlatform={selectedPlatform} />
        </div>
      </main>
      <FooterWrapper />
    </div>
  )
}
