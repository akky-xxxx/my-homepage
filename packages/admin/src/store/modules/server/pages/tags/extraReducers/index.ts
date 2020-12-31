// import
import { CreateSliceOptions } from "@reduxjs/toolkit"

// import
import { getTags, getTagsCases } from "./getTagsCases"

// main
export const extraReducersActions = {
  clientGetTags: getTags,
}

export const extraReducers: CreateSliceOptions["extraReducers"] = (builder) => {
  builder.addCase(...getTagsCases.pending)
  builder.addCase(...getTagsCases.fulfilled)
  builder.addCase(...getTagsCases.rejected)
}
