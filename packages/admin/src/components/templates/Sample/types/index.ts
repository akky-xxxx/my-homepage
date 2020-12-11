// import node_modules
import { EmptyFunction } from "shared-items"

// import others
import { RootState } from "@@/store"
import { ChangeTextPayload } from "@@/store/modules/sample/types"

// main
export type HandleIncrement = EmptyFunction
export type HandleDecrement = EmptyFunction
export type HandleChangeText = (payload: ChangeTextPayload) => void
export type SampleHandlers = {
  handleIncrement: HandleIncrement
  handleDecrement: HandleDecrement
  handleChangeText: HandleChangeText
}
export type SampleProps = SampleHandlers & RootState["sample"]
