// import node_modules
import React, { FC, memo } from "react"
import { Checkbox, CheckMark } from "shared-items/dist/client"
import styled from "styled-components"
import { format } from "date-fns"
import { getSeparatedNumbers, DateFns } from "shared-items/dist/client"

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
    isSelected,
    tagName,
    isReleased,
    settingCount,
    createdAt,
    updatedAt,
    handleClickSelect,
    handleClickRelease,
  } = props

  return (
    <StyledTr>
      <StyledTd>
        <Checkbox isChecked={isSelected} handleChange={handleClickSelect} />
      </StyledTd>
      <StyledTd>{tagName}</StyledTd>
      <StyledTd>
        <IconWrapper>
          <CheckMark isChecked={isReleased} onClick={handleClickRelease} />
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
