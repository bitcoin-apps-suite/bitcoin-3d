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

// bWalletX frames bApps (iOS capacitor://localhost, Android https://localhost, web + desktop editions).
nextConfig.headers = async () => [{ source: '/:path*', headers: [{ key: 'Content-Security-Policy', value: "frame-ancestors 'self' capacitor://localhost https://localhost https://web.bwalletx.com https://desktop.bwalletx.com" }] }]

module.exports = nextConfig