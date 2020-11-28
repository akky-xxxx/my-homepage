// import node_modules
import React, { Fragment } from "react"
import { addDecorator } from "@storybook/react"
import Router from "next/router"
import { ApolloProvider } from "@apollo/client"

// import others
import { apolloClient } from "../src/modules/apolloClient"
import { GlobalStyle } from "../src/styles/GlobalStyle"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

Router.useRouter = () => ({
  route: "/",
  pathname: "/",
})

Router.router = {
  push: () => {},
  prefetch: () => new Promise(() => {}),
}

addDecorator((storyFn) => (
  <Fragment>
    <GlobalStyle />
    <ApolloProvider client={apolloClient}>{storyFn()}</ApolloProvider>
  </Fragment>
))
