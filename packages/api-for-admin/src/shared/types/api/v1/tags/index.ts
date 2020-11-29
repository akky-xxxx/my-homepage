// import
import { ResponseData } from "@@/shared/types/api"
import { StringDatetime } from "@@/shared/types/common"
import { Tag as DataStoreTag } from "@@/shared/types/gcp/dataStore"

// main
export type Tag = Omit<DataStoreTag, "createdAt" | "updatedAt"> & {
  createdAt: StringDatetime
  updatedAt: StringDatetime
}

// create (post)
export type PostTagsRequestBody = {
  tagNames: DataStoreTag["tagName"] | DataStoreTag["tagName"][]
}

export type PostTagsResponse = ResponseData<{
  result: "success"
}>

// read (get)
export type GetTagsResponse = ResponseData<{
  tags: Tag[]
}>

// update (put)
type PutTag = Pick<DataStoreTag, "tagId"> &
  Partial<Pick<DataStoreTag, "tagName" | "isRelease">>
export type PutTagsRequestBody = {
  tags: PutTag[]
}

export type PuttTagsResponse = ResponseData<{
  result: "success"
}>
