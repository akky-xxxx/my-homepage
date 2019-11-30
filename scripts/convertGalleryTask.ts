/**
 * import node_modules
 */
import glob from "glob"
import fs from "fs-extra"

/**
 * import others
 */
import { DONE } from "./shared/const/labels"
import { successMessage } from "./shared/const/consoleDecoration"
import convertToWebp from "./modules/convertToWebp"
import createDirs from "./modules/createDirs"
import getImagesInfo from "./modules/getImagesInfo"

/**
 * main
 */

const convertGalleryTask = async () => {
  const BASE_ROOT = __dirname.replace("/scripts", "")
  const ORIGIN_DIR = "/galleryOrigin"
  const DIST_DIR = "/src/client/public/images/gallery"
  const INFO_FILE = "/src/client/shared/const/galleryInfoList.ts"
  const ORIGIN_ROOT = `${BASE_ROOT}${ORIGIN_DIR}`

  fs.removeSync(`${BASE_ROOT}/${DIST_DIR}`)

  const fileNames = glob.sync(`${ORIGIN_ROOT}/**/*.jpg`).filter(fileName => fileName.includes(".webp."))

  const imagesInfo = getImagesInfo(fileNames, ORIGIN_ROOT)
  fs.outputFileSync(`${BASE_ROOT}${INFO_FILE}`, `export default ${JSON.stringify(imagesInfo)}\n`)

  await createDirs(fileNames, {
    BASE_ROOT,
    ORIGIN_DIR,
    DIST_DIR,
  })

  await Promise.all(fileNames.map(fileName => convertToWebp(fileName, ORIGIN_DIR, DIST_DIR)))
  console.log(`${DONE} ${successMessage("All task success")}`)
}

convertGalleryTask()
