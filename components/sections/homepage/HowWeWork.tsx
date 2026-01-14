'use client'

import React from 'react'

interface ProcessData {
  processTitle?: string
  processSubtitle?: string
  processSteps?: Array<{
    number?: number
    title: string
    description?: string
  }>
}

interface HowWeWorkProps {
  process?: ProcessData
}

export default function HowWeWork({ process }: HowWeWorkProps) {
  // Content variables from Sanity
  const title = process?.processTitle
  const subtitle = process?.processSubtitle
  const steps = process?.processSteps

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <div className="text-center mb-12 lg:mb-16 relative">
            <div
              className="absolute top-0 right-1/4 w-32 h-32 rounded-full opacity-20 -z-10"
              style={{
                background: 'radial-gradient(circle, rgba(3, 193, 202, 0.3) 0%, transparent 70%)',
                filter: 'blur(20px)',
              }}
            />
            {title && (
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg text-gray-600">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {steps && steps.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-teal rounded-full mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">{step.number || index + 1}</span>
                </div>

                {step.title && (
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                )}

                {step.description && (
                  <p className="text-gray-600">{step.description}</p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
