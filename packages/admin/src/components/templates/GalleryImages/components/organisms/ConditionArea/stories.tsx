// import node_modules
import React from "react"
import { Meta, Story } from "@storybook/react"

// import components
import { ConditionArea } from "./index"
import { ConditionAreaProps } from "./types"

// import others
import { conditionAreaProps } from "./stories.data"

// main
const config: Meta<ConditionAreaProps> = {
  title: "templates/GalleryImages/organisms/ConditionArea",
  component: ConditionArea,
  args: {
    ...conditionAreaProps,
  },
  argTypes: {
    handleSelectPhotographAtStart: {
      action: "handleSelectPhotographAtStart",
    },
    handleSelectPhotographAtEnd: {
      action: "handleSelectPhotographAtEnd",
    },
    handleSelectPrefecture: {
      action: "handleSelectPrefecture",
    },
    handleSelectTags: {
      action: "handleSelectTags",
    },
    handleResetConditions: {
      action: "handleResetConditions",
    },
  },
}
export default config

export const Template: Story<ConditionAreaProps> = (props) => (
  <ConditionArea {...props} />
)
