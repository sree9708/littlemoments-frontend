/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["image.tmdb.org", "images.pexels.com", "littlemoments.nyc3.digitaloceanspaces.com"],
  },
}

module.exports = nextConfig
