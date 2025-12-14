'use client'

import React from 'react'

interface Step {
  number: number
  title: string
  description: string
}

const steps: Step[] = [
  {
    number: 1,
    title: 'Browse services',
    description: 'Check our packages with clear pricing',
  },
  {
    number: 2,
    title: 'Choose your package',
    description: 'Pick what fits your needs',
  },
  {
    number: 3,
    title: 'Book discovery call',
    description: '15 minutes to align on details',
  },
  {
    number: 4,
    title: 'Build and launch',
    description: 'We execute, you review, we launch',
  },
]

export default function HowWeWork() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16 relative">
          <div
            className="absolute top-0 right-1/4 w-32 h-32 rounded-full opacity-20 -z-10"
            style={{
              background: 'radial-gradient(circle, rgba(3, 193, 202, 0.3) 0%, transparent 70%)',
              filter: 'blur(20px)',
            }}
          />
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">
            How we work
          </h2>
          <p className="text-lg text-gray-600">
            Simple, transparent, and effective
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-teal rounded-full mx-auto mb-6">
                <span className="text-2xl font-bold text-white">{step.number}</span>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>

              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

