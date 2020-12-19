// import node_modules
import React from "react"
import { Story, Meta } from "@storybook/react"

// import components
import { Link, LinkProps } from "./index"

// main
const config: Meta<LinkProps> = {
  title: "atoms/Link",
  component: Link,
  argTypes: {
    handleClick: {
      action: "clicked",
    },
  },
}
export default config

const Template: Story<LinkProps> = (props) => <Link {...props}>Link</Link>

export const ExternalLink = Template.bind({})
ExternalLink.args = {
  isExternal: true,
  href: "",
}

export const InternalLink = Template.bind({})
InternalLink.args = {
  href: "",
}

export const ClickableText = Template.bind({})
