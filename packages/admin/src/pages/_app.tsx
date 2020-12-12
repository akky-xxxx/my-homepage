// import node_modules
import { AppProps } from "next/app"
import Head from "next/head"
import React, { FC } from "react"
import { GlobalStyle } from "shared-items/dist/client"
import { Provider, useStore } from "react-redux"

// import components
import { Layout } from "@@/components/layouts/Layout"

// import others
import { wrapper } from "@@/store"

// main
const MyApp: FC<AppProps> = (props) => {
  const { Component, pageProps } = props
  const store = useStore()
  const state = store.getState()
  const appProps = {
    ...pageProps,
    ...state,
  }

  return (
    <Provider store={store}>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0"
        />
        <title>fastify site with next.js</title>
      </Head>
      <Layout>
        <GlobalStyle />
        <Component {...appProps} />
      </Layout>
    </Provider>
  )
}

export default wrapper.withRedux(MyApp)
