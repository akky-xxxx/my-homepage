// import node_modules
import { useState } from "react"

// import others
import { UseAdditionalModal, HandleChangeNewTagName } from "./types"

// main
export const useAdditionalModal: UseAdditionalModal = () => {
  const [newTagName, setNewTagName] = useState("")
  const handleResetNewTagName = () => {
    setNewTagName("")
  }
  const handleChangeNewTagName: HandleChangeNewTagName = (event) => {
    const {
      currentTarget: { value },
    } = event
    setNewTagName(value)
  }

  return {
    newTagName,
    handleChangeNewTagName,
    handleResetNewTagName,
  }
}
