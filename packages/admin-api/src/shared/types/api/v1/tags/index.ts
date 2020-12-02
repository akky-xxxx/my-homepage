// import node_modules
import { StringDatetime } from "shared-items"

// import
import { ResponseData } from "@@/shared/types/api"
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
export type PutTag = Pick<DataStoreTag, "tagId"> &
  Partial<Pick<DataStoreTag, "tagName" | "isRelease">>
export type PutTagsRequestBody = {
  tags: PutTag[]
}

export type PutTagsResponse = ResponseData<{
  result: "success"
}>

// delete (delete)
export type DeleteTagsQuery = {
  tagIds: (keyof Pick<DataStoreTag, "tagId">)[]
}

export type DeleteTagsResponse = ResponseData<{
  result: "success"
}>
