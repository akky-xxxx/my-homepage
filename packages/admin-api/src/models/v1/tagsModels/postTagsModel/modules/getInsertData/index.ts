// import node_modules
import { v4 as uuid } from "uuid"
import { entity } from "@google-cloud/datastore/build/src/entity"

// import others
import { DataStore } from "@@/shared/const/DataStore"
import { dataStore } from "@@/shared/utils/gcp"
import { Tag } from "@@/shared/types/gcp/dataStore"

// main
const {
  TYPES: { TAGS },
} = DataStore

type GetInsertDataReturn = {
  key: entity.Key
  data: Tag
}
type GetInsertData = (tagName: string) => GetInsertDataReturn
export const getInsertData: GetInsertData = (tagName) => {
  const tagId = uuid()
  const now = new Date()
  const key = dataStore.key([TAGS, tagId])
  return {
    key,
    data: {
      tagId,
      tagName,
      settingImages: [],
      isRelease: false,
      createdAt: now,
      updatedAt: now,
    },
  }
}
