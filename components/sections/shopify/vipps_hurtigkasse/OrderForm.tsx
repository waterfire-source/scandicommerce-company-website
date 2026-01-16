'use client'

import React, { useState } from 'react'

interface OrderFormData {
  title?: string
  description?: string
  submitButtonText?: string
}

interface OrderFormProps {
  orderForm?: OrderFormData
}

export default function OrderForm({ orderForm }: OrderFormProps) {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    shopifyStoreUrl: '',
    message: ''
  })

  const title = orderForm?.title || 'Order Vipps Quick Checkout here'
  const description = orderForm?.description || 'Fill out the order form and we will respond via email'
  const submitButtonText = orderForm?.submitButtonText || 'Send order'

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section className="bg-[#03C1CA] py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              {title}
            </h2>
            <p className="text-base lg:text-lg text-white/90">
              {description}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white p-8 lg:p-12 shadow-lg">
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="companyName" className="block text-base lg:text-lg font-medium text-gray-700 mb-3">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-5 bg-[#F5F5F5] text-base lg:text-lg text-black outline-none focus:ring-2 focus:ring-[#03C1CA] transition-all"
                    placeholder="Your Company Inc."
                  />
                </div>
                <div>
                  <label htmlFor="contactName" className="block text-base lg:text-lg font-medium text-gray-700 mb-3">
                    Contact Person *
                  </label>
                  <input
                    type="text"
                    id="contactName"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-5 bg-[#F5F5F5] text-base lg:text-lg text-black outline-none focus:ring-2 focus:ring-[#03C1CA] transition-all"
                    placeholder="John Doe"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="email" className="block text-base lg:text-lg font-medium text-gray-700 mb-3">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-5 bg-[#F5F5F5] text-base lg:text-lg text-black outline-none focus:ring-2 focus:ring-[#03C1CA] transition-all"
                    placeholder="john@yourcompany.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-base lg:text-lg font-medium text-gray-700 mb-3">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-5 py-5 bg-[#F5F5F5] text-base lg:text-lg text-black outline-none focus:ring-2 focus:ring-[#03C1CA] transition-all"
                    placeholder="+1 234 567 8900"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="shopifyStoreUrl" className="block text-base lg:text-lg font-medium text-gray-700 mb-3">
                  Shopify Store URL *
                </label>
                <input
                  type="url"
                  id="shopifyStoreUrl"
                  name="shopifyStoreUrl"
                  value={formData.shopifyStoreUrl}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-5 bg-[#F5F5F5] text-base lg:text-lg text-black outline-none focus:ring-2 focus:ring-[#03C1CA] transition-all"
                  placeholder="https://your-store.myshopify.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-base lg:text-lg font-medium text-gray-700 mb-3">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-5 py-5 bg-[#F5F5F5] text-base lg:text-lg text-black outline-none focus:ring-2 focus:ring-[#03C1CA] transition-all resize-none"
                  placeholder="Tell us a bit about your store..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#03C1CA] text-white py-5 font-semibold hover:bg-[#02a8b0] transition-colors text-lg lg:text-xl"
              >
                {submitButtonText}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
