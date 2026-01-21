/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,           // optional but recommended
  eslint: { ignoreDuringBuilds: true }, // avoids ESLint warnings
  images: { unoptimized: true },   // optional for portfolio
}

module.exports = nextConfig
