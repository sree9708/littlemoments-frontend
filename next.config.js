/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  reactStrictMode: false,
  images: {
    domains: ["i.ibb.co", "images.pexels.com", "littlemoments.nyc3.digitaloceanspaces.com"],
  },
  env: {
    NEXT_BASE_URL: process.env.NEXT_BASE_URL,
  },
}

module.exports = nextConfig
