// import node_modules
import React, { FC } from "react"
import { Checkbox, CheckMark } from "shared-items/dist/client"
import styled from "styled-components"

// import components
import { StyledTr, StyledTd } from "../../atoms/StyledTable"

// import others
import { TagsTableRecordProps } from "./types"

// main
export const TagsTableRecord: FC<TagsTableRecordProps> = (props) => {
  const {
    isSelected,
    tagName,
    isReleased,
    settingCount,
    createdAt,
    updatedAt,
  } = props

  return (
    <StyledTr>
      <StyledTd>
        <Checkbox
          isChecked={isSelected}
          // TODO: 仮実装
          // eslint-disable-next-line no-console
          handleChange={() => console.log("handleChange")}
        />
      </StyledTd>
      <StyledTd>{tagName}</StyledTd>
      <StyledTd>
        <IconWrapper>
          <CheckMark isChecked={isReleased} />
        </IconWrapper>
      </StyledTd>
      <StyledTd>{settingCount}</StyledTd>
      <StyledTd>{createdAt}</StyledTd>
      <StyledTd>{updatedAt}</StyledTd>
    </StyledTr>
  )
}

const IconWrapper = styled.div`
  align-items: center;
  display: flex;
`
