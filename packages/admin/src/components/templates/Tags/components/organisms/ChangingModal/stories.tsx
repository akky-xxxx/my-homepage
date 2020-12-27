// import node_modules
import React from "react"
import { Meta, Story } from "@storybook/react"

// import components
import { ChangingModal, ChangingModalProps } from "./index"
import { selectedTags } from "./stories.data"

// main
const config: Meta<ChangingModalProps> = {
  title: "templates/Tags/organisms/ChangingModal",
  component: ChangingModal,
  args: {
    selectedTags,
    isShowChangingModal: true,
  },
  argTypes: {
    handleHideChangingModal: {
      action: "handleHideChangingModal",
    },
  },
}
export default config

export const Default: Story<ChangingModalProps> = (props) => (
  <ChangingModal {...props} />
)
