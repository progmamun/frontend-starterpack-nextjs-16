import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  devIndicators: {
    position: 'top-left', // or 'top-right'
  },
}

export default nextConfig
