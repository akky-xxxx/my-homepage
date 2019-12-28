/**
 * main
 */
type Size = {
  [K in "newImageWidth" | "newImageHeight"]: null | number
}

const MAX_SIZE = 2000

const size: Size = {
  newImageWidth: null,
  newImageHeight: null,
}

const getImageSizes = (originImageWidth: number, originImageHeight: number) => {
  const isHorizonImage = originImageWidth > originImageHeight

  if (isHorizonImage) {
    size.newImageWidth = MAX_SIZE < originImageWidth ? MAX_SIZE : originImageWidth
  }

  if (!isHorizonImage) {
    size.newImageHeight = MAX_SIZE < originImageHeight ? MAX_SIZE : originImageHeight
  }

  return { ...size }
}

export default getImageSizes
