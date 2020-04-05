import { Request, Response, NextFunction } from "express"

/**
 * import
 */
import getDeviceInfo from "../shared/utils/getDeviceInfo"
import createLogger from "../shared/utils/createLogger"

/**
 * main
 */
type RequestLogger = (req: Request, res: Response, next: NextFunction) => void

const { debugLogger } = createLogger("requestLogger")

const requestLogger: RequestLogger = (req, _res, next) => {
  const { headers, url, method } = req
  const { "user-agent": ua, referer } = headers
  const device = getDeviceInfo(ua)
  const loggerData = {
    user: {
      device,
    },
    req: {
      referer,
      url,
      method,
    },
  }

  debugLogger(loggerData)
  next()
}

export default requestLogger
