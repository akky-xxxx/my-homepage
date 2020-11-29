// import
import { DataStore } from "@@/shared/const/DataStore"
import { dataStore } from "@@/shared/utils/gcp"
import { v4 as uuid } from "uuid"

// main
const {
  TYPES: { TAGS },
} = DataStore

type RemoveTestRecords = (tagName: string) => Promise<void>
export const removeTestRecords: RemoveTestRecords = async (tagName) => {
  const query = dataStore.createQuery(TAGS).filter("tagName", tagName)
  const [targetEntities] = await dataStore.runQuery(query)
  const targetKeys = targetEntities
    .map((tag) => tag.tagId)
    .map((tagId) => dataStore.key([TAGS, tagId]))
  await dataStore.delete(targetKeys)
}

type InsertTestRecord = (tagName: string) => Promise<string[]>
export const insertTestRecord: InsertTestRecord = async (tagName) => {
  const idList = [uuid(), uuid()]
  const insertData = idList.map((id) => {
    const key = dataStore.key([TAGS, id])
    const now = new Date()
    return {
      key,
      data: {
        tagId: id,
        tagName,
        isRelease: false,
        createdAt: now,
        updatedAt: now,
      },
    }
  })
  await dataStore.insert(insertData)
  return idList
}
