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
import nextConfig from "../../next.config"
import isDev from "./shared/utils/isDev"

/**
 * main
 */
const PORT: number = parseInt(process.env.PORT as string, 10) || 3000
const ROOT_DIR = path.resolve(__dirname, "../")
const CLIENT_DIR = path.resolve(ROOT_DIR, "src/client")
const app = next({
  dir: CLIENT_DIR,
  conf: nextConfig,
  dev: isDev,
})
const requestHandler = getRequestHandler(app)
const server = express()

app
  .prepare()
  .then(() => {
    server.use(router)
    server.use(requestHandler)

    server.listen(PORT, (err: Error) => {
      if (err) throw err
      console.log(chalk.cyan("======================================================================================="))
      console.log(`${chalk.cyan("■  ")}${chalk.green(`Ready on http://localhost:${PORT}`)}`)
      console.log(`${chalk.cyan("■  ")}Serving files from: ${CLIENT_DIR}`)
      console.log(chalk.cyan("======================================================================================="))
    })
  })