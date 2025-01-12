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
    <nav className="bg-white shadow-sm border-b-2 border-red-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center h-16">
              <Image
                src="/images/hero/Perfect-Logo-New.png"
                alt="PFG Stores Logo"
                width={240}
                height={80}
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
          <div className="hidden md:flex items-center space-x-6" onMouseLeave={closeAllDropdowns}>
            <div className="relative group">
              <button 
                onClick={() => toggleDropdown('story')}
                className={`text-gray-900 hover:text-red-600 relative after:absolute after:bottom-0 after:left-0 after:h-1 after:w-full after:bg-red-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform ${activeDropdown === 'story' ? 'text-red-600' : ''}`}
              >
                Our Story
              </button>
              {activeDropdown === 'story' && (
                <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 z-50">
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
                <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 z-50">
                  <Link href="/locations" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Find a Store
                  </Link>
                  <Link href="/upcoming-stores" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Upcoming Stores
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
              href="/news"
              className="text-gray-900 hover:text-red-600 relative after:absolute after:bottom-0 after:left-0 after:h-1 after:w-full after:bg-red-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
            >
              News
            </Link>

            <Link
              href="/amenities"
              className="text-gray-900 hover:text-red-600 relative after:absolute after:bottom-0 after:left-0 after:h-1 after:w-full after:bg-red-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
            >
              Amenities
            </Link>

            <Link
              href="/contact"
              className="text-gray-900 hover:text-red-600 relative after:absolute after:bottom-0 after:left-0 after:h-1 after:w-full after:bg-red-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
            >
              Contact
            </Link>
            <Link
              href="/locations"
              className="flex items-center px-4 py-2 text-white bg-red-600 rounded-full hover:bg-red-700 transition-colors duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              Find a Store
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden w-full bg-white z-[100] ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-4 pt-4 pb-6 space-y-3">
          <div className="relative text-center">
            <button 
              onClick={() => toggleDropdown('story')}
              className="w-full text-center text-gray-900 hover:text-red-600 block px-4 py-3 rounded-md text-lg font-bold"
            >
              Our Story
            </button>
            {activeDropdown === 'story' && (
              <div className="bg-gray-50 py-2 rounded-md">
                <Link href="/our-story/history" className="block px-4 py-3 text-gray-700 hover:text-red-600 text-lg font-bold">
                  History
                </Link>
                <Link href="/leadership" className="block px-4 py-3 text-gray-700 hover:text-red-600 text-lg font-bold">
                  Leadership
                </Link>
              </div>
            )}
          </div>

          <div className="relative text-center">
            <button 
              onClick={() => toggleDropdown('locations')}
              className="w-full text-center text-gray-900 hover:text-red-600 block px-4 py-3 rounded-md text-lg font-bold"
            >
              Locations
            </button>
            {activeDropdown === 'locations' && (
              <div className="bg-gray-50 py-2 rounded-md">
                <Link href="/locations" className="block px-4 py-3 text-gray-700 hover:text-red-600 text-lg font-bold">
                  Find a Store
                </Link>
                <Link href="/upcoming-stores" className="block px-4 py-3 text-gray-700 hover:text-red-600 text-lg font-bold">
                  Upcoming Stores
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/careers"
            className="text-gray-900 hover:text-red-600 block px-4 py-3 rounded-md text-lg font-bold text-center"
          >
            Careers
          </Link>

          <Link
            href="/news"
            className="text-gray-900 hover:text-red-600 block px-4 py-3 rounded-md text-lg font-bold text-center"
          >
            News
          </Link>

          <Link
            href="/amenities"
            className="text-gray-900 hover:text-red-600 block px-4 py-3 rounded-md text-lg font-bold text-center"
          >
            Amenities
          </Link>

          <Link
            href="/contact"
            className="text-gray-900 hover:text-red-600 block px-4 py-3 rounded-md text-lg font-bold text-center"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}