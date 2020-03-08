/**
 * main
 */
/**
 * @param directory
 * @param fileName
 */
const getEachPaths = (directory: string, fileName: string) => {
  const extension = fileName.slice(fileName.lastIndexOf("."))
  const webpFileName = fileName.replace(extension, ".webp")
  const webpThumbFileName = fileName.replace(extension, ".thumb.webp")
  const jpgFileName = fileName.replace(extension, ".webp.jpg")
  const jpgThumbFileName = fileName.replace(extension, ".thumb.webp.jpg")
  const webpPath = `${directory}/${webpFileName}`
  const jpgPath = `${directory}/${jpgFileName}`
  const webpThumbPath = `${directory}/${webpThumbFileName}`
  const jpgThumbPath = `${directory}/${jpgThumbFileName}`

  return {
    webpPath,
    webpThumbPath,
    jpgPath,
    jpgThumbPath,
  }
}

export default getEachPaths
