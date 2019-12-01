/**
 * import node_modules
 */
import { Request, Response, NextFunction } from "express-serve-static-core"

/**
 * webp が使える環境で ファイル名にjpg, png を webp に差し替える
 */
const replaceToWebpMiddleWare = (req: Request, _res: Response, next: NextFunction) => {
  if (
    req.headers.accept &&
    req.headers.accept.includes("image/webp")
  ) {
    req.url = req.url.replace(/\.(jpg)/, "")
  }
  next()
}

export default replaceToWebpMiddleWare
