// import node_modules
import React, { FC, memo, useCallback } from "react"
import {
  Checkbox,
  CheckMark,
  DateFns,
  getSeparatedNumbers,
} from "shared-items/dist/client"
import styled from "styled-components"
import { format } from "date-fns"

// import components
import { StyledTr, StyledTd } from "../../atoms/StyledTable"

// import others
import { TagsTableRecordProps } from "./types"

// main
const {
  FORMAT: { DATETIME_SLASH },
} = DateFns

export const TagsTableRecord: FC<TagsTableRecordProps> = memo((props) => {
  const {
    isSelect,
    tagId,
    tagName,
    isRelease,
    settingCount,
    createdAt,
    updatedAt,
    handleClickSelect: _handleClickSelect,
    handleClickRelease: _handleClickRelease,
  } = props
  const handleClickSelect = useCallback(() => _handleClickSelect(tagId), [
    tagId,
  ])
  const handleClickRelease = useCallback(() => _handleClickRelease(tagId), [
    tagId,
  ])

  return (
    <StyledTr>
      <StyledTd>
        <Checkbox isChecked={isSelect} handleChange={handleClickSelect} />
      </StyledTd>
      <StyledTd>{tagName}</StyledTd>
      <StyledTd>
        <IconWrapper>
          <CheckMark isChecked={isRelease} onClick={handleClickRelease} />
        </IconWrapper>
      </StyledTd>
      <StyledTd>{getSeparatedNumbers(settingCount)}</StyledTd>
      <StyledTd>{format(new Date(createdAt), DATETIME_SLASH)}</StyledTd>
      <StyledTd>{format(new Date(updatedAt), DATETIME_SLASH)}</StyledTd>
    </StyledTr>
  )
})

const IconWrapper = styled.div`
  align-items: center;
  display: flex;
`
