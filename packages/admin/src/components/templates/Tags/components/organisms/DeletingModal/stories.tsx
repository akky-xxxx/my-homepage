// import node_modules
import React from "react"
import { Meta, Story } from "@storybook/react"

// import components
import { DeletingModal, DeletingModalProps } from "./index"

// main
const config: Meta<DeletingModalProps> = {
  title: "templates/Tags/organisms/DeletingModal",
  component: DeletingModal,
  args: {
    isShowDeletingModal: true,
  },
  argTypes: {
    handleHideDeletingModal: {
      action: "handleHideDeletingModal",
    },
    handleDeleteTagsMain: {
      action: "handleDeleteTagsMain",
    },
  },
}
export default config

export const Default: Story<DeletingModalProps> = (props) => (
  <DeletingModal {...props} />
)
