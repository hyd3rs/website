const withMDX = require("@next/mdx")({});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  // Optionally, add any other Next.js config below
  experimental: {
    mdxRs: true,
  },
  turbopack: {
    /*rules: {
        "*.mdx": ["@mdx-js/loader"],
      },*/
    resolveExtensions: [".mdx", ".tsx", ".ts", ".jsx", ".js", ".mjs", ".json"],
  },
};

module.exports = withMDX(nextConfig);
