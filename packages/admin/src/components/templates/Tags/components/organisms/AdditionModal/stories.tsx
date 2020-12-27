// import node_modules
import React from "react"
import { Meta, Story } from "@storybook/react"

// import components
import { AdditionModal, AdditionModalProps } from "./index"

// main
const config: Meta<AdditionModalProps> = {
  title: "templates/Tags/organisms/AdditionModal",
  component: AdditionModal,
  args: {
    isShowAdditionModal: true,
  },
  argTypes: {
    handleHideAdditionModal: {
      action: "handleHideAdditionModal",
    },
  },
}
export default config

export const Default: Story<AdditionModalProps> = (props) => (
  <AdditionModal {...props} />
)
