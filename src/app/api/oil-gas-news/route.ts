import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export async function GET() {
  try {
    // For demo purposes, using static data since Alpha Vantage API
    // requires paid subscription for real-time WTI data
    const currentPrice = 74.31
    const previousPrice = 74.64
    const priceChange = ((currentPrice - previousPrice) / previousPrice) * 100

    const data = {
      price: currentPrice.toFixed(2),
      change: priceChange.toFixed(2),
      timestamp: new Date().toISOString()
    }

    return NextResponse.json(data, {
      headers: {
        'Cache-Control': 'no-store'
      }
    })
  } catch (error) {
    console.error('Error fetching oil & gas data:', error)
    return NextResponse.json(
      { error: 'Failed to fetch oil & gas data' },
      { status: 500 }
    )
  }
}