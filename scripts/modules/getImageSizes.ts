/**
 * main
 */
const MAX_SIZE = 2000
const THUMB_MAX_SIZE = 300

/**
 * @param originImageWidth
 * @param originImageHeight
 */
const getImageSizes = (originImageWidth: number, originImageHeight: number) => {
  const isHorizonImage = originImageWidth > originImageHeight
  const newImageWidth = isHorizonImage ? MAX_SIZE < originImageWidth ? MAX_SIZE : originImageWidth : null
  const newImageHeight = !isHorizonImage ? MAX_SIZE < originImageHeight ? MAX_SIZE : originImageHeight : null
  const thumbWidth = isHorizonImage ? THUMB_MAX_SIZE < originImageWidth ? THUMB_MAX_SIZE : originImageWidth : null
  const thumbHeight = !isHorizonImage ? THUMB_MAX_SIZE < originImageHeight ? THUMB_MAX_SIZE : originImageHeight : null

  return {
    newImageWidth,
    newImageHeight,
    thumbWidth,
    thumbHeight,
  }
}

export default getImageSizes
