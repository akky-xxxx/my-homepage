/**
 * @typedef Tag
 * @description tag info of data store
 * @property tagId - unique id
 * @property tagName - tag name
 * @property isRelease - handle of release status
 * @property createdAt - created date
 * @property updatedAt - update date
 */
export type Tag = {
  tagId: string
  tagName: string
  isRelease: boolean
  createdAt: Date
  updatedAt: Date
}
