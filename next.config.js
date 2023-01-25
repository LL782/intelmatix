/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/stock-level/example",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
