/**
 * import node_modules
 */
import { Request, Response, NextFunction } from "express"

/**
 * import others
 */
import getDeviceInfo from "../shared/utils/getDeviceInfo"
import createLogger from "../shared/utils/createLogger"

/**
 * main
 */
/**
 * webp が使える環境で ファイル名にjpg, png を webp に差し替える
 */
const { infoLogger } = createLogger("replaceToWebpMiddleWare")
const replaceToWebpMiddleWare = (req: Request, _res: Response, next: NextFunction) => {
  const { headers, url } = req
  const { accept, "user-agent": userAgent } = headers

  if (accept?.includes("image/webp")) {
    const responseUrl = url.replace(/\.(jpg)/, "")
    const device = getDeviceInfo(userAgent)
    const loggerData = {
      user: {
        device,
      },
      data: {
        requestUrl: req.url,
        responseUrl,
      },
    }
    infoLogger(loggerData)
    req.url = responseUrl
  }

  next()
}

export default replaceToWebpMiddleWare
