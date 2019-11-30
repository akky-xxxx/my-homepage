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
(async () => {
  const BASE_ROOT = __dirname.replace("/scripts", "")
  const ORIGIN_DIR = "/test" // TODO: ディレクトリ構成確定後に変更
  const DIST_DIR = "/gallery" // TODO: 画面用資材のディレクトリ構成確定後に変更
  const INFO_FILE = "/galleryInfo.ts" // TODO: 置き場所が決まったら変更
  const ORIGIN_ROOT = `${BASE_ROOT}${ORIGIN_DIR}`

  fs.removeSync(`${BASE_ROOT}/${DIST_DIR}`)

  const fileNames = glob.sync(`${ORIGIN_ROOT}/**/*.jpg`)
    .filter(fileName => fileName.includes(".webp."))

  const imagesInfo = getImagesInfo(fileNames, ORIGIN_ROOT)
  fs.outputFileSync(
    `${BASE_ROOT}${INFO_FILE}`,
    `export default ${JSON.stringify(imagesInfo)}\n`,
  )

  await createDirs(fileNames, {
    BASE_ROOT,
    ORIGIN_DIR,
    DIST_DIR,
  })

  await Promise.all(
    fileNames.map(fileName => convertToWebp(fileName, ORIGIN_DIR, DIST_DIR)),
  )
  console.log(`${DONE} ${successMessage("All task success")}`)
})()
