// import
import { RootState } from "@@/store"
import { TagsState } from "@@/store/modules/server/pages/tags/types"

type TagsSelector = (state: RootState) => TagsState
export const tagsSelector: TagsSelector = (state) => state.server.pages.tags
