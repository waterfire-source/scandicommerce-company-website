'use client'

import React from 'react'
import Link from 'next/link'
import ServiceCard from '@/components/ui/ServiceCard'
import LiquidBlob from '@/components/ui/LiquidBlob'

export default function Hero() {
  const services = [
    { title: 'Foundation', price: 'From 49.000 kr' },
    { title: 'Growth', price: 'From 99.000 kr' },
    { title: 'Premium', price: 'From 189.000 kr' },
    { title: 'Enterprise', price: 'From Custom' },
  ]

  return (
    <section className="relative bg-gray-50 py-16 lg:py-24 overflow-hidden">
      <LiquidBlob className="hidden lg:block right-[-20%] top-[-30%] w-[80%] h-[160%]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 lg:gap-16">
          <div className="relative space-y-14 w-full lg:w-3/5">

            <div
              className="inline-block px-5 py-4 shadow-button relative z-10"
              style={{ backgroundColor: 'rgba(29, 239, 250, 0.102)' }}
            >
              <span className="text-sm font-bold text-defaultText uppercase tracking-wide">
                WE UNDERSTAND A GREAT STACK
              </span>
            </div>

            <h1 className="text-[32px] sm:text-[42px] md:text-[48px] lg:text-[64px] font-bold text-gray-900 leading-[130%] tracking-[0%] pr-0 sm:pr-8 lg:pr-[78px] relative z-10">
              Shop for Shopify{' '}
              <span className="text-teal">services</span> like you shop for
              products
            </h1>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed pr-0 sm:pr-8 lg:pr-12 relative z-10">
              Transparent pricing. Productized packages. No proposal ping-pong.
              Browse, select, and book Shopify services as easily as buying
              online.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-7 relative z-10">
              <Link
                href="/services"
                className="bg-teal text-white px-8 sm:px-[53px] py-4 sm:py-[18px] font-semibold hover:bg-teal-dark transition-colors shadow-button text-center"
              >
                Browse Services
              </Link>
              <Link
                href="/work"
                className="bg-white text-gray-900 px-8 sm:px-[70px] py-4 sm:py-[18px] font-semibold transition-colors shadow-button text-center"
              >
                See Our Work
              </Link>
            </div>

            <p className="text-sm text-gray-500 relative z-10">
              Transparent pricing · Productized packages · No agency drama
            </p>
          </div>

          <div className="space-y-4 w-full lg:w-2/5 z-10">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                price={service.price}
                isOdd={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

