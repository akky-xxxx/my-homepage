// import node_modules
import React, { PropsWithChildren } from "react"
import { Story, Meta } from "@storybook/react"

// import components
import { SampleComponent } from "@components/atoms/SampleComponent/index"
import { SampleComponentProps } from "@components/atoms/SampleComponent/types"

// main
const config: Meta<PropsWithChildren<SampleComponentProps>> = {
  title: "atoms/SampleComponent",
  component: SampleComponent,
  args: {
    children: "ボタン",
  },
}
export default config

const Template: Story<PropsWithChildren<SampleComponentProps>> = (props) => {
  const { children } = props
  return <SampleComponent {...props}>{children}</SampleComponent>
}

export const Default = Template.bind({})

export const Attention = Template.bind({})
Attention.args = {
  colorType: "attention",
}
