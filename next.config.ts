import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["fakestoreapi.com"], // ✅ allow product images
  },
};

export default nextConfig;
