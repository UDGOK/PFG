"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Layout from "@/components/layout"
export default function Home() {
  return (
    <Layout>
      <section className="relative h-[600px] md:h-[800px]">
        <Image
          src="/images/hero/placeholder.svg"
          alt="Hero Image"
          fill
          className="object-cover"
          priority
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
              <Button variant="secondary" className="text-lg px-8 py-6">
                Join Rewards
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
              <div className="h-48 bg-gray-200 mb-4 rounded-md"></div>
              <h3 className="text-xl font-semibold mb-2">Fresh Bakery</h3>
              <p className="text-gray-600">Daily baked goods made fresh</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-48 bg-gray-200 mb-4 rounded-md"></div>
              <h3 className="text-xl font-semibold mb-2">Quality Fuel</h3>
              <p className="text-gray-600">Top-tier fuel at great prices</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-48 bg-gray-200 mb-4 rounded-md"></div>
              <h3 className="text-xl font-semibold mb-2">Convenience</h3>
              <p className="text-gray-600">Everything you need on the go</p>
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
    </Layout>
  )
}
