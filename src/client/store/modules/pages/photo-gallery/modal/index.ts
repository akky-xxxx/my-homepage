/**
 * import node_modules
 */
import { createSlice } from "@reduxjs/toolkit"

/**
 * import others
 */
import { State, ModalAction } from "./types"

/**
 * main
 */
const initialState: State = {
  isOpen: false,
  currentImageId: null,
}

const modalModule = createSlice({
  name: "pages/photo-gallery/modal",
  initialState,
  reducers: {
    openModal: (state, action: ModalAction) => {
      const {
        payload: { targetId },
      } = action

      return {
        ...state,
        isOpen: true,
        currentImageId: targetId,
      }
    },
    closeModal: state => {
      return {
        ...state,
        isOpen: false,
        currentImageId: null,
      }
    },
  },
})

export default modalModule
