/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_EIA_API_KEY: process.env.EIA_API_KEY,
  },
  images: {
    domains: ['raw.githubusercontent.com'],
  },
  // Ensure environment variables are available at build time
  publicRuntimeConfig: {
    EIA_API_KEY: process.env.EIA_API_KEY,
  },
  // Add build-time environment variables
  serverRuntimeConfig: {
    EIA_API_KEY: process.env.EIA_API_KEY,
  },
}

module.exports = nextConfig