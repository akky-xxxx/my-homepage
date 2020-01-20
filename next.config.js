const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.NODE_ENV === "analyze",
})

module.exports = withBundleAnalyzer({
  distDir: "../../dist",
  webpack: (config, props) => {
    config.mode = props.dev ? "development" : "production"

    return config
  },
})
