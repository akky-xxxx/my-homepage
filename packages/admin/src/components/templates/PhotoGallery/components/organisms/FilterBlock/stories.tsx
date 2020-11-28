// import node_modules
import React from "react"
import { Story, Meta } from "@storybook/react"

// import components
import { FilterBlock } from "@@/components/templates/PhotoGallery/components/organisms/FilterBlock/index"

// main
const config: Meta = {
  title: "templates/PhotoGallery/organisms/FilterBlock",
  component: FilterBlock,
}
export default config

const Template: Story = (props) => {
  return <FilterBlock {...props} />
}

export const Default = Template.bind({})
