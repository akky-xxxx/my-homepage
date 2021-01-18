// import node_modules
import { createNullArray } from "shared-items"

// import others
import { ConditionAreaProps } from "./types"

// main
const prefectures: ConditionAreaProps["prefectures"] = [
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

const tags: ConditionAreaProps["tags"] = [
  ...createNullArray(10).map((_, index) => {
    const id = String(index).padStart(2, "0")
    return {
      value: `tagId${id}`,
      label: `label${id}`,
    }
  }),
]

export const conditionAreaProps: Omit<
  ConditionAreaProps,
  | "handleSelectPhotographAtStart"
  | "handleSelectPhotographAtEnd"
  | "handleSelectCreatedAtStart"
  | "handleSelectCreatedAtEnd"
  | "handleSelectUpdatedAtStart"
  | "handleSelectUpdatedAtEnd"
  | "handleSelectPrefecture"
  | "handleSelectTags"
  | "handleResetConditions"
  | "handleSelectReleaseStatus"
> = {
  prefectures,
  selectedReleaseStatus: null,
  selectedPrefecture: null,
  tags,
  selectedTags: [],
  photographAtStart: null,
  photographAtEnd: null,
  createdAtStart: null,
  createdAtEnd: null,
  updatedAtStart: null,
  updatedAtEnd: null,
  accentDatesOfPhotographAt: [],
  accentDatesOfCreatedAt: [],
  accentDatesOfUpdatedAt: [],
}
