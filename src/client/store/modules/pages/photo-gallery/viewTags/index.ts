/**
 * import node_modules
 */
import { createSlice } from "@reduxjs/toolkit"

import { State } from "./types"

/**
 * main
 */
const initialState: State = []

// reducer
const viewPrefModule = createSlice({
  name: "pages/photo-gallery/viewTags",
  initialState,
  reducers: {
    selectViewTag: (state, action) => {
      const {
        payload: { targetTag },
      } = action

      if (state.includes(targetTag)) {
        return state.filter(tag => tag !== targetTag)
      }

      return [...state, targetTag].sort()
    },
  },
})

export default viewPrefModule
