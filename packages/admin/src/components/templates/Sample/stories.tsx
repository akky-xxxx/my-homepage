// import node_modules
import React from "react"
import { Meta } from "@storybook/react"

// import components
import { Sample } from "@@/components/templates/Sample/index"

// main
const config: Meta = {
  title: "templates/Sample",
  component: Sample,
  args: {
    children: "ボタン",
  },
}
export default config

export const Default = () => <Sample />
