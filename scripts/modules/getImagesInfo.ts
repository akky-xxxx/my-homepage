interface ImagesInfo {
  imageId: number
  path: string
  thumbPath: string
  year: number
  month: number
  prefCode: string
}

const imagesInfo = (fileNames: string[], ORIGIN_ROOT: string) =>
  fileNames
    .reduce((arr: ImagesInfo[], path: string, index: number) => {
      const relatedPath = path.replace(ORIGIN_ROOT, "")
      const [pref, yearMonth] = relatedPath.slice(1).split("/")
      const year = yearMonth.slice(0, 4)
      const month = yearMonth.slice(4)
      const prefCode = pref.slice(0, 2)
      arr.push({
        imageId: index + 1,
        path: relatedPath,
        thumbPath: relatedPath.replace(".webp.jpg", ".thumb.webp.jpg"),
        year: parseInt(year, 10),
        month: parseInt(month, 10),
        prefCode,
      })
      return arr
    }, [])
    .sort((a: ImagesInfo, b: ImagesInfo): number => {
      if (a.year < b.year) return 1
      return -1
    })

export default imagesInfo
