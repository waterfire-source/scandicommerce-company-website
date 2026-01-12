'use client'

import React, { useState, useEffect } from 'react'
import Logo from '@/components/ui/Logo'
import Link from 'next/link'

export default function Header() {
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isShopifyOpen, setIsShopifyOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      const isDesktop = window.innerWidth >= 1024
      if (isServicesOpen && isDesktop && !target.closest('.services-menu')) {
        setIsServicesOpen(false)
      }
      if (isShopifyOpen && isDesktop && !target.closest('.shopify-menu')) {
        setIsShopifyOpen(false)
      }
    }

    const isDesktop = window.innerWidth >= 1024
    if ((isServicesOpen || isShopifyOpen) && isDesktop) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isServicesOpen, isShopifyOpen])

  return (
    <header
      className={`w-full sticky top-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-white/75 backdrop-blur-sm shadow-header'
        : 'bg-white shadow-header'
        }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link href="/">
              <Logo />
            </Link>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            <div className="relative services-menu">
              <button
                onClick={() => {
                  setIsServicesOpen(!isServicesOpen)
                  setIsShopifyOpen(false)
                }}
                onMouseEnter={() => {
                  setIsServicesOpen(true)
                  setIsShopifyOpen(false)
                }}
                className="flex items-center gap-1 text-gray-900 hover:text-teal transition-colors font-medium"
              >
                Services
                <svg
                  className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''
                    }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isServicesOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-[280px] bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <Link
                    href="/services/shopify_development"
                    onClick={() => setIsServicesOpen(false)}
                    className="block px-6 py-3 text-gray-900 hover:text-teal hover:bg-gray-50 transition-colors font-medium"
                  >
                    Shopify Development
                  </Link>
                  <Link
                    href="/services/migrate"
                    onClick={() => setIsServicesOpen(false)}
                    className="block px-6 py-3 text-gray-900 hover:text-teal hover:bg-gray-50 transition-colors font-medium"
                  >
                    Migration to Shopify
                  </Link>
                  <Link
                    href="/services/shopify_pos"
                    onClick={() => setIsServicesOpen(false)}
                    className="block px-6 py-3 text-gray-900 hover:text-teal hover:bg-gray-50 transition-colors font-medium"
                  >
                    Shopify POS
                  </Link>
                  <Link
                    href="/services/all_packages"
                    onClick={() => setIsServicesOpen(false)}
                    className="block px-6 py-3 text-gray-900 hover:text-teal hover:bg-gray-50 transition-colors font-medium"
                  >
                    All Packages
                  </Link>
                </div>
              )}
            </div>
            <div className="relative shopify-menu">
              <button
                onClick={() => {
                  setIsShopifyOpen(!isShopifyOpen)
                  setIsServicesOpen(false)
                }}
                onMouseEnter={() => {
                  setIsShopifyOpen(true)
                  setIsServicesOpen(false)
                }}
                className="flex items-center gap-1 text-gray-900 hover:text-teal transition-colors font-medium"
              >
                Shopify
                <svg
                  className={`w-4 h-4 transition-transform ${isShopifyOpen ? 'rotate-180' : ''
                    }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isShopifyOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-[280px] bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                  onMouseLeave={() => setIsShopifyOpen(false)}
                >
                  <Link
                    href="/shopify/shopify_platform"
                    onClick={() => setIsShopifyOpen(false)}
                    className="block px-6 py-3 text-gray-900 hover:text-teal hover:bg-gray-50 transition-colors font-medium"
                  >
                    Shopify
                  </Link>
                  <Link
                    href="/shopify/shopify_POS"
                    onClick={() => setIsShopifyOpen(false)}
                    className="block px-6 py-3 text-gray-900 hover:text-teal hover:bg-gray-50 transition-colors font-medium"
                  >
                    Shopify POS
                  </Link>
                  <Link
                    href="/shopify/shopify_TCO_calculator"
                    onClick={() => setIsShopifyOpen(false)}
                    className="block px-6 py-3 text-gray-900 hover:text-teal hover:bg-gray-50 transition-colors font-medium"
                  >
                    Shopify TCO calculator
                  </Link>
                  <Link
                    href="/shopify/shopify_x_PIM"
                    onClick={() => setIsShopifyOpen(false)}
                    className="block px-6 py-3 text-gray-900 hover:text-teal hover:bg-gray-50 transition-colors font-medium"
                  >
                    Shopify x PIM
                  </Link>
                  <Link
                    href="/shopify/shopify_x_AI"
                    onClick={() => setIsShopifyOpen(false)}
                    className="block px-6 py-3 text-gray-900 hover:text-teal hover:bg-gray-50 transition-colors font-medium"
                  >
                    Shopify X AI
                  </Link>
                  <Link
                    href="/shopify/why_shopify"
                    onClick={() => setIsShopifyOpen(false)}
                    className="block px-6 py-3 text-gray-900 hover:text-teal hover:bg-gray-50 transition-colors font-medium"
                  >
                    Why Shopify?
                  </Link>
                </div>
              )}
            </div>
            <Link
              href="/work"
              className="text-gray-900 hover:text-teal transition-colors font-medium"
            >
              Work
            </Link>
            <Link
              href="/about"
              className="text-gray-900 hover:text-teal transition-colors font-medium"
            >
              About
            </Link>
            <Link
              href="/partners"
              className="text-gray-900 hover:text-teal transition-colors font-medium"
            >
              Partners
            </Link>
            <Link
              href="/contact"
              className="text-gray-900 hover:text-teal transition-colors font-medium"
            >
              Contact
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/get-started"
              className="hidden sm:inline-block bg-teal text-white px-6 py-2.5 font-semibold hover:bg-teal-dark transition-colors shadow-button"
            >
              GET STARTED
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-gray-900"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden pb-4 border-t border-gray-200 mt-2">
            <div className="flex flex-col space-y-4 pt-4">
              <div className="flex flex-col space-y-2">
                <button
                  onClick={() => {
                    setIsServicesOpen(!isServicesOpen)
                    setIsShopifyOpen(false)
                  }}
                  className="flex items-center justify-between text-gray-900 hover:text-teal transition-colors font-medium"
                >
                  Services
                  <svg
                    className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''
                      }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {isServicesOpen && (
                  <div className="pl-4 flex flex-col space-y-2">
                    <Link
                      href="/services/shopify_development"
                      className="text-gray-600 hover:text-teal transition-colors text-sm"
                      onClick={(e) => {
                        e.stopPropagation()
                        setIsMobileMenuOpen(false)
                        setIsServicesOpen(false)
                      }}
                    >
                      Shopify Development
                    </Link>
                    <Link
                      href="/services/migrate"
                      className="text-gray-600 hover:text-teal transition-colors text-sm"
                      onClick={(e) => {
                        e.stopPropagation()
                        setIsMobileMenuOpen(false)
                        setIsServicesOpen(false)
                      }}
                    >
                      Migration to Shopify
                    </Link>
                    <Link
                      href="/services/shopify_pos"
                      className="text-gray-600 hover:text-teal transition-colors text-sm"
                      onClick={(e) => {
                        e.stopPropagation()
                        setIsMobileMenuOpen(false)
                        setIsServicesOpen(false)
                      }}
                    >
                      Shopify POS
                    </Link>
                    <Link
                      href="/services/all_packages"
                      className="text-gray-600 hover:text-teal transition-colors text-sm"
                      onClick={(e) => {
                        e.stopPropagation()
                        setIsMobileMenuOpen(false)
                        setIsServicesOpen(false)
                      }}
                    >
                      All Packages
                    </Link>
                  </div>
                )}
              </div>
              <div className="flex flex-col space-y-2">
                <button
                  onClick={() => {
                    setIsShopifyOpen(!isShopifyOpen)
                    setIsServicesOpen(false)
                  }}
                  className="flex items-center justify-between text-gray-900 hover:text-teal transition-colors font-medium"
                >
                  Shopify
                  <svg
                    className={`w-4 h-4 transition-transform ${isShopifyOpen ? 'rotate-180' : ''
                      }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {isShopifyOpen && (
                  <div className="pl-4 flex flex-col space-y-2">
                    <Link
                      href="/shopify/shopify_platform"
                      className="text-gray-600 hover:text-teal transition-colors text-sm"
                      onClick={(e) => {
                        e.stopPropagation()
                        setIsMobileMenuOpen(false)
                        setIsShopifyOpen(false)
                      }}
                    >
                      Shopify
                    </Link>
                    <Link
                      href="/shopify/shopify_POS"
                      className="text-gray-600 hover:text-teal transition-colors text-sm"
                      onClick={(e) => {
                        e.stopPropagation()
                        setIsMobileMenuOpen(false)
                        setIsShopifyOpen(false)
                      }}
                    >
                      Shopify POS
                    </Link>
                    <Link
                      href="/shopify/shopify_TCO_calculator"
                      className="text-gray-600 hover:text-teal transition-colors text-sm"
                      onClick={(e) => {
                        e.stopPropagation()
                        setIsMobileMenuOpen(false)
                        setIsShopifyOpen(false)
                      }}
                    >
                      Shopify TCO calculator
                    </Link>
                    <Link
                      href="/shopify/shopify_x_PIM"
                      className="text-gray-600 hover:text-teal transition-colors text-sm"
                      onClick={(e) => {
                        e.stopPropagation()
                        setIsMobileMenuOpen(false)
                        setIsShopifyOpen(false)
                      }}
                    >
                      Shopify x PIM
                    </Link>
                    <Link
                      href="/shopify/shopify_x_AI"
                      className="text-gray-600 hover:text-teal transition-colors text-sm"
                      onClick={(e) => {
                        e.stopPropagation()
                        setIsMobileMenuOpen(false)
                        setIsShopifyOpen(false)
                      }}
                    >
                      Shopify X AI
                    </Link>
                    <Link
                      href="/shopify/why_shopify"
                      className="text-gray-600 hover:text-teal transition-colors text-sm"
                      onClick={(e) => {
                        e.stopPropagation()
                        setIsMobileMenuOpen(false)
                        setIsShopifyOpen(false)
                      }}
                    >
                      Why Shopify?
                    </Link>
                  </div>
                )}
              </div>
              <Link
                href="/work"
                className="text-gray-900 hover:text-teal transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Work
              </Link>
              <Link
                href="/about"
                className="text-gray-900 hover:text-teal transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/partners"
                className="text-gray-900 hover:text-teal transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Partners
              </Link>
              <Link
                href="/contact"
                className="text-gray-900 hover:text-teal transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/get-started"
                className="bg-teal text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-teal-dark transition-colors text-center shadow-button"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                GET STARTED
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

