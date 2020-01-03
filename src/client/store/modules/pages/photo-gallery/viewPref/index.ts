/**
 * import node_modules
 */
import { createSlice } from "@reduxjs/toolkit"

import { State } from "./types"

/**
 * main
 */
const initialState: State = "00"

// reducer
const viewPrefModule = createSlice({
  name: "pages/photo-gallery/viewPref",
  initialState,
  reducers: {
    selectViewPref: (_state, action) => {
      const {
        payload: { targetPref },
      } = action

      return targetPref
    },
  },
})

export default viewPrefModule
