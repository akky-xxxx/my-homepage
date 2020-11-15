// import node_modules
import App, { AppInitialProps } from "next/app"
import Head from "next/head"
import React from "react"
import { ApolloProvider } from "@apollo/client"

// import other
import { apolloClient } from "@modules/apolloClient"

// main
class MyApp extends App<AppInitialProps> {
  render() {
    const { Component, pageProps } = this.props

    return (
      <ApolloProvider client={apolloClient}>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, minimum-scale=1.0"
          />
          <title>fastify site with next.js</title>
        </Head>
        <Component {...pageProps} />
      </ApolloProvider>
    )
  }
}

export default MyApp
