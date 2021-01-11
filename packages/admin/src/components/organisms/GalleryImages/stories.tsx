// import node_modules
import React from "react"
import { Meta, Story } from "@storybook/react"

// import components
import { GalleryImages, GalleryImagesProps } from "./index"
import { MainContents } from "@@/components/atoms/MainContents"

// import others
import { images } from "./stories.data"

// main
const config: Meta<GalleryImagesProps> = {
  title: "organisms/GalleryImages",
  component: GalleryImages,
  args: {
    images,
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
}
export default config

export const Template: Story<GalleryImagesProps> = (props) => (
  <MainContents>
    <GalleryImages {...props} />
  </MainContents>
)
