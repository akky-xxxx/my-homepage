// import node_modules
import { EmptyFunction } from "shared-items"

// main
type UseChangingModalReturn = {
  isShowChangingModal: boolean
  handleShowChangingModal: EmptyFunction
  handleHideChangingModal: EmptyFunction
}
export type UseChangingModal = () => UseChangingModalReturn
