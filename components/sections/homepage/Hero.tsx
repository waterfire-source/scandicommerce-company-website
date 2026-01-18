'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import ServiceCard from '@/components/ui/ServiceCard'
import LiquidBlob from '@/components/ui/LiquidBlob'
import { FloatingElement, GradientOrb, PulsingElement } from '@/components/ui/FloatingElements'

interface HeroData {
  heroBadge?: string
  heroTitle?: {
    text?: string
    highlight?: string
  }
  heroDescription?: string
  heroButtons?: Array<{
    text: string
    link: string
    variant?: 'primary' | 'secondary'
  }>
  heroTagline?: string
  heroPackages?: Array<{
    title: string
    price?: string
  }>
}

interface HeroProps {
  hero?: HeroData
}

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
}

const cardContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.5
    }
  }
}

const cardVariants = {
  hidden: { opacity: 0, x: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
}

export default function Hero({ hero }: HeroProps) {
  // Content variables from Sanity
  const badge = hero?.heroBadge
  const titleText = hero?.heroTitle?.text
  const titleHighlight = hero?.heroTitle?.highlight
  const description = hero?.heroDescription
  const buttons = hero?.heroButtons
  const tagline = hero?.heroTagline
  const packages = hero?.heroPackages

  // Helper to render title with highlight
  const renderTitle = () => {
    if (!titleText) return null
    if (!titleHighlight || !titleText.includes(titleHighlight)) {
      return titleText
    }
    const parts = titleText.split(titleHighlight)
    return (
      <>
        {parts[0]}
        <span className="text-teal">{titleHighlight}</span>
        {parts[1]}
      </>
    )
  }

  return (
    <section className="relative bg-[#F8F8F8] py-16 lg:py-24 overflow-hidden min-h-[calc(100vh-80px)] flex items-center justify-center">
      {/* Floating decorative elements */}
      <FloatingElement
        variant="ring"
        size={60}
        color="rgba(3, 193, 202, 0.25)"
        className="top-[15%] left-[8%] hidden lg:block"
        duration={6}
        amplitude={20}
      />
      <FloatingElement
        variant="dot"
        size={10}
        color="rgba(3, 193, 202, 0.4)"
        className="top-[25%] left-[15%] hidden lg:block"
        duration={4}
        delay={1}
        amplitude={12}
      />
      <FloatingElement
        variant="dot"
        size={6}
        color="rgba(3, 193, 202, 0.5)"
        className="bottom-[30%] left-[12%] hidden lg:block"
        duration={3.5}
        delay={0.5}
        amplitude={8}
      />
      <PulsingElement
        size={14}
        color="rgba(3, 193, 202, 0.3)"
        className="bottom-[20%] left-[5%] hidden lg:block"
      />
      <GradientOrb
        size={400}
        className="top-[-10%] left-[-15%] hidden lg:block"
        colors={['rgba(3, 193, 202, 0.08)', 'rgba(3, 193, 202, 0.02)']}
      />
      
      <LiquidBlob
        page="homepage"
        rotation={10}
        className="top-[-5%] right-[-10%] w-[75%] h-[110%] hidden lg:block"
        enableMouseFollow={true}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 lg:gap-16">
          <motion.div 
            className="relative space-y-14 w-full lg:w-3/5"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >

            {badge && (
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center gap-4 px-5 py-4 shadow-button relative z-10"
                style={{ backgroundColor: 'rgba(29, 239, 250, 0.102)' }}
              >
                <span className="text-sm font-bold text-defaultText uppercase tracking-wide">
                  {badge}
                </span>
                {/* Shopify Plus Partner Logo */}
                <img 
                  src="https://www.guidance.com/hubfs/svgexport-8.svg" 
                  alt="Shopify Plus Partner" 
                  className="h-10 w-auto"
                />
              </motion.div>
            )}

            {titleText && (
              <motion.h1 
                variants={itemVariants}
                className="text-[32px] sm:text-[42px] md:text-[48px] lg:text-[64px] font-bold text-gray-900 leading-[130%] tracking-[0%] pr-0 sm:pr-8 lg:pr-[78px] relative z-10"
              >
                {renderTitle()}
              </motion.h1>
            )}

            {description && (
              <motion.p 
                variants={itemVariants}
                className="text-base sm:text-lg text-gray-600 leading-relaxed pr-0 sm:pr-8 lg:pr-12 relative z-10"
              >
                {description}
              </motion.p>
            )}

            {buttons && buttons.length > 0 && (
              <motion.div 
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 sm:gap-7 relative z-10"
              >
                {buttons.map((button, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      href={button.link || '#'}
                      className={`block px-8 sm:px-[53px] py-4 sm:py-[18px] font-semibold transition-colors shadow-button text-center ${
                        button.variant === 'primary' || index === 0
                          ? 'bg-teal text-white hover:bg-teal-dark'
                          : 'bg-white text-gray-900'
                      }`}
                    >
                      {button.text}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {tagline && (
              <motion.p 
                variants={itemVariants}
                className="text-sm text-gray-500 relative z-10"
              >
                {tagline}
              </motion.p>
            )}
          </motion.div>

          {packages && packages.length > 0 && (
            <motion.div 
              className="space-y-4 w-full lg:w-2/5 z-10"
              variants={cardContainerVariants}
              initial="hidden"
              animate="visible"
            >
              {packages.map((pkg, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ 
                    scale: 1.02, 
                    x: -5,
                    transition: { duration: 0.2 }
                  }}
                >
                  <ServiceCard
                    title={pkg.title}
                    price={pkg.price || ''}
                    isOdd={index % 2 === 0}
                  />
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
