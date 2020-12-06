// import node_modules
import { entity } from "@google-cloud/datastore/build/src/entity"
import { Transaction } from "@google-cloud/datastore"
import { ThisError } from "shared-items"

// import others
import { PutTag } from "@@/shared/types/api/v1/tags"
import { dataStore } from "@@/shared/utils/gcp"
import { DataStore } from "@@/shared/const/DataStore"

// main
const {
  TYPES: { TAGS },
} = DataStore

type GetUpdateDataReturnMainReturn = {
  key: entity.Key
  data: PutTag
}

type GetUpdateDataMain = (
  tag: PutTag,
) => Promise<GetUpdateDataReturnMainReturn | null>
type GetUpdateData = (transaction: Transaction) => GetUpdateDataMain
export const getUpdateData: GetUpdateData = (transaction) => {
  const getUpdateDataMain: GetUpdateDataMain = async (tag) => {
    try {
      const key = dataStore.key([TAGS, tag.tagId])
      const [originTag] = await transaction.get(key)
      const hasDiff =
        tag.tagName !== originTag.tagName ||
        tag.isRelease !== originTag.isRelease
      if (!hasDiff) return null

      const updateData = {
        key,
        data: {
          ...originTag,
          ...tag,
          updatedAt: new Date(),
        },
      }
      return Promise.resolve(updateData)
    } catch (error) {
      const thisError = new ThisError({ error, filePath: __filename })
      return Promise.reject(thisError)
    }
  }

  return getUpdateDataMain
}
