module.exports = {
  processors: ["stylelint-processor-styled-components"],
  plugins: ["stylelint-order"],
  extends: ["stylelint-config-standard", "stylelint-config-styled-components"],
  rules: {
    "order/properties-alphabetical-order": true,
  },
}