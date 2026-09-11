const isProd = process.env.NODE_ENV === "production";
const isVercel = process.env.VERCEL === "1";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: isProd && !isVercel ? "/Yash" : "",
  assetPrefix: isProd && !isVercel ? "/Yash/" : "",
  images: {
    unoptimized: true,
  },
  transpilePackages: ["react-icons"],
};

export default nextConfig;
