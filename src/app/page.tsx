"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Layout from "@/components/layout"
import { useState, useEffect } from "react"
import Weather from "@/components/weather"
import OilGasNews from "@/components/oil-gas-news"

export default function Home() {
  const [showCookieConsent, setShowCookieConsent] = useState(false)
  const [email, setEmail] = useState("")
  const [subscriptionStatus, setSubscriptionStatus] = useState<{
    message?: string;
    error?: string;
  }>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    const cookieChoice = localStorage.getItem('cookieConsent')
    if (!cookieChoice) {
      setShowCookieConsent(true)
    }
  }, [])

  const handleCookieChoice = (accept: boolean) => {
    if (accept) {
      localStorage.setItem('cookieConsent', 'accepted')
    } else {
      localStorage.setItem('cookieConsent', 'rejected')
    }
    setShowCookieConsent(false)
  }

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubscriptionStatus({})

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (response.ok) {
        setSubscriptionStatus({ message: data.message })
        setEmail('')
      } else {
        setSubscriptionStatus({ error: data.error })
      }
    } catch {
      setSubscriptionStatus({
        error: 'An error occurred. Please try again later.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Layout>
      <section className="relative h-[500px] md:h-[600px]">
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
              Your trusted gas station in Tulsa, Sapulpa, and Bixby for quality fuel and fresh food
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
              <p className="text-gray-600">Fresh food daily at our Tulsa convenience stores</p>
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
              <p className="text-gray-600">Best gas prices in Tulsa and surrounding areas</p>
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
              <p className="text-gray-600">24/7 gas station near you in Tulsa, Sapulpa, and Bixby</p>
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
                Perfect Food & Gas, your local gas station in Tulsa, is a rapidly expanding convenience store and gas station chain making significant strides in the Oklahoma market. With over eight established locations, Perfect Food & Gas has become a trusted name for quality fuel and a wide range of convenience products.
              </p>
              <p className="text-gray-800 font-light">
                The company is committed to providing exceptional customer service and a seamless shopping experience at our convenience stores in Sapulpa, which has contributed to its growing popularity among locals.
              </p>
              <div className="border-l-4 border-red-600 pl-6 my-10">
                <p className="text-xl text-gray-900 italic">
                  As part of our expansion strategy, Perfect Food & Gas is excited to bring our fresh food and gas to Bixby, Oklahoma. This new location will offer the same high standards of service and product variety that our customers in Tulsa and Sapulpa have come to expect.
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

      {/* Oil & Gas Market Section */}
      <section className="py-16 bg-gradient-to-br from-yellow-50 via-white to-yellow-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="relative bg-white p-12 rounded-2xl shadow-xl border border-yellow-100">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-5">
              <div className="bg-yellow-600 text-white px-8 py-2 rounded-full text-sm tracking-wider uppercase">
                Market Update
              </div>
            </div>
            <OilGasNews />
          </div>
        </div>
      </section>

      {/* Weather Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="relative bg-white p-12 rounded-2xl shadow-xl border border-blue-100">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-5">
              <div className="bg-blue-600 text-white px-8 py-2 rounded-full text-sm tracking-wider uppercase">
                Current Weather
              </div>
            </div>
            <Weather />
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Stay Connected</h2>
          <p className="text-white mb-8">Get the latest deals and updates</p>
          <div className="max-w-md mx-auto">
            <form onSubmit={handleNewsletterSubmit} className="space-y-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 p-3 rounded-l-lg focus:outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`bg-white text-primary px-6 py-3 rounded-r-lg font-semibold hover:bg-gray-100 transition-colors ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                </button>
              </div>
              {subscriptionStatus.message && (
                <p className="text-sm text-white bg-green-600 p-2 rounded">
                  {subscriptionStatus.message}
                </p>
              )}
              {subscriptionStatus.error && (
                <p className="text-sm text-white bg-red-600 p-2 rounded">
                  {subscriptionStatus.error}
                </p>
              )}
            </form>
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
