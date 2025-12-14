/**
 * Example component showing different ways to use images in Next.js
 * This file is for reference - you can delete it once you understand the patterns
 */

import Image from 'next/image'

export default function ImageExample() {
  return (
    <div className="space-y-8 p-8">
      <h2 className="text-2xl font-bold">Image Usage Examples</h2>

      {/* Example 1: Next.js Image Component (Recommended) */}
      <div>
        <h3 className="text-lg font-semibold mb-2">
          1. Using Next.js Image Component
        </h3>
        <Image
          src="/images/logo.png"
          alt="Scandi Commerce Logo"
          width={200}
          height={50}
          className="border"
        />
        <p className="text-sm text-gray-600 mt-2">
          Provides automatic optimization, lazy loading, and responsive images
        </p>
      </div>

      {/* Example 2: Responsive Image with fill */}
      <div className="relative h-64 w-full">
        <h3 className="text-lg font-semibold mb-2">
          2. Responsive Image (fill)
        </h3>
        <Image
          src="/images/hero-banner.jpg"
          alt="Hero Banner"
          fill
          className="object-cover rounded-lg"
        />
      </div>

      {/* Example 3: Regular HTML img tag */}
      <div>
        <h3 className="text-lg font-semibold mb-2">3. Regular img tag</h3>
        <img
          src="/images/logo.png"
          alt="Logo"
          className="border"
          width={200}
          height={50}
        />
        <p className="text-sm text-gray-600 mt-2">
          Use for simple cases, but Next.js Image is preferred
        </p>
      </div>

      {/* Example 4: CSS Background Image */}
      <div>
        <h3 className="text-lg font-semibold mb-2">4. CSS Background Image</h3>
        <div
          className="h-64 w-full rounded-lg border"
          style={{
            backgroundImage: 'url(/images/hero-banner.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </div>

      {/* Example 5: Using Tailwind bg-image (requires config) */}
      <div>
        <h3 className="text-lg font-semibold mb-2">
          5. Tailwind Background (with arbitrary values)
        </h3>
        <div
          className="h-64 w-full rounded-lg border bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/hero-banner.jpg)' }}
        />
      </div>
    </div>
  )
}

