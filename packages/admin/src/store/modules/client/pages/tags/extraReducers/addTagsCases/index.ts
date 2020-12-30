// import node_modules
import { createAsyncThunk, CaseReducer } from "@reduxjs/toolkit"

// import
import { State } from "../../types"
import { ActionArgs, ActionPayload } from "./types"
import { TYPE_BASE } from "../../const"
import { payloadCreator } from "./modules/payloadCreator"

// main
export const addTags = createAsyncThunk<ActionPayload, ActionArgs>(
  `${TYPE_BASE}/addTags`,
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

export const addTagsCases = {
  pending: [addTags.pending, pendingReducer],
  fulfilled: [addTags.fulfilled, fulfilledReducer],
  rejected: [addTags.rejected, rejectedReducer],
} as const
