export type Tag = {
  tagId: string
  tagName: string
  settingCount: number
  isRelease: boolean
  createdAt: string
  updatedAt: string
}

export type TagsState = {
  tags: Tag[]
  isLoading: boolean
}

export type GetTagsPayload = {
  newTags: Tag[]
}
