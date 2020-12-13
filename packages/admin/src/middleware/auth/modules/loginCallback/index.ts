// import node_modules
import { RequestHandler } from "express"

// import others
import { createLogger } from "@@/shared/utils/createLogger"
import { adminApiClient } from "@@/shared/utils/adminApiClient"
import { Endpoints } from "@@/shared/const/Endpoints"

// main
const logger = createLogger(__filename)
const {
  CLIENT: { HOME },
  API: { AUTH_USER },
} = Endpoints

export const loginCallback: RequestHandler = async (req, res, next) => {
  logger.info("start")

  try {
    const params = {
      ...req.user,
    }
    await adminApiClient.get(AUTH_USER, { params })
    logger.info("success")
    res.redirect(HOME)
  } catch (error) {
    logger.error("failure")
    next(error)
  }
}
