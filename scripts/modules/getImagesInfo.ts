interface ImagesInfo {
  imageId: number
  path: string
  date: Date
  prefCode: string
  tags: string[]
}

const tagRegExp = /\[([^\]]+)]/g

/**
 * ファイル名を ASC で比較した sort 戻り値用の数値を返す
 * @param pathOfA
 * @param pathOfB
 */
const compareByFileName = (pathOfA: string, pathOfB: string): (1 | -1 | 0) => {
  const lastSlashIndexOfA = pathOfA.lastIndexOf("/")
  const lastSlashIndexOfB = pathOfB.lastIndexOf("/")
  const fileNameOfA = pathOfA.slice(lastSlashIndexOfA, pathOfA.length)
  const fileNameOfB = pathOfB.slice(lastSlashIndexOfB, pathOfB.length)

  if (fileNameOfA > fileNameOfB) return 1
  if (fileNameOfA < fileNameOfB) return 1
  return 0
}

const imagesInfo = (fileNames: string[], ORIGIN_ROOT: string) =>
  fileNames
    .reduce((arr: ImagesInfo[], path: string, index: number) => {
      const relatedPath = path.replace(ORIGIN_ROOT, "")
      const [pref, date] = relatedPath.slice(1).split("/")
      const year = date.slice(0, 4)
      const month = date.slice(4, 6)
      const day = date.slice(6)
      const prefCode = pref.slice(0, 2)
      const tags = []
      const matches = relatedPath.match(tagRegExp)
      if (matches) {
        tags.push(...matches[0].replace(tagRegExp, "$1").split(","))
        tags.sort()
      }
      arr.push({
        imageId: index + 1,
        path: relatedPath.replace(tagRegExp, ""),
        date: new Date(`${year}-${month}-${day}`),
        prefCode,
        tags,
      })
      return arr
    }, [])
    .sort((a: ImagesInfo, b: ImagesInfo): number => {
      if (a.date < b.date) return 1
      if (a.date > b.date) return -1

      const resultByFileName = compareByFileName(a.path, b.path)
      if (resultByFileName !== 0) {
        return resultByFileName
      }

      return -1
    })

export default imagesInfo
