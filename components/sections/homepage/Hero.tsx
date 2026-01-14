'use client'

import React from 'react'
import Link from 'next/link'
import ServiceCard from '@/components/ui/ServiceCard'
import LiquidBlob from '@/components/ui/LiquidBlob'

interface HeroData {
  heroBadge?: string
  heroTitle?: {
    text?: string
    highlight?: string
  }
  heroDescription?: string
  heroButtons?: Array<{
    text: string
    link: string
    variant?: 'primary' | 'secondary'
  }>
  heroTagline?: string
  heroPackages?: Array<{
    title: string
    price?: string
  }>
}

interface HeroProps {
  hero?: HeroData
}

export default function Hero({ hero }: HeroProps) {
  // Content variables from Sanity
  const badge = hero?.heroBadge
  const titleText = hero?.heroTitle?.text
  const titleHighlight = hero?.heroTitle?.highlight
  const description = hero?.heroDescription
  const buttons = hero?.heroButtons
  const tagline = hero?.heroTagline
  const packages = hero?.heroPackages

  // Helper to render title with highlight
  const renderTitle = () => {
    if (!titleText) return null
    if (!titleHighlight || !titleText.includes(titleHighlight)) {
      return titleText
    }
    const parts = titleText.split(titleHighlight)
    return (
      <>
        {parts[0]}
        <span className="text-teal">{titleHighlight}</span>
        {parts[1]}
      </>
    )
  }

  return (
    <section className="relative bg-[#F8F8F8] py-16 lg:py-24 overflow-hidden min-h-[calc(100vh-80px)] flex items-center justify-center">
      <LiquidBlob
        page="homepage"
        rotation={10}
        className="top-[-5%] right-[-10%] w-[75%] h-[110%] hidden lg:block"
        enableMouseFollow={true}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 lg:gap-16">
          <div className="relative space-y-14 w-full lg:w-3/5">

            {badge && (
              <div
                className="inline-block px-5 py-4 shadow-button relative z-10"
                style={{ backgroundColor: 'rgba(29, 239, 250, 0.102)' }}
              >
                <span className="text-sm font-bold text-defaultText uppercase tracking-wide">
                  {badge}
                </span>
              </div>
            )}

            {titleText && (
              <h1 className="text-[32px] sm:text-[42px] md:text-[48px] lg:text-[64px] font-bold text-gray-900 leading-[130%] tracking-[0%] pr-0 sm:pr-8 lg:pr-[78px] relative z-10">
                {renderTitle()}
              </h1>
            )}

            {description && (
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed pr-0 sm:pr-8 lg:pr-12 relative z-10">
                {description}
              </p>
            )}

            {buttons && buttons.length > 0 && (
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-7 relative z-10">
                {buttons.map((button, index) => (
                  <Link
                    key={index}
                    href={button.link || '#'}
                    className={`px-8 sm:px-[53px] py-4 sm:py-[18px] font-semibold transition-colors shadow-button text-center ${
                      button.variant === 'primary' || index === 0
                        ? 'bg-teal text-white hover:bg-teal-dark'
                        : 'bg-white text-gray-900'
                    }`}
                  >
                    {button.text}
                  </Link>
                ))}
              </div>
            )}

            {tagline && (
              <p className="text-sm text-gray-500 relative z-10">
                {tagline}
              </p>
            )}
          </div>

          {packages && packages.length > 0 && (
            <div className="space-y-4 w-full lg:w-2/5 z-10">
              {packages.map((pkg, index) => (
                <ServiceCard
                  key={index}
                  title={pkg.title}
                  price={pkg.price || ''}
                  isOdd={index % 2 === 0}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
