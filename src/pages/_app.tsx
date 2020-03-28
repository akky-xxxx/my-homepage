/**
 * import node_modules
 */
import { AppProps } from "next/app"
import Router from "next/router"
import React from "react"
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
import reset from "../assets/styles/reset"
import vendors from "../assets/styles/vendors"
import store from "../store/store"

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

const MyApp = (props: AppProps) => {
  const { Component, router } = props
  const { route } = router

  return (
    <Provider store={store}>
      <GlobalStyle />
      <Layout route={route}>
        <Component />
      </Layout>
    </Provider>
  )
}

export default MyApp
