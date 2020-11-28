// import
import { GetTagsResponse } from "@@/shared/types/api/v1/tags"
import { ThisError } from "@@/shared/utils/ThisError"
import { dataStore } from "@@/shared/utils/gcp"
import { DataStore } from "@@/shared/const/DataStore"

// main
const {
  TYPES: { TAGS },
} = DataStore

type GetTagsModel = () => Promise<GetTagsResponse>
export const getTagsModel: GetTagsModel = async () => {
  const query = dataStore.createQuery(TAGS)

  try {
    const [tags] = await dataStore.runQuery(query)
    const responseData: GetTagsResponse = {
      data: {
        tags,
      },
    }

    return Promise.resolve(responseData)
  } catch (error) {
    const thisError = new ThisError({ error, filePath: __filename })
    return Promise.reject(thisError)
  }
}
