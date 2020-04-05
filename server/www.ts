/**
 * import node_modules
 */
import next from "next"
import express from "express"
import path from "path"
import chalk from "chalk"

/**
 * import middleware
 */
import router from "./serverMiddleWare/router"
import getRequestHandler from "./serverMiddleWare/getRequestHandler"

/**
 * import others
 */
import nextConfig from "../next.config"
import isDev from "./shared/utils/isDev"
import createLogger from "./shared/utils/createLogger"

/**
 * main
 */
const { sillyLogger, errorLogger } = createLogger("www")
const PORT: number = parseInt(process.env.PORT as string, 10) || 3000
const ROOT_DIR = path.resolve(__dirname, "../")
const CLIENT_DIR = path.resolve(ROOT_DIR, "src")
const app = next({
  dir: CLIENT_DIR,
  conf: nextConfig,
  dev: isDev,
})
const requestHandler = getRequestHandler(app)
const server = express()
const startedMessage = `Start server
=======================================================================================
${chalk.cyan("> ")}URL:           ${chalk.blue(`http://localhost:${PORT}`)}
${chalk.cyan("> ")}Serving files: ${chalk.blue(CLIENT_DIR)}
=======================================================================================`

sillyLogger("Preparing server")
app.prepare().then(() => {
  server.use(router)
  server.use(requestHandler)

  server.listen(PORT, (err: Error) => {
    if (err) {
      errorLogger({ error: err })
      throw err
    }

    sillyLogger(startedMessage)
  })
})
