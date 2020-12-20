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
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
}
export default config

const Template: Story<ModalProps> = (props) => (
  <Modal {...props}>{"モーダルコンテンツ".repeat(100)}</Modal>
)

export const FullMode = Template.bind({})
FullMode.args = {
  hasHeader: true,
  title: "モーダルヘッダ",
  hasFooter: true,
  hasCancelButton: true,
  okText: "OK テキスト",
  cancelText: "キャンセルテキスト",
  height: "500px",
  width: "500px",
  /* eslint-disable no-console */
  handleOkCallback: () => console.log("handleOkCallback"),
  handleCancelCallback: () => console.log("handleCancelCallback"),
  /* eslint-enable no-console */
}
