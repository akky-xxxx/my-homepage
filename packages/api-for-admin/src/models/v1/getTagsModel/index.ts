// import
import { GetTagsResponse } from "@@/shared/types/api/v1/tags"
import { ThisError } from "@@/shared/utils/ThisError"

// main
type GetTagsModel = () => Promise<GetTagsResponse>
export const getTagsModel: GetTagsModel = async () => {
  const responseData: GetTagsResponse = {
    data: {
      tags: [
        {
          tagId: "1",
          tagName: "tag1",
          isRelease: true,
          createdAt: "2020-01-01",
          updatedAt: "2020-01-01",
        },
      ],
    },
  }

  try {
    return Promise.resolve(responseData)
  } catch (error) {
    const thisError = new ThisError({ error })
    return Promise.reject(thisError)
  }
}
