// import node_modules
import log4js, { Logger } from "log4js"

// main
type CreateLogger = (filePath: string) => Logger
type CreateLoggerBase = (isTest: boolean) => CreateLogger
export const createLoggerBase: CreateLoggerBase = (isTest) => {
  const createLogger: CreateLogger = (filePath) => {
    const logger = log4js.getLogger(
      `[${filePath.slice(filePath.lastIndexOf("src"))}]`,
    )
    logger.level = isTest ? "off" : "all"
    return logger
  }

  return createLogger
}
