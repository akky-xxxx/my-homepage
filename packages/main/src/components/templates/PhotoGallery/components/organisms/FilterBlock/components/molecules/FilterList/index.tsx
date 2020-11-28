// import node_modules
import React, { FC } from "react"
import styled from "styled-components"

// import components
import {
  FilterUl,
  FilterUlProps,
} from "@@/components/templates/PhotoGallery/components/organisms/FilterBlock/components/atoms/FilterUl"
import { FilterTag } from "@@/components/templates/PhotoGallery/components/organisms/FilterBlock/components/atoms/FilterTag"

// import others
import { EmptyFunction } from "@@/shared/types/common"

// main
type TagData = {
  id: string
  label: string
}
type FilterListProps = FilterUlProps & {
  tags: TagData[]
  handleClickTag: EmptyFunction
}

export const FilterList: FC<FilterListProps> = (props) => {
  const { isOpen, tags, handleClickTag } = props

  return (
    <StyledFilterUl isOpen={isOpen}>
      {tags.map((tagData) => {
        const { id, label } = tagData
        return (
          <StyledFilterTag
            key={id}
            id={id}
            label={label}
            handleClickTag={handleClickTag}
          />
        )
      })}
    </StyledFilterUl>
  )
}

const MARGIN = 8

const StyledFilterUl = styled(FilterUl)`
  margin-left: ${MARGIN * -1}px;
`

const StyledFilterTag = styled(FilterTag)`
  margin-left: ${MARGIN}px;
`
