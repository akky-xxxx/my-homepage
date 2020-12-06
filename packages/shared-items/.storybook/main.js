const { resolve } = require("path")
const TsConfigPathsPlugin = require("tsconfig-paths-webpack-plugin")

module.exports = {
  stories: ["../src/**/stories.tsx", "../src/**/*.stories.tsx"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  webpackFinal: async (config) => {
    config.resolve.plugins = [
      new TsConfigPathsPlugin({
        configFile: resolve(__dirname, "../tsconfig.json"),
      }),
    ]

    return config
  },
}
