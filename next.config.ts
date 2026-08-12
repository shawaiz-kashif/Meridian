import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    // Static marketing assets never change post-deploy — cache optimized
    // variants at the edge for a year instead of Next's 60s default.
    minimumCacheTTL: 31536000,
    // Next 16 only serves qualities explicitly allow-listed here.
    qualities: [70, 75, 90],
  },
};

export default nextConfig;
