import React from 'react'
import Logo from '@/components/ui/Logo'
import SocialIcons from '@/components/ui/SocialIcons'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          <div className="lg:col-span-1">
            <Logo />
          </div>

          <div>
            <h3 className="font-semibold text-base mb-4 pb-2 border-b border-gray-700">
              Company
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-white hover:text-teal transition-colors"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href="/case-studies"
                  className="text-white hover:text-teal transition-colors"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="/partners"
                  className="text-white hover:text-teal transition-colors"
                >
                  Partners
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white hover:text-teal transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-base mb-4 pb-2 border-b border-gray-700">
              Services
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/services"
                  className="text-white hover:text-teal transition-colors"
                >
                  All Packages
                </Link>
              </li>
              <li>
                <Link
                  href="/services/shopify-development"
                  className="text-white hover:text-teal transition-colors"
                >
                  Shopify Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/migration"
                  className="text-white hover:text-teal transition-colors"
                >
                  Migration Services
                </Link>
              </li>
              <li>
                <Link
                  href="/services/shopify-pos"
                  className="text-white hover:text-teal transition-colors"
                >
                  Shopify POS
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-base mb-4 pb-2 border-b border-gray-700">
              Resources
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/blog"
                  className="text-white hover:text-teal transition-colors"
                >
                  Blog & Articles
                </Link>
              </li>
              <li>
                <Link
                  href="/tco-calculator"
                  className="text-white hover:text-teal transition-colors"
                >
                  TCO Calculator
                </Link>
              </li>
              <li>
                <Link
                  href="/why-shopify"
                  className="text-white hover:text-teal transition-colors"
                >
                  Why Shopify
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-base mb-4 pb-2 border-b border-gray-700">
              Connect
            </h3>
            <div className="space-y-3 text-sm">
              <p className="text-white">
                <a
                  href="mailto:hello@scandicommerce.no"
                  className="hover:text-teal transition-colors"
                >
                  hello@scandicommerce.no
                </a>
              </p>
              <p>
                <a
                  href="tel:+4712345678"
                  className="text-teal hover:text-teal-light transition-colors"
                >
                  +47 123 45 678
                </a>
              </p>
              <div className="pt-2">
                <Link
                  href="/why-shopify"
                  className="text-white hover:text-teal transition-colors"
                >
                  Why Shopify
                </Link>
              </div>
            </div>
            <div className="mt-6">
              <SocialIcons />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button className="bg-gray-800 text-white px-4 py-2 rounded text-sm font-medium hover:bg-gray-700 transition-colors">
                Shopify Plus Partner
              </button>
              <p className="text-white text-sm">Org.nr: 123 456 789</p>
            </div>

            <div className="flex flex-wrap gap-6 text-sm">
              <Link
                href="/privacy"
                className="text-white hover:text-teal transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-white hover:text-teal transition-colors"
              >
                Terms
              </Link>
              <Link
                href="/cookies"
                className="text-white hover:text-teal transition-colors"
              >
                Cookies
              </Link>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-white text-sm">
              © 2025 ScandiCommerce. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

