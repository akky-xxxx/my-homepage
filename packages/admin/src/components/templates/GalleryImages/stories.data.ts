// import node_modules
import { createNullArray } from "shared-items"

// import others
import { GalleryImagesProps } from "./types"

// main
const prefectures: GalleryImagesProps["prefectures"] = [
  {
    value: "00",
    label: "その他",
  },
  ...createNullArray(10).map((_, index) => {
    const id = String(index).padStart(2, "0")
    return {
      value: id,
      label: `label${id}`,
    }
  }),
]

const tags: GalleryImagesProps["tags"] = [
  ...createNullArray(10).map((_, index) => {
    const id = String(index).padStart(2, "0")
    return {
      value: `tagId${id}`,
      label: `label${id}`,
    }
  }),
]

const images: GalleryImagesProps["images"] = createNullArray(10).map(
  (_, index) => {
    const imageId = String(index + 1).padStart(2, "0")
    const isRelease = Boolean(index % 2)
    const width = 500 + index * 10
    const height = 200 + index * 10
    const imagePath = `https://picsum.photos/${width}/${height}/`
    const selectedPrefecture = prefectures[index]
    const selectedTags = [...tags].slice(0, 10 - index)

    return {
      imageId,
      imagePath,
      isRelease,
      prefectures,
      selectedPrefecture,
      tags,
      selectedTags,
      photographAt: "2020-01-01 12:34:56",
      createdAt: "2021-02-03 23:45:59",
      updatedAt: "2021-12-31 23:59:59",
    }
  },
)

export const galleryImagesProps: GalleryImagesProps = {
  images,
  prefectures,
  tags,
}
