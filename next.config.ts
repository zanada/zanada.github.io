import type { NextConfig } from "next";
import path from 'path';

const nextConfig: NextConfig = {
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
  turbopack: {
    // We set the root to the parent directory to match Next.js' inferred workspace root
    root: path.resolve(__dirname, '..'),
    rules: {
      "*.{glsl,vs,fs,vert,frag}": {
        loaders: ["raw-loader"],
        as: "*.js",
      },
    },
  },

  // configuration for image export optimizer
  images: {
    loader: "custom",
    imageSizes: [],
    deviceSizes: [750, 1200, 1920],
  },
  transpilePackages: ["next-image-export-optimizer"],
  env: {
    nextImageExportOptimizer_imageFolderPath: "public",
    nextImageExportOptimizer_exportFolderPath: "out",
    nextImageExportOptimizer_quality: "80",
    nextImageExportOptimizer_storePicturesInWEBP: "true",
    nextImageExportOptimizer_exportFolderName: "nextImageExportOptimizer",
    nextImageExportOptimizer_generateAndUseBlurImages: "true",
    nextImageExportOptimizer_remoteImageCacheTTL: "0",
  },
  //for react three shader
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag)$/,
      use: ['raw-loader', 'glslify', 'glslify-loader'],
    })
    return config
  },
};

module.exports = nextConfig;
export default nextConfig;
