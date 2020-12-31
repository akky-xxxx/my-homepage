// import node_modules
import { ChangeEventHandler } from "react"
import { EmptyFunction } from "shared-items"

// main
export type State = {
  id: string
  value: string
}
export type HandleChangeNewTagName = (
  id: string,
) => ChangeEventHandler<HTMLInputElement>
export type HandleAddTagsMain = (tagNames: string[]) => void
export type HandleAddTags = EmptyFunction
type UseAdditionalModalArgs = {
  handleAddTagsMain: HandleAddTagsMain
  handleHideAdditionModal: EmptyFunction
}
export type UseAdditionalModal = (
  args: UseAdditionalModalArgs,
) => {
  newTagNames: State[]
  handleChangeNewTagName: HandleChangeNewTagName
  handleResetNewTagNames: EmptyFunction
  handleAddTags: HandleAddTags
}
