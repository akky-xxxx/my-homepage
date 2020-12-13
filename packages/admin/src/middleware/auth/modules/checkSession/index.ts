// import node_modules
import { RequestHandler } from "express"

// import others
import { createLogger } from "@@/shared/utils/createLogger"
import { Common } from "@@/shared/const/Common"
import { Endpoints as CommonEndpoints } from "@@/shared/const/Endpoints"
import { adminApiClient } from "@@/shared/utils/adminApiClient"
import { Endpoints as AuthEndpoint } from "../../const"

// main
const logger = createLogger(__filename)
const { COOKIE } = Common
const {
  API: { AUTH_USER },
} = CommonEndpoints
const { LOGIN, CALLBACK } = AuthEndpoint
const regExp = /^\/_next/

export const checkSession: RequestHandler = async (req, res, next) => {
  const { originalUrl } = req
  if (
    regExp.test(originalUrl) ||
    originalUrl.includes(LOGIN) ||
    originalUrl.includes(CALLBACK)
  ) {
    next()
    return
  }
  logger.info("start")

  const { cookies } = req

  if (typeof cookies[COOKIE.NAME] !== "string") {
    logger.warn("session id なし")
    res.redirect(LOGIN)
    return
  }

  const axiosConfig = {
    params: {
      sessionId: cookies[COOKIE.NAME],
    },
  }

  const sessionId = await adminApiClient
    .get(AUTH_USER, axiosConfig)
    .catch(() => null)

  if (sessionId) {
    logger.info("有効な session id あり")
    next()
    return
  }

  logger.warn("有効な session id なし")
  res.redirect(LOGIN)
}
