// import node_modules
import React from "react"
import { Meta, Story } from "@storybook/react"

// import others
import { GalleryImage } from "./index"
import { GalleryImageProps } from "./types"
import { prefectures, tags } from "./stories.data"

// main
const config: Meta<GalleryImageProps> = {
  title: "molecules/GalleryImage",
  component: GalleryImage,
  args: {
    imageId: "imageId",
    imagePath: "https://picsum.photos/1000/800/",
    isRelease: true,
    prefectures,
    selectedPrefecture: null,
    tags,
    selectedTags: [],
  },
  argTypes: {
    handleClickPrimary: {
      action: "handleClickPrimary",
    },
    handleClickRemove: {
      action: "handleClickRemove",
    },
    handleSelectPhotographAt: {
      action: "handleSelectPhotographAt",
    },
    handleSelectPrefecture: {
      action: "handleSelectPrefecture",
    },
    handleSelectTags: {
      action: "handleSelectTags",
    },
    handleClickRelease: {
      action: "handleClickRelease",
    },
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
}
export default config

const Template: Story<GalleryImageProps> = (props) => (
  <GalleryImage {...props} />
)
export const RegisterVer = Template.bind({})
export const UpdateVer = Template.bind({})
UpdateVer.args = {
  selectedPrefecture: prefectures[1],
  selectedTags: [tags[1], tags[3], tags[5]],
  photographAt: "2020-01-01 12:34:56",
  createdAt: "2021-02-03 23:45:59",
  updatedAt: "2021-12-31 23:59:59",
}
