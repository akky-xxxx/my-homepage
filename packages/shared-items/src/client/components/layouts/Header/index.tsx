// import node_modules
import React, { FC } from "react"
import styled from "styled-components"

// import components
import { MenuButton } from "../MenuButton"

// import others
import { LayoutConst } from "../const"
import { Color, Margin } from "../../../const"
import { EmptyFunction } from "../../../../common"

// main
const { HEADER_HEIGHT } = LayoutConst
const { PRIMARY, COLOR_FFFFFF } = Color
const { MARGIN10 } = Margin

export type HeaderProps = {
  isShow: boolean
  title: string
  handleClickMenuButton: EmptyFunction
}
export const Header: FC<HeaderProps> = (props) => {
  const { isShow, title, handleClickMenuButton } = props

  return (
    <HeaderBackGround>
      <MenuButton isOpen={isShow} onClick={handleClickMenuButton} />
      <StyledH1>{title}</StyledH1>
    </HeaderBackGround>
  )
}

const HeaderBackGround = styled.header`
  align-items: center;
  background-color: ${PRIMARY};
  color: ${COLOR_FFFFFF};
  display: flex;
  height: ${HEADER_HEIGHT}px;
  left: 0;
  padding: ${MARGIN10}px;
  position: fixed;
  right: 0;
  top: 0;
`

const StyledH1 = styled.h1`
  margin-left: ${MARGIN10}px;
`
