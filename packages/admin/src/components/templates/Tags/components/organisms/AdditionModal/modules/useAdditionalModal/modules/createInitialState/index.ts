// import node_modules
import { v4 as uuid } from "uuid"

// import others
import { State } from "../../types"

// main
type CreateInitialState = () => State
export const createInitialState: CreateInitialState = () => ({
  id: uuid(),
  value: "",
})
