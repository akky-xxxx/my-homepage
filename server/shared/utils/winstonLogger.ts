/**
 * import node_modules
 */
import { createLogger, format, Logger, transports } from "winston"
import { TransformableInfo, Format } from "logform"
import { format as dateFormat } from "date-fns"
import dotenv from "dotenv"

/**
 * import others
 */
import isDev from "./isDev"

/**
 * main
 */
dotenv.config()

type FormatParams = (info: TransformableInfo) => string
const formatParams: FormatParams = (info) => {
  const { level, message, timestamp } = info
  const datetime = dateFormat(new Date(timestamp.toString()), "yyyy-MM-dd HH:mm:ss")
  return `winston: [ ${level} ] [BFF] ${datetime} ${message}`
}

const formats: Format[] = [format.timestamp(), format.align(), format.printf(formatParams)]
if (isDev) {
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
