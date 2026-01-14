'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface ResultsData {
  title?: string
  subtitle?: string
  items?: Array<{
    clientImage?: {
      asset?: {
        url?: string
      }
    }
    clientName: string
    stat: string
    metricName?: string
    description?: string
    ctaText?: string
    ctaLink?: string
  }>
}

interface ResultsProps {
  data?: ResultsData
}

export default function Results({ data }: ResultsProps) {
  // Content variables from Sanity
  const title = data?.title
  const subtitle = data?.subtitle
  const items = data?.items

  return (
    <section className="bg-black py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <div className="text-center mb-12 lg:mb-16 relative">
            <div
              className="absolute top-0 left-1/4 w-32 h-32 rounded-full opacity-20 -z-10"
              style={{
                background: 'radial-gradient(circle, rgba(3, 193, 202, 0.3) 0%, transparent 70%)',
                filter: 'blur(20px)',
              }}
            />
            {title && (
              <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg text-gray-400">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {items && items.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {items.map((study, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-colors"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-gray-700">
                    {study.clientImage?.asset?.url ? (
                      <Image
                        src={study.clientImage.asset.url}
                        alt={study.clientName}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-500">
                        <span className="text-2xl">👤</span>
                      </div>
                    )}
                  </div>
                  <span className="text-sm text-gray-400">{study.clientName}</span>
                </div>

                <div className="mb-4">
                  {study.stat && (
                    <p className="text-4xl font-bold text-white mb-2">{study.stat}</p>
                  )}
                  {study.metricName && (
                    <p className="text-white">{study.metricName}</p>
                  )}
                </div>

                {study.description && (
                  <p className="text-gray-400 mb-6">{study.description}</p>
                )}

                {study.ctaLink && (
                  <Link
                    href={study.ctaLink}
                    className="inline-flex items-center gap-2 text-teal font-semibold hover:text-teal-light transition-colors"
                  >
                    {study.ctaText || 'Read case study'}
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
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
