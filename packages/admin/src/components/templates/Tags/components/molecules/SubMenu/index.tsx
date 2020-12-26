// import node_modules
import React, { FC } from "react"
import styled from "styled-components"
import { EmptyFunction } from "shared-items"
import { Link, Color, Margin } from "shared-items/dist/client"

// main
const { DIVIDER } = Color
const { MARGIN20 } = Margin

export type SubMenuProps = {
  handleShowAdditionModal: EmptyFunction
  handleShowChangingModal: EmptyFunction
  handleShowDeletingModal: EmptyFunction
}

export const SubMenu: FC<SubMenuProps> = (props) => {
  const {
    handleShowAdditionModal,
    handleShowChangingModal,
    handleShowDeletingModal,
  } = props
  /* eslint-disable no-console, jsx-a11y/anchor-is-valid */
  return (
    <StyledUl>
      <StyledLi>
        <Link handleClick={handleShowAdditionModal}>追加</Link>
      </StyledLi>

      <StyledLi>
        <Link handleClick={handleShowChangingModal}>変更</Link>
      </StyledLi>

      <StyledLi>
        <Link handleClick={() => console.log("click")}>設定</Link>
      </StyledLi>

      <StyledLi>
        <Link handleClick={handleShowDeletingModal}>削除</Link>
      </StyledLi>
    </StyledUl>
  )
  /* eslint-enable no-console, jsx-a11y/anchor-is-valid */
}

const StyledUl = styled.ul`
  align-items: center;
  border-left: 1px solid ${DIVIDER};
  display: flex;
  margin-left: ${MARGIN20}px;
`

const StyledLi = styled.li`
  margin-left: ${MARGIN20}px;
`
