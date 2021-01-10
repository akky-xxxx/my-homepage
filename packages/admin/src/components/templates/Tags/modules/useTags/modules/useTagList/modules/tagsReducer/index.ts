// import
import { Reducer } from "react"
import { AnyAction } from "@reduxjs/toolkit"

// import
import { TagsTableRecordStates } from "@@/components/templates/Tags/components/molecules/TagsTableRecord/types"

// main
export const ActionTypes = {
  TOGGLE_SELECT: "toggleSelect",
  TOGGLE_ALL_SELECT: "toggleAllSelect",
  UPDATE_TAGS: "updateTags",
} as const

const { TOGGLE_SELECT, TOGGLE_ALL_SELECT, UPDATE_TAGS } = ActionTypes

export const tagsReducer: Reducer<TagsTableRecordStates[], AnyAction> = (
  tagsStates,
  action,
) => {
  switch (action.type) {
    case TOGGLE_SELECT:
      return tagsStates.map((tag) => {
        if (tag.tagId !== action.payload.tagId) return tag
        return {
          ...tag,
          isSelect: !tag.isSelect,
        }
      })
    case TOGGLE_ALL_SELECT:
      return tagsStates.map((tag) => ({
        ...tag,
        isSelect: !action.payload.isSelectAll,
      }))
    case UPDATE_TAGS:
      return action.payload.newTags
    default:
      return tagsStates
  }
}
