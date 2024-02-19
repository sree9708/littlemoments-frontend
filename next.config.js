/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["image.tmdb.org", "images.pexels.com", "littlemoments.nyc3.digitaloceanspaces.com"],
  },
  env: {
    NEXT_BASE_URL: process.env.NEXT_BASE_URL,
  },
  output: "export",
}

module.exports = nextConfig
