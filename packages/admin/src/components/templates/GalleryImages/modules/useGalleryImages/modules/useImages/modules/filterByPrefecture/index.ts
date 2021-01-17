// import
import { Image, Condition } from "../../types"

// main
type SelectedPrefecture = Condition["selectedPrefecture"]
type FilterByPrefectureMain = (
  images: Pick<Image, "selectedPrefecture">,
) => boolean
export type FilterByPrefecture = (
  selectedPrefecture: SelectedPrefecture,
) => FilterByPrefectureMain

export const filterByPrefecture: FilterByPrefecture = (selectedPrefecture) => {
  const filterByPrefectureMain: FilterByPrefectureMain = (image) => {
    if (selectedPrefecture === null) return true
    if (image.selectedPrefecture === null) return false
    return image.selectedPrefecture.value === selectedPrefecture.value
  }
  return filterByPrefectureMain
}
