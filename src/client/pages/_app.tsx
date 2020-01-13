/**
 * import node_modules
 */
import App from "next/app"
import { NextPageContext } from "next"
import React, { Fragment } from "react"
import { createGlobalStyle } from "styled-components"
import { Provider } from "react-redux"

/**
 * import components
 */
import Layout from "../components/layouts/layout"

/**
 * import others
 */
import WithRedux from "../store/with-redux-store"
import reset from "../assets/styles/reset"

/**
 * main
 */
const GlobalStyle = createGlobalStyle`
  ${reset}
`

class MyApp extends App<NextPageContext> {
  render() {
    const { Component, reduxStore } = this.props

    return (
      <Fragment>
        <Provider store={reduxStore}>
          <Layout>
            <GlobalStyle />
            <Component />
          </Layout>
        </Provider>
      </Fragment>
    )
  }
}

export default WithRedux(MyApp)
