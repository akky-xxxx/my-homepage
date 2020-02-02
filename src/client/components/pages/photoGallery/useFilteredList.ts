/**
 * import node_modules
 */
import { useMemo } from "react"

/**
 * import others
 */
import { GalleryItem } from "../../../shared/types/pages/galleryList"
import { PrefCode } from "../../../shared/types/common"

/**
 * main
 */
interface UseFilteredListArgs {
  galleryInfoList: GalleryItem[]
  selectedViewPref: PrefCode | "00"
  selectedViewTags: string[]
}

type UseFilteredList = (args: UseFilteredListArgs) => GalleryItem[]

const useFilteredList: UseFilteredList = args => {
  const { galleryInfoList, selectedViewPref, selectedViewTags } = args
  const selectedViewTagsStr = selectedViewTags.join("")

  const filteredByPref = useMemo(() => {
    return galleryInfoList.filter(galleryInfo => {
      if (selectedViewPref === "00") return true
      return galleryInfo.prefCode === selectedViewPref
    })
  }, [selectedViewPref])

  return useMemo(() => {
    return filteredByPref.filter(galleryInfo => {
      if (selectedViewTags.length === 0) return true
      return selectedViewTags.every(tag => galleryInfo.tags.includes(tag))
    })
  }, [selectedViewTagsStr, filteredByPref])
}

export default useFilteredList
