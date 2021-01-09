// import node_modules
import { useState } from "react"

// import others
import { UseAdditionalModal, HandleChangeNewTagName, State } from "./types"
import { createInitialState } from "./modules/createInitialState"

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
    const newStates = newTagNames.reduce<State[]>(
      (newState, newTagName, index) => {
        if (newTagName.id === id) return [...newState, { id, value }]
        if (newTagName.value === "") return newState
        if (index === newTagNames.length - 1)
          return [...newState, createInitialState()]
        return [...newState, newTagName]
      },
      [],
    )
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
