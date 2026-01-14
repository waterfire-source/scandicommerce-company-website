'use client'

import React from 'react'
import Link from 'next/link'

interface CTAData {
  title?: string
  subtitle?: string
  buttons?: Array<{
    text: string
    link: string
    variant?: 'primary' | 'secondary'
  }>
}

interface CTAProps {
  data?: CTAData
}

export default function CTA({ data }: CTAProps) {
  // Content variables from Sanity
  const title = data?.title
  const subtitle = data?.subtitle
  const buttons = data?.buttons

  return (
    <section className="relative bg-teal py-16 lg:py-44 overflow-hidden">
      <div
        className="absolute top-0 left-1/4 w-64 h-64 rounded-full opacity-20 -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, transparent 70%)',
          filter: 'blur(30px)',
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        <div className="text-center">
          {title && (
            <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight mb-4">
              {title}
            </h2>
          )}

          {subtitle && (
            <p className="text-lg text-gray-100 mb-8 lg:mb-12">
              {subtitle}
            </p>
          )}

          {buttons && buttons.length > 0 && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {buttons.map((button, index) => (
                <Link
                  key={index}
                  href={button.link || '#'}
                  className={`px-8 py-3 font-semibold transition-colors text-center ${
                    button.variant === 'primary' || index === 0
                      ? 'bg-gray-900 text-white hover:bg-gray-800'
                      : 'bg-white text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  {button.text}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
