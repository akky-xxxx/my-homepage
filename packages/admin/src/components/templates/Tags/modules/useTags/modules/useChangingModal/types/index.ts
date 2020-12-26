// main
type UseChangingModalReturn = {
  isShowChangingModal: boolean
  handleShowChangingModal: () => void
  handleHideChangingModal: () => void
}
export type UseChangingModal = () => UseChangingModalReturn
