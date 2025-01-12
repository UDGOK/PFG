"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Layout from "@/components/layout"
import { useState, useEffect } from "react"

export default function Home() {
  const [showCookieConsent, setShowCookieConsent] = useState(false)

  useEffect(() => {
    // Check if user has already made a choice
    const cookieChoice = localStorage.getItem('cookieConsent')
    if (!cookieChoice) {
      setShowCookieConsent(true)
    }
  }, [])

  const handleCookieChoice = (accept: boolean) => {
    if (accept) {
      // Here you would initialize your cookie-based tracking/analytics
      localStorage.setItem('cookieConsent', 'accepted')
    } else {
      localStorage.setItem('cookieConsent', 'rejected')
    }
    setShowCookieConsent(false)
  }

  return (
    <Layout>
      <section className="relative h-[600px] md:h-[800px]">
        <video
          src="/videos/people-pump-gas.mp4"
          className="object-cover w-full h-full"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">Welcome to Perfect Food & Gas</h2>
            <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto">
              Your one-stop shop for quality fuel and delicious food
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button
                className="bg-primary hover:bg-primary/90 text-lg px-8 py-6"
                asChild
              >
                <Link href="/locations">Find a Location</Link>
              </Button>
              <Button variant="secondary" className="text-lg px-8 py-6" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>


      {/* Featured Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Image
                src="/images/hero/perfect-fresh-bakery.jpeg"
                alt="Fresh Bakery"
                width={400}
                height={400}
                className="w-full h-48 object-cover rounded-md"
                style={{ height: 'auto' }}
              />
              <h3 className="text-xl font-semibold mb-2">New Kitchens</h3>
              <p className="text-gray-600">Daily baked goods made fresh</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Image
                src="/images/hero/sinclair-fuel.jpeg"
                alt="Sinclair Fuel"
                width={400}
                height={400}
                className="w-full h-48 object-cover rounded-md"
                style={{ height: 'auto' }}
              />
              <h3 className="text-xl font-semibold mb-2">Quality Fuel</h3>
              <p className="text-gray-600">Top-tier fuel at great prices</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Image
                src="/images/hero/inside-perfect-food.jpeg"
                alt="Inside Perfect Food & Gas"
                width={400}
                height={400}
                className="w-full h-48 object-cover rounded-md"
                style={{ height: 'auto' }}
              />
              <h3 className="text-xl font-semibold mb-2">Convenience</h3>
              <p className="text-gray-600">Everything you need on the go</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-gradient-to-br from-red-50 via-white to-red-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="relative bg-white p-12 rounded-2xl shadow-xl border border-red-100">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-5">
              <div className="bg-red-600 text-white px-8 py-2 rounded-full text-sm tracking-wider uppercase">
                Our Story
              </div>
            </div>
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent font-serif">
              About Perfect Food & Gas
            </h2>
            <div className="space-y-8 text-lg leading-relaxed">
              <p className="text-gray-800 font-light">
                Perfect Food & Gas, a rapidly expanding convenience store and gas station chain, is making significant strides in the Oklahoma market, particularly in Tulsa. With over eight established locations, Perfect Food & Gas has become a trusted name for quality fuel and a wide range of convenience products.
              </p>
              <p className="text-gray-800 font-light">
                The company is committed to providing exceptional customer service and a seamless shopping experience, which has contributed to its growing popularity among locals.
              </p>
              <div className="border-l-4 border-red-600 pl-6 my-10">
                <p className="text-xl text-gray-900 italic">
                  As part of its expansion strategy, Perfect Food & Gas is excited to announce the opening of a new gas station in Bixby, Oklahoma. This new location will offer the same high standards of service and product variety that customers have come to expect.
                </p>
              </div>
              <p className="text-gray-800 font-light">
                Perfect Food & Gas is dedicated to meeting the needs of its customers by offering competitive fuel prices, a clean and welcoming environment, and a diverse selection of snacks, beverages, and essential items.
              </p>
              <p className="text-gray-800 font-light">
                Whether you&apos;re fueling up for a road trip or just stopping by for a quick snack, Perfect Food & Gas is your go-to destination in Tulsa and beyond. Keep an eye out for more locations as the company continues to grow and serve the community with excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Promotions Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Current Promotions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-white p-4 rounded-lg shadow-md">
                <div className="h-40 bg-gray-200 mb-4 rounded-md"></div>
                <h3 className="text-lg font-semibold mb-2">Promotion {i + 1}</h3>
                <p className="text-gray-600">Special deals just for you</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Stay Connected</h2>
          <p className="text-white mb-8">Get the latest deals and updates</p>
          <div className="max-w-md mx-auto">
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 p-3 rounded-l-lg focus:outline-none"
              />
              <button className="bg-white text-primary px-6 py-3 rounded-r-lg font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Cookie Consent Banner */}
      {showCookieConsent && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg p-4 z-50">
          <div className="container mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-2">Cookie Settings</h3>
              <p className="text-gray-600">
                We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking &quot;Accept All&quot;, you consent to our use of cookies.
              </p>
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => handleCookieChoice(false)}
                className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Reject All
              </button>
              <button
                onClick={() => handleCookieChoice(true)}
                className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      )}
    </Layout>
  )
}
