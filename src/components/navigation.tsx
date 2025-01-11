"use client"

import Link from "next/link"
import { useState } from "react"

export default function Navigation() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(current => current === dropdown ? null : dropdown)
  }

  const closeAllDropdowns = () => {
    setActiveDropdown(null)
  }

  return (
    <nav className="bg-white shadow-sm fixed top-12 left-0 right-0 z-[50]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-red-600">
              Perfect Food &amp; Gas
            </Link>
          </div>
          <div className="flex items-center space-x-8" onMouseLeave={closeAllDropdowns}>
            <div className="relative group">
              <button 
                onClick={() => toggleDropdown('story')}
                className={`text-gray-900 hover:text-red-600 relative after:absolute after:bottom-0 after:left-0 after:h-1 after:w-full after:bg-red-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform ${activeDropdown === 'story' ? 'text-red-600' : ''}`}
              >
                Our Story
              </button>
              {activeDropdown === 'story' && (
                <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1">
                  <Link href="/our-story/history" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    History
                  </Link>
                  <Link href="/leadership" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Leadership
                  </Link>
                </div>
              )}
            </div>

            <div className="relative group">
              <button 
                onClick={() => toggleDropdown('locations')}
                className={`text-gray-900 hover:text-red-600 relative after:absolute after:bottom-0 after:left-0 after:h-1 after:w-full after:bg-red-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform ${activeDropdown === 'locations' ? 'text-red-600' : ''}`}
              >
                Locations
              </button>
              {activeDropdown === 'locations' && (
                <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1">
                  <Link href="/locations/find-store" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Find a Store
                  </Link>
                  <Link href="/locations/new-stores" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    New Stores
                  </Link>
                </div>
              )}
            </div>

            <div className="relative group">
              <button 
                onClick={() => toggleDropdown('rewards')}
                className={`text-gray-900 hover:text-red-600 relative after:absolute after:bottom-0 after:left-0 after:h-1 after:w-full after:bg-red-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform ${activeDropdown === 'rewards' ? 'text-red-600' : ''}`}
              >
                Rewards
              </button>
              {activeDropdown === 'rewards' && (
                <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1">
                  <Link href="/rewards/sign-up" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Sign Up
                  </Link>
                  <Link href="/rewards/benefits" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Benefits
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/careers"
              className="text-gray-900 hover:text-red-600 relative after:absolute after:bottom-0 after:left-0 after:h-1 after:w-full after:bg-red-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
            >
              Careers
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}