/**
 * import node_modules
 */
import sharp from "sharp" // eslint-disable-line import/no-extraneous-dependencies
import readline from "readline"

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
type ConvertToWebp = (args: {
  imagePath: string
  ORIGIN_DIR: string
  DIST_DIR: string
  allLength?: number
}) => Promise<void>

const WEBP_FLAG = ".webp."
let counter = 0
const convertToWebp: ConvertToWebp = async args => {
  const { imagePath, ORIGIN_DIR, DIST_DIR, allLength } = args
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
  if (!allLength) {
    console.log(`${DONE} ${target(imagePath)} ${successMessage("is converted")}`)
    return
  }
  counter += 1
  readline.moveCursor(process.stdout, 0, -1)
  console.log(`${DONE} [CONVERTED] ${counter} / ${allLength} ( ${Math.round((counter / allLength) * 100)} % )`)
}

export default convertToWebp
