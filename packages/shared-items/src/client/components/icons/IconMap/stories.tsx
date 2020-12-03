// import node_modules
import React from "react"
import { Story, Meta } from "@storybook/react"

// import components
import { IconMap } from "@@/client/components/icons/IconMap/index"
import { IconMapProps } from "@@/client/components/icons/IconMap/types"

// main
const config: Meta<IconMapProps> = {
  title: "icons/IconMap",
  component: IconMap,
}
export default config

const Template: Story<IconMapProps> = (props) => {
  return <IconMap {...props} />
}

export const Default = Template.bind({})
export const Middle = Template.bind({})
Middle.args = {
  size: "middle",
}
export const Large = Template.bind({})
Large.args = {
  size: "large",
}
export const Small = Template.bind({})
Small.args = {
  size: "small",
}
