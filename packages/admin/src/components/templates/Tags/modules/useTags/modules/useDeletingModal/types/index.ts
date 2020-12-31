// import node_modules
import { EmptyFunction } from "shared-items"

// main
type UseDeletingModalReturn = {
  isShowDeletingModal: boolean
  handleShowDeletingModal: EmptyFunction
  handleHideDeletingModal: EmptyFunction
}
export type UseDeletingModal = () => UseDeletingModalReturn
