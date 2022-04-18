/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/perfil',
        destination: '/login',
        permanent: true,
      },
      {
        source: '/login',
        destination: '/perfil',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
