import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/apps/soundmind",
        destination: "/apps/soundmind/index.html",
      },
      {
        source: "/apps/aether-diary",
        destination: "/apps/aether-diary/index.html",
      },
    ];
  },
};

export default nextConfig;
