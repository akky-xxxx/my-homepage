// import node_modules
import { EmptyFunction } from "shared-items"

// main
type UseAdditionModalReturn = {
  isShowAdditionModal: boolean
  handleShowAdditionModal: EmptyFunction
  handleHideAdditionModal: EmptyFunction
}
export type UseAdditionModal = () => UseAdditionModalReturn
