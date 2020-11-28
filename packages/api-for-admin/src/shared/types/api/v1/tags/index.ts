// import
import { ResponseData } from "@@/shared/types/api"
import { StringDate } from "@@/shared/types/common"
import { Tag as DataStoreTag } from "@@/shared/types/gcp/dataStore"

// main
export type Tag = Omit<DataStoreTag, "createdAt" | "updatedAt"> & {
  createdAt: StringDate
  updatedAt: StringDate
}

export type GetTagsResponse = ResponseData<{
  tags: Tag[]
}>
