import React from 'react'

export default function Header() {
  return (
    <header className="w-full border-b">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold">
            Scandi Commerce
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-gray-600">Home</a>
            <a href="#" className="hover:text-gray-600">About</a>
            <a href="#" className="hover:text-gray-600">Services</a>
            <a href="#" className="hover:text-gray-600">Contact</a>
          </div>
        </div>
      </nav>
    </header>
  )
}

