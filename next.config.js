/** @type {import('next').NextConfig} */
const basePath = process.env.GITHUB_ACTIONS === 'true' ? '/PORTFOLIO' : ''

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
}

module.exports = nextConfig
