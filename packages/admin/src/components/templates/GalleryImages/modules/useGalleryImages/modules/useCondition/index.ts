// import
import { UseCondition } from "./types"

// main
export const useCondition: UseCondition = () => {
  return {
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
}
