// import node_modules
import log4js, { Logger } from "log4js"

// main
type CreateLogger = (filePath: string) => Logger
export const createLogger: CreateLogger = (filePath) => {
  const logger = log4js.getLogger(
    `[${filePath.slice(filePath.lastIndexOf("src"))}]`,
  )
  logger.level = "all"
  return logger
}
