module.exports = {
  server: {
    command: "BROWSER=none yarn dev",
    port: 3000,
    launchTimeout: 30000,
  },
  launch: {
    headless: true,
    devtools: false,
  },
}
