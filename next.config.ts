import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  distDir: 'dist', // This allows us to treat this the same as other apps in CI
  sassOptions: {
    implementation: 'sass-embedded',
  },
  turbopack: {
    resolveAlias: {
      '@react-foundry/router': '@react-foundry/router/next', // ADD THIS LINE
    }
  }
};

export default nextConfig;
