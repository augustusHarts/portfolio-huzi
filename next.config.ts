import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Ensure Next.js exports static files
  basePath: "/portfolio-huzi", // Important: GitHub Pages serves from repo name
  atrailingSlash: true,
};

export default nextConfig;
