// import node_modules
import React, { FC, memo } from "react"
import { Checkbox } from "shared-items/dist/client"

// import components
import { StyledTh } from "../../atoms/StyledTable"

// import others
import { TagsTableHeaderProps } from "./types"

// main
export const TagsTableHeader: FC<TagsTableHeaderProps> = memo((props) => {
  const { isSelectAll, handleClickSelectAll } = props

  return (
    <thead>
      <tr>
        <StyledTh>
          <Checkbox
            isChecked={isSelectAll}
            handleChange={handleClickSelectAll}
          />
        </StyledTh>
        <StyledTh>タグ名</StyledTh>
        <StyledTh />
         <StyledTh>設定数</StyledTh>
        <StyledTh>追加日</StyledTh>
        <StyledTh>変更日</StyledTh>
      </tr>
    </thead>
  )
})
