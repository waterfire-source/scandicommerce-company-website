import React from 'react'
import Logo from '@/components/ui/Logo'
import Link from 'next/link'
import { FaLinkedinIn, FaTwitter, FaInstagram, FaFacebookF, FaYoutube, FaGithub } from 'react-icons/fa'

interface FooterLink {
  label?: string
  href?: string
}

interface FooterColumn {
  title?: string
  links?: FooterLink[]
}

interface SocialLink {
  platform?: string
  url?: string
}

interface FooterSettings {
  columns?: FooterColumn[]
  connectSection?: {
    title?: string
    email?: string
    phone?: string
    socialLinks?: SocialLink[]
  }
  bottomSection?: {
    badgeText?: string
    orgNumber?: string
    legalLinks?: FooterLink[]
    copyrightText?: string
  }
}

interface FooterProps {
  settings?: FooterSettings
}

// Default columns
const defaultColumns: FooterColumn[] = [
  {
    title: 'Company',
    links: [
      { label: 'About us', href: '/about' },
      { label: 'Partners', href: '/partners' },
      { label: 'Careers', href: '/resources/blog' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'All Packages', href: '/services/all_packages' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Blog & Articles', href: '/resources/blog' },
    ],
  },
  {
    title: 'Merch',
    links: [
      { label: 'Merch', href: '/merch' },
    ],
  },
]

const defaultConnectSection = {
  title: 'Connect',
  email: 'hello@scandicommerce.no',
  phone: '+47 123 45 678',
  socialLinks: [
    { platform: 'linkedin', url: 'https://linkedin.com' },
    { platform: 'twitter', url: 'https://twitter.com' },
    { platform: 'instagram', url: 'https://instagram.com' },
  ],
}

const defaultBottomSection = {
  badgeText: 'Shopify Plus Partner',
  orgNumber: 'Org.nr: 123 456 789',
  legalLinks: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms', href: '/terms' },
    { label: 'Cookies', href: '/cookies' },
  ],
  copyrightText: '© 2025 ScandiCommerce. All rights reserved.',
}

// Social icon mapping
const getSocialIcon = (platform?: string) => {
  switch (platform?.toLowerCase()) {
    case 'linkedin':
      return <FaLinkedinIn className="w-4 h-4" />
    case 'twitter':
      return <FaTwitter className="w-4 h-4" />
    case 'instagram':
      return <FaInstagram className="w-4 h-4" />
    case 'facebook':
      return <FaFacebookF className="w-4 h-4" />
    case 'youtube':
      return <FaYoutube className="w-4 h-4" />
    case 'github':
      return <FaGithub className="w-4 h-4" />
    default:
      return null
  }
}

export default function Footer({ settings }: FooterProps) {
  // Use Sanity data or fallback to defaults
  const columns = settings?.columns?.length ? settings.columns : defaultColumns
  const connectSection = settings?.connectSection?.email ? settings.connectSection : defaultConnectSection
  const bottomSection = settings?.bottomSection?.badgeText ? settings.bottomSection : defaultBottomSection

  return (
    <footer className="w-full bg-black text-white mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12 mb-12">
          {/* Logo */}
          <div className="lg:col-span-1">
            <Logo logoPath='/images/footer-logo.png' />
          </div>

          {/* Dynamic Columns */}
          {columns.map((column, index) => (
            <div key={index}>
              <h3 className="font-semibold text-base mb-4 pb-2 border-b border-gray-700">
                {column.title}
              </h3>
              <ul className="space-y-3 text-sm">
                {column.links?.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href || '#'}
                      className="text-white hover:text-teal transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Connect Section */}
          <div>
            <h3 className="font-semibold text-base mb-4 pb-2 border-b border-gray-700">
              {connectSection.title}
            </h3>
            <div className="space-y-3 text-sm">
              {connectSection.email && (
                <p className="text-white">
                  <a
                    href={`mailto:${connectSection.email}`}
                    className="hover:text-teal transition-colors"
                  >
                    {connectSection.email}
                  </a>
                </p>
              )}
              {connectSection.phone && (
                <p>
                  <a
                    href={`tel:${connectSection.phone.replace(/\s/g, '')}`}
                    className="text-teal hover:text-teal-light transition-colors"
                  >
                    {connectSection.phone}
                  </a>
                </p>
              )}
            </div>
            {connectSection.socialLinks && connectSection.socialLinks.length > 0 && (
              <div className="mt-6 flex gap-3">
                {connectSection.socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-teal transition-colors"
                    aria-label={social.platform}
                  >
                    {getSocialIcon(social.platform)}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              {bottomSection.badgeText && (
                <button className="bg-gray-800 text-white px-4 py-2 rounded text-sm font-medium hover:bg-gray-700 transition-colors">
                  {bottomSection.badgeText}
                </button>
              )}
              {bottomSection.orgNumber && (
                <p className="text-white text-sm">{bottomSection.orgNumber}</p>
              )}
            </div>

            {bottomSection.legalLinks && bottomSection.legalLinks.length > 0 && (
              <div className="flex flex-wrap gap-6 text-sm">
                {bottomSection.legalLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href || '#'}
                    className="text-white hover:text-teal transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {bottomSection.copyrightText && (
            <div className="mt-8 text-center">
              <p className="text-white text-sm">
                {bottomSection.copyrightText}
              </p>
            </div>
          )}
        </div>
      </div>
    </footer>
  )
}
