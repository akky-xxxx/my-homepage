// import node_modules
import { useMemo, useCallback } from "react"

// import
import { stringDatetime2stringDate } from "@@/shared/utils/stringDatetime2stringDate"
import { UseGalleryImages, UseGalleryImagesReturn } from "./types"
import { useImages } from "./modules/useImages"

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

  const useConditionResult = useImages(props)

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
    handleClickPrimary: useCallback(() => console.log("handleClickPrimary"), []),
    handleClickRemove: useCallback(() => console.log("handleClickRemove"), []),
    handleSelectPhotographAt: useCallback(() => console.log("handleSelectPhotographAt"), []),
    handleSelectPrefecture: useCallback(() => console.log("handleSelectPrefecture"), []),
    handleSelectTags: useCallback(() => console.log("handleSelectTags"), []),
    handleClickRelease: useCallback(() => console.log("handleClickRelease"), []),
    /* eslint-enable no-console */
  }

  return {
    condition,
    images: useConditionResult.images,
    imagesHandlers,
  }
}
