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
  const webpPath = `${directory}/${webpFileName}`
  const jpgPath = `${directory}/${jpgFileName}`

  return {
    webpPath,
    jpgPath,
  }
}

export default getEachPaths
