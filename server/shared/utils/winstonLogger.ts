/**
 * import node_modules
 */
import { createLogger, format, Logger, transports } from "winston"
import { TransformableInfo, Format } from "logform"
import dotenv from "dotenv"

/**
 * import others
 */
import isLocal from "./isLocal"

/**
 * main
 */
dotenv.config()

type FormatParams = (info: TransformableInfo) => string
const formatParams: FormatParams = (info) => {
  const { level, message } = info
  return `[${level}] ${message}`
}

const formats: Format[] = [format.timestamp(), format.align(), format.printf(formatParams)]
if (isLocal) {
  formats.unshift(format.colorize())
}

type TransportValues = typeof transports.Console
const transportValues: TransportValues[] = [new transports.Console()]

const winstonLogger: Logger = createLogger({
  level: process.env.LOG_LEVEL || "silly",
  format: format.combine(...formats),
  transports: transportValues,
})

export default winstonLogger
