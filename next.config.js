/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test:/\.svg$/i,
      issuer: /\.[tj]sx?$/,
      use: ['@svgr/webpack']
    })

    return config;
  }
}

module.exports = nextConfig
