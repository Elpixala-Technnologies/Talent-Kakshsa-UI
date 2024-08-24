// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["talentkaksha-bucket.blr1.digitaloceanspaces.com"],
  },
  webpack: (config) => {
    // Extend the default Webpack configuration
    config.module.rules.push({
      test: /\.(mp4|m4v|webm|ogg)$/i,
      use: {
        loader: "file-loader",
        options: {
          name: "[name].[hash].[ext]",
          outputPath: "static/videos/",
          publicPath: "/_next/static/videos/",
        },
      },
    });

    return config;
  },
};

export default nextConfig;
