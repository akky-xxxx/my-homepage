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
  const jpgFileName = fileName.replace(extension, ".webp.jpg")
  const webpThumbNail = fileName.replace(extension, ".thumb.webp")
  const jpgThumbNail = fileName.replace(extension, ".thumb.webp.jpg")
  const webpPath = `${directory}/${webpFileName}`
  const jpgPath = `${directory}/${jpgFileName}`
  const webpThumbPath = `${directory}/${webpThumbNail}`
  const jpgThumbPath = `${directory}/${jpgThumbNail}`

  return {
    webpPath,
    jpgPath,
    webpThumbPath,
    jpgThumbPath,
  }
}

export default getEachPaths
