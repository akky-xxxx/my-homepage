// import node_modules
import { EmptyFunction } from "shared-items"

// import others
import { RootState } from "@@/store"

// main
export type HandleIncrement = EmptyFunction
export type HandleDecrement = EmptyFunction
export type SampleProps = {
  handleIncrement: HandleIncrement
  handleDecrement: HandleDecrement
} & RootState["sample"]
