/**
 * import node_modules
 */
import App from "next/app"
import React, { Fragment } from "react"
import { createGlobalStyle } from "styled-components"

/**
 * import others
 */
import reset from "../assets/styles/reset"

/**
 * main
 */
const GlobalStyle = createGlobalStyle`
  ${reset}
`

class MyApp extends App {
  render() {
    const { Component } = this.props

    return (
      <Fragment>
        <GlobalStyle />
        <Component />
      </Fragment>
    )
  }
}

export default MyApp
