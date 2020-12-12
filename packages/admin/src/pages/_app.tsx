// import node_modules
import { AppProps } from "next/app"
import Head from "next/head"
import React, { FC } from "react"
import { GlobalStyle } from "shared-items/dist/client"
import { Provider } from "react-redux"

// import others
import { store } from "@@/store"

// main
const MyApp: FC<AppProps> = (props) => {
  const { Component, pageProps } = props

  return (
    <Provider store={store}>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0"
        />
        <title>fastify site with next.js</title>
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
