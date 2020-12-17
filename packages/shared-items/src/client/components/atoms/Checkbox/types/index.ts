// import
import { EmptyFunction } from "../../../../../common"

// main
export type CheckboxProps = {
  isChecked: boolean
  handleChange: EmptyFunction
}

export type InnerProps = Pick<CheckboxProps, "isChecked">
