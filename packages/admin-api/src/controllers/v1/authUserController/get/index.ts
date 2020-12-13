// import node_modules
import { RequestHandler } from "express"
import { ThisError, createErrorData } from "shared-items"
import dotenv from "dotenv" // TODO: 仮実装

// import others
import { GetAuthUserResponse } from "@@/shared/types/api/v1/authUser"

// main
dotenv.config() // TODO: 仮実装

export const get: RequestHandler<never, GetAuthUserResponse> = async (
  req,
  res,
  next,
) => {
  const { query } = req

  if (!query.googleId) {
    const error = new ThisError(createErrorData(__filename, 400))
    res.status(400)
    next(error)
    return
  }

  try {
    if (query.googleId !== process.env.TEST_PERMISSION_USER) {
      const error = new ThisError(createErrorData(__filename, 403))
      res.status(403)
      next(error)
      return
    }
    const responseBody = {
      data: { result: "success" },
    } as const
    res.json(responseBody)
    return
  } catch (error) {
    next(error)
  }
}
