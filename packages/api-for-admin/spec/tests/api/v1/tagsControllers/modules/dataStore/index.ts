// import
import { DataStore } from "@@/shared/const/DataStore"
import { dataStore } from "@@/shared/utils/gcp"

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
