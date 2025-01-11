"use client"

import { useEffect, useState } from "react"
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
  phone: string
  image: string
  distance?: number
}

const LOCATIONS: Location[] = [
  {
    name: "Perfect Food & Gas",
    address: "1507 S Harvard Ave, Tulsa, OK 74112",
    hours: "Friday: 5:30 AM–11 PM, Saturday: 5:30 AM–11 PM, Sunday: 7 AM–10 PM, Monday-Thursday: 5:30 AM–11 PM",
    coords: { lat: 36.1331, lng: -95.9685 },
    phone: "Tel: 918-742-0322",
    image: "/images/locations/harvard.jpg"
  },
  {
    name: "Perfect Food & Gas",
    address: "8102 S Sheridan Rd, Tulsa, OK 74133",
    hours: "Friday: 5:30 AM–11 PM, Saturday: 5:30 AM–11 PM, Sunday: 7 AM–10 PM, Monday-Thursday: 5:30 AM–11 PM",
    coords: { lat: 36.0486, lng: -95.8885 },
    phone: "Tel: 918-499-1562",
    image: "/images/locations/sheridan.jpg"
  },
  {
    name: "Perfect Food & Gas",
    address: "7675 E 51st St, Tulsa, OK 74145",
    hours: "Friday: 5:30 AM–11 PM, Saturday: 5:30 AM–11 PM, Sunday: 7 AM–10 PM, Monday-Thursday: 5:30 AM–11 PM",
    coords: { lat: 36.0897, lng: -95.8881 },
    phone: "Tel: 918-619-6538",
    image: "/images/locations/51st.jpg"
  },
  {
    name: "Perfect Food & Gas",
    address: "215 N Garnett Rd, Tulsa, OK 74116",
    hours: "Friday: 5:30 AM–11 PM, Saturday: 5:30 AM–11 PM, Sunday: 7 AM–10 PM, Monday-Thursday: 5:30 AM–11 PM",
    coords: { lat: 36.2219, lng: -95.8314 },
    phone: "Tel: 918-779-7373",
    image: "/images/locations/garnett.jpg"
  },
  {
    name: "Perfect Food & Gas",
    address: "14495 East 51st Street South, Tulsa, OK 74134",
    hours: "Friday: 5:30 AM–11 PM, Saturday: 5:30 AM–11 PM, Sunday: 7 AM–10 PM, Monday-Thursday: 5:30 AM–11 PM",
    coords: { lat: 36.0678, lng: -95.8889 },
    phone: "Tel: 918-367-2382",
    image: "/images/locations/51st-south.jpg"
  }
]

function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number) {
  const R = 6371
  const dLat = (lat2 - lat1) * (Math.PI / 180)
  const dLon = (lon2 - lon1) * (Math.PI / 180)
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  const kmDistance = R * c
  return kmDistance * 0.621371
}

export default function LocationsPage() {
  const [userLocation, setUserLocation] = useState<Coordinates | null>(null)
  const [sortedLocations, setSortedLocations] = useState(LOCATIONS)
  const [loading, setLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userCoords = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          }
          setUserLocation(userCoords)
          
          const locationsWithDistance = LOCATIONS.map(location => ({
            ...location,
            distance: calculateDistance(
              userCoords.lat,
              userCoords.lng,
              location.coords.lat,
              location.coords.lng
            )
          }))
          
          setSortedLocations(
            locationsWithDistance.sort((a, b) => (a.distance || 0) - (b.distance || 0))
          )
          setLoading(false)
        },
        (error: GeolocationPositionError) => {
          if (error) {}
          setErrorMessage('Unable to retrieve your location. Please enable location services.')
          setLoading(false)
          setSortedLocations(LOCATIONS)
        },
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0
        }
      )
    } else {
      setErrorMessage('Geolocation is not supported by your browser.')
      setLoading(false)
    }
  }, [])

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Our Locations</h1>
        
        {loading && (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto mb-4"></div>
            <p>Finding locations near you...</p>
          </div>
        )}

        {errorMessage && (
          <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-8" role="alert">
            <p>{errorMessage}</p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sortedLocations.map((location, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="relative h-48 w-full">
                <img 
                  src={location.image}
                  alt={location.name}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2">{location.name}</h2>
                <p className="text-gray-600 mb-2">{location.address}</p>
                <p className="text-gray-600 mb-2">{location.phone}</p>
                <p className="text-gray-600 mb-2">{location.hours}</p>

                {location.distance && (
                  <p className="text-gray-600 mb-4">
                    {location.distance.toFixed(1)} miles away
                  </p>
                )}

                <button
                  className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                  onClick={() => {
                    window.open(
                      `https://www.google.com/maps/dir/?api=1&destination=${location.coords.lat},${location.coords.lng}` +
                      (userLocation ? `&origin=${userLocation.lat},${userLocation.lng}` : ''),
                      "_blank"
                    )
                  }}
                >
                  Get Directions
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}