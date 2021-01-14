// import
import { UseGalleryImages } from "./types"

// main
export const useGalleryImages: UseGalleryImages = (props) => {
  const { images: _images, prefectures, tags } = props

  const condition = {
    prefectures,
    tags,
    selectedPrefecture: null,
    accentDatesOfPhotographAt: [],
    accentDatesOfCreatedAt: [],
    accentDatesOfUpdatedAt: [],
    selectedTags: [],
    photographAtStart: null,
    photographAtEnd: null,
    createdAtStart: null,
    createdAtEnd: null,
    updatedAtStart: null,
    updatedAtEnd: null,
    /* eslint-disable no-console */
    handleSelectPhotographAtStart: () =>
      console.log("handleSelectPhotographAtStart"),
    handleSelectPhotographAtEnd: () =>
      console.log("handleSelectPhotographAtEnd"),
    handleSelectCreatedAtStart: () => console.log("handleSelectCreatedAtStart"),
    handleSelectCreatedAtEnd: () => console.log("handleSelectCreatedAtEnd"),
    handleSelectUpdatedAtStart: () => console.log("handleSelectUpdatedAtStart"),
    handleSelectUpdatedAtEnd: () => console.log("handleSelectUpdatedAtEnd"),
    handleSelectPrefecture: () => console.log("handleSelectPrefecture"),
    handleSelectTags: () => console.log("handleSelectTags"),
    handleResetConditions: () => console.log("handleResetConditions"),
    /* eslint-enable no-console */
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
