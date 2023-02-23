/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    API_LINK:process.env.API_LINK
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.freeimages.com',
        port: '',
        pathname: '/images/large-previews/d41/**',
      },
    ],
  },
}

module.exports = nextConfig
