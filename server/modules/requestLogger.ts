import { Request, Response, NextFunction } from "express"

/**
 * import
 */
import getDeviceInfo from "../shared/utils/getDeviceInfo"
import winstonLogger from "../shared/utils/winstonLogger"

/**
 * main
 */
type RequestLogger = (req: Request, res: Response, next: NextFunction) => void

const requestLogger: RequestLogger = (req, _res, next) => {
  const { headers, url, method } = req
  const { "user-agent": ua, referer } = headers
  const device = getDeviceInfo(ua)
  const loggerData = {
    device,
    req: {
      referer,
      url,
      method,
    },
  }

  winstonLogger.debug(JSON.stringify(loggerData))
  next()
}

export default requestLogger
