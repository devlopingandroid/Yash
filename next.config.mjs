const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: isProd ? "/Portfolio" : "",
  images: {
    unoptimized: true,
  },
  transpilePackages: ["react-icons"],
};

export default nextConfig;
