import type { NextConfig } from "next";
import path from 'path';

const nextConfig: NextConfig = {
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
  turbopack: {
    // We set the root to the parent directory to match Next.js' inferred workspace root
    root: path.resolve(__dirname, '..'),
  },
};

module.exports = nextConfig;
export default nextConfig;
