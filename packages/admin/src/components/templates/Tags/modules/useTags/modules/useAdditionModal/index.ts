// import node_modules
import { useState } from "react"

// import others
import { UseAdditionModal } from "./types"

// main
export const useAdditionModal: UseAdditionModal = () => {
  const [isShowAdditionModal, setShowAdditionModal] = useState(false)

  const handleShowAdditionModal = () => setShowAdditionModal(true)
  const handleHideAdditionModal = () => setShowAdditionModal(false)

  return {
    isShowAdditionModal,
    handleShowAdditionModal,
    handleHideAdditionModal,
  }
}
