/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    // appDir: true,
    typedRoutes: true,
    instrumentationHook: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "a0.muscache.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.gstatic.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.pixelstech.net",
        port: "",
        pathname: "/**",
      },
    ],
  },
  webpack(config) {
    // Enable the top-level-await experiment
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    };

    // Add a rule to handle .node files using file-loader
    // config.module.rules.push({
    //   test: /\.node$/,
    //   use: "file-loader",
    // });

    config.module.rules.push({
      test: /\.node$/,
      type: "asset/resource",
    });

    // Remove invalid node properties
    // config.node = {
    //   __dirname: true,
    //   __filename: true,
    // };

    return config;
  },
};

module.exports = nextConfig;
