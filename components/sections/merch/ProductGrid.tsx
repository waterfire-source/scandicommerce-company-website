'use client'

import { useState, useMemo } from 'react'
import ProductCard, { Product } from './ProductCard'
import { HiChevronDown, HiChevronLeft, HiChevronRight } from 'react-icons/hi2'

const products: Product[] = [
  {
    id: 1,
    name: 'Classic Mug',
    description: 'Premium ceramic mug',
    price: 199,
    currency: 'NOK',
    image: '/images/merch/mug.svg',
    category: 'accessories',
    slug: 'classic-mug',
  },
  {
    id: 2,
    name: 'Travel Tumbler',
    description: 'Premium stainless tumbler',
    price: 299,
    currency: 'NOK',
    image: '/images/merch/tumbler.svg',
    category: 'accessories',
    slug: 'travel-tumbler',
  },
  {
    id: 3,
    name: 'Phone Case',
    description: 'Premium protective case',
    price: 249,
    currency: 'NOK',
    image: '/images/merch/phone-case.svg',
    category: 'accessories',
    slug: 'phone-case',
  },
  {
    id: 4,
    name: 'Water Bottle',
    description: 'Premium insulated bottle',
    price: 349,
    currency: 'NOK',
    image: '/images/merch/bottle.svg',
    category: 'accessories',
    slug: 'water-bottle',
  },
  {
    id: 5,
    name: 'Classic Hoodie',
    description: 'Premium unisex hoodie',
    price: 599,
    currency: 'NOK',
    image: '/images/merch/hoodie-white.svg',
    category: 'hoodies',
    slug: 'classic-hoodie',
  },
  {
    id: 6,
    name: 'Dark Hoodie',
    description: 'Premium unisex hoodie',
    price: 599,
    currency: 'NOK',
    image: '/images/merch/hoodie-dark.svg',
    category: 'hoodies',
    slug: 'dark-hoodie',
  },
  {
    id: 7,
    name: 'Classic Crewneck',
    description: 'Premium unisex sweatshirt',
    price: 599,
    currency: 'NOK',
    image: '/images/merch/crewneck.svg',
    category: 'tees',
    slug: 'classic-crewneck',
  },
  {
    id: 8,
    name: 'Classic T-Shirt',
    description: 'Premium unisex t-shirt',
    price: 399,
    currency: 'NOK',
    image: '/images/merch/tshirt.svg',
    category: 'tees',
    slug: 'classic-tshirt',
  },
  {
    id: 9,
    name: 'Baby Onesie',
    description: 'Premium baby onesie',
    price: 299,
    currency: 'NOK',
    image: '/images/merch/onesie.svg',
    category: 'tees',
    slug: 'baby-onesie',
  },
  {
    id: 10,
    name: 'Kids T-Shirt',
    description: 'Premium kids t-shirt',
    price: 299,
    currency: 'NOK',
    image: '/images/merch/kids-tshirt.svg',
    category: 'tees',
    slug: 'kids-tshirt',
  },
  {
    id: 11,
    name: 'Long Sleeve Tee',
    description: 'Premium long sleeve t-shirt',
    price: 449,
    currency: 'NOK',
    image: '/images/merch/longsleeve.svg',
    category: 'tees',
    slug: 'long-sleeve-tee',
  },
  {
    id: 12,
    name: 'Polo Shirt',
    description: 'Premium unisex polo',
    price: 499,
    currency: 'NOK',
    image: '/images/merch/polo.svg',
    category: 'tees',
    slug: 'polo-shirt',
  },
]

type Category = 'all' | 'hoodies' | 'tees' | 'accessories'
type SortOption = 'newest' | 'price-low' | 'price-high' | 'name'

const ITEMS_PER_PAGE = 8

export default function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState<Category>('all')
  const [sortBy, setSortBy] = useState<SortOption>('newest')
  const [currentPage, setCurrentPage] = useState(1)
  const [isSortOpen, setIsSortOpen] = useState(false)

  const categories: { key: Category; label: string }[] = [
    { key: 'all', label: 'All' },
    { key: 'hoodies', label: 'Hoodies' },
    { key: 'tees', label: 'Tees' },
    { key: 'accessories', label: 'Accessories' },
  ]

  const sortOptions: { key: SortOption; label: string }[] = [
    { key: 'newest', label: 'Newest' },
    { key: 'price-low', label: 'Price: Low to High' },
    { key: 'price-high', label: 'Price: High to Low' },
    { key: 'name', label: 'Name: A to Z' },
  ]

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products

    if (activeCategory !== 'all') {
      filtered = products.filter(p => p.category === activeCategory)
    }

    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price
        case 'price-high':
          return b.price - a.price
        case 'name':
          return a.name.localeCompare(b.name)
        case 'newest':
        default:
          return b.id - a.id
      }
    })

    return sorted
  }, [activeCategory, sortBy])

  const totalPages = Math.ceil(filteredAndSortedProducts.length / ITEMS_PER_PAGE)

  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
    return filteredAndSortedProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE)
  }, [filteredAndSortedProducts, currentPage])

  const handleCategoryChange = (category: Category) => {
    setActiveCategory(category)
    setCurrentPage(1)
  }

  const handleSortChange = (option: SortOption) => {
    setSortBy(option)
    setCurrentPage(1)
    setIsSortOpen(false)
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 400, behavior: 'smooth' })
  }

  return (
    <section className="bg-white py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter and Sort Row - Responsive */}
        <div className="border border-[#E5E5E5]">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-stretch">
            {/* Category Tabs - Scrollable on mobile */}
            <div className="flex overflow-x-auto border-b lg:border-b-0 border-[#E5E5E5]">
              {categories.map((category) => (
                <button
                  key={category.key}
                  onClick={() => handleCategoryChange(category.key)}
                  className={`px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-5 text-sm font-medium transition-all duration-200 border-r border-[#E5E5E5] whitespace-nowrap flex-shrink-0 ${activeCategory === category.key
                      ? 'text-[#222222]'
                      : 'text-[#666666] hover:text-[#222222]'
                    }`}
                >
                  {category.label}
                </button>
              ))}
            </div>

            {/* Sort Dropdown - Full width on mobile */}
            <div className="relative flex items-center lg:border-l border-[#E5E5E5]">
              <button
                onClick={() => setIsSortOpen(!isSortOpen)}
                className="flex items-center gap-4 px-4 sm:px-6 py-3 sm:py-4 lg:py-5 text-sm font-medium text-[#666666] hover:text-[#222222] transition-colors w-full lg:w-auto lg:min-w-[180px] justify-between"
              >
                <span>{categories.find(c => c.key === activeCategory)?.label || 'Accessories'}</span>
                <HiChevronDown
                  className={`w-4 h-4 transition-transform ${isSortOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {isSortOpen && (
                <>
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setIsSortOpen(false)}
                  />
                  <div className="absolute right-0 left-0 lg:left-auto top-full mt-0 lg:w-full bg-white border border-[#E5E5E5] border-t-0 shadow-lg z-20 overflow-hidden">
                    {sortOptions.map(option => (
                      <button
                        key={option.key}
                        onClick={() => handleSortChange(option.key)}
                        className={`w-full px-4 sm:px-6 py-3 text-left text-sm transition-colors ${sortBy === option.key
                          ? 'bg-[#03C1CA] text-white'
                          : 'text-[#666666] hover:bg-[#F8F8F8]'
                          }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="border border-[#E5E5E5]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {paginatedProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-6 mt-12">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`text-lg font-medium transition-colors ${currentPage === page
                  ? 'text-[#03C1CA]'
                  : 'text-[#222222] hover:text-[#03C1CA]'
                  }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="text-[#222222] hover:text-[#03C1CA] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              aria-label="Next page"
            >
              <HiChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

