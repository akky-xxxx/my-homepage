// import node_modules
import { keyframes } from "styled-components"

// main
export const ring1 = keyframes`
  0% {
    transform: rotate(0deg);
  }
  33% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(180deg);
  }
`

export const ring2 = keyframes`
  0% {
    transform: rotate(60deg);
  }
  33% {
    transform: rotate(240deg);
  }
  100% {
    transform: rotate(240deg);
  }
`

export const ring3 = keyframes`
  0% {
    transform: rotate(120deg);
  }
  33% {
    transform: rotate(300deg);
  }
  100% {
    transform: rotate(300deg);
  }
`
