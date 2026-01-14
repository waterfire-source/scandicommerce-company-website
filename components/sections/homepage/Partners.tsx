'use client'

import React from 'react'
import Link from 'next/link'

interface PartnersData {
  partnersBadges?: Array<{
    text: string
    link?: string
  }>
  partnersDescription?: string
}

interface PartnersProps {
  partners?: PartnersData
}

export default function Partners({ partners }: PartnersProps) {
  // Content variables from Sanity
  const badges = partners?.partnersBadges
  const description = partners?.partnersDescription

  return (
    <section className="bg-gray-50 py-12 md:py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {badges && badges.length > 0 && (
          <div className="flex flex-col md:grid md:grid-cols-3 max-w-4xl mx-auto mb-8 md:mb-12">
            {badges.map((badge, index) => (
              <Link
                key={index}
                href={badge.link || '#'}
                className="border-t md:border-t-0 md:border-l border-gray-300 py-4 text-center last:border-b md:last:border-b-0 md:last:border-r"
              >
                <span className="text-gray-900 font-semibold text-base md:text-lg hover:text-teal transition-colors">
                  {badge.text}
                </span>
              </Link>
            ))}
          </div>
        )}

        {description && (
          <div className="text-center">
            <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto px-4 md:px-0">
              {description}
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
