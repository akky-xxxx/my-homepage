/**
 * import node_modules
 */
import React, { FC, Fragment, useState } from "react"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import styled from "styled-components"

/**
 * import components
 */
import HeaderBar from "../headerBar"
import MenuDrawer from "../menuDrawer"

/**
 * main
 */
interface LayoutProps {
  route: string
}
const duration = 300
const transitionClassName = "content"
const Layout: FC<LayoutProps> = props => {
  const { children, route } = props
  // TODO: redux に差し替える
  const [isMenuOpen, setMenuOpen] = useState(false)

  const handleOpenMenu = () => setMenuOpen(true)
  const handleCloseMenu = () => setMenuOpen(false)

  return (
    <Fragment>
      <HeaderBar handleOpenMenu={handleOpenMenu} />
      <MenuDrawer isMenuOpen={isMenuOpen} handleCloseMenu={handleCloseMenu} />

      <main>
        <StyledTransitionGroup>
          <CSSTransition key={route} timeout={duration} classNames={transitionClassName}>
            {children}
          </CSSTransition>
        </StyledTransitionGroup>
      </main>
    </Fragment>
  )
}

const StyledTransitionGroup = styled(TransitionGroup)`
  display: flex;
  flex-wrap: nowrap;
  /* overflow-x: hidden; */
  position: relative;
  width: 100vw;

  & .${transitionClassName}-enter {
    opacity: 0;
  }
  & .${transitionClassName}-enter-active {
    opacity: 1;
    transition: opacity ${duration}ms;
  }
  & .${transitionClassName}-exit {
    opacity: 1;
  }
  & .${transitionClassName}-exit-active {
    opacity: 0;
    left: -100vw;
    transition: opacity ${duration}ms;
  }
`

export default Layout
