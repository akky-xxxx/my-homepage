// import node_modules
import React from "react"
import { Meta, Story } from "@storybook/react"

// import components
import { GalleryImages } from "./index"
import { GalleryImagesProps } from "./types"

// import others
import { galleryImagesProps } from "./stories.data"

// main
const config: Meta<GalleryImagesProps> = {
  title: "templates/GalleryImages",
  component: GalleryImages,
  args: {
    ...galleryImagesProps,
  },
}
export default config

export const Template: Story<GalleryImagesProps> = (props) => (
  <GalleryImages {...props} />
)
