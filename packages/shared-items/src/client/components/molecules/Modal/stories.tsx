// import node_modules
import React from "react"
import { Story, Meta } from "@storybook/react"

// import components
import { Modal } from "./index"
import { ModalProps } from "./types"

// main
const config: Meta<ModalProps> = {
  title: "molecules/Modal",
  component: Modal,
  argTypes: {
    onClick: {
      action: "clicked",
    },
  },
}
export default config

const Template: Story<ModalProps> = (props) => <Modal {...props} />

export const Default = Template.bind({})
