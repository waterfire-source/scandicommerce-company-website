import React from 'react'
import { HiCube } from 'react-icons/hi2'

interface ServiceCardProps {
  title: string
  price: string
  icon?: React.ReactNode
  isOdd?: boolean
}

export default function ServiceCard({ title, price, icon, isOdd = false }: ServiceCardProps) {
  return (
    <div className={`bg-white rounded-lg p-6 flex items-center gap-4 shadow-md w-full ${isOdd ? 'ml-24' : ''}`}>
      <div className="flex-shrink-0 w-14 h-14 bg-teal rounded-full flex items-center justify-center">
        {icon || <HiCube className="w-7 h-7 text-white" />}
      </div>
      <div className="flex-1">
        <h3 className="font-bold text-lg text-gray-900 mb-1">{title}</h3>
        <p className="text-sm text-gray-600">{price}</p>
      </div>
    </div>
  )
}

