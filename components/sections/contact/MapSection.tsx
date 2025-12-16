'use client'

import React from 'react'

export default function MapSection() {
  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
            Interactive map placeholder
          </h2>
          <p className="text-sm text-gray-500">
            Choose a time that works for you. We&apos;ll discuss your goals and create a custom plan.
          </p>
        </div>
        
        <div className="rounded-xl overflow-hidden shadow-lg">
          <iframe
            title="ScandiCommerce Office Location"
            src="https://www.openstreetmap.org/export/embed.html?bbox=10.7202%2C59.9063%2C10.7702%2C59.9263&layer=mapnik&marker=59.9163%2C10.7452"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          />
        </div>
      </div>
    </section>
  )
}
