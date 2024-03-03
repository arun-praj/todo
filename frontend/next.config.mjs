/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/myday',
        permanent: true,
      },
    ]
  },
  output: 'standalone'
};

export default nextConfig;
