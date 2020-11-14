const OFF = 0
const WARN = 1
const ERROR = 2

module.exports = {
  root: true,
  env: {
    browser: true,
  },
  parser: "@typescript-eslint/parser",
  extends: [
    "airbnb-base",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "prettier/@typescript-eslint",
  ],
  plugins: ["@typescript-eslint", "prettier", "import"],
  rules: {
    camelcase: WARN,
    "import/prefer-default-export": OFF,
    "import/extensions": [
      "error",
      {
        js: "never",
        ts: "never",
      },
    ],
    "prettier/prettier": ERROR,
    "@typescript-eslint/explicit-member-accessibility": OFF,
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".ts"],
      },
      typescript: {},
    },
  },
}
