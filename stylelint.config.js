module.exports = {
  processors: ["stylelint-processor-styled-components"],
  plugins: [
    "stylelint-declaration-block-no-ignored-properties",
    "stylelint-no-unsupported-browser-features",
    "stylelint-order",
  ],
  extends: ["stylelint-config-standard", "stylelint-config-styled-components"],
  rules: {
    "plugin/declaration-block-no-ignored-properties": true,
    "plugin/no-unsupported-browser-features": true,
    "order/properties-alphabetical-order": true,
  },
}
