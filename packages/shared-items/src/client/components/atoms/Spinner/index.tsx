// import node_modules
import React from "react"
import styled from "styled-components"

// import others
import { Color, Transition } from "../../../const"
import { ring1, ring2, ring3 } from "./modules/keyframes"

// main
const { COLOR_FFFFFF } = Color

export const Spinner = () => (
  <Wrapper>
    <SpinnerRing />
    <SpinnerRing />
    <SpinnerRing />
    <Circle />
  </Wrapper>
)

const SIZE = 60
const Wrapper = styled.div`
  display: inline-block;
  height: ${SIZE}px;
  position: relative;
  width: ${SIZE}px;
`

const ALL_DURATION = 2.4
const SpinnerRing = styled.div`
  animation-duration: ${ALL_DURATION}s;
  animation-fill-mode: both;
  animation-iteration-count: infinite;
  animation-timing-function: ${Transition.TIMING_FUNCTION};
  border: 4px solid ${COLOR_FFFFFF};
  border-radius: 50%;
  bottom: 0;
  height: 25px;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  width: ${SIZE}px;
  z-index: 100;

  &:nth-child(1) {
    animation-name: ${ring1};
  }

  &:nth-child(2) {
    animation-delay: ${ALL_DURATION / 3}s;
    animation-name: ${ring2};
  }

  &:nth-child(3) {
    animation-delay: ${(ALL_DURATION / 3) * 2}s;
    animation-name: ${ring3};
  }
`

const CIRCLE_DIAMETER = 10
const Circle = styled.div`
  background-color: ${COLOR_FFFFFF};
  border-radius: 50%;
  bottom: 0;
  height: ${CIRCLE_DIAMETER}px;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  width: ${CIRCLE_DIAMETER}px;
`
