// import node_modules
import { createAsyncThunk, CaseReducer } from "@reduxjs/toolkit"

// import
import { TagsState } from "../../types"
import { ActionPayload } from "./types"
import { TYPE_BASE } from "../../const"
import { payloadCreator } from "./modules/payloadCreator"

// main
export const getTags = createAsyncThunk<ActionPayload>(
  `${TYPE_BASE}/getTags`,
  payloadCreator,
)

const pendingReducer: CaseReducer<TagsState> = (state) => ({
  ...state,
  isLoading: true,
})

const fulfilledReducer: CaseReducer<TagsState> = (state) => ({
  ...state,
  isLoading: false,
})

const rejectedReducer: CaseReducer<TagsState> = (state) => ({
  ...state,
  isLoading: false,
})

export const getTagsCases = {
  pending: [getTags.pending, pendingReducer],
  fulfilled: [getTags.fulfilled, fulfilledReducer],
  rejected: [getTags.rejected, rejectedReducer],
} as const
