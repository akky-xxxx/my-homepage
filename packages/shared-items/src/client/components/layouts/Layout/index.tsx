// import node_modules
import React, { FC } from "react"
import styled from "styled-components"

// import component
import { Background } from "../Background"
import { Header } from "../Header"
import { MenuBackground } from "../MenuBackground"
import { Menu } from "../Menu"

// import others
import { LayoutConst } from "../const"
import { LayoutProps } from "./types"
import { getOverflow } from "./modules/getOverflow"
import { Color } from "../../../const"

// main
const { HEADER_HEIGHT } = LayoutConst
const { BACKGROUND } = Color

export const Layout: FC<LayoutProps> = (props) => {
  const {
    isShow,
    title,
    width,
    menuList,
    handleOpenMenu,
    handleCloseMenu,
    children,
  } = props

  const handleClickMenuButton = () => {
    if (isShow) {
      handleOpenMenu()
      return
    }
    handleCloseMenu()
  }

  return (
    <div>
      <Header
        isShow={isShow}
        title={title}
        handleClickMenuButton={handleClickMenuButton}
      />
      <MenuBackground isShow={isShow} width={width}>
        <Menu menuList={menuList} />
      </MenuBackground>
      <Background isShow={isShow} onClick={handleCloseMenu} />

      <StyledMain isShow={isShow}>{children}</StyledMain>
    </div>
  )
}

const StyledMain = styled.main<Pick<LayoutProps, "isShow">>`
  background-color: ${BACKGROUND};
  height: 100vh;
  overflow: ${getOverflow};
  padding-top: ${HEADER_HEIGHT}px;
`
