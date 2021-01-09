// import node_modules
import { useState } from "react"

// import others
import { UseAdditionalModal, HandleChangeNewTagName, State } from "./types"
import { createInitialState } from "./modules/createInitialState"
import { createNewStates } from "./modules/createNewStates"

// main
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
    const createNewStatesMain = createNewStates({ id, value })
    const newStates = newTagNames.reduce(createNewStatesMain, [])
    const isLastFilled = newStates[newStates.length - 1].value.length > 0
    if (isLastFilled) newStates.push(createInitialState())
    setNewTagNames(newStates)
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
