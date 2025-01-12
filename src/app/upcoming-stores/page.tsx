"use client"

import Image from "next/image"
import Layout from "@/components/layout"
import { useState, useEffect } from "react"

interface Location {
  name: string
  address: string
  openingDate: string
  images: string[]
}

const UPCOMING_LOCATIONS: Location[] = [
  {
    name: "Perfect Food & Gas",
    address: "15911 S. Memorial Drive, Bixby, OK 74008",
    openingDate: "Coming Fall 2025",
    images: [
      "/images/hero/15911-South-Memorial.jpg",
      "/images/hero/perfect-fresh-bakery.jpeg",
      "/images/hero/inside-perfect-food.jpeg",
      "/images/hero/sinclair-fuel.jpeg"
    ]
  },
  {
    name: "Perfect Food & Gas",
    address: "Haskell, Oklahoma",
    openingDate: "Coming Soon",
    images: ["/images/hero/image-coming-soon.svg"]
  }
]

export default function UpcomingStoresPage() {
  const [currentImageIndexes, setCurrentImageIndexes] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    // Initialize image indexes
    const initialIndexes = UPCOMING_LOCATIONS.reduce((acc, location) => {
      acc[location.address] = 0;
      return acc;
    }, {} as { [key: string]: number });
    setCurrentImageIndexes(initialIndexes);
  }, []);

  const nextImage = (address: string, maxIndex: number) => {
    setCurrentImageIndexes(prev => ({
      ...prev,
      [address]: (prev[address] + 1) % maxIndex
    }));
  };

  const prevImage = (address: string, maxIndex: number) => {
    setCurrentImageIndexes(prev => ({
      ...prev,
      [address]: (prev[address] - 1 + maxIndex) % maxIndex
    }));
  };

  return (
    <Layout>
      <div className="relative h-96 w-full mb-12">
        <video
          src="/videos/people-at-pump.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white">Upcoming Stores</h1>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {UPCOMING_LOCATIONS.map((location, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden border-2 border-red-500">
              <div className="relative h-48 w-full group">
                <Image
                  src={location.images[currentImageIndexes[location.address] || 0]}
                  alt={location.name}
                  className="object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={index === 0}
                />
                {location.images.length > 1 && (
                  <>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        prevImage(location.address, location.images.length);
                      }}
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    >
                      ←
                    </button>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        nextImage(location.address, location.images.length);
                      }}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    >
                      →
                    </button>
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
                      {location.images.map((_, dotIndex) => (
                        <div
                          key={dotIndex}
                          className={`h-2 w-2 rounded-full ${
                            dotIndex === currentImageIndexes[location.address]
                              ? 'bg-white'
                              : 'bg-gray-400'
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
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
  );
}