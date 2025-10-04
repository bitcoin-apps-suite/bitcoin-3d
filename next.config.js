/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ['bsv'],
  images: {
    domains: ['localhost'],
    unoptimized: true
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  typescript: {
    ignoreBuildErrors: true
  }
}

module.exports = nextConfig