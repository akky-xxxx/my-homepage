// import node_modules
import { Request, Response, NextFunction } from "express"
import { OutgoingHttpHeaders } from "http"

// main
type ApiHandlerCallbackReturn = string | number | Record<string, unknown> | void
export type ApiHandlerCallback<T = ApiHandlerCallbackReturn> = (
  req: Request,
  res: Response,
) => Promise<T>
type ApiHandlerMain = (
  req: Request,
  res: Response,
  next: NextFunction,
) => Promise<void>
type ApiHandler = (callback: ApiHandlerCallback) => ApiHandlerMain

export const apiHandler: ApiHandler = (callback) => {
  const apiHandlerMain: ApiHandlerMain = async (req, res, next) => {
    try {
      const result = await callback(req, res)
      const headers: OutgoingHttpHeaders = res.getHeaders()
      headers["content-type"] = "application/json"
      res.writeHead(res.statusCode || 200, headers)

      if (typeof result === "undefined") {
        res.end(null)
      } else {
        res.end(JSON.stringify(result))
      }
    } catch (error) {
      next(error)
    }
  }
  return apiHandlerMain
}
