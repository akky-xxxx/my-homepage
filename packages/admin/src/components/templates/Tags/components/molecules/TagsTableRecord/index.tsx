// import node_modules
import React, { FC, memo } from "react"
import { Checkbox, CheckMark } from "shared-items/dist/client"
import styled from "styled-components"
import { getSeparatedNumbers } from "shared-items/dist/client"

// import components
import { StyledTr, StyledTd } from "../../atoms/StyledTable"

// import others
import { TagsTableRecordProps } from "./types"

// main
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
      <StyledTd>{createdAt}</StyledTd>
      <StyledTd>{updatedAt}</StyledTd>
    </StyledTr>
  )
})

const IconWrapper = styled.div`
  align-items: center;
  display: flex;
`
