import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
};

const path = require('path')
module.exports = {
  turbopack: {
    root: path.join(__dirname, '..'),
  },
}

export default nextConfig;
