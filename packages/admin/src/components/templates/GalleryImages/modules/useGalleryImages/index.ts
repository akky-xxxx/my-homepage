// import
import { UseGalleryImages } from "./types"
import { useCondition } from "./modules/useCondition"

// main
export const useGalleryImages: UseGalleryImages = (props) => {
  const { images: _images, prefectures, tags } = props

  const condition = {
    prefectures,
    tags,
    accentDatesOfPhotographAt: [],
    accentDatesOfCreatedAt: [],
    accentDatesOfUpdatedAt: [],
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
