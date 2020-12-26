// main
type UseDeletingModalReturn = {
  isShowDeletingModal: boolean
  handleShowDeletingModal: () => void
  handleHideDeletingModal: () => void
}
export type UseDeletingModal = () => UseDeletingModalReturn
