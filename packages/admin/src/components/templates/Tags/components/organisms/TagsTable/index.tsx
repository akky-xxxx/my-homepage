// import node_modules
import React, { FC } from "react"

// import components
import { TagsTableHeader } from "@@/components/templates/Tags/components/molecules/TagsTableHeader"
import { StyledTable } from "../../atoms/StyledTable"
import { TagsTableRecord } from "../../molecules/TagsTableRecord"

// import others
import { TagsTableProps } from "./types"

// main
export const TagsTable: FC<TagsTableProps> = (props) => {
  const {
    isSelectAll,
    tags,
    handleClickSelectAll,
    handleClickRelease: _handleClickRelease,
    handleClickSelect: _handleClickSelect,
  } = props

  return (
    <StyledTable>
      <TagsTableHeader
        isSelectAll={isSelectAll}
        handleClickSelectAll={handleClickSelectAll}
      />

      <tbody>
        {tags.map((tag) => {
          const { tagId } = tag
          const handleClickRelease = () => _handleClickRelease(tagId)
          const handleClickSelect = () => _handleClickSelect(tagId)

          return (
            <TagsTableRecord
              key={tagId}
              {...tag}
              handleClickRelease={handleClickRelease}
              handleClickSelect={handleClickSelect}
            />
          )
        })}
      </tbody>
    </StyledTable>
  )
}
