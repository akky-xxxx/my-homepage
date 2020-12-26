// main
type UseAddModalReturn = {
  isShowAddModal: boolean
  handleShowAddModal: () => void
  handleHideAddModal: () => void
}
export type UseAddModal = () => UseAddModalReturn
