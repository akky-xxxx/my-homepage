interface ImagesInfo {
  path: string
  year: number
  prefCode: string
}

const imagesInfo = (fileNames: string[], ORIGIN_ROOT: string) =>
  fileNames
    .reduce((arr: ImagesInfo[], path: string) => {
      const relatedPath = path.replace(ORIGIN_ROOT, "")
      const [pref, year] = relatedPath.slice(1).split("/")
      const prefCode = pref.slice(0, 2)
      arr.push({
        path: relatedPath,
        year: parseInt(year, 10),
        prefCode,
      })
      return arr
    }, [])
    .sort((a: ImagesInfo, b: ImagesInfo): number => {
      if (a.year < b.year) return 1
      return -1
    })

export default imagesInfo
