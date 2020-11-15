// import node_modules
import { RequestHandler } from "express"

// import others
import { createLogger } from "@shared/utils/createLogger"
import { ThisError } from "@shared/utils/ThisError"
import {
  SampleGetRequestQuery,
  SampleGetReturnBody,
} from "@shared/types/api/v1/sample"

// main
const logger = createLogger(__filename)

export const sampleController: RequestHandler<
  unknown,
  SampleGetReturnBody,
  unknown,
  SampleGetRequestQuery
> = async (req, res): Promise<void> => {
  logger.info("start")
  const {
    query: { reqQueryTest },
  } = req

  try {
    const returnValue: SampleGetReturnBody = {
      data: {
        resBodyTest: JSON.stringify({ reqQueryTest }),
      },
    }
    logger.info("success")
    res.json(returnValue)
    return Promise.resolve()
  } catch (error) {
    const thisError = new ThisError({
      status: 400,
      filePath: __filename,
      error,
    })
    logger.error(thisError)
    res.status(thisError.status)
    return Promise.reject(thisError)
  }
}
