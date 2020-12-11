// import node_modules
import React from "react"
import { Meta, Story } from "@storybook/react"

// import components
import { Sample } from "@@/components/templates/Sample/index"
import { SampleProps } from "@@/components/templates/Sample/types"

// main
const config: Meta<SampleProps> = {
  title: "templates/Sample",
  component: Sample,
  args: {
    counter: 0,
    /* eslint-disable @typescript-eslint/no-empty-function */
    handleIncrement: () => {},
    handleDecrement: () => {},
    /* eslint-enable @typescript-eslint/no-empty-function */
  },
}
export default config

export const Default: Story<SampleProps> = (props) => <Sample {...props} />
