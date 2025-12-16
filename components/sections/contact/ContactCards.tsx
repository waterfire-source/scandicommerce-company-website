'use client'

import React from 'react'
import { HiOutlineMail } from 'react-icons/hi'
import { FiPhone } from 'react-icons/fi'
import { HiOutlineLocationMarker } from 'react-icons/hi'

interface ContactCardProps {
  icon: React.ReactNode
  title: string
  subtitle: string
  detail: string
  href?: string
  showLeftBorder?: boolean
  showRightBorder?: boolean
}

function ContactCard({ icon, title, subtitle, detail, href, showLeftBorder, showRightBorder }: ContactCardProps) {
  const borderClasses = `${showLeftBorder ? 'md:border-l md:border-[#565454]' : ''} ${showRightBorder ? 'md:border-r md:border-[#565454]' : ''}`

  const content = (
    <div className={`flex flex-col items-center text-center py-6 px-8 bg-white ${borderClasses}`}>
      <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#03C1CA] flex items-center justify-center mb-4">
        <div className="text-white text-xl md:text-2xl">
          {icon}
        </div>
      </div>
      <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-xs md:text-sm text-gray-500 mb-1">{subtitle}</p>
      <p className="text-xs md:text-sm text-[#03C1CA] font-medium">{detail}</p>
    </div>
  )

  if (href) {
    return (
      <a href={href} className="w-full md:flex-1 block">
        {content}
      </a>
    )
  }

  return <div className="w-full md:flex-1">{content}</div>
}

export default function ContactCards() {
  const cards = [
    {
      icon: <HiOutlineMail size={28} />,
      title: 'Email Us',
      subtitle: 'Get a response within 2 hours',
      detail: 'hello@scandicommerce.no',
      href: 'mailto:hello@scandicommerce.no',
    },
    {
      icon: <FiPhone size={28} />,
      title: 'Call Us',
      subtitle: 'Mon-Fri, 9:00-17:00 CET',
      detail: '+47 123 45 678',
      href: 'tel:+4712345678',
    },
    {
      icon: <HiOutlineLocationMarker size={28} />,
      title: 'Visit Us',
      subtitle: 'Oslo, Norway',
      detail: 'Storgata 10, 0155 Oslo',
    },
  ]

  return (
    <section className="py-8 md:py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-stretch justify-center">
          {cards.map((card, index) => (
            <ContactCard
              key={index}
              {...card}
              showLeftBorder={index === 0}
              showRightBorder={true}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
