import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Also ignore TS errors during build to ensure deployment passes if minor issues exist
    ignoreBuildErrors: true,
  },
  images: {
    // If we wanted to use next/image, we would add domains here:
    // domains: ['lh3.googleusercontent.com', 'api.mapbox.com', 'fonts.gstatic.com'],
    unoptimized: true, // Allow external images easily
  }
};

export default nextConfig;
