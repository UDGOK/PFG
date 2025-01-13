"use client"

import { useState, useEffect } from "react"

interface OilGasData {
  price: string;
  change: string;
  timestamp: string;
}

export default function OilGasNews() {
  const [data, setData] = useState<OilGasData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    const fetchOilData = async () => {
      try {
        console.log('Fetching oil & gas data...')
        const response = await fetch('/api/oil-gas-news')
        if (!response.ok) throw new Error('Failed to fetch data')
        const jsonData = await response.json()
        console.log('Received data:', jsonData)
        setData(jsonData)
      } catch (_err) {
        console.error('Error:', _err)
        setError("Failed to load oil & gas data")
      } finally {
        setLoading(false)
      }
    }

    fetchOilData()
    // Refresh every 5 minutes
    const interval = setInterval(fetchOilData, 5 * 60 * 1000)
    return () => clearInterval(interval)
  }, [])

  console.log('Current state:', { data, loading, error })

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[200px] bg-yellow-100 border-2 border-yellow-400 rounded-lg">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-yellow-600"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center text-red-600 bg-red-100 p-6 rounded-lg border-2 border-red-400">
        {error}
      </div>
    )
  }

  return (
    <div className="space-y-6 bg-white p-6 rounded-lg">
      <h3 className="text-2xl font-bold text-center mb-8">Tulsa Oil & Gas Market</h3>
      {data ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-yellow-200 hover:border-yellow-400 transition-colors">
            <h4 className="text-lg font-semibold mb-2">Crude Oil Price</h4>
            <p className="text-3xl font-bold text-gray-900">${data.price}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-yellow-200 hover:border-yellow-400 transition-colors">
            <h4 className="text-lg font-semibold mb-2">24h Change</h4>
            <p className={`text-3xl font-bold ${
              parseFloat(data.change) >= 0 ? 'text-green-600' : 'text-red-600'
            }`}>
              {data.change}%
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-yellow-200 hover:border-yellow-400 transition-colors">
            <h4 className="text-lg font-semibold mb-2">Last Updated</h4>
            <p className="text-gray-600">
              {new Date(data.timestamp).toLocaleString()}
            </p>
          </div>
        </div>
      ) : (
        <div className="text-center text-gray-600 bg-gray-100 p-6 rounded-lg border-2 border-gray-400">
          No data available
        </div>
      )}
    </div>
  )
}