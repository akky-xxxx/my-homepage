// import
import { State } from "../../types"
import { createInitialState } from "../createInitialState"

// main
type CreateNewStatesMain = (
  newState: State[],
  newTagName: State,
  index: number,
  self: State[],
) => State[]
type CreateNewStatesProps = Record<"id" | "value", string>
type CreateNewStates = (props: CreateNewStatesProps) => CreateNewStatesMain

export const createNewStates: CreateNewStates = (props) => {
  const { id, value } = props
  const createNewStatesMain: CreateNewStatesMain = (
    newState,
    newTagName,
    index,
    self,
  ) => {
    if (newTagName.id === id) return [...newState, { id, value }]
    if (newTagName.value === "") return newState
    if (index === self.length - 1) return [...newState, createInitialState()]
    return [...newState, newTagName]
  }

  return createNewStatesMain
}
