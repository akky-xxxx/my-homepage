import { State } from "./types"

export const visibleModalReducer = (state: State, targetId: null | number, isOpen: boolean): State => {
  const targetImageInfo = targetId ? state.galleryInfoList.find(info => info.imageId === targetId) : null
  if (targetImageInfo === undefined) return state

  if (targetImageInfo === null) {
    return {
      ...state,
      isOpen,
      currentImageId: null,
    }
  }

  return {
    ...state,
    isOpen,
    currentImageId: targetImageInfo.imageId,
  }
}
