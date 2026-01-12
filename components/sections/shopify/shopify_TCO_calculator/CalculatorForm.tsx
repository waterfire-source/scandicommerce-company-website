'use client'

import React, { useState } from 'react'

interface CalculatorFormProps {
  selectedPlatform: string
}

const currencies = [
  'Norwegian Krone (NOK)',
  'Swedish Krona (SEK)',
  'Danish Krone (DKK)',
  'Euro (EUR)',
  'US Dollar (USD)',
  'British Pound (GBP)'
]

const platformOptions = [
  { value: 'WooCommerce', label: 'WooCommerce' },
  { value: 'Adobe (Magento)', label: 'Adobe (Magento)' },
  { value: 'Bigcommerce', label: 'Bigcommerce' },
  { value: 'Salesforce commerce cloud', label: 'Salesforce commerce cloud' }
]

export default function CalculatorForm({ selectedPlatform }: CalculatorFormProps) {
  const [step, setStep] = useState(1)
  const [showResults, setShowResults] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    companyName: '',
    jobTitle: '',
    currentPlatform: selectedPlatform === 'Woocommerce' ? 'WooCommerce' : selectedPlatform,
    currency: 'Norwegian Krone (NOK)',
    monthlyAverageSessions: '',
    mobilePercent: '',
    desktopPercent: '',
    mobileConversionRate: '',
    desktopConversionRate: '',
    operatingMargin: '',
    currentCustomers: '',
    repeatCustomerPercentage: '',
    annualOrderVolume: '',
    averageOrderValue: '',
    expectedAOVIncrease: '',
    numberOfBusinessUsers: '',
    averageSalary: '',
    timeSpentOnManualWork: '',
    expectedReductionInManualWork: '',
    numberOfITUsers: '',
    averageITSalary: '',
    timeSpentOnManualWorkIT: '',
    expectedReductionInManualWorkIT: '',
    annualGMV: '',
    annualGMVGrowthRate: '',
    isShopifyPaymentsInScope: 'No',
    platformFees: '',
    oneTimeImplementation: '',
    implementationTimeline: '',
    ongoingPartnerCosts: '',
    wacc: '',
    includeTCOSavingsAnalysis: 'Yes - vs SFCC'
  })

  // Submit data to HubSpot using Forms API v3
  const submitToHubSpot = async () => {
    try {
      // 1) Collect USER CONTACT fields from form
      const userContact = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        companyName: formData.companyName,
        jobTitle: formData.jobTitle,
        currentPlatform: formData.currentPlatform,
        currency: formData.currency,
      }

      // 2) Collect TRAFFIC & CONVERSION fields from form
      const trafficConversion = {
        monthlyAverageSessions: formData.monthlyAverageSessions || '',
        mobilePercent: formData.mobilePercent || '',
        desktopPercent: formData.desktopPercent || '',
        mobileConversionRate: formData.mobileConversionRate || '',
        desktopConversionRate: formData.desktopConversionRate || '',
        operatingMargin: formData.operatingMargin || '',
      }

      // 3) Collect AVERAGE ORDER VALUE fields from form
      const averageOrderValue = {
        currentCustomers: formData.currentCustomers || '',
        repeatCustomerPercentage: formData.repeatCustomerPercentage || '',
        annualOrderVolume: formData.annualOrderVolume || '',
        averageOrderValue: formData.averageOrderValue || '',
        expectedAOVIncrease: formData.expectedAOVIncrease || '',
      }

      // 4) Collect BUSINESS USER PRODUCTIVITY fields from form
      const businessUserProductivity = {
        numberOfBusinessUsers: formData.numberOfBusinessUsers || '',
        averageSalary: formData.averageSalary || '',
        timeSpentOnManualWork: formData.timeSpentOnManualWork || '',
        expectedReductionInManualWork: formData.expectedReductionInManualWork || '',
      }

      // 5) Collect IT PRODUCTIVITY fields from form
      const itProductivity = {
        numberOfITUsers: formData.numberOfITUsers || '',
        averageITSalary: formData.averageITSalary || '',
        timeSpentOnManualWorkIT: formData.timeSpentOnManualWorkIT || '',
        expectedReductionInManualWorkIT: formData.expectedReductionInManualWorkIT || '',
      }

      // 6) Collect INVESTMENT DETAILS fields from form
      const investmentDetails = {
        annualGMV: formData.annualGMV || '',
        annualGMVGrowthRate: formData.annualGMVGrowthRate || '',
        isShopifyPaymentsInScope: formData.isShopifyPaymentsInScope || '',
        platformFees: formData.platformFees || '',
        oneTimeImplementation: formData.oneTimeImplementation || '',
        implementationTimeline: formData.implementationTimeline || '',
        ongoingPartnerCosts: formData.ongoingPartnerCosts || '',
        wacc: formData.wacc || '',
        includeTCOSavingsAnalysis: formData.includeTCOSavingsAnalysis || '',
      }

      // 7) Turn each group into ONE string (JSON)
      const userContactString = JSON.stringify(userContact)
      const trafficConversionString = JSON.stringify(trafficConversion)
      const averageOrderValueString = JSON.stringify(averageOrderValue)
      const businessUserProductivityString = JSON.stringify(businessUserProductivity)
      const itProductivityString = JSON.stringify(itProductivity)
      const investmentDetailsString = JSON.stringify(investmentDetails)

      // 8) Build payload for HubSpot Forms API
      const portalId = '244766021'
      const formId = '2158a83c-3424-4a37-a60f-f773f3710b4d'
      const url = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`

      const payload = {
        fields: [
          // EMAIL as its own field (VERY important)
          {
            name: 'email', // HubSpot email property
            value: formData.email, // from your form
          },
          {
            name: 'user_contact', // internal property name
            value: userContactString,
          },
          {
            name: 'traffic_conversion', // internal property name
            value: trafficConversionString,
          },
          {
            name: 'average order value', // internal property name
            value: averageOrderValueString,
          },
          {
            name: 'business_user_productivity', // internal property name
            value: businessUserProductivityString,
          },
          {
            name: 'IT_productivity', // internal property name
            value: itProductivityString,
          },
          {
            name: 'investment_details', // internal property name
            value: investmentDetailsString,
          },
        ],
        context: {
          pageUri: typeof window !== 'undefined' ? window.location.href : '',
          pageName: 'Shopify TCO Calculator',
        },
      }

      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (response.ok) {
        const data = await response.json()
        console.log('HubSpot submission successful:', data)
      } else {
        const errorData = await response.json()
        console.error('HubSpot submission error:', errorData)
      }
    } catch (error) {
      console.error('Error submitting to HubSpot:', error)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (step === 1) {
      setStep(2)
    } else if (step === 2) {
      setStep(3)
    } else if (step === 3) {
      setStep(4)
    } else if (step === 4) {
      setStep(5)
    } else if (step === 5) {
      setStep(6)
    } else if (step === 6) {
      // Step 6 - Calculate ROI button clicked
      // ONLY send data to HubSpot when Calculate ROI button is clicked
      console.log('Form submitted:', formData)
      submitToHubSpot()
      setShowResults(true)
    }
  }

  const handleBack = () => {
    if (step === 2) {
      setStep(1)
    } else if (step === 3) {
      setStep(2)
    } else if (step === 4) {
      setStep(3)
    } else if (step === 5) {
      setStep(4)
    } else if (step === 6) {
      setStep(5)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section className="relative overflow-hidden bg-[#00BFC8] min-h-screen flex items-start justify-center py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="w-full max-w-xl mx-auto">
          {/* Title above the card */}
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6">
            3-Year ROI Calculator
          </h2>

          {/* White Card with Form */}
          <div className="bg-white shadow-lg px-8 py-8 lg:px-10 lg:py-10">
            {/* Step 1: Contact Information */}
            {step === 1 && (
              <>
                {/* Form Header */}
                <div className="flex items-center gap-3 mb-8">
                  <svg
                    className="w-6 h-6 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
                  <h3 className="text-base lg:text-lg font-semibold text-gray-900">
                    Contact Information
                  </h3>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
              {/* First Name */}
              <div className="bg-gray-100 px-4 py-3">
                <label className="block text-xs text-gray-500 mb-1">
                  First Name*
                </label>
                <input
                  type="text"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full bg-transparent focus:outline-none text-gray-900 text-sm"
                />
              </div>

              {/* Last Name */}
              <div className="bg-gray-100 px-4 py-3">
                <label className="block text-xs text-gray-500 mb-1">
                  Last Name*
                </label>
                <input
                  type="text"
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full bg-transparent focus:outline-none text-gray-900 text-sm"
                />
              </div>

              {/* Email */}
              <div className="bg-gray-100 px-4 py-3">
                <label className="block text-xs text-gray-500 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent focus:outline-none text-gray-900 text-sm"
                />
              </div>

              {/* Company Name */}
              <div className="bg-gray-100 px-4 py-3">
                <label className="block text-xs text-gray-500 mb-1">
                  Company Name *
                </label>
                <input
                  type="text"
                  name="companyName"
                  required
                  value={formData.companyName}
                  onChange={handleChange}
                  className="w-full bg-transparent focus:outline-none text-gray-900 text-sm"
                />
              </div>

              {/* Job Title */}
              <div className="bg-gray-100 px-4 py-3">
                <label className="block text-xs text-gray-500 mb-1">
                  Job Title *
                </label>
                <input
                  type="text"
                  name="jobTitle"
                  required
                  value={formData.jobTitle}
                  onChange={handleChange}
                  className="w-full bg-transparent focus:outline-none text-gray-900 text-sm"
                />
              </div>

              {/* Current Platform */}
              <div className="bg-gray-100 px-4 py-3 relative">
                <label className="block text-xs text-gray-500 mb-1">
                  Current Platform
                </label>
                <select
                  name="currentPlatform"
                  value={formData.currentPlatform}
                  onChange={handleChange}
                  className="w-full bg-transparent focus:outline-none text-gray-900 text-sm appearance-none pr-8"
                >
                  {platformOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <div className="absolute top-1/2 right-4 -translate-y-1/2 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-400"
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
                </div>
              </div>

              {/* Currency */}
              <div className="bg-gray-100 px-4 py-3 relative">
                <label className="block text-xs text-gray-500 mb-1">
                  Currency
                </label>
                <select
                  name="currency"
                  value={formData.currency}
                  onChange={handleChange}
                  className="w-full bg-transparent focus:outline-none text-gray-900 text-sm appearance-none pr-8"
                >
                  {currencies.map((currency) => (
                    <option key={currency} value={currency}>
                      {currency}
                    </option>
                  ))}
                </select>
                <div className="absolute top-1/2 right-4 -translate-y-1/2 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-400"
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
                </div>
              </div>

                  {/* Next Button */}
                  <div className="flex justify-center pt-6">
                    <button
                      type="submit"
                      className="bg-[#00BFC8] text-white py-3 px-12 font-medium hover:bg-[#00A8B0] transition-colors flex items-center justify-center gap-2"
                    >
                      Next
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </button>
                  </div>
                </form>
              </>
            )}

            {/* Step 2: Traffic & Conversion */}
            {step === 2 && (
              <>
                {/* Form Header */}
                <div className="flex items-center gap-3 mb-8">
                  <svg
                    className="w-6 h-6 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 15V18m-7.5-6v9m7.5-9v9m-7.5 0h7.5m-7.5 0h-3m16.5 0h-3m-16.5 0h3M9 9.75l3 3m0 0l3-3m-3 3V5.25"
                    />
                  </svg>
                  <h3 className="text-base lg:text-lg font-semibold text-gray-900">
                    Traffic & Conversion
                  </h3>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Monthly Average Sessions */}
                  <div className="bg-gray-100 px-4 py-3">
                    <label className="block text-xs text-gray-500 mb-1">
                      Monthly Average Sessions
                    </label>
                    <input
                      type="number"
                      name="monthlyAverageSessions"
                      value={formData.monthlyAverageSessions}
                      onChange={handleChange}
                      className="w-full bg-transparent focus:outline-none text-gray-900 text-sm"
                      placeholder="1000000"
                    />
                  </div>

                  {/* Device Distribution */}
                  <div className="grid grid-cols-2 gap-4">
                    {/* Mobile % */}
                    <div className="bg-gray-100 px-4 py-3">
                      <label className="block text-xs text-gray-500 mb-1">
                        Mobile %
                      </label>
                      <input
                        type="number"
                        name="mobilePercent"
                        value={formData.mobilePercent}
                        onChange={handleChange}
                        className="w-full bg-transparent focus:outline-none text-gray-900 text-sm"
                        placeholder="60"
                      />
                    </div>

                    {/* Desktop % */}
                    <div className="bg-gray-100 px-4 py-3">
                      <label className="block text-xs text-gray-500 mb-1">
                        Desktop %
                      </label>
                      <input
                        type="number"
                        name="desktopPercent"
                        value={formData.desktopPercent}
                        onChange={handleChange}
                        className="w-full bg-transparent focus:outline-none text-gray-900 text-sm"
                        placeholder="40"
                      />
                    </div>
                  </div>

                  {/* Conversion Rates */}
                  <div className="grid grid-cols-2 gap-4">
                    {/* Mobile Conversion Rate %} */}
                    <div className="bg-gray-100 px-4 py-3">
                      <label className="block text-xs text-gray-500 mb-1">
                        Mobile Conversion Rate %
                      </label>
                      <input
                        type="number"
                        step="0.1"
                        name="mobileConversionRate"
                        value={formData.mobileConversionRate}
                        onChange={handleChange}
                        className="w-full bg-transparent focus:outline-none text-gray-900 text-sm"
                        placeholder="2.5"
                      />
                    </div>

                    {/* Desktop Conversion Rate %} */}
                    <div className="bg-gray-100 px-4 py-3">
                      <label className="block text-xs text-gray-500 mb-1">
                        Desktop Conversion Rate %
                      </label>
                      <input
                        type="number"
                        step="0.1"
                        name="desktopConversionRate"
                        value={formData.desktopConversionRate}
                        onChange={handleChange}
                        className="w-full bg-transparent focus:outline-none text-gray-900 text-sm"
                        placeholder="2.5"
                      />
                    </div>
                  </div>

                  {/* Operating Margin */}
                  <div className="bg-gray-100 px-4 py-3">
                    <label className="block text-xs text-gray-500 mb-1">
                      Operating Margin %
                    </label>
                    <input
                      type="number"
                      step="0.1"
                      name="operatingMargin"
                      value={formData.operatingMargin}
                      onChange={handleChange}
                      className="w-full bg-transparent focus:outline-none text-gray-900 text-sm"
                      placeholder="30"
                    />
                  </div>

                  {/* Buttons */}
                  <div className="flex justify-between items-center pt-6">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="text-gray-600 hover:text-gray-900 font-medium flex items-center justify-center gap-2"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 19l-7-7m0 0l7-7m-7 7h18"
                        />
                      </svg>
                      Back
                    </button>
                    <button
                      type="submit"
                      className="bg-[#00BFC8] text-white py-3 px-12 font-medium hover:bg-[#00A8B0] transition-colors flex items-center justify-center gap-2"
                    >
                      Next
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </button>
                  </div>
                </form>
              </>
            )}

            {/* Step 3: Average Order Value */}
            {step === 3 && (
              <>
                {/* Form Header */}
                <div className="flex items-center gap-3 mb-8">
                  <svg
                    className="w-6 h-6 text-[#00BFC8]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <h3 className="text-base lg:text-lg font-semibold text-[#00BFC8]">
                    $ Average Order Value
                  </h3>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Current Customers */}
                  <div className="bg-gray-100 px-4 py-3">
                    <label className="block text-xs text-gray-500 mb-1">
                      Current Customers
                    </label>
                    <input
                      type="number"
                      name="currentCustomers"
                      value={formData.currentCustomers}
                      onChange={handleChange}
                      className="w-full bg-transparent focus:outline-none text-gray-900 text-sm"
                      placeholder="500000"
                    />
                  </div>

                  {/* Repeat Customer Percentage */}
                  <div className="bg-gray-100 px-4 py-3">
                    <label className="block text-xs text-gray-500 mb-1">
                      Repeat Customer Percentage %
                    </label>
                    <input
                      type="number"
                      step="0.1"
                      name="repeatCustomerPercentage"
                      value={formData.repeatCustomerPercentage}
                      onChange={handleChange}
                      className="w-full bg-transparent focus:outline-none text-gray-900 text-sm"
                      placeholder="25"
                    />
                  </div>

                  {/* Annual Order Volume */}
                  <div className="bg-gray-100 px-4 py-3">
                    <label className="block text-xs text-gray-500 mb-1">
                      Annual Order Volume
                    </label>
                    <input
                      type="number"
                      name="annualOrderVolume"
                      value={formData.annualOrderVolume}
                      onChange={handleChange}
                      className="w-full bg-transparent focus:outline-none text-gray-900 text-sm"
                      placeholder="25000"
                    />
                  </div>

                  {/* Average Order Value */}
                  <div className="bg-gray-100 px-4 py-3">
                    <label className="block text-xs text-gray-500 mb-1">
                      Average Order Value (NOK)
                      <span className="text-red-500 ml-1">*</span>
                    </label>
                    <input
                      type="number"
                      name="averageOrderValue"
                      required
                      value={formData.averageOrderValue}
                      onChange={handleChange}
                      className="w-full bg-transparent focus:outline-none text-gray-900 text-sm"
                      placeholder="806"
                    />
                  </div>

                  {/* Expected AOV Increase */}
                  <div className="bg-gray-100 px-4 py-3">
                    <label className="block text-xs text-gray-500 mb-1">
                      Expected AOV Increase %
                    </label>
                    <input
                      type="number"
                      step="0.1"
                      name="expectedAOVIncrease"
                      value={formData.expectedAOVIncrease}
                      onChange={handleChange}
                      className="w-full bg-transparent focus:outline-none text-gray-900 text-sm"
                      placeholder="3"
                    />
                    <p className="text-xs text-gray-400 mt-2">
                      Shopify benchmark: 6.4% average.
                    </p>
                  </div>

                  {/* Buttons */}
                  <div className="flex justify-between items-center pt-6">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="text-gray-600 hover:text-gray-900 font-medium flex items-center justify-center gap-2"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 19l-7-7m0 0l7-7m-7 7h18"
                        />
                      </svg>
                      Back
                    </button>
                    <button
                      type="submit"
                      className="bg-[#00BFC8] text-white py-3 px-12 font-medium hover:bg-[#00A8B0] transition-colors flex items-center justify-center gap-2"
                    >
                      Next
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </button>
                  </div>
                </form>
              </>
            )}

            {/* Step 4: Business User Productivity */}
            {step === 4 && (
              <>
                {/* Form Header */}
                <div className="flex items-center gap-3 mb-8">
                  <svg
                    className="w-6 h-6 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                    />
                  </svg>
                  <h3 className="text-base lg:text-lg font-semibold text-gray-900">
                    Business User Productivity
                  </h3>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Number of Business Users */}
                  <div className="bg-gray-100 px-4 py-3">
                    <label className="block text-xs text-gray-500 mb-1">
                      Number of Business Users
                    </label>
                    <input
                      type="number"
                      name="numberOfBusinessUsers"
                      value={formData.numberOfBusinessUsers}
                      onChange={handleChange}
                      className="w-full bg-transparent focus:outline-none text-gray-900 text-sm"
                      placeholder="15"
                    />
                  </div>

                  {/* Average Salary */}
                  <div className="bg-gray-100 px-4 py-3">
                    <label className="block text-xs text-gray-500 mb-1">
                      Average Salary (NOK)
                    </label>
                    <input
                      type="number"
                      name="averageSalary"
                      value={formData.averageSalary}
                      onChange={handleChange}
                      className="w-full bg-transparent focus:outline-none text-gray-900 text-sm"
                      placeholder="1075269"
                    />
                  </div>

                  {/* Time Spent on Manual Work */}
                  <div className="bg-gray-100 px-4 py-3">
                    <label className="block text-xs text-gray-500 mb-1">
                      Time Spent on Manual Work %
                    </label>
                    <input
                      type="number"
                      step="0.1"
                      name="timeSpentOnManualWork"
                      value={formData.timeSpentOnManualWork}
                      onChange={handleChange}
                      className="w-full bg-transparent focus:outline-none text-gray-900 text-sm"
                      placeholder="25"
                    />
                  </div>

                  {/* Expected Reduction in Manual Work */}
                  <div className="bg-gray-100 px-4 py-3">
                    <label className="block text-xs text-gray-500 mb-1">
                      Expected Reduction in Manual Work %
                    </label>
                    <input
                      type="number"
                      step="0.1"
                      name="expectedReductionInManualWork"
                      value={formData.expectedReductionInManualWork}
                      onChange={handleChange}
                      className="w-full bg-transparent focus:outline-none text-gray-900 text-sm"
                      placeholder="15"
                    />
                  </div>

                  {/* Buttons */}
                  <div className="flex justify-between items-center pt-6">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="text-gray-600 hover:text-gray-900 font-medium flex items-center justify-center gap-2"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 19l-7-7m0 0l7-7m-7 7h18"
                        />
                      </svg>
                      Back
                    </button>
                    <button
                      type="submit"
                      className="bg-[#00BFC8] text-white py-3 px-12 font-medium hover:bg-[#00A8B0] transition-colors flex items-center justify-center gap-2"
                    >
                      Next
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </button>
                  </div>
                </form>
              </>
            )}

            {/* Step 5: IT Productivity */}
            {step === 5 && (
              <>
                {/* Form Header */}
                <div className="flex items-center gap-3 mb-8">
                  <svg
                    className="w-6 h-6 text-[#00BFC8]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20.25 14.15v4.25c0 .414-.336.75-.75.75h-4.5a.75.75 0 01-.75-.75v-4.25m0 0h4.5m-4.5 0l-4.5-4.5m4.5 4.5l4.5-4.5M3.75 9.75h16.5m-16.5 0v-1.5c0-1.657 1.343-3 3-3h10.5c1.657 0 3 1.343 3 3v1.5m-16.5 0v6.75h16.5v-6.75"
                    />
                  </svg>
                  <h3 className="text-base lg:text-lg font-semibold text-[#00BFC8]">
                    IT Productivity
                  </h3>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Number of IT Users */}
                  <div className="bg-gray-100 px-4 py-3">
                    <label className="block text-xs text-gray-500 mb-1">
                      Number of IT Users
                    </label>
                    <input
                      type="number"
                      name="numberOfITUsers"
                      value={formData.numberOfITUsers}
                      onChange={handleChange}
                      className="w-full bg-transparent focus:outline-none text-gray-900 text-sm"
                      placeholder="10"
                    />
                  </div>

                  {/* Average IT Salary */}
                  <div className="bg-gray-100 px-4 py-3">
                    <label className="block text-xs text-gray-500 mb-1">
                      Average IT Salary (NOK)
                    </label>
                    <input
                      type="number"
                      name="averageITSalary"
                      value={formData.averageITSalary}
                      onChange={handleChange}
                      className="w-full bg-transparent focus:outline-none text-gray-900 text-sm"
                      placeholder="1612903"
                    />
                  </div>

                  {/* Time Spent on Manual Work */}
                  <div className="bg-gray-100 px-4 py-3">
                    <label className="block text-xs text-gray-500 mb-1">
                      Time Spent on Manual Work %
                    </label>
                    <input
                      type="number"
                      step="0.1"
                      name="timeSpentOnManualWorkIT"
                      value={formData.timeSpentOnManualWorkIT}
                      onChange={handleChange}
                      className="w-full bg-transparent focus:outline-none text-gray-900 text-sm"
                      placeholder="40"
                    />
                  </div>

                  {/* Expected Reduction in Manual Work */}
                  <div className="bg-gray-100 px-4 py-3">
                    <label className="block text-xs text-gray-500 mb-1">
                      Expected Reduction in Manual Work %
                    </label>
                    <input
                      type="number"
                      step="0.1"
                      name="expectedReductionInManualWorkIT"
                      value={formData.expectedReductionInManualWorkIT}
                      onChange={handleChange}
                      className="w-full bg-transparent focus:outline-none text-gray-900 text-sm"
                      placeholder="15"
                    />
                  </div>

                  {/* Buttons */}
                  <div className="flex justify-between items-center pt-6">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="text-gray-600 hover:text-gray-900 font-medium flex items-center justify-center gap-2"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 19l-7-7m0 0l7-7m-7 7h18"
                        />
                      </svg>
                      Back
                    </button>
                    <button
                      type="submit"
                      className="bg-[#00BFC8] text-white py-3 px-12 font-medium hover:bg-[#00A8B0] transition-colors flex items-center justify-center gap-2"
                    >
                      Next
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </button>
                  </div>
                </form>
              </>
            )}

            {/* Step 6: Investment Details or Results */}
            {step === 6 && !showResults && (
              <>
                {/* Form Header */}
                <div className="flex items-center gap-3 mb-8">
                  <svg
                    className="w-6 h-6 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                    />
                  </svg>
                  <h3 className="text-base lg:text-lg font-semibold text-gray-900">
                    Investment Details
                  </h3>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Annual GMV */}
                  <div className="bg-gray-100 px-4 py-3">
                    <label className="block text-xs text-gray-500 mb-1">
                      Annual GMV (NOK)
                      <span className="text-red-500 ml-1">*</span>
                    </label>
                    <input
                      type="number"
                      name="annualGMV"
                      required
                      value={formData.annualGMV}
                      onChange={handleChange}
                      className="w-full bg-transparent focus:outline-none text-gray-900 text-sm"
                      placeholder="1075268817"
                    />
                  </div>

                  {/* Annual GMV Growth Rate */}
                  <div className="bg-gray-100 px-4 py-3">
                    <label className="block text-xs text-gray-500 mb-1">
                      Annual GMV Growth Rate %
                    </label>
                    <input
                      type="number"
                      step="0.1"
                      name="annualGMVGrowthRate"
                      value={formData.annualGMVGrowthRate}
                      onChange={handleChange}
                      className="w-full bg-transparent focus:outline-none text-gray-900 text-sm"
                      placeholder="10"
                    />
                  </div>

                  {/* Is Shopify Payments in Scope? */}
                  <div className="bg-gray-100 px-4 py-3 relative">
                    <label className="block text-xs text-gray-500 mb-1">
                      Is Shopify Payments in Scope?
                    </label>
                    <select
                      name="isShopifyPaymentsInScope"
                      value={formData.isShopifyPaymentsInScope}
                      onChange={handleChange}
                      className="w-full bg-transparent focus:outline-none text-gray-900 text-sm appearance-none pr-8"
                    >
                      <option value="No">No</option>
                      <option value="Yes">Yes</option>
                    </select>
                    <div className="absolute top-1/2 right-4 -translate-y-1/2 pointer-events-none">
                      <svg
                        className="w-5 h-5 text-gray-400"
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
                    </div>
                  </div>

                  {/* Platform Fees */}
                  <div className="bg-gray-100 px-4 py-3">
                    <label className="block text-xs text-gray-500 mb-1">
                      Platform Fees (NOK)
                      <span className="text-red-500 ml-1">*</span>
                    </label>
                    <input
                      type="number"
                      name="platformFees"
                      required
                      value={formData.platformFees}
                      onChange={handleChange}
                      className="w-full bg-transparent focus:outline-none text-gray-900 text-sm"
                      placeholder="296774"
                    />
                  </div>

                  {/* One Time Implementation */}
                  <div className="bg-gray-100 px-4 py-3">
                    <label className="block text-xs text-gray-500 mb-1">
                      One Time Implementation (NOK)
                    </label>
                    <input
                      type="number"
                      name="oneTimeImplementation"
                      value={formData.oneTimeImplementation}
                      onChange={handleChange}
                      className="w-full bg-transparent focus:outline-none text-gray-900 text-sm"
                      placeholder="0"
                    />
                  </div>

                  {/* Implementation Timeline */}
                  <div className="bg-gray-100 px-4 py-3">
                    <label className="block text-xs text-gray-500 mb-1">
                      Implementation Timeline (Months)
                    </label>
                    <input
                      type="number"
                      name="implementationTimeline"
                      value={formData.implementationTimeline}
                      onChange={handleChange}
                      className="w-full bg-transparent focus:outline-none text-gray-900 text-sm"
                      placeholder="4"
                    />
                  </div>

                  {/* Ongoing Partner Costs */}
                  <div className="bg-gray-100 px-4 py-3">
                    <label className="block text-xs text-gray-500 mb-1">
                      Ongoing Partner Costs (NOK)
                    </label>
                    <input
                      type="number"
                      name="ongoingPartnerCosts"
                      value={formData.ongoingPartnerCosts}
                      onChange={handleChange}
                      className="w-full bg-transparent focus:outline-none text-gray-900 text-sm"
                      placeholder="0"
                    />
                  </div>

                  {/* WACC */}
                  <div className="bg-gray-100 px-4 py-3">
                    <label className="block text-xs text-gray-500 mb-1">
                      WACC %
                    </label>
                    <input
                      type="number"
                      step="0.1"
                      name="wacc"
                      value={formData.wacc}
                      onChange={handleChange}
                      className="w-full bg-transparent focus:outline-none text-gray-900 text-sm"
                      placeholder="10"
                    />
                  </div>

                  {/* Include TCO Savings Analysis? */}
                  <div className="bg-gray-100 px-4 py-3 relative">
                    <label className="block text-xs text-gray-500 mb-1">
                      Include TCO Savings Analysis?
                    </label>
                    <select
                      name="includeTCOSavingsAnalysis"
                      value={formData.includeTCOSavingsAnalysis}
                      onChange={handleChange}
                      className="w-full bg-transparent focus:outline-none text-gray-900 text-sm appearance-none pr-8"
                    >
                      <option value="Yes - vs SFCC">Yes - vs SFCC</option>
                      <option value="Yes - vs Magento">Yes - vs Magento</option>
                      <option value="Yes - vs WooCommerce">Yes - vs WooCommerce</option>
                      <option value="Yes - vs BigCommerce">Yes - vs BigCommerce</option>
                      <option value="No">No</option>
                    </select>
                    <div className="absolute top-1/2 right-4 -translate-y-1/2 pointer-events-none">
                      <svg
                        className="w-5 h-5 text-gray-400"
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
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex justify-between items-center pt-6">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="text-gray-600 hover:text-gray-900 font-medium flex items-center justify-center gap-2"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 19l-7-7m0 0l7-7m-7 7h18"
                        />
                      </svg>
                      Back
                    </button>
                    <button
                      type="submit"
                      className="bg-[#00BFC8] text-white py-3 px-12 font-medium hover:bg-[#00A8B0] transition-colors flex items-center justify-center gap-2"
                    >
                      Calculate ROI
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                        />
                      </svg>
                    </button>
                  </div>
                </form>
              </>
            )}

            {/* Results Section */}
            {showResults && (
              <div className="bg-white rounded-lg p-6 lg:p-8">
                {/* Title */}
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8">
                  Your 3-Year Shopify ROI Analysis
                </h2>

                {/* Bar Chart Section */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-6">
                    Annual Benefits Summary (NOK)
                  </h3>
                  
                  {/* Chart Container */}
                  <div className="relative">
                    {/* Y-axis labels */}
                    <div className="flex flex-col justify-between h-64 pr-4 absolute left-0 top-0">
                      <span className="text-xs text-gray-600">14,000,000</span>
                      <span className="text-xs text-gray-600">12,000,000</span>
                      <span className="text-xs text-gray-600">10,000,000</span>
                      <span className="text-xs text-gray-600">8,000,000</span>
                      <span className="text-xs text-gray-600">6,000,000</span>
                      <span className="text-xs text-gray-600">4,000,000</span>
                      <span className="text-xs text-gray-600">2,000,000</span>
                      <span className="text-xs text-gray-600">0</span>
                    </div>

                    {/* Chart Area */}
                    <div className="ml-16 relative h-64 border-l border-b border-gray-300">
                      {/* Grid Lines */}
                      <div className="absolute inset-0">
                        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
                          <div
                            key={i}
                            className="absolute left-0 right-0 border-t border-gray-200"
                            style={{ top: `${(i / 7) * 100}%` }}
                          />
                        ))}
                      </div>

                      {/* Bars */}
                      <div className="absolute bottom-0 left-0 right-0 flex items-end justify-around px-4 h-full">
                        {/* Conversion Impact */}
                        <div className="flex flex-col items-center flex-1">
                          <div
                            className="w-full bg-[#00BFC8] rounded-t"
                            style={{ height: '87%' }}
                          />
                          <span className="text-xs text-gray-600 mt-2 text-center leading-tight">
                            Conversion Impact
                          </span>
                        </div>

                        {/* AOV Impact */}
                        <div className="flex flex-col items-center flex-1">
                          <div
                            className="w-full bg-[#4A90E2] rounded-t"
                            style={{ height: '3.6%' }}
                          />
                          <span className="text-xs text-gray-600 mt-2 text-center leading-tight">
                            AOV Impact
                          </span>
                        </div>

                        {/* Business Productivity */}
                        <div className="flex flex-col items-center flex-1">
                          <div
                            className="w-full bg-gray-900 rounded-t"
                            style={{ height: '3.6%' }}
                          />
                          <span className="text-xs text-gray-600 mt-2 text-center leading-tight">
                            Business Productivity
                          </span>
                        </div>

                        {/* IT Productivity */}
                        <div className="flex flex-col items-center flex-1">
                          <div
                            className="w-full bg-[#87CEEB] rounded-t"
                            style={{ height: '5%' }}
                          />
                          <span className="text-xs text-gray-600 mt-2 text-center leading-tight">
                            IT Productivity
                          </span>
                        </div>

                        {/* TCO Savings */}
                        <div className="flex flex-col items-center flex-1">
                          <div
                            className="w-full bg-[#00BFC8] rounded-t"
                            style={{ height: '0.7%' }}
                          />
                          <span className="text-xs text-gray-600 mt-2 text-center leading-tight">
                            TCO Savings
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Y-axis label */}
                    <div className="ml-16 mt-2 text-xs text-gray-600 text-center">
                      Amount (NOK)
                    </div>
                  </div>
                </div>

                {/* Benefit Summary Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {/* Annual Benefits Card */}
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h4 className="text-sm font-medium text-gray-600 mb-2">
                      Annual Benefits
                    </h4>
                    <p className="text-3xl lg:text-4xl font-bold text-[#00BFC8]">
                      kr 14,550,653
                    </p>
                  </div>

                  {/* 3-Year Total Benefits Card */}
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h4 className="text-sm font-medium text-gray-600 mb-2">
                      3-Year Total Benefits
                    </h4>
                    <p className="text-3xl lg:text-4xl font-bold text-[#00BFC8]">
                      kr 43,651,959
                    </p>
                  </div>
                </div>

                {/* What's Next Section */}
                <div className="border-t border-gray-200 pt-8">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    What&apos;s Next?
                  </h3>
                  <p className="text-base text-gray-700 leading-relaxed">
                    We&apos;ve sent a detailed report to your email. Our team will contact you soon to discuss how we can help you achieve these results with Shopify.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
