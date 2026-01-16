'use client'

import LiquidBlob from '@/components/ui/LiquidBlob'

interface HeroData {
  heroTitle?: {
    text?: string
    highlight?: string
  }
  heroDescription?: string
}

interface HeroProps {
  hero?: HeroData
}

export default function Hero({ hero }: HeroProps) {
  const titleText = hero?.heroTitle?.text
  const titleHighlight = hero?.heroTitle?.highlight
  const description = hero?.heroDescription

  const renderTitle = () => {
    if (!titleText) return null
    if (!titleHighlight || !titleText.includes(titleHighlight)) {
      return <span className="xl:text-[#FFFFFF] text-[#222222]">{titleText}</span>
    }
    const parts = titleText.split(titleHighlight)
    return (
      <>
        <span className="xl:text-[#FFFFFF] text-[#222222]">{parts[0]}</span>
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
        @media (min-width: 375px) and (max-width: 640px) {
          .liquid-blob-375-641 {
            top: 38% !important;
          }
        }
        @media (max-width: 525px) {
          .liquid-blob-small-525 {
            top: 38% !important;
          }
        }
        @media (max-width: 425px) {
          .liquid-blob-max-425 {
            top: 38% !important;
            width: 78% !important;
            height: 78% !important;
          }
        }
        @media (max-width: 640px) {
          .liquid-blob-small-641 {
            top: 38% !important;
          }
        }
        @media (min-width: 320px) and (max-width: 425px) {
          .liquid-blob-320-425 {
            top: 38% !important;
          }
        }
        @media (min-width: 375px) and (max-width: 425px) {
          .liquid-blob-medium-width {
            top: 38% !important;
          }
        }
        @media (min-width: 425px) and (max-width: 640px) {
          .liquid-blob-425-640-width {
            top: 38% !important;
          }
        }
        @media (min-width: 425px) and (max-width: 500px) {
          .liquid-blob-425-500 {
            width: 85% !important;
            height: 85% !important;
          }
        }
        @media (min-width: 425px) and (max-width: 540px) {
          .liquid-blob-425-540 {
            width: 80% !important;
            height: 80% !important;
          }
        }
        @media (min-width: 540px) and (max-width: 565px) {
          .liquid-blob-540-565 {
            width: 78% !important;
            height: 78% !important;
          }
        }
        @media (min-width: 565px) and (max-width: 640px) {
          .liquid-blob-565-640 {
            width: 72% !important;
            height: 72% !important;
          }
        }
        @media (min-width: 566px) and (max-width: 639px) {
          .liquid-blob-566-639 {
            width: 75% !important;
            height: 75% !important;
          }
        }
        @media (min-width: 641px) and (max-width: 767px) {
          .liquid-blob-large-width {
            top: 38% !important;
          }
        }
        @media (min-width: 768px) and (max-width: 768px) {
          .liquid-blob-768-width {
            top: 38% !important;
          }
        }
        @media (min-width: 1280px) and (max-width: 1629px) {
          .liquid-blob-xl-width {
            width: 88% !important;
            height: 88% !important;
          }
        }
        @media (max-width: 425px) {
          .hero-content-gap {
            gap: 80px !important;
          }
        }
      `}} />
      <LiquidBlob
        page="homepage"
        rotation={0}
        className="liquid-blob-small-height liquid-blob-max-425 liquid-blob-320-425 liquid-blob-small-525 liquid-blob-375-641 liquid-blob-small-641 liquid-blob-medium-width liquid-blob-425-640-width liquid-blob-425-500 liquid-blob-425-540 liquid-blob-540-565 liquid-blob-565-640 liquid-blob-566-639 liquid-blob-large-width liquid-blob-768-width liquid-blob-xl-width top-[25%] sm:top-[35%] md:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[63%] h-[63%] md:w-[68%] md:h-[68%] lg:w-[80%] lg:h-[80%] xl:w-[76%] xl:h-[76%] 2xl:w-[71%] 2xl:h-[71%]"
        enableMouseFollow={true}
      />

      <div className="absolute top-[35%] left-[25%] xl:block hidden w-40 h-40 rounded-full bg-[#1DEFFA33]"></div>
      <div className="absolute bottom-[44%] right-[32%] xl:block hidden w-[60px] h-[60px] rounded-full bg-[#1DEFFA33]"></div>

      <div className="container flex flex-col justify-center items-center mx-auto px-4 sm:px-6 lg:px-8 relative z-10 gap-[42px]">
        <div className="hero-content-gap flex flex-col justify-start items-center gap-[53px] sm:w-3/4 2xl:w-1/2 w-full">
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
      </div>
    </section>
  )
}
