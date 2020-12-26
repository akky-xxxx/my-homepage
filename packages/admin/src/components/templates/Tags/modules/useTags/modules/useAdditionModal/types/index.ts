// main
type UseAdditionModalReturn = {
  isShowAdditionModal: boolean
  handleShowAdditionModal: () => void
  handleHideAdditionModal: () => void
}
export type UseAdditionModal = () => UseAdditionModalReturn
