/**
 * import node_modules
 */
import React, { FC } from "react"
import { ListItem, Link as MuiLink } from "@material-ui/core"
import NextLink from "next/link"
import styled from "styled-components"

/**
 * main
 */
interface MenuItemProps {
  handleCloseMenu: () => void
  href: string
  linkLabel: string
}

const MenuItem: FC<MenuItemProps> = (props) => {
  const { handleCloseMenu, href, linkLabel } = props

  return (
    <ListItem button>
      <NextLink href={href} passHref>
        <StyledMuiLink underline="none" onClick={handleCloseMenu} onKeyDown={handleCloseMenu}>
          {linkLabel}
        </StyledMuiLink>
      </NextLink>
    </ListItem>
  )
}

const StyledMuiLink = styled(MuiLink)`
  width: 100%;
`

export default MenuItem
