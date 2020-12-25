/**
 * @typedef Tag
 * @description tag info of data store
 * @property tagId - unique id
 * @property tagName - tag name
 * @property settingCount - number of settings
 * @property isRelease - handle of release status
 * @property createdAt - created date
 * @property updatedAt - update date
 */
export type Tag = {
  tagId: string
  tagName: string
  settingCount: number
  isRelease: boolean
  createdAt: Date
  updatedAt: Date
}
