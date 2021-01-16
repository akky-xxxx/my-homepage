// import node_modules
import { useMemo } from "react"

// import
import { stringDatetime2stringDate } from "@@/shared/utils/stringDatetime2stringDate"
import { UseGalleryImages } from "./types"
import { useCondition } from "./modules/useCondition"

// main
export const useGalleryImages: UseGalleryImages = (props) => {
  const { images: _images, prefectures, tags } = props

  const condition = {
    prefectures,
    tags,
    ...useMemo(
      () => ({
        accentDatesOfPhotographAt: _images
          .map(({ photographAt }) => photographAt || "")
          .filter(Boolean)
          .map(stringDatetime2stringDate),
        accentDatesOfCreatedAt: _images
          .map(({ createdAt }) => createdAt || "")
          .filter(Boolean)
          .map(stringDatetime2stringDate),
        accentDatesOfUpdatedAt: _images
          .map(({ updatedAt }) => updatedAt || "")
          .filter(Boolean)
          .map(stringDatetime2stringDate),
      }),
      [...tags],
    ),
    ...useCondition(props),
  }

  const images = _images.map((image) => ({
    ...image,
    prefectures,
    tags,
  }))

  const imagesHandlers = {
    /* eslint-disable no-console */
    handleClickPrimary: () => console.log("handleClickPrimary"),
    handleClickRemove: () => console.log("handleClickRemove"),
    handleSelectPhotographAt: () => console.log("handleSelectPhotographAt"),
    handleSelectPrefecture: () => console.log("handleSelectPrefecture"),
    handleSelectTags: () => console.log("handleSelectTags"),
    /* eslint-enable no-console */
  }

  return {
    condition,
    images,
    imagesHandlers,
  }
}
