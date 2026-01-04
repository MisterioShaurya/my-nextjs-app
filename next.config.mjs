/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    return config
  },
  experimental: {
    turbo: false,
  },
}

export default nextConfig
