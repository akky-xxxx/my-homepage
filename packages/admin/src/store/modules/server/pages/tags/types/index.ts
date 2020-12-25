type Tag = {
  tagId: string
  tagName: string
  settingCount: number
  isRelease: boolean
  createdAt: string
  updatedAt: string
}

export type TagsState = {
  tags: Tag[]
}

export type GetTagsPayload = {
  newTags: Tag[]
}
