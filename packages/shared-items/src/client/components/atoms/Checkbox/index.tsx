// import node_modules
import React, { FC } from "react"

// import components
import { Wrapper } from "./components/Wrapper"
import { Inner } from "./components/Inner"

// import others
import { CheckboxProps } from "./types"

// main
export const Checkbox: FC<CheckboxProps> = (props) => {
  const { isChecked, handleChange } = props

  return (
    <Wrapper>
      <input type="checkbox" onChange={handleChange} checked={isChecked} />
      <Inner isChecked={isChecked} />
    </Wrapper>
  )
}
