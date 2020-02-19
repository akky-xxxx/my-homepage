/**
 * import node_modules
 */
import App from "next/app"
import { NextPageContext } from "next"
import Router from "next/router"
import React, { Fragment } from "react"
import { createGlobalStyle } from "styled-components"
import { Provider } from "react-redux"
import NProgress from "nprogress"

/**
 * import components
 */
import Layout from "../components/layouts/layout"

/**
 * import others
 */
import WithRedux from "../store/with-redux-store"
import reset from "../assets/styles/reset"
import vendors from "../assets/styles/vendors"

/**
 * main
 */
Router.events.on("routeChangeStart", () => NProgress.start())
Router.events.on("routeChangeComplete", () => NProgress.done())
Router.events.on("routeChangeError", () => NProgress.done())

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${vendors}
`

class MyApp extends App<NextPageContext> {
  render() {
    const { Component, reduxStore, router } = this.props
    const { route } = router

    return (
      <Fragment>
        <Provider store={reduxStore}>
          <GlobalStyle />
          <Layout route={route}>
            <Component />
          </Layout>
        </Provider>
      </Fragment>
    )
  }
}

export default WithRedux(MyApp)
