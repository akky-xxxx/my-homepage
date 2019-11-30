/**
 * main
 */
type Size = {
  [K in "newImageWidth" | "newImageHeight" | "thumbWidth" | "thumbHeight"]: null | number
}

const MAX_SIZE = 2000
const THUMB_MAX_SIZE = 300

const size: Size = {
  newImageWidth: null,
  newImageHeight: null,
  thumbWidth: null,
  thumbHeight: null,
}

const getImageSizes = (originImageWidth: number, originImageHeight: number) => {
  const isHorizonImage = originImageWidth > originImageHeight

  if (isHorizonImage) {
    size.newImageWidth = MAX_SIZE < originImageWidth ? MAX_SIZE : originImageWidth
    size.thumbWidth = THUMB_MAX_SIZE < originImageWidth ? THUMB_MAX_SIZE : originImageWidth
  }

  if (!isHorizonImage) {
    size.newImageHeight = MAX_SIZE < originImageHeight ? MAX_SIZE : originImageHeight
    size.thumbHeight = THUMB_MAX_SIZE < originImageHeight ? THUMB_MAX_SIZE : originImageHeight
  }

  return { ...size }
}

export default getImageSizes
