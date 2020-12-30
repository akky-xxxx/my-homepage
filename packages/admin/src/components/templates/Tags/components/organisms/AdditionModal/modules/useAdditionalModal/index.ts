// import node_modules
import { useState } from "react"
import { v4 as uuid } from "uuid"

// import others
import { UseAdditionalModal, HandleChangeNewTagName, State } from "./types"

// main
const createInitialState = (): State => ({
  id: uuid(),
  value: "",
})

export const useAdditionalModal: UseAdditionalModal = (args) => {
  const { handleAddTagsMain, handleHideAdditionModal } = args
  const [newTagNames, setNewTagNames] = useState<State[]>([
    createInitialState(),
  ])
  const handleResetNewTagNames = () => {
    setNewTagNames([createInitialState()])
  }
  const handleChangeNewTagName: HandleChangeNewTagName = (id) => (event) => {
    const {
      currentTarget: { value },
    } = event
    setNewTagNames(
      newTagNames.map((setNewTagName) => {
        if (setNewTagName.id !== id) return setNewTagName
        return { id, value }
      }),
    )
  }
  const handleAddTags = () => {
    handleAddTagsMain(newTagNames.map(({ value }) => value))
    handleResetNewTagNames()
    handleHideAdditionModal()
  }

  return {
    newTagNames,
    handleChangeNewTagName,
    handleResetNewTagNames,
    handleAddTags,
  }
}
