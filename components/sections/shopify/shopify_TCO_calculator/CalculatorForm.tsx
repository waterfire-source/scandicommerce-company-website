'use client'

import React, { useState } from 'react'

interface CalculatorFormProps {
  selectedPlatform: string
}

// Static form configuration
const formTitle = '3-Year ROI Calculator'
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
const thankYouMessage = {
  title: 'Thank You!',
  mainMessage: "We've received your information and calculated your personalized 3-Year Shopify ROI analysis.",
  secondaryMessage: "A detailed report has been sent to your email address. This comprehensive report includes your annual benefits summary, 3-year total benefits, and a breakdown of all impact areas including conversion impact, AOV impact, business productivity, IT productivity, and TCO savings.",
  footerMessage: "If you have any questions in the meantime, please don't hesitate to reach out to us."
}

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
    currency: currencies[0] || 'Norwegian Krone (NOK)',
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
      const userContact = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        companyName: formData.companyName,
        jobTitle: formData.jobTitle,
        currentPlatform: formData.currentPlatform,
        currency: formData.currency,
      }

      const trafficConversion = {
        monthlyAverageSessions: formData.monthlyAverageSessions || '',
        mobilePercent: formData.mobilePercent || '',
        desktopPercent: formData.desktopPercent || '',
        mobileConversionRate: formData.mobileConversionRate || '',
        desktopConversionRate: formData.desktopConversionRate || '',
        operatingMargin: formData.operatingMargin || '',
      }

      const averageOrderValue = {
        currentCustomers: formData.currentCustomers || '',
        repeatCustomerPercentage: formData.repeatCustomerPercentage || '',
        annualOrderVolume: formData.annualOrderVolume || '',
        averageOrderValue: formData.averageOrderValue || '',
        expectedAOVIncrease: formData.expectedAOVIncrease || '',
      }

      const businessUserProductivity = {
        numberOfBusinessUsers: formData.numberOfBusinessUsers || '',
        averageSalary: formData.averageSalary || '',
        timeSpentOnManualWork: formData.timeSpentOnManualWork || '',
        expectedReductionInManualWork: formData.expectedReductionInManualWork || '',
      }

      const itProductivity = {
        numberOfITUsers: formData.numberOfITUsers || '',
        averageITSalary: formData.averageITSalary || '',
        timeSpentOnManualWorkIT: formData.timeSpentOnManualWorkIT || '',
        expectedReductionInManualWorkIT: formData.expectedReductionInManualWorkIT || '',
      }

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

      const userContactString = JSON.stringify(userContact)
      const trafficConversionString = JSON.stringify(trafficConversion)
      const averageOrderValueString = JSON.stringify(averageOrderValue)
      const businessUserProductivityString = JSON.stringify(businessUserProductivity)
      const itProductivityString = JSON.stringify(itProductivity)
      const investmentDetailsString = JSON.stringify(investmentDetails)

      const portalId = '244766021'
      const formId = '2158a83c-3424-4a37-a60f-f773f3710b4d'
      const url = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`

      const payload = {
        fields: [
          { name: 'email', value: formData.email },
          { name: 'user_contact', value: userContactString },
          { name: 'traffic_conversion', value: trafficConversionString },
          { name: 'average order value', value: averageOrderValueString },
          { name: 'business_user_productivity', value: businessUserProductivityString },
          { name: 'IT_productivity', value: itProductivityString },
          { name: 'investment_details', value: investmentDetailsString },
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
            {formTitle}
          </h2>

          {/* White Card with Form */}
          <div className="bg-white shadow-lg px-8 py-8 lg:px-10 lg:py-10">
            {/* Step 1: Contact Information */}
            {step === 1 && (
              <>
                <div className="flex items-center gap-3 mb-8">
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                  <h3 className="text-base lg:text-lg font-semibold text-gray-900">Contact Information</h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="bg-gray-100 px-4 py-3">
                    <label className="block text-xs text-gray-500 mb-1">First Name*</label>
                    <input type="text" name="firstName" required value={formData.firstName} onChange={handleChange} className="w-full bg-transparent focus:outline-none text-gray-900 text-sm" />
                  </div>
                  <div className="bg-gray-100 px-4 py-3">
                    <label className="block text-xs text-gray-500 mb-1">Last Name*</label>
                    <input type="text" name="lastName" required value={formData.lastName} onChange={handleChange} className="w-full bg-transparent focus:outline-none text-gray-900 text-sm" />
                  </div>
                  <div className="bg-gray-100 px-4 py-3">
                    <label className="block text-xs text-gray-500 mb-1">Email *</label>
                    <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full bg-transparent focus:outline-none text-gray-900 text-sm" />
                  </div>
                  <div className="bg-gray-100 px-4 py-3">
                    <label className="block text-xs text-gray-500 mb-1">Company Name *</label>
                    <input type="text" name="companyName" required value={formData.companyName} onChange={handleChange} className="w-full bg-transparent focus:outline-none text-gray-900 text-sm" />
                  </div>
                  <div className="bg-gray-100 px-4 py-3">
                    <label className="block text-xs text-gray-500 mb-1">Job Title *</label>
                    <input type="text" name="jobTitle" required value={formData.jobTitle} onChange={handleChange} className="w-full bg-transparent focus:outline-none text-gray-900 text-sm" />
                  </div>
                  <div className="bg-gray-100 px-4 py-3 relative">
                    <label className="block text-xs text-gray-500 mb-1">Current Platform</label>
                    <select name="currentPlatform" value={formData.currentPlatform} onChange={handleChange} className="w-full bg-transparent focus:outline-none text-gray-900 text-sm appearance-none pr-8">
                      {platformOptions.map((option) => (
                        <option key={option.value} value={option.value || ''}>{option.label}</option>
                      ))}
                    </select>
                  </div>
                  <div className="bg-gray-100 px-4 py-3 relative">
                    <label className="block text-xs text-gray-500 mb-1">Currency</label>
                    <select name="currency" value={formData.currency} onChange={handleChange} className="w-full bg-transparent focus:outline-none text-gray-900 text-sm appearance-none pr-8">
                      {currencies.map((currency) => (
                        <option key={currency} value={currency}>{currency}</option>
                      ))}
                    </select>
                  </div>
                  <div className="flex justify-center pt-6">
                    <button type="submit" className="bg-[#00BFC8] text-white py-3 px-12 font-medium hover:bg-[#00A8B0] transition-colors flex items-center justify-center gap-2">
                      Next
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </button>
                  </div>
                </form>
              </>
            )}

            {/* Step 2: Traffic & Conversion */}
            {step === 2 && !showResults && (
              <>
                <div className="flex items-center gap-3 mb-8">
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                  </svg>
                  <h3 className="text-base lg:text-lg font-semibold text-gray-900">Traffic & Conversion</h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="bg-gray-100 px-4 py-3">
                    <label className="block text-xs text-gray-500 mb-1">Monthly Average Sessions</label>
                    <input type="number" name="monthlyAverageSessions" value={formData.monthlyAverageSessions} onChange={handleChange} className="w-full bg-transparent focus:outline-none text-gray-900 text-sm" placeholder="e.g., 100000" />
                  </div>
                  <div className="bg-gray-100 px-4 py-3">
                    <label className="block text-xs text-gray-500 mb-1">Mobile Traffic (%)</label>
                    <input type="number" name="mobilePercent" value={formData.mobilePercent} onChange={handleChange} className="w-full bg-transparent focus:outline-none text-gray-900 text-sm" placeholder="e.g., 60" />
                  </div>
                  <div className="bg-gray-100 px-4 py-3">
                    <label className="block text-xs text-gray-500 mb-1">Desktop Traffic (%)</label>
                    <input type="number" name="desktopPercent" value={formData.desktopPercent} onChange={handleChange} className="w-full bg-transparent focus:outline-none text-gray-900 text-sm" placeholder="e.g., 40" />
                  </div>
                  <div className="bg-gray-100 px-4 py-3">
                    <label className="block text-xs text-gray-500 mb-1">Mobile Conversion Rate (%)</label>
                    <input type="number" step="0.01" name="mobileConversionRate" value={formData.mobileConversionRate} onChange={handleChange} className="w-full bg-transparent focus:outline-none text-gray-900 text-sm" placeholder="e.g., 1.5" />
                  </div>
                  <div className="bg-gray-100 px-4 py-3">
                    <label className="block text-xs text-gray-500 mb-1">Desktop Conversion Rate (%)</label>
                    <input type="number" step="0.01" name="desktopConversionRate" value={formData.desktopConversionRate} onChange={handleChange} className="w-full bg-transparent focus:outline-none text-gray-900 text-sm" placeholder="e.g., 3.0" />
                  </div>
                  <div className="bg-gray-100 px-4 py-3">
                    <label className="block text-xs text-gray-500 mb-1">Operating Margin (%)</label>
                    <input type="number" step="0.01" name="operatingMargin" value={formData.operatingMargin} onChange={handleChange} className="w-full bg-transparent focus:outline-none text-gray-900 text-sm" placeholder="e.g., 25" />
                  </div>
                  <div className="flex justify-between items-center pt-6">
                    <button type="button" onClick={handleBack} className="text-gray-600 hover:text-gray-900 font-medium flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                      Back
                    </button>
                    <button type="submit" className="bg-[#00BFC8] text-white py-3 px-12 font-medium hover:bg-[#00A8B0] transition-colors flex items-center gap-2">
                      Next
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </button>
                  </div>
                </form>
              </>
            )}

            {/* Step 3: Average Order Value */}
            {step === 3 && !showResults && (
              <>
                <div className="flex items-center gap-3 mb-8">
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                  </svg>
                  <h3 className="text-base lg:text-lg font-semibold text-gray-900">Average Order Value</h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="bg-gray-100 px-4 py-3">
                    <label className="block text-xs text-gray-500 mb-1">Current Number of Customers</label>
                    <input type="number" name="currentCustomers" value={formData.currentCustomers} onChange={handleChange} className="w-full bg-transparent focus:outline-none text-gray-900 text-sm" placeholder="e.g., 50000" />
                  </div>
                  <div className="bg-gray-100 px-4 py-3">
                    <label className="block text-xs text-gray-500 mb-1">Repeat Customer Percentage (%)</label>
                    <input type="number" step="0.01" name="repeatCustomerPercentage" value={formData.repeatCustomerPercentage} onChange={handleChange} className="w-full bg-transparent focus:outline-none text-gray-900 text-sm" placeholder="e.g., 30" />
                  </div>
                  <div className="bg-gray-100 px-4 py-3">
                    <label className="block text-xs text-gray-500 mb-1">Annual Order Volume</label>
                    <input type="number" name="annualOrderVolume" value={formData.annualOrderVolume} onChange={handleChange} className="w-full bg-transparent focus:outline-none text-gray-900 text-sm" placeholder="e.g., 100000" />
                  </div>
                  <div className="bg-gray-100 px-4 py-3">
                    <label className="block text-xs text-gray-500 mb-1">Average Order Value</label>
                    <input type="number" step="0.01" name="averageOrderValue" value={formData.averageOrderValue} onChange={handleChange} className="w-full bg-transparent focus:outline-none text-gray-900 text-sm" placeholder="e.g., 150" />
                  </div>
                  <div className="bg-gray-100 px-4 py-3">
                    <label className="block text-xs text-gray-500 mb-1">Expected AOV Increase (%)</label>
                    <input type="number" step="0.01" name="expectedAOVIncrease" value={formData.expectedAOVIncrease} onChange={handleChange} className="w-full bg-transparent focus:outline-none text-gray-900 text-sm" placeholder="e.g., 10" />
                  </div>
                  <div className="flex justify-between items-center pt-6">
                    <button type="button" onClick={handleBack} className="text-gray-600 hover:text-gray-900 font-medium flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                      Back
                    </button>
                    <button type="submit" className="bg-[#00BFC8] text-white py-3 px-12 font-medium hover:bg-[#00A8B0] transition-colors flex items-center gap-2">
                      Next
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </button>
                  </div>
                </form>
              </>
            )}

            {/* Step 4: Business User Productivity */}
            {step === 4 && !showResults && (
              <>
                <div className="flex items-center gap-3 mb-8">
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>
                  <h3 className="text-base lg:text-lg font-semibold text-gray-900">Business User Productivity</h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="bg-gray-100 px-4 py-3">
                    <label className="block text-xs text-gray-500 mb-1">Number of Business Users</label>
                    <input type="number" name="numberOfBusinessUsers" value={formData.numberOfBusinessUsers} onChange={handleChange} className="w-full bg-transparent focus:outline-none text-gray-900 text-sm" placeholder="e.g., 10" />
                  </div>
                  <div className="bg-gray-100 px-4 py-3">
                    <label className="block text-xs text-gray-500 mb-1">Average Salary (Annual)</label>
                    <input type="number" name="averageSalary" value={formData.averageSalary} onChange={handleChange} className="w-full bg-transparent focus:outline-none text-gray-900 text-sm" placeholder="e.g., 75000" />
                  </div>
                  <div className="bg-gray-100 px-4 py-3">
                    <label className="block text-xs text-gray-500 mb-1">Time Spent on Manual Work (%)</label>
                    <input type="number" step="0.01" name="timeSpentOnManualWork" value={formData.timeSpentOnManualWork} onChange={handleChange} className="w-full bg-transparent focus:outline-none text-gray-900 text-sm" placeholder="e.g., 30" />
                  </div>
                  <div className="bg-gray-100 px-4 py-3">
                    <label className="block text-xs text-gray-500 mb-1">Expected Reduction in Manual Work (%)</label>
                    <input type="number" step="0.01" name="expectedReductionInManualWork" value={formData.expectedReductionInManualWork} onChange={handleChange} className="w-full bg-transparent focus:outline-none text-gray-900 text-sm" placeholder="e.g., 50" />
                  </div>
                  <div className="flex justify-between items-center pt-6">
                    <button type="button" onClick={handleBack} className="text-gray-600 hover:text-gray-900 font-medium flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                      Back
                    </button>
                    <button type="submit" className="bg-[#00BFC8] text-white py-3 px-12 font-medium hover:bg-[#00A8B0] transition-colors flex items-center gap-2">
                      Next
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </button>
                  </div>
                </form>
              </>
            )}

            {/* Step 5: IT Productivity */}
            {step === 5 && !showResults && (
              <>
                <div className="flex items-center gap-3 mb-8">
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                  </svg>
                  <h3 className="text-base lg:text-lg font-semibold text-gray-900">IT Productivity</h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="bg-gray-100 px-4 py-3">
                    <label className="block text-xs text-gray-500 mb-1">Number of IT Users</label>
                    <input type="number" name="numberOfITUsers" value={formData.numberOfITUsers} onChange={handleChange} className="w-full bg-transparent focus:outline-none text-gray-900 text-sm" placeholder="e.g., 5" />
                  </div>
                  <div className="bg-gray-100 px-4 py-3">
                    <label className="block text-xs text-gray-500 mb-1">Average IT Salary (Annual)</label>
                    <input type="number" name="averageITSalary" value={formData.averageITSalary} onChange={handleChange} className="w-full bg-transparent focus:outline-none text-gray-900 text-sm" placeholder="e.g., 90000" />
                  </div>
                  <div className="bg-gray-100 px-4 py-3">
                    <label className="block text-xs text-gray-500 mb-1">Time Spent on Manual Work (%)</label>
                    <input type="number" step="0.01" name="timeSpentOnManualWorkIT" value={formData.timeSpentOnManualWorkIT} onChange={handleChange} className="w-full bg-transparent focus:outline-none text-gray-900 text-sm" placeholder="e.g., 40" />
                  </div>
                  <div className="bg-gray-100 px-4 py-3">
                    <label className="block text-xs text-gray-500 mb-1">Expected Reduction in Manual Work (%)</label>
                    <input type="number" step="0.01" name="expectedReductionInManualWorkIT" value={formData.expectedReductionInManualWorkIT} onChange={handleChange} className="w-full bg-transparent focus:outline-none text-gray-900 text-sm" placeholder="e.g., 60" />
                  </div>
                  <div className="flex justify-between items-center pt-6">
                    <button type="button" onClick={handleBack} className="text-gray-600 hover:text-gray-900 font-medium flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                      Back
                    </button>
                    <button type="submit" className="bg-[#00BFC8] text-white py-3 px-12 font-medium hover:bg-[#00A8B0] transition-colors flex items-center gap-2">
                      Next
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </button>
                  </div>
                </form>
              </>
            )}

            {/* Step 6: Investment Details */}
            {step === 6 && !showResults && (
              <>
                <div className="flex items-center gap-3 mb-8">
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-base lg:text-lg font-semibold text-gray-900">Investment Details</h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="bg-gray-100 px-4 py-3">
                    <label className="block text-xs text-gray-500 mb-1">Annual GMV</label>
                    <input type="number" name="annualGMV" value={formData.annualGMV} onChange={handleChange} className="w-full bg-transparent focus:outline-none text-gray-900 text-sm" placeholder="e.g., 10000000" />
                  </div>
                  <div className="bg-gray-100 px-4 py-3">
                    <label className="block text-xs text-gray-500 mb-1">Annual GMV Growth Rate (%)</label>
                    <input type="number" step="0.01" name="annualGMVGrowthRate" value={formData.annualGMVGrowthRate} onChange={handleChange} className="w-full bg-transparent focus:outline-none text-gray-900 text-sm" placeholder="e.g., 15" />
                  </div>
                  <div className="bg-gray-100 px-4 py-3 relative">
                    <label className="block text-xs text-gray-500 mb-1">Is Shopify Payments in Scope?</label>
                    <select name="isShopifyPaymentsInScope" value={formData.isShopifyPaymentsInScope} onChange={handleChange} className="w-full bg-transparent focus:outline-none text-gray-900 text-sm appearance-none pr-8">
                      <option value="No">No</option>
                      <option value="Yes">Yes</option>
                    </select>
                  </div>
                  <div className="bg-gray-100 px-4 py-3">
                    <label className="block text-xs text-gray-500 mb-1">Platform Fees (Annual)</label>
                    <input type="number" name="platformFees" value={formData.platformFees} onChange={handleChange} className="w-full bg-transparent focus:outline-none text-gray-900 text-sm" placeholder="e.g., 50000" />
                  </div>
                  <div className="bg-gray-100 px-4 py-3">
                    <label className="block text-xs text-gray-500 mb-1">One-Time Implementation Cost</label>
                    <input type="number" name="oneTimeImplementation" value={formData.oneTimeImplementation} onChange={handleChange} className="w-full bg-transparent focus:outline-none text-gray-900 text-sm" placeholder="e.g., 200000" />
                  </div>
                  <div className="bg-gray-100 px-4 py-3">
                    <label className="block text-xs text-gray-500 mb-1">Implementation Timeline (months)</label>
                    <input type="number" name="implementationTimeline" value={formData.implementationTimeline} onChange={handleChange} className="w-full bg-transparent focus:outline-none text-gray-900 text-sm" placeholder="e.g., 6" />
                  </div>
                  <div className="bg-gray-100 px-4 py-3">
                    <label className="block text-xs text-gray-500 mb-1">Ongoing Partner Costs (Annual)</label>
                    <input type="number" name="ongoingPartnerCosts" value={formData.ongoingPartnerCosts} onChange={handleChange} className="w-full bg-transparent focus:outline-none text-gray-900 text-sm" placeholder="e.g., 100000" />
                  </div>
                  <div className="bg-gray-100 px-4 py-3">
                    <label className="block text-xs text-gray-500 mb-1">WACC (%)</label>
                    <input type="number" step="0.01" name="wacc" value={formData.wacc} onChange={handleChange} className="w-full bg-transparent focus:outline-none text-gray-900 text-sm" placeholder="e.g., 10" />
                  </div>
                  <div className="bg-gray-100 px-4 py-3 relative">
                    <label className="block text-xs text-gray-500 mb-1">Include TCO Savings Analysis</label>
                    <select name="includeTCOSavingsAnalysis" value={formData.includeTCOSavingsAnalysis} onChange={handleChange} className="w-full bg-transparent focus:outline-none text-gray-900 text-sm appearance-none pr-8">
                      <option value="Yes - vs SFCC">Yes - vs SFCC</option>
                      <option value="Yes - vs Magento">Yes - vs Magento</option>
                      <option value="Yes - vs WooCommerce">Yes - vs WooCommerce</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                  <div className="flex justify-between items-center pt-6">
                    <button type="button" onClick={handleBack} className="text-gray-600 hover:text-gray-900 font-medium flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                      Back
                    </button>
                    <button type="submit" className="bg-[#00BFC8] text-white py-3 px-12 font-medium hover:bg-[#00A8B0] transition-colors flex items-center gap-2">
                      Calculate ROI
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </button>
                  </div>
                </form>
              </>
            )}

            {/* Thank You Section */}
            {showResults && (
              <div className="bg-white rounded-lg p-8 lg:p-12 text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 bg-[#00BFC8] rounded-full flex items-center justify-center">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                {thankYouMessage.title && (
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">{thankYouMessage.title}</h2>
                )}
                <div className="max-w-2xl mx-auto space-y-6 mb-8">
                  {thankYouMessage.mainMessage && (
                    <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">{thankYouMessage.mainMessage}</p>
                  )}
                  {thankYouMessage.secondaryMessage && (
                    <p className="text-base lg:text-lg text-gray-600 leading-relaxed">{thankYouMessage.secondaryMessage}</p>
                  )}
                </div>
                {thankYouMessage.footerMessage && (
                  <div className="border-t border-gray-200 pt-8 mt-8">
                    <p className="text-sm text-gray-500">{thankYouMessage.footerMessage}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
