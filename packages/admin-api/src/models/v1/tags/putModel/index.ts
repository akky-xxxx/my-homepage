// import node_modules
import { Request } from "express"
import { ThisError, createErrorData } from "shared-items"

// import shared/utils
import { dataStore } from "@@/shared/utils/gcp"
import { createLogger } from "@@/shared/utils/createLogger"

// import other shared
import {
  PutTagsRequestBody,
  PutTagsResponse,
} from "@@/shared/types/api/v1/tags"
import { Server } from "@@/shared/const/Server"

// import others
import { isPutTagsRequestBody } from "@@/models/v1/tags/putModel/modules/isPutTagsRequestBody"
import { getUpdateData } from "@@/models/v1/tags/putModel/modules/getUpdateData"

// main
const logger = createLogger(__filename)
const { SUCCESS_RESPONSE } = Server
const error400 = new ThisError({ ...createErrorData(__filename, 400) })

type PutModel = (
  body: Request<PutTagsRequestBody>["body"],
) => Promise<PutTagsResponse>

export const putModel: PutModel = async (body) => {
  logger.info("start")
  logger.debug({ body })
  if (!isPutTagsRequestBody(body)) {
    return Promise.reject(error400)
  }

  const { tags } = body
  const transaction = dataStore.transaction()
  const getUpdateDataMain = getUpdateData(transaction)

  try {
    await transaction.run()
    const nullableUpdateData = await Promise.all(tags.map(getUpdateDataMain))
    const updateData = nullableUpdateData.filter(Boolean)
    logger.debug({ updateData })

    if (!updateData.length) {
      await transaction.commit()
      return Promise.resolve(SUCCESS_RESPONSE)
    }

    await transaction.save(updateData)
    await transaction.commit()
    logger.info("success")
    return Promise.resolve(SUCCESS_RESPONSE)
  } catch (error) {
    const thisError = new ThisError({ error })
    return Promise.reject(thisError)
  }
}
