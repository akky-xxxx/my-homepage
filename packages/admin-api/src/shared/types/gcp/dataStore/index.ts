// import node_modules
import { Key } from "@google-cloud/datastore"

/**
 * @typedef Tag
 * @description tag info of data store
 * @property tagId - unique id
 * @property tagName - tag name
 * @property settingImages - images of settings
 * @property isRelease - handle of release status
 * @property createdAt - created date
 * @property updatedAt - update date
 */
export type Tag = {
  tagId: string
  tagName: string
  settingImages: Key[]
  isRelease: boolean
  createdAt: Date
  updatedAt: Date
}

/**
 * @typedef GalleryImage
 * @description gallery image info of data store
 * @property imageId - unique id
 * @property isRelease - handle of release status
 * @property prefecture - key of prefecture
 * @property tags - keys of tags
 * @property photographAt - photograph date
 * @property createdAt - created date
 * @property updatedAt - update date
 */
export type GalleryImage = {
  imageId: string
  isRelease: boolean
  prefecture: Key[]
  tags: Key[]
  photographAt: Date
  createdAt: Date
  updatedAt: Date
}
