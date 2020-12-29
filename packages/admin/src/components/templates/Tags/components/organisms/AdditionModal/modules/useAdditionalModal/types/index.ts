// import node_modules
import { ChangeEventHandler } from "react"
import { EmptyFunction } from "shared-items"

// main
export type HandleChangeNewTagName = ChangeEventHandler<HTMLInputElement>
export type HandleAddTagsMain = (tagNames: string[]) => void
export type HandleAddTags = EmptyFunction
type UseAdditionalModalArgs = {
  handleAddTagsMain: HandleAddTagsMain
}
export type UseAdditionalModal = (
  args: UseAdditionalModalArgs,
) => {
  newTagName: string
  handleChangeNewTagName: HandleChangeNewTagName
  handleResetNewTagName: EmptyFunction
  handleAddTags: HandleAddTags
}
