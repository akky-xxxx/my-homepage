/**
 * main
 */
type Prop = "newImageWidth" | "newImageHeight" | "newThumbWidth" | "newThumbHeight"
type Size = Record<Prop, null | number>

const MAX_SIZE = 2000
const MAX_THUMB_SIZE = 300

const size: Size = {
  newImageWidth: null,
  newImageHeight: null,
  newThumbWidth: null,
  newThumbHeight: null,
}

const getImageSizes = (originImageWidth: number, originImageHeight: number) => {
  const isHorizonImage = originImageWidth > originImageHeight

  if (isHorizonImage) {
    size.newImageWidth = MAX_SIZE < originImageWidth ? MAX_SIZE : originImageWidth
    size.newThumbWidth = MAX_THUMB_SIZE < originImageWidth ? MAX_THUMB_SIZE : originImageWidth
  }

  if (!isHorizonImage) {
    size.newImageHeight = MAX_SIZE < originImageHeight ? MAX_SIZE : originImageHeight
    size.newThumbHeight = MAX_THUMB_SIZE < originImageHeight ? MAX_THUMB_SIZE : originImageHeight
  }

  return { ...size }
}

export default getImageSizes
