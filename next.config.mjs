import nextMDX from "@next/mdx";

const withMDX = nextMDX({
    extension: /\.mdx?$/,
});

const nextConfig = withMDX({
    pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
    images: {
        domains: ["lh3.googleusercontent.com"],
    },
});

export default nextConfig;
