/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_EIA_API_KEY: process.env.EIA_API_KEY,
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
              style-src 'self' 'unsafe-inline';
              img-src 'self' data: blob: https://*.openstreetmap.org https://*.tile.openstreetmap.org;
              font-src 'self';
              connect-src 'self' https://*.openstreetmap.org https://*.tile.openstreetmap.org https://api.eia.gov;
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