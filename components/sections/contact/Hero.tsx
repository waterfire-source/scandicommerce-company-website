'use client'

import React from 'react'
import LiquidBlob from '@/components/ui/LiquidBlob'

export default function Hero() {
  return (
    <section className="relative bg-[#F8F8F8] py-16 lg:py-24 overflow-hidden min-h-[calc(100vh-80px)] flex items-center justify-center">
      <LiquidBlob
        page="contact"
        rotation={15}
        className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] md:w-[120%] lg:w-[115%] xl:w-[110%] h-[130%] hidden lg:block"
        enableMouseFollow={true}
      />
        
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6">
            <span className="xl:text-[#FFFFFF] text-[#222222]">Ready to Transform Your </span>
            <span className="text-[#1DEFFA]">E-commerce?</span>
          </h1>
          
          <p className="xl:text-[#FFFFFF] text-[#222222] text-sm md:text-base lg:text-lg max-w-xl">
            Transparent pricing, clear deliverables, and no surprises. Select the package that fits your needs.
          </p>
        </div>
      </div>
    </section>
  )
}
