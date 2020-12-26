// import node_modules
import { useState } from "react"

// import others
import { UseChangingModal } from "./types"

// main
export const useChangingModal: UseChangingModal = () => {
  const [isShowChangingModal, setShowChangingModal] = useState(false)

  const handleShowChangingModal = () => setShowChangingModal(true)
  const handleHideChangingModal = () => setShowChangingModal(false)

  return {
    isShowChangingModal,
    handleShowChangingModal,
    handleHideChangingModal,
  }
}
