// import node_modules
import { ErrorRequestHandler } from "express"
import { ThisError } from "shared-items"

// import others
import { createLogger } from "@@/shared/utils/createLogger"

// main
const logger = createLogger(__filename)
export const errorHandler: ErrorRequestHandler = (err, _req, res, next) => {
  const error = new ThisError({ error: err })
  logger.error({
    status: error.status,
    message: error.message,
    filePath: error.filePath,
    stack: error.stack,
  })

  res.status(error.status).send(error.message)
  next()
}
