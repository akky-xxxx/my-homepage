/**
 * import node_modules
 */
import { Request, Response, NextFunction } from "express"

/**
 * import others
 */
import getDeviceInfo from "../shared/utils/getDeviceInfo"
import getShorterFilePath from "../shared/utils/getShorterFIlePath"
import winstonLogger from "../shared/utils/createLogger/winstonLogger"

/**
 * main
 */
/**
 * webp が使える環境で ファイル名にjpg, png を webp に差し替える
 */
const replaceToWebpMiddleWare = (req: Request, _res: Response, next: NextFunction) => {
  const { headers, url } = req
  const { accept, "user-agent": userAgent } = headers

  if (accept?.includes("image/webp")) {
    const responseUrl = url.replace(/\.(jpg)/, "")
    const device = getDeviceInfo(userAgent)
    const loggerData = {
      device,
      filePath: getShorterFilePath(__filename),
      data: {
        requestUrl: req.url,
        responseUrl,
      },
    }
    winstonLogger.info(JSON.stringify(loggerData))
    req.url = responseUrl
  }

  next()
}

export default replaceToWebpMiddleWare
