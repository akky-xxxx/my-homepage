// import node_modules
import React, { FC, useCallback } from "react"
import { Tag, TagProps } from "shared-items/dist/client"

// main
type HandleClickTag = (id: string) => void
export type FilterTagProps = Pick<TagProps, "isActive"> & {
  id: string
  label: string
  handleClickTag: HandleClickTag
  className?: string
}

export const FilterTag: FC<FilterTagProps> = (props) => {
  const { id, label, handleClickTag, isActive, className } = props
  const handleClick = useCallback(() => handleClickTag(id), [id])

  return (
    <Tag
      colorType="primary"
      onClick={handleClick}
      isActive={isActive}
      className={className}
    >
      {label}
    </Tag>
  )
}
