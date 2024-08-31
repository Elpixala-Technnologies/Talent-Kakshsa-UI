// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["talentkaksha-bucket.blr1.digitaloceanspaces.com"],
  },
  webpack: (config) => {
    config.resolve.alias.canvas = false;

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

    // Add a rule for handling PDF files
    config.module.rules.push({
      test: /\.pdf$/i,
      use: {
        loader: "file-loader",
        options: {
          name: "[name].[hash].[ext]",
          outputPath: "static/pdfs/",
          publicPath: "/_next/static/pdfs/",
        },
      },
    });

    return config;
  },
};

export default nextConfig;
