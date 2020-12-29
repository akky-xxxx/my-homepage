// import node_modules
import { useState } from "react"

// import others
import { UseAdditionalModal, HandleChangeNewTagName } from "./types"

// main
export const useAdditionalModal: UseAdditionalModal = (args) => {
  const { handleAddTagsMain } = args
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
  const handleAddTags = () => {
    handleAddTagsMain([newTagName])
  }

  return {
    newTagName,
    handleChangeNewTagName,
    handleResetNewTagName,
    handleAddTags,
  }
}
