/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  images: { unoptimized: true },
  async rewrites() {
    return [
      {
        source: '/crazy-cattle-3d.embed',
        destination: '/game/crazycattle3d/index.html',
      },
      {
        source: '/futbol-libre.embed',
        destination: '/game/futbol-libre/index.html',
      },
    ]
  }
};

module.exports = nextConfig;


