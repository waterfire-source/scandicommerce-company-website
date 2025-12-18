'use client'

import React from 'react'

export default function Hero() {
  return (
    <section className="relative bg-[#F8F8F8] py-16 lg:py-24 overflow-hidden min-h-[calc(100vh-80px)] flex items-center justify-center">
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] md:w-[85%] lg:w-[75%] xl:w-[65%]"
        style={{ 
          aspectRatio: '2.5 / 1',
          transform: 'translate(-50%, -50%) rotate(-8deg)',
        }}
      >
        <div className="w-full h-full rounded-[50%] bg-[#1DEFFA40]" />
      </div>
      
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] md:w-[75%] lg:w-[65%] xl:w-[55%]"
        style={{ 
          aspectRatio: '2.2 / 1',
          transform: 'translate(-50%, -50%) rotate(-5deg)',
        }}
      >
        <div className="w-full h-full rounded-[50%] bg-[#03C1CA]" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6">
            <span className="text-white">Ready to Transform Your </span>
            <span className="text-[#1DEFFA]">E-commerce?</span>
          </h1>
          
          <p className="text-white text-sm md:text-base lg:text-lg max-w-xl">
            Transparent pricing, clear deliverables, and no surprises. Select the package that fits your needs.
          </p>
        </div>
      </div>
    </section>
  )
}
