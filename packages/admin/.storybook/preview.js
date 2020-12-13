// import node_modules
import React from "react"
import { addDecorator } from "@storybook/react"
import { RouterContext } from "next/dist/next-server/lib/router-context"
import { GlobalStyle } from "shared-items/dist/client"

// main
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

const { Provider } = RouterContext
const provider = {
  push: () => Promise.resolve(),
  replace: () => Promise.resolve(),
  prefetch: () => Promise.resolve(),
}

addDecorator((storyFn) => (
  <Provider value={provider}>
    <GlobalStyle />
    {storyFn()}
  </Provider>
))
