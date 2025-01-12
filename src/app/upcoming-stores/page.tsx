"use client"

import Image from "next/image"
import Layout from "@/components/layout"

interface Location {
  name: string
  address: string
  openingDate: string
  image?: string
}

const UPCOMING_LOCATIONS: Location[] = [
  {
    name: "Perfect Food & Gas",
    address: "15911 S. Memorial Drive, Bixby, OK 74008",
    openingDate: "Coming Fall 2025",
    image: "/images/hero/placeholder.svg"
  },
  {
    name: "Perfect Food & Gas",
    address: "Haskell, Oklahoma",
    openingDate: "Coming Soon",
    image: "/images/hero/placeholder.svg"
  }
]

export default function UpcomingStoresPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Upcoming Stores</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {UPCOMING_LOCATIONS.map((location, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden border-2 border-red-500">
              <div className="relative h-48 w-full">
                <Image
                  src={location.image || "/images/hero/placeholder.svg"}
                  alt={location.name}
                  className="object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={index === 0}
                />
              </div>
              <div className="p-6">
                <div className="bg-red-500 text-white px-3 py-1 rounded-full inline-block mb-4">
                  {location.openingDate}
                </div>
                <h2 className="text-xl font-bold mb-2">{location.name}</h2>
                <p className="text-gray-600 mb-2">{location.address}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}