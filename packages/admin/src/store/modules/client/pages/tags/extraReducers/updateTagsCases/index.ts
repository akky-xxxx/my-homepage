// import node_modules
import { createAsyncThunk, CaseReducer } from "@reduxjs/toolkit"

// import
import { State } from "../../types"
import { ActionArgs, ActionPayload } from "./types"
import { TYPE_BASE } from "../../const"
import { payloadCreator } from "./modules/payloadCreator"

// main
export const updateTags = createAsyncThunk<ActionPayload, ActionArgs>(
  `${TYPE_BASE}/updateTags`,
  payloadCreator,
)

const pendingReducer: CaseReducer<State> = (state) => ({
  ...state,
  isLoading: true,
  isLoaded: false,
})

const fulfilledReducer: CaseReducer<State> = (state) => ({
  ...state,
  isLoading: false,
  isLoaded: true,
})

const rejectedReducer: CaseReducer<State> = (state) => ({
  ...state,
  isLoading: false,
  isLoaded: false,
})

export const updateTagsCases = {
  pending: [updateTags.pending, pendingReducer],
  fulfilled: [updateTags.fulfilled, fulfilledReducer],
  rejected: [updateTags.rejected, rejectedReducer],
} as const
