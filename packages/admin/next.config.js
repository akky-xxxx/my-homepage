const { join } = require("path")

// main
module.exports = {
  distDir: "./dist",
  env: {
    API_SERVER: process.env.API_SERVER,
  },
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": join(__dirname, "./src"),
      "@middleware": join(__dirname, "src/middleware"),
      "@modules": join(__dirname, "./src/modules"),
      "@components": join(__dirname, "src/components"),
      "@pages": join(__dirname, "src/pages"),
      "@services": join(__dirname, "src/services"),
      "@shared": join(__dirname, "src/shared"),
      "@store": join(__dirname, "src/store"),
    }
    return config
  },
}
