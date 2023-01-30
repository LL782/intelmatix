/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/stock-level/pickle",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
