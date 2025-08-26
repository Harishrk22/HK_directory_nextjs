import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["images.scalebranding.com"],
  },
  experimental: {
    ppr: "incremental",
  },
};

export default nextConfig;
