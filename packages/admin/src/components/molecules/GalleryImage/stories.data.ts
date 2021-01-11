// import node_modules
import { createNullArray } from "shared-items"

// import others
import { GalleryImageProps } from "./types"

// main
export const prefectures: GalleryImageProps["prefectures"] = [
  {
    value: "00",
    label: "その他",
  },
  {
    value: "AA",
    label: "神奈川県",
  },
  ...createNullArray(10).map((_, index) => {
    const id = String(index).padStart(2, "0")
    return {
      value: id,
      label: `label${id}`,
    }
  }),
]

export const tags: GalleryImageProps["tags"] = [
  ...createNullArray(10).map((_, index) => {
    const id = String(index).padStart(2, "0")
    return {
      value: `tagId${id}`,
      label: `label${id}`,
    }
  }),
]
