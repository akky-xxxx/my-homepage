// import node_modules
import { createAsyncThunk, CaseReducer } from "@reduxjs/toolkit"

// import
import { State } from "../../types"
import { ActionArgs, ActionPayload } from "./types"
import { TYPE_BASE } from "../../const"
import { payloadCreator } from "./modules/payloadCreator"

// main
export const deleteTags = createAsyncThunk<ActionPayload, ActionArgs>(
  `${TYPE_BASE}/deleteTags`,
  payloadCreator,
)

const pendingReducer: CaseReducer<State> = (state) => ({
  ...state,
  isLoading: true,
})

const fulfilledReducer: CaseReducer<State> = (state) => ({
  ...state,
  isLoading: false,
})

const rejectedReducer: CaseReducer<State> = (state) => ({
  ...state,
  isLoading: false,
})

export const deleteTagsCases = {
  pending: [deleteTags.pending, pendingReducer],
  fulfilled: [deleteTags.fulfilled, fulfilledReducer],
  rejected: [deleteTags.rejected, rejectedReducer],
} as const
