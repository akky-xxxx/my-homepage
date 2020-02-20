/**
 * import
 */
import { PrefCode } from "../common"

/**
 * main
 */
export interface GalleryItem {
  imageId: number
  path: string
  date: string
  prefCode: PrefCode
  tags: string[]
}
