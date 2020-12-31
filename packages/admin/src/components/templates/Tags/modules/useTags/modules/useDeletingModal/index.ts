// import node_modules
import { useState } from "react"

// import others
import { UseDeletingModal } from "./types"

// main
export const useDeletingModal: UseDeletingModal = () => {
  const [isShowDeletingModal, setShowDeletingModal] = useState(false)

  const handleShowDeletingModal = () => setShowDeletingModal(true)
  const handleHideDeletingModal = () => setShowDeletingModal(false)

  return {
    isShowDeletingModal,
    handleShowDeletingModal,
    handleHideDeletingModal,
  }
}
