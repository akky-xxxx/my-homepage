// import node_modules
import React, { FC } from "react"
import NextLink from "next/link"
import styled, { css } from "styled-components"

// import others
import { EmptyFunction } from "../../../../common"
import { Color, Font, Transition } from "../../../const"

// main
const { PRIMARY } = Color
const {
  SIZE: { MIDDLE },
} = Font
const { DURATION, TIMING_FUNCTION } = Transition

export type LinkProps = {
  isExternal?: boolean
  href?: string
  handleClick?: EmptyFunction
}

export const Link: FC<LinkProps> = (props) => {
  const { isExternal, href, handleClick, children } = props
  if (isExternal && typeof href === "string") {
    return (
      <LinkComponent href={href} target="_blank" rel="noreferrer noopener">
        {children}
      </LinkComponent>
    )
  }

  if (href === "internal") {
    return (
      <NextLink href={href} passHref>
        <LinkComponent>{children}</LinkComponent>
      </NextLink>
    )
  }

  return (
    <ClickableText type="button" onClick={handleClick}>
      {children}
    </ClickableText>
  )
}

const linkStyle = css`
  color: ${PRIMARY};
  display: inline-block;
  font-size: ${MIDDLE};
  opacity: 1;
  position: relative;
  text-decoration: none;
  transition: opacity ${DURATION} ${TIMING_FUNCTION};

  &::after {
    border-bottom: 1px solid ${PRIMARY};
    bottom: 1px;
    content: "";
    display: block;
    position: absolute;
    transform: scaleX(0);
    transform-origin: center;
    transition: transform ${DURATION} ${TIMING_FUNCTION};
    width: 100%;
  }

  &:hover {
    opacity: 0.7;

    &::after {
      transform: scaleY(1);
    }
  }
`

const LinkComponent = styled.a`
  ${linkStyle};
`

const ClickableText = styled.button`
  appearance: none;
  background-color: transparent;
  border: none;
  cursor: pointer;
  ${linkStyle};
  font-family: "Hiragino Kaku Gothic ProN", sans-serif;
  font-weight: normal;
  padding: 0;
`
