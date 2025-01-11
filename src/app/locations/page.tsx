"use client"

import Layout from "@/components/layout"
import { useEffect, useState } from "react"

interface Coordinates {
  lat: number
  lng: number
}

interface Location {
  name: string
  address: string
  hours: string
  coords: Coordinates
  distance?: number
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

// Helper function to calculate distance between two coordinates
function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number) {
  const R = 6371 // Radius of the earth in km
  const dLat = (lat2 - lat1) * (Math.PI / 180)
  const dLon = (lon2 - lon1) * (Math.PI / 180)
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  return R * c // Distance in km
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
          
          // Calculate distances and sort locations
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
          // Error parameter is required by the geolocation API
          if (error) {} // Dummy usage to satisfy ESLint
          setErrorMessage('Unable to retrieve your location. Please enable location services.')
          setLoading(false)
          setSortedLocations(LOCATIONS) // Show locations without sorting
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

        {errorMessage ? (
          <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-8" role="alert">
            <p>{errorMessage}</p>
          </div>
        ) : null}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sortedLocations.map((location, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-xl font-bold mb-2">{location.name}</h2>
              <p className="text-gray-600 mb-2">{location.address}</p>
              <p className="text-gray-600 mb-2">{location.hours}</p>
              
              {location.distance && (
                <p className="text-gray-600 mb-4">
                  {location.distance.toFixed(1)} km away
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
          ))}
        </div>
      </div>
    </Layout>
  );
}