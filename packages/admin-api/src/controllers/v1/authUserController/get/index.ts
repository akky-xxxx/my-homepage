// import node_modules
import { RequestHandler } from "express"
import { ThisError, createErrorData } from "shared-items"
import dotenv from "dotenv" // TODO: 仮実装

// main
dotenv.config() // TODO: 仮実装

export const get: RequestHandler = async (req, res, next) => {
  const { query } = req

  if (!query.googleId) {
    const error = new ThisError(createErrorData(__filename, 400))
    res.status(400)
    next(error)
    return Promise.reject(error)
  }

  try {
    if (query.googleId !== process.env.TEST_PERMISSION_USER) {
      const error = new ThisError(createErrorData(__filename, 403))
      res.status(403)
      next(error)
      return Promise.reject(error)
    }
    res.json({ result: true })
    return Promise.resolve()
  } catch (error) {
    next(error)
    return Promise.reject(error)
  }
}
