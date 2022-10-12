const featuresConfig = require("./config/features");
const serversConfig = require("./config/servers");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  publicRuntimeConfig: {
    features: featuresConfig,
    servers: serversConfig
  }
}

module.exports = nextConfig
