// import node_modules
import { RequestHandler } from "express"

// import others
import { createLogger } from "@@/shared/utils/createLogger"
import { adminApiClient } from "@@/shared/utils/adminApiClient"
import { Endpoints } from "@@/shared/const/Endpoints"
import { Common } from "@@/shared/const/Common"

// main
const logger = createLogger(__filename)
const {
  CLIENT: { HOME },
  API: { AUTH_USER },
} = Endpoints
const { COOKIE } = Common

type GetAuthUserResponse = {
  data: {
    sessionId: string
  }
}
export const loginCallback: RequestHandler = async (req, res, next) => {
  logger.info("start")

  try {
    const params = {
      ...req.user,
    }
    const {
      data: {
        data: { sessionId },
      },
    } = await adminApiClient.get<GetAuthUserResponse>(AUTH_USER, {
      params,
    })
    logger.info("success")
    res.cookie(COOKIE.NAME, sessionId, COOKIE.OPTIONS)
    res.redirect(HOME)
  } catch (error) {
    logger.error("failure")
    next(error)
  }
}
