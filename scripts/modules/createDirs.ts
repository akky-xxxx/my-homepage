/**
 * import node_modules
 */
import fs from "fs-extra"

/**
 * import others
 */
import { DONE } from "../shared/const/labels"
import { target, successMessage } from "../shared/const/consoleDecoration"

/**
 * main
 */
type Path = {
  [K in "BASE_ROOT" | "ORIGIN_DIR" | "DIST_DIR"]: string
}

const createDirs = async (fileNames: string[], PATH: Path) => {
  const { BASE_ROOT, ORIGIN_DIR, DIST_DIR } = PATH
  const ORIGIN_ROOT = `${BASE_ROOT}${ORIGIN_DIR}`
  const DIST_ROOT = `${BASE_ROOT}${DIST_DIR}`

  const distDirs = fileNames.map(fileName => {
    return fileName.slice(0, fileName.lastIndexOf("/")).replace(ORIGIN_ROOT, "")
  })

  await Promise.all(distDirs.map(distDir => fs.mkdirs(`${DIST_ROOT}${distDir}`)))
  console.log(`${DONE} ${target("directories")} ${successMessage("is created")}`)
}

export default createDirs
