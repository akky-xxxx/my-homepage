// import node_modules
import React, { Fragment } from "react"
import { Story, Meta } from "@storybook/react"

// import components
import { Background } from "./index"
import { BackgroundProps } from "./types"

// main
const config: Meta<BackgroundProps> = {
  title: "atoms/Background",
  component: Background,
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

const Template: Story<BackgroundProps> = (props) => (
  <Fragment>
    <Background {...props} />
    <div>{"テキスト。".repeat(1000)}</div>
  </Fragment>
)

export const Default = Template.bind({})
