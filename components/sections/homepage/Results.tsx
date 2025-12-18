'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface CaseStudy {
  clientName: string
  image: string
  percentage: string
  metric: string
  description: string
  link: string
}

const caseStudies: CaseStudy[] = [
  {
    clientName: 'Client A',
    image: '/images/case-studies/client-a.png',
    percentage: '+156%',
    metric: 'Conversion rate',
    description: 'Complete redesign and CRO optimization',
    link: '/case-studies/client-a',
  },
  {
    clientName: 'Client B',
    image: '/images/case-studies/client-b.png',
    percentage: '+156%',
    metric: 'Conversion rate',
    description: 'Complete redesign and CRO optimization',
    link: '/case-studies/client-b',
  },
  {
    clientName: 'Client C',
    image: '/images/case-studies/client-c.png',
    percentage: '+156%',
    metric: 'Conversion rate',
    description: 'Complete redesign and CRO optimization',
    link: '/case-studies/client-c',
  },
]

export default function Results() {
  return (
    <section className="bg-black py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16 relative">
          <div
            className="absolute top-0 left-1/4 w-32 h-32 rounded-full opacity-20 -z-10"
            style={{
              background: 'radial-gradient(circle, rgba(3, 193, 202, 0.3) 0%, transparent 70%)',
              filter: 'blur(20px)',
            }}
          />
          <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight mb-4">
            Results, not promises
          </h2>
          <p className="text-lg text-gray-400">
            Pick what you need. Know what you pay. Get to work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-colors"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="relative w-16 h-16 rounded-lg overflow-hidden">
                  <Image
                    src={study.image}
                    alt={study.clientName}
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="text-sm text-gray-400">{study.clientName}</span>
              </div>

              <div className="mb-4">
                <p className="text-4xl font-bold text-white mb-2">{study.percentage}</p>
                <p className="text-white">{study.metric}</p>
              </div>

              <p className="text-gray-400 mb-6">{study.description}</p>

              <Link
                href={study.link}
                className="inline-flex items-center gap-2 text-teal font-semibold hover:text-teal-light transition-colors"
              >
                Read case study
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
          ))}
        </div>
      </div>
    </section>
  )
}

