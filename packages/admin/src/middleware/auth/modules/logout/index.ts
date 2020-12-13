// import node_modules
import { RequestHandler } from "express"

// import others
import { createLogger } from "@@/shared/utils/createLogger"
import { Endpoints } from "../../const"

// main
const logger = createLogger(__filename)
const { LOGIN } = Endpoints

export const logout: RequestHandler = (_req, res) => {
  logger.info("start")
  logger.info("end")
  res.redirect(LOGIN)
}
