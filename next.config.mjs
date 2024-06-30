/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ['replicate.delivery'], // Dominios permitidos para las imágenes
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'replicate.delivery',
        pathname: '/pbxt/**', // Ajusta el pathname según el patrón de tus URLs
      },
    ],
  },
};

export default nextConfig;
