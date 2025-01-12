/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_EIA_API_KEY: process.env.EIA_API_KEY,
  },
  images: {
    domains: ['raw.githubusercontent.com'],
  },
}

module.exports = nextConfig