// import
import { Image, Condition } from "../../types"

// main
type SelectedTags = Condition["selectedTags"]
type FilterByTagsMain = (images: Pick<Image, "selectedTags">) => boolean
export type FilterByTags = (selectedTags: SelectedTags) => FilterByTagsMain

export const filterByTags: FilterByTags = (selectedTags) => {
  const filterByTagsMain: FilterByTagsMain = (image) => {
    if (selectedTags === null || !selectedTags.length) return true
    return selectedTags.every((selectedTag) =>
      image.selectedTags.includes(selectedTag),
    )
  }
  return filterByTagsMain
}
