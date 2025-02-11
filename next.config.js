/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_EIA_API_KEY: process.env.EIA_API_KEY,
    NEXT_PUBLIC_OPENWEATHER_API_KEY: process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        pathname: '/**',
      },
    ],
    unoptimized: true,
  },
  // Add security headers for map tiles
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: `
              default-src 'self';
              script-src 'self' 'unsafe-inline' 'unsafe-eval';
              style-src 'self' 'unsafe-inline' https://unpkg.com;
              img-src 'self' data: blob: https://*.openstreetmap.org https://*.tile.openstreetmap.org https://*.openweathermap.org;
              font-src 'self';
              connect-src 'self' https://*.openstreetmap.org https://*.tile.openstreetmap.org https://api.eia.gov https://api.weather.gov;
              frame-src 'self';
              media-src 'self';
            `.replace(/\s+/g, ' ').trim()
          }
        ]
      }
    ]
  }
}

module.exports = nextConfig