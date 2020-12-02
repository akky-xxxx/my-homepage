// import node_modules
import log4js, { Logger } from "log4js"

// import others
import { Common } from "@@/shared/const/Common"

// main
const { IS_TEST } = Common
type CreateLogger = (filePath: string) => Logger
export const createLogger: CreateLogger = (filePath) => {
  const logger = log4js.getLogger(
    `[${filePath.slice(filePath.lastIndexOf("src"))}]`,
  )
  logger.level = IS_TEST ? "all" : "off"
  return logger
}
