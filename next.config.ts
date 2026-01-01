import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Add common external image domains. Adjust as needed.
    domains: [
      "images.unsplash.com",
      "avatars.githubusercontent.com",
      "pbs.twimg.com",
      "img.youtube.com",
    ],
  },
};

export default nextConfig;
