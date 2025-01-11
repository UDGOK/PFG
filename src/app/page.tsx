"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import Layout from "@/components/layout"
import { useState } from "react"
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid"

export default function Home() {
  const [showMagnifier, setShowMagnifier] = useState(false)
  return (
    <Layout>
      <section className="relative h-[400px]">
        <Image
          src="/images/hero/placeholder.svg"
          alt="Hero Image"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <div className="text-center text-white max-w-2xl">
            <h2 className="text-4xl font-bold mb-4">Welcome to Perfect Food & Gas</h2>
            <p className="text-lg mb-8">Your one-stop shop for quality fuel and delicious food</p>
            <div className="space-x-4">
              <Button
                className="bg-primary hover:bg-primary/90"
                onClick={() => setShowMagnifier(!showMagnifier)}
              >
                Find a Location
              </Button>
              <Button variant="secondary">Join Rewards</Button>
            </div>
          </div>
        </div>
      </section>

      {showMagnifier && (
        <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-50">
          <MagnifyingGlassIcon className="w-48 h-48 text-primary/50 animate-pulse" />
        </div>
      )}
    </Layout>
  )
}
