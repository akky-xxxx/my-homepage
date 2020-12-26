// import node_modules
import { useState } from "react"

// import others
import { UseAddModal } from "./types"

// main
export const useAddModal: UseAddModal = () => {
  const [isShowAddModal, setShowAddModal] = useState(false)

  const handleShowAddModal = () => setShowAddModal(true)
  const handleHideAddModal = () => setShowAddModal(false)

  return {
    isShowAddModal,
    handleShowAddModal,
    handleHideAddModal,
  }
}
