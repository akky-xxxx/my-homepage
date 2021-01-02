// import node_modules
import { pick } from "remeda"
import { entity } from "@google-cloud/datastore/build/src/entity"
import { Transaction } from "@google-cloud/datastore"
import { ThisError } from "shared-items"

// import others
import { PutTag } from "@@/shared/types/api/v1/tags"
import { dataStore } from "@@/shared/utils/gcp"
import { DataStore } from "@@/shared/const/DataStore"
import { isSameKeys } from "@@/shared/utils/keyUtils/isSameKeys"
import { mergeKeys } from "@@/shared/utils/keyUtils/mergeKeys"
import { sortKey } from "@@/shared/utils/keyUtils/sortKey"

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
    const pickedTag = pick(tag, [
      "tagId",
      "tagName",
      "isRelease",
      "settingImages",
    ])

    try {
      const key = dataStore.key([TAGS, pickedTag.tagId])
      const [originTag] = await transaction.get(key)
      const settingImages = [
        pickedTag.settingImages || [],
        originTag.settingImages,
      ] as const
      const hasDiff =
        pickedTag.tagName !== originTag.tagName ||
        pickedTag.isRelease !== originTag.isRelease ||
        !isSameKeys(...settingImages)
      if (!hasDiff) return null

      const updateData: GetUpdateDataReturnMainReturn = {
        key,
        data: {
          ...originTag,
          ...pickedTag,
          settingImages: mergeKeys(...settingImages).sort(sortKey),
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
