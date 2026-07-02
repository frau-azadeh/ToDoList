import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true, // ✅ اینو اضافه کن
  images: { unoptimized: true },
};

export default nextConfig;
