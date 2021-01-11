// import node_modules
import { SelectOption } from "@@/shared/types/lib"
import { ValueType } from "react-select"
import { StringDate } from "shared-items"

// main
export type GalleryImageProps = {
  imageId: string
  imagePath: string
  prefectures: SelectOption[]
  selectedPrefecture: SelectOption | null
  tags: SelectOption[]
  selectedTags: SelectOption[]
  photographAt: StringDate | null
  createdAt: StringDate | null
  updatedAt: StringDate | null
  handleClickPrimary: (imageId: string) => void
  handleClickRemove: (imageId: string) => void
  handleSelectPhotographAt: (date: Date | null) => void
  handleSelectPrefecture: (prefecture: ValueType<SelectOption, false>) => void
  handleSelectTags: (tags: ValueType<SelectOption, true>) => void
}
