// import node_modules
import { Request } from "express"

// import others
import {
  PutTagsRequestBody,
  PutTagsResponse,
} from "@@/shared/types/api/v1/tags"
import { ThisError } from "@@/shared/utils/ThisError"
import { createErrorData } from "@@/shared/utils/createErrorData"
import { isPutTagsRequestBody } from "@@/models/v1/tagsModels/putTagsModel/modules/isPutTagsRequestBody"
import { Server } from "@@/shared/const/Server"
import { dataStore } from "@@/shared/utils/gcp"
import { getUpdateData } from "@@/models/v1/tagsModels/putTagsModel/modules/getUpdateData"

// main
const { SUCCESS_RESPONSE } = Server
const error400 = new ThisError({ ...createErrorData(__filename, 400) })

type PutTagsModel = (
  body: Request<PutTagsRequestBody>["body"],
) => Promise<PutTagsResponse>

export const putTagsModel: PutTagsModel = async (body) => {
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

    if (!updateData.length) {
      await transaction.commit()
      return Promise.resolve(SUCCESS_RESPONSE)
    }

    await transaction.save(updateData)
    await transaction.commit()
    return Promise.resolve(SUCCESS_RESPONSE)
  } catch (error) {
    const thisError = new ThisError({ error })
    return Promise.reject(thisError)
  }
}
