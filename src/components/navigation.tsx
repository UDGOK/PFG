"use client"

import Link from "next/link"
import { useState } from "react"
import Image from "next/image"

export default function Navigation() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(current => current === dropdown ? null : dropdown)
  }

  const closeAllDropdowns = () => {
    setActiveDropdown(null)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav className="bg-white shadow-sm fixed top-12 left-0 right-0 z-[50] border-b-2 border-red-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center h-16">
              <Image
                src="/pfgstores-new-logo.jpg"
                alt="PFG Stores Logo"
                width={200}
                height={64}
                className="h-full w-auto object-contain"
              />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMobileMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-red-600 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8" onMouseLeave={closeAllDropdowns}>
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
                  <Link href="/locations" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
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

            <Link
              href="/contact"
              className="text-gray-900 hover:text-red-600 relative after:absolute after:bottom-0 after:left-0 after:h-1 after:w-full after:bg-red-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <div className="relative">
            <button 
              onClick={() => toggleDropdown('story')}
              className="w-full text-left text-gray-900 hover:text-red-600 block px-3 py-2 rounded-md text-base font-medium"
            >
              Our Story
            </button>
            {activeDropdown === 'story' && (
              <div className="pl-4">
                <Link href="/our-story/history" className="block px-3 py-2 text-gray-700 hover:text-red-600">
                  History
                </Link>
                <Link href="/leadership" className="block px-3 py-2 text-gray-700 hover:text-red-600">
                  Leadership
                </Link>
              </div>
            )}
          </div>

          <div className="relative">
            <button 
              onClick={() => toggleDropdown('locations')}
              className="w-full text-left text-gray-900 hover:text-red-600 block px-3 py-2 rounded-md text-base font-medium"
            >
              Locations
            </button>
            {activeDropdown === 'locations' && (
              <div className="pl-4">
                <Link href="/locations" className="block px-3 py-2 text-gray-700 hover:text-red-600">
                  Find a Store
                </Link>
                <Link href="/locations/new-stores" className="block px-3 py-2 text-gray-700 hover:text-red-600">
                  New Stores
                </Link>
              </div>
            )}
          </div>

          <div className="relative">
            <button 
              onClick={() => toggleDropdown('rewards')}
              className="w-full text-left text-gray-900 hover:text-red-600 block px-3 py-2 rounded-md text-base font-medium"
            >
              Rewards
            </button>
            {activeDropdown === 'rewards' && (
              <div className="pl-4">
                <Link href="/rewards/sign-up" className="block px-3 py-2 text-gray-700 hover:text-red-600">
                  Sign Up
                </Link>
                <Link href="/rewards/benefits" className="block px-3 py-2 text-gray-700 hover:text-red-600">
                  Benefits
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/careers"
            className="text-gray-900 hover:text-red-600 block px-3 py-2 rounded-md text-base font-medium"
          >
            Careers
          </Link>

          <Link
            href="/contact"
            className="text-gray-900 hover:text-red-600 block px-3 py-2 rounded-md text-base font-medium"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}