import nextMDX from "@next/mdx";

const withMDX = nextMDX({
  extension: /\.mdx?$/
});

const nextConfig = withMDX({
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"]
});

export default nextConfig;
