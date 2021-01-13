// import
import { UseGalleryImages } from "./types"

// main
export const useGalleryImages: UseGalleryImages = (props) => {
  const { condition: _condition, images: _images } = props

  const condition = {
    ..._condition,
    selectedPrefecture: null,
    accentDates: [],
    selectedTags: [],
    photographAtStart: null,
    photographAtEnd: null,
    /* eslint-disable no-console */
    handleSelectPhotographAtStart: () =>
      console.log("handleSelectPhotographAtStart"),
    handleSelectPhotographAtEnd: () =>
      console.log("handleSelectPhotographAtEnd"),
    handleSelectPrefecture: () => console.log("handleSelectPrefecture"),
    handleSelectTags: () => console.log("handleSelectTags"),
    handleResetConditions: () => console.log("handleResetConditions"),
    /* eslint-enable no-console */
  }

  const images = _images.map((image) => ({
    ...image,
    /* eslint-disable no-console */
    handleClickPrimary: () => console.log("handleClickPrimary"),
    handleClickRemove: () => console.log("handleClickRemove"),
    handleSelectPhotographAt: () => console.log("handleSelectPhotographAt"),
    handleSelectPrefecture: () => console.log("handleSelectPrefecture"),
    handleSelectTags: () => console.log("handleSelectTags"),
    /* eslint-enable no-console */
  }))

  return {
    condition,
    images,
  }
}
