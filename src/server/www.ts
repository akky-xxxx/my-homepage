/**
 * import node_modules
 */
import next from "next"
import express from "express"
import path from "path"
import chalk from "chalk"

import replaceToWebpMiddleWare from "./serverMiddleWares/replaceToWebp"

/**
 * import others
 */
import nextConfig from "../../next.config"


/**
 * main
 */
const PORT: number = parseInt(process.env.PORT as string, 10) || 3000
const isDev = process.env.NODE_ENV !== "production"
const ROOT_DIR = path.resolve(__dirname, "../")
const CLIENT_DIR = path.resolve(ROOT_DIR, "src/client")
const app = next({
  dir: CLIENT_DIR,
  conf: nextConfig,
  dev: isDev,
})
const handle = app.getRequestHandler()

app
  .prepare()
  .then(() => {
    const server = express()

    server.get("*.webp.*", replaceToWebpMiddleWare)

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(PORT, (err: Error) => {
      if (err) throw err
      console.log(chalk.cyan("======================================================================================="))
      console.log(`${chalk.cyan("■  ")}${chalk.green(`Ready on http://localhost:${PORT}`)}`)
      console.log(`${chalk.cyan("■  ")}Serving files from: ${CLIENT_DIR}`)
      console.log(chalk.cyan("======================================================================================="))
    })
  })
