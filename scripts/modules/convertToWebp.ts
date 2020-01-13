/**
 * import node_modules
 */
import sharp from "sharp" // eslint-disable-line import/no-extraneous-dependencies

/**
 * import others
 */
import { DONE, WARNING } from "../shared/const/labels"
import { target, successMessage, warningMessage } from "../shared/const/consoleDecoration"
import getEachPaths from "./getEachPaths"
import getImageSizes from "./getImageSizes"

/**
 * main
 */
const WEBP_FLAG = ".webp."

const convertToWebp = async (imagePath: string, ORIGIN_DIR: string, DIST_DIR: string) => {
  if (!imagePath.includes(WEBP_FLAG)) {
    console.log(`${WARNING} ${target(imagePath)} ${warningMessage("is not hoped webp")}`)
    return
  }
  const flagRemovedPath = imagePath.replace(WEBP_FLAG, ".")
  const lastSlashPosition = flagRemovedPath.lastIndexOf("/")
  const directory = flagRemovedPath.slice(0, lastSlashPosition).replace(ORIGIN_DIR, DIST_DIR)
  const fileName = flagRemovedPath.slice(lastSlashPosition + 1)

  const { width: originImageWidth, height: originImageHeight } = await sharp(imagePath).metadata()

  if (!originImageWidth || !originImageHeight) return

  const { newImageWidth, newImageHeight } = getImageSizes(originImageWidth, originImageHeight)
  const { webpPath, jpgPath } = getEachPaths(directory, fileName)

  await Promise.all([
    // webp 大
    sharp(imagePath)
      .resize(newImageWidth, newImageHeight, { fit: "inside" })
      .toFile(webpPath),
    // jpg 大
    sharp(imagePath)
      .resize(newImageWidth, newImageHeight, { fit: "inside" })
      .toFile(jpgPath),
  ])
  console.log(`${DONE} ${target(imagePath)} ${successMessage("is converted")}`)
}

export default convertToWebp
