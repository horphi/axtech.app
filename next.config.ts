import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix:
    process.env.NODE_ENV === "production" ? "https://axtech.app" : "",
  basePath: "",
  env: {
    NEXT_PUBLIC_SITE_URL: "https://axtech.app",
  },
  images: {
    domains: ["axtech.app"],
  },
  // Add additional configurations as needed
};

export default nextConfig;
