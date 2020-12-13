// import node_modules
import { Router } from "express"
import dotenv from "dotenv" // TODO: 仮実装

// main
dotenv.config() // TODO: 仮実装

const authUserControllers = Router()
const ROOT_ENDPOINT = "/"
authUserControllers.get(ROOT_ENDPOINT, async (req, res, next) => {
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
})

export { authUserControllers }
