/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig

module.exports = {
  webpack: (config, { isServer}) => {
      if(isServer) {
          require("./sitemap-generator");
      }
      return config;
  }
}