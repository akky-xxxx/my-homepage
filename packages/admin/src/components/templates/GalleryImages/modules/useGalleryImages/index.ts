// import node_modules
import { useMemo } from "react"

// import
import { stringDatetime2stringDate } from "@@/shared/utils/stringDatetime2stringDate"
import { UseGalleryImages, UseGalleryImagesReturn } from "./types"
import { useCondition } from "./modules/useCondition"

// main
export const useGalleryImages: UseGalleryImages = (props) => {
  const { images: _images, prefectures, tags } = props
  const [
    accentDatesOfPhotographAt,
    accentDatesOfCreatedAt,
    accentDatesOfUpdatedAt,
  ] = useMemo(
    () => [
      _images
        .map(({ photographAt }) => photographAt || "")
        .filter(Boolean)
        .map(stringDatetime2stringDate),
      _images
        .map(({ createdAt }) => createdAt || "")
        .filter(Boolean)
        .map(stringDatetime2stringDate),
      _images
        .map(({ updatedAt }) => updatedAt || "")
        .filter(Boolean)
        .map(stringDatetime2stringDate),
    ],
    [...tags],
  )

  const useConditionResult = useCondition(props)

  const condition: UseGalleryImagesReturn["condition"] = {
    ...useConditionResult,
    prefectures,
    tags,
    accentDatesOfPhotographAt,
    accentDatesOfCreatedAt,
    accentDatesOfUpdatedAt,
  }

  const imagesHandlers: UseGalleryImagesReturn["imagesHandlers"] = {
    /* eslint-disable no-console */
    handleClickPrimary: () => console.log("handleClickPrimary"),
    handleClickRemove: () => console.log("handleClickRemove"),
    handleSelectPhotographAt: () => console.log("handleSelectPhotographAt"),
    handleSelectPrefecture: () => console.log("handleSelectPrefecture"),
    handleSelectTags: () => console.log("handleSelectTags"),
    handleClickRelease: () => console.log("handleClickRelease"),
    /* eslint-enable no-console */
  }

  return {
    condition,
    images: useConditionResult.images,
    imagesHandlers,
  }
}
