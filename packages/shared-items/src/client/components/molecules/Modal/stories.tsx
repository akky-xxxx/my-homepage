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
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
}
export default config

const Template1: Story<ModalProps> = (props) => (
  <Modal {...props}>{"モーダルコンテンツ".repeat(100)}</Modal>
)

const Template2: Story<ModalProps> = (props) => (
  <Modal {...props}>{"モーダルコンテンツ".repeat(10)}</Modal>
)

export const Maximum = Template1.bind({})
Maximum.args = {
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

export const AutoSize = Template2.bind({})
AutoSize.args = {
  hasHeader: true,
  title: "モーダルヘッダ",
  hasFooter: true,
  hasCancelButton: true,
  okText: "OK テキスト",
  cancelText: "キャンセルテキスト",
  /* eslint-disable no-console */
  handleOkCallback: () => console.log("handleOkCallback"),
  handleCancelCallback: () => console.log("handleCancelCallback"),
  /* eslint-enable no-console */
}

export const SingleFooterButton = Template1.bind({})
SingleFooterButton.args = {
  hasFooter: true
}

export const Minimum = Template1.bind({})
