'use client'

import React from 'react'
import Link from 'next/link'
import { HiXMark } from 'react-icons/hi2'

interface PainPointsData {
  painPointsTitle?: {
    text?: string
    highlight?: string
  }
  painPointsItems?: Array<{
    text: string
  }>
  painPointsBottomText?: string
  painPointsCta?: {
    text?: string
    url?: string
  }
}

interface PainPointsProps {
  painPoints?: PainPointsData
}

export default function PainPoints({ painPoints }: PainPointsProps) {
  // Content variables from Sanity
  const titleText = painPoints?.painPointsTitle?.text
  const titleHighlight = painPoints?.painPointsTitle?.highlight
  const items = painPoints?.painPointsItems
  const bottomText = painPoints?.painPointsBottomText
  const ctaText = painPoints?.painPointsCta?.text
  const ctaUrl = painPoints?.painPointsCta?.url

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
    <section className="relative bg-gray-50 py-16 lg:py-24 overflow-hidden">
      <div
        className="absolute top-0 left-1/4 w-32 h-32 rounded-full opacity-20 -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(3, 193, 202, 0.3) 0%, transparent 70%)',
          filter: 'blur(20px)',
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-56">
        {titleText && (
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight px-2">
              {renderTitle()}
            </h2>
          </div>
        )}

        {items && items.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16 lg:mb-20">
            {items.map((point, index) => (
              <div
                key={index}
                className="bg-white p-4 sm:p-6 shadow-md hover:shadow-lg transition-shadow flex flex-col items-center justify-center gap-3 sm:gap-4 min-h-[140px] sm:h-40"
              >
                <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-teal rounded-full flex-shrink-0">
                  <HiXMark className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <p className="text-[#565454] font-semibold text-xs sm:text-sm text-center leading-tight">
                  {point.text}
                </p>
              </div>
            ))}
          </div>
        )}

        {bottomText && (
          <div className="text-center mb-4 sm:mb-6">
            <p className="text-base sm:text-lg lg:text-xl text-gray-900">
              {bottomText}
            </p>
          </div>
        )}

        {ctaText && ctaUrl && (
          <div className="text-center">
            <Link
              href={ctaUrl}
              className="inline-flex items-center gap-2 text-defaultText font-semibold text-base sm:text-lg hover:text-teal-dark transition-colors"
            >
              {ctaText}
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
