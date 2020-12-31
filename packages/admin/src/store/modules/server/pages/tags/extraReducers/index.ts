// import
import { CreateSliceOptions } from "@reduxjs/toolkit"

// import
import { getTags, getTagsCases } from "./getTagsCases"
import { TagsState } from "../types"

// main
export const extraReducersActions = {
  clientGetTags: getTags,
}

export const extraReducers: CreateSliceOptions<TagsState>["extraReducers"] = (
  builder,
) => {
  builder.addCase(...getTagsCases.pending)
  builder.addCase(...getTagsCases.fulfilled)
  builder.addCase(...getTagsCases.rejected)
}
