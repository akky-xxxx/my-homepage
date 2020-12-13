// import node_modules
import { RequestHandler } from "express"
import dotenv from "dotenv" // TODO: 仮実装

// main
dotenv.config() // TODO: 仮実装

export const get: RequestHandler = async (req, res, next) => {
  const { query } = req
  try {
    if (query.googleId !== process.env.TEST_PERMISSION_USER) {
      res.status(403)
      next()
    }
    res.json({ result: true })
  } catch (error) {
    next(error)
  }
}
