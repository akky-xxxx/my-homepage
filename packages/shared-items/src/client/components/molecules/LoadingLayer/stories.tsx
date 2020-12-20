// import node_modules
import React, { Fragment } from "react"
import { Story, Meta } from "@storybook/react"

// import components
import { LoadingLayer, LoadingLayerProps } from "./index"

// main
const config: Meta<LoadingLayerProps> = {
  title: "molecules/LoadingLayer",
  component: LoadingLayer,
  args: {
    isShow: true,
  },
  argTypes: {
    onClick: {
      action: "clicked",
    },
  },
}
export default config

const Template: Story<LoadingLayerProps> = (props) => (
  <Fragment>
    <LoadingLayer {...props} />
    <div>{"テキスト。".repeat(1000)}</div>
  </Fragment>
)

export const Default = Template.bind({})
