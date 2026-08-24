/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://api.basecamp420.com/api/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
