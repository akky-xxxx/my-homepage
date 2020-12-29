// import node_modules
import { ChangeEventHandler } from "react"

// main
export type HandleChangeNewTagName = ChangeEventHandler<HTMLInputElement>
export type UseAdditionalModal = () => {
  newTagName: string
  handleChangeNewTagName: HandleChangeNewTagName
}
