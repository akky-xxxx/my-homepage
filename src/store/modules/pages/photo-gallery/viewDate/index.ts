/**
 * import node_modules
 */
import { createSlice } from "@reduxjs/toolkit"

import { State } from "./types"

/**
 * main
 */
export const initialState: State = [null, null]

// reducer
const viewDateModule = createSlice({
  name: "pages/photo-gallery/viewPref",
  initialState,
  reducers: {
    selectViewDate: (_state, action) => {
      const {
        payload: { selectedDate },
      } = action

      return selectedDate
    },
    resetViewDate: () => initialState,
  },
})

export default viewDateModule
