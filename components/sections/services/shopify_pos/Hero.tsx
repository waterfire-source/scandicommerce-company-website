'use client'

import Link from 'next/link'
import LiquidBlob from '@/components/ui/LiquidBlob'

interface HeroData {
  heroTitle?: {
    text?: string
    highlight?: string
  }
  heroDescription?: string
  heroButtonText?: string
  heroButtonLink?: string
}

interface HeroProps {
  hero?: HeroData
}

export default function Hero({ hero }: HeroProps) {
  const titleText = hero?.heroTitle?.text
  const titleHighlight = hero?.heroTitle?.highlight
  const description = hero?.heroDescription
  const buttonText = hero?.heroButtonText
  const buttonLink = hero?.heroButtonLink

  const renderTitle = () => {
    if (!titleText) return null
    if (!titleHighlight || !titleText.includes(titleHighlight)) {
      return <span className="xl:text-[#FFFFFF] text-[#222222]">{titleText}</span>
    }
    const parts = titleText.split(titleHighlight)
    return (
      <>
        <span className="text-[#1DEFFA]">{titleHighlight}</span>
        <span className="xl:text-[#FFFFFF] text-[#222222]">{parts[1]}</span>
      </>
    )
  }

  return (
    <section className="relative bg-[#F8F8F8] py-16 lg:py-24 overflow-hidden min-h-[calc(100vh-80px)] flex items-center justify-center">
      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-height: 425px) {
          .liquid-blob-small-height {
            width: 60% !important;
            height: 60% !important;
          }
        }
        @media (max-width: 425px) {
          .liquid-blob-small-width {
            top: 32% !important;
          }
        }
        @media (min-width: 375px) and (max-width: 425px) {
          .liquid-blob-medium-width {
            top: 30% !important;
          }
        }
        @media (min-width: 425px) and (max-width: 640px) {
          .liquid-blob-425-640-width {
            top: 32% !important;
          }
        }
        @media (min-width: 641px) and (max-width: 767px) {
          .liquid-blob-large-width {
            top: 40% !important;
          }
        }
        @media (min-width: 768px) and (max-width: 768px) {
          .liquid-blob-768-width {
            top: 50% !important;
          }
        }
        @media (min-width: 1280px) and (max-width: 1629px) {
          .liquid-blob-xl-width {
            width: 100% !important;
            height: 100% !important;
          }
        }
      `}} />
      <LiquidBlob
        page="homepage"
        rotation={0}
        className="liquid-blob-small-height liquid-blob-small-width liquid-blob-medium-width liquid-blob-425-640-width liquid-blob-large-width liquid-blob-768-width liquid-blob-xl-width top-[25%] sm:top-[35%] md:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[75%] h-[75%] md:w-[80%] md:h-[80%] lg:w-[95%] lg:h-[95%] xl:w-[90%] xl:h-[90%] 2xl:w-[85%] 2xl:h-[85%]"
        enableMouseFollow={true}
      />

      <div className="absolute top-[35%] left-[25%] xl:block hidden w-40 h-40 rounded-full bg-[#1DEFFA33]"></div>
      <div className="absolute bottom-[44%] right-[32%] xl:block hidden w-[60px] h-[60px] rounded-full bg-[#1DEFFA33]"></div>

      <div className="container flex flex-col justify-center items-center mx-auto px-4 sm:px-6 lg:px-8 relative z-10 gap-[42px]">
        <div className="flex flex-col justify-start items-center gap-[53px] sm:w-3/4 2xl:w-1/2 w-full">
          {titleText && (
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-center mb-4 sm:mb-6">
              {renderTitle()}
            </h1>
          )}

          {description && (
            <p className="text-base lg:text-lg xl:text-xl xl:text-[#FFFFFF] text-[#222222] text-center leading-relaxed px-4">
              {description}
            </p>
          )}
        </div>

        {buttonText && buttonLink && (
          <Link
            href={buttonLink}
            className="bg-black text-white md:bg-white md:text-[#1F1D1D] px-8 py-4 hover:bg-gray-800 md:hover:bg-gray-100 transition-colors text-center w-full sm:w-auto"
          >
            {buttonText}
          </Link>
        )}
      </div>
    </section>
  )
}
