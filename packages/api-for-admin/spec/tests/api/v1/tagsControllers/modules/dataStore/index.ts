// import
import { DataStore } from "@@/shared/const/DataStore"
import { dataStore } from "@@/shared/utils/gcp"

// main
const {
  TYPES: { TAGS },
} = DataStore

export const TAG_NAME = "test"

type RemoveTestRecords = () => Promise<void>
export const removeTestRecords: RemoveTestRecords = async () => {
  const query = dataStore.createQuery(TAGS).filter("tagName", TAG_NAME)
  const [targetEntities] = await dataStore.runQuery(query)
  const targetKeys = targetEntities
    .map((tag) => tag.tagId)
    .map((tagId) => dataStore.key([TAGS, tagId]))
  await dataStore.delete(targetKeys)
}
