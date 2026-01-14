'use client'

import Link from 'next/link'
import LiquidBlob from '@/components/ui/LiquidBlob'

interface HeroData {
  heroTitle?: {
    text?: string
    highlight?: string
  }
  heroDescription?: string
  heroButtons?: Array<{
    text: string
    link: string
    variant?: string
  }>
}

interface HeroProps {
  hero?: HeroData
}

export default function Hero({ hero }: HeroProps) {
  const titleText = hero?.heroTitle?.text
  const titleHighlight = hero?.heroTitle?.highlight
  const description = hero?.heroDescription
  const buttons = hero?.heroButtons

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
      <LiquidBlob
        page="homepage"
        rotation={0}
        className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] md:w-[100%] lg:w-[95%] xl:w-[90%] h-[110%] hidden lg:block"
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

        {buttons && buttons.length > 0 && (
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full">
            {buttons.map((button, index) => (
              <Link
                key={index}
                href={button.link || '#'}
                className={`px-8 py-4 transition-colors text-center w-full sm:w-auto ${
                  button.variant === 'primary' || index === 0
                    ? 'bg-[#1DEFFA] text-[#1F1D1D] hover:bg-[#1DEFFA]/90'
                    : 'bg-white text-[#1F1D1D] hover:bg-gray-100'
                }`}
              >
                {button.text}
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
