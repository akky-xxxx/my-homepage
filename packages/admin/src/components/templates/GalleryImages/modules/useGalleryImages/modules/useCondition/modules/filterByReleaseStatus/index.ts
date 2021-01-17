// import
import { ReleaseStatuses } from "@@/components/templates/GalleryImages/const"
import { Image, Condition } from "../../types"

// main
type SelectedReleaseStatus = Condition["selectedReleaseStatus"]
type FilterByReleaseStatusMain = (images: Pick<Image, "isRelease">) => boolean
export type FilterByReleaseStatus = (
  selectedReleaseStatus: SelectedReleaseStatus,
) => FilterByReleaseStatusMain

export const filterByReleaseStatus: FilterByReleaseStatus = (
  selectedReleaseStatus,
) => {
  const filterByReleaseStatusMain: FilterByReleaseStatusMain = (images) => {
    if (selectedReleaseStatus === null) return true
    return images.isRelease === (selectedReleaseStatus.value === ReleaseStatuses[0].value)
  }
  return filterByReleaseStatusMain
}
