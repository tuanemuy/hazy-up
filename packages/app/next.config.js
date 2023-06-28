/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@hazy-up/core"],
  experimental: { serverActions: true },
};

module.exports = nextConfig;
