'use client'

import { useState } from 'react'
import { HiOutlineChatBubbleOvalLeft } from 'react-icons/hi2'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsSubmitting(true)

    await new Promise(resolve => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setEmail('')

    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <section className="bg-[#03C1CA] py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border-2 border-white/30 mb-6">
            <HiOutlineChatBubbleOvalLeft className="w-8 h-8 text-white" />
          </div>

          <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-4">
            Want Exclusive Drops?
          </h2>
          <p className="text-base lg:text-lg text-white/90 mb-8">
            Be the first to know about new merch releases, limited editions, and special discounts.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 rounded-lg border-2 border-transparent bg-white/10 text-white placeholder:text-white/60 focus:outline-none focus:border-white/50 transition-colors"
              required
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-3 bg-[#222222] text-white font-medium rounded-lg hover:bg-[#333333] disabled:opacity-70 disabled:cursor-not-allowed transition-colors whitespace-nowrap"
            >
              {isSubmitting ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>

          {isSubmitted && (
            <p className="mt-4 text-white/90 text-sm animate-fade-in">
              ✓ Thanks for subscribing! We&apos;ll keep you updated.
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
