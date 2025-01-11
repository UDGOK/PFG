"use client"

import Layout from "@/components/layout"
interface Coordinates {
  lat: number
  lng: number
}

interface Location {
  name: string
  address: string
  hours: string
  coords: Coordinates
}

// Coordinates for our locations
const LOCATIONS: Location[] = [
  {
    name: "Downtown Location",
    address: "123 Main St, City, State",
    hours: "Open 24/7",
    coords: { lat: 40.7128, lng: -74.0060 } // Example NYC coordinates
  },
  {
    name: "Uptown Location",
    address: "456 Elm St, City, State",
    hours: "6am - 11pm",
    coords: { lat: 40.7831, lng: -73.9712 } // Example NYC coordinates
  }
]

export default function LocationsPage() {

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Our Locations</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {LOCATIONS.map((location, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-xl font-bold mb-2">{location.name}</h2>
              <p className="text-gray-600 mb-2">{location.address}</p>
              <p className="text-gray-600 mb-4">{location.hours}</p>
              <button
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                onClick={() => {
                  window.open(
                    `https://www.google.com/maps/dir/?api=1&destination=${location.coords.lat},${location.coords.lng}`,
                    "_blank"
                  )
                }}
              >
                Get Directions
              </button>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}