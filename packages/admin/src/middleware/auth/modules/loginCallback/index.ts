// import node_modules
import { RequestHandler } from "express"

// import others
import { createLogger } from "@@/shared/utils/createLogger"

// main
const logger = createLogger(__filename)
export const loginCallback: RequestHandler = async (_req, res, next) => {
  logger.info("start")

  try {
    /**
     * TODO: ユーザチェックを行う
     * req.user にログイン情報が格納されてる
     */
    logger.info("success")
    res.redirect("/")
  } catch (error) {
    logger.error("failure")
    next(error)
  }
}
