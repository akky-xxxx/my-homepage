// import
import { RootState } from "@@/store"

type TagsSelector = (state: RootState) => RootState["client"]["pages"]["tags"]
export const tagsSelector: TagsSelector = (state) => state.client.pages.tags
