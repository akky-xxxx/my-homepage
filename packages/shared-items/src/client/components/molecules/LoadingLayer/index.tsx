// import node_modules
import React, { FC } from "react"
import styled from "styled-components"

// import components
import { Background, BackgroundProps, Spinner } from "../../atoms"

// main
export type LoadingLayerProps = BackgroundProps
export const LoadingLayer: FC<LoadingLayerProps> = (props) => {
  const { isShow } = props

  return (
    <Background isShow={isShow}>
      <IconWrapper>
        <Spinner />
      </IconWrapper>
    </Background>
  )
}

const IconWrapper = styled.div`
  display: grid;
  height: 100%;
  place-items: center;
  width: 100%;
`
