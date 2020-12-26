// import node_modules
import React, { FC } from "react"
import styled from "styled-components"
import { Link, Color, Margin } from "shared-items/dist/client"

// main
const { DIVIDER } = Color
const { MARGIN20 } = Margin

type SubMenuProps = {
  handleShowAddModal: () => void
}
export const SubMenu: FC<SubMenuProps> = (props) => {
  const { handleShowAddModal } = props
  /* eslint-disable no-console, jsx-a11y/anchor-is-valid */
  return (
    <StyledUl>
      <StyledLi>
        <Link handleClick={handleShowAddModal}>追加</Link>
      </StyledLi>

      <StyledLi>
        <Link handleClick={() => console.log("click")}>変更</Link>
      </StyledLi>

      <StyledLi>
        <Link handleClick={() => console.log("click")}>設定</Link>
      </StyledLi>

      <StyledLi>
        <Link handleClick={() => console.log("click")}>削除</Link>
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
