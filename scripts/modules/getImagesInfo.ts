interface ImagesInfo {
  imageId: number
  path: string
  date: Date
  prefCode: string
  tags: string[]
}

const tagRegExp = /\[([^\]]+)]/g

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
      return -1
    })

export default imagesInfo
