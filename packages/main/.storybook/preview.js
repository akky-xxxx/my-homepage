// import node_modules
import React from "react"
import { addDecorator } from "@storybook/react"
import Router from "next/router"
import { ApolloProvider } from "@apollo/client"

// import others
import { apolloClient } from "../src/modules/apolloClient"

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
  <ApolloProvider client={apolloClient}>{storyFn()}</ApolloProvider>
))
