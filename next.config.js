/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
        },
        {
          protocol: 'https',
          hostname: 'assets.aceternity.com',
        },
      ],
    },
    eslint: {
      ignoreDuringBuilds: true,
    //   dirs: ['app', 'components', 'lib', 'utils', 'types'] // Add all your source directories
    },
    typescript: {
      // If you want to ignore TypeScript errors during build
      ignoreBuildErrors: true
    }
  }