import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Ensure Next.js exports static files
  basePath: "/huzi", // Important: GitHub Pages serves from repo name
  assetPrefix: "/huzi/"
};

export default nextConfig;
