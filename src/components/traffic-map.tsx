"use client"

import { useEffect, useRef } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

interface TrafficMapProps {
  center: [number, number]
  zoom?: number
  locations: Array<{
    coords: { lat: number; lng: number }
    name: string
    address: string
  }>
}

export default function TrafficMap({ center, zoom = 12, locations }: TrafficMapProps) {
  const mapRef = useRef<L.Map | null>(null)
  const mapContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window !== 'undefined' && mapContainerRef.current && !mapRef.current) {
      // Initialize map
      mapRef.current = L.map(mapContainerRef.current).setView(center, zoom)

      // Add OpenStreetMap tile layer
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(mapRef.current)

      // Add traffic flow layer from OpenStreetMap
      L.tileLayer('https://tiles.osm.org/traffic/{z}/{x}/{y}.png', {
        opacity: 0.7
      }).addTo(mapRef.current)

      // Add markers for each location
      locations.forEach(location => {
        // Create custom icon
        const customIcon = L.divIcon({
          className: 'bg-red-600 rounded-full flex items-center justify-center text-white font-bold',
          html: `<div class="marker-content">PFG</div>`,
          iconSize: [32, 32],
          iconAnchor: [16, 32],
          popupAnchor: [0, -32]
        })

        // Add marker with custom icon
        L.marker([location.coords.lat, location.coords.lng], { icon: customIcon })
          .addTo(mapRef.current!)
          .bindPopup(`
            <div class="p-2">
              <h3 class="font-bold text-lg mb-1">${location.name}</h3>
              <p class="text-gray-600 mb-2">${location.address}</p>
              <a 
                href="https://www.google.com/maps/dir/?api=1&destination=${location.coords.lat},${location.coords.lng}" 
                target="_blank" 
                rel="noopener noreferrer"
                class="inline-block bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700 transition-colors"
              >
                Get Directions
              </a>
            </div>
          `, {
            className: 'custom-popup'
          })
      })
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.remove()
        mapRef.current = null
      }
    }
  }, [center, zoom, locations])

  return (
    <div className="relative w-full h-[500px] rounded-lg overflow-hidden shadow-lg z-0">
      <div ref={mapContainerRef} className="w-full h-full" />
      <style jsx global>{`
        .marker-content {
          width: 32px;
          height: 32px;
          background-color: #e51937;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: bold;
          font-size: 12px;
        }
        .custom-popup .leaflet-popup-content-wrapper {
          border-radius: 8px;
          padding: 0;
        }
        .custom-popup .leaflet-popup-content {
          margin: 0;
        }
        .leaflet-control-container {
          z-index: 1 !important;
        }
        .leaflet-popup {
          z-index: 2 !important;
        }
      `}</style>
    </div>
  )
}