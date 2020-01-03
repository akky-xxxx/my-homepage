/* eslint-disable no-underscore-dangle */
/**
 * import node_modules
 */
import React, { Component } from "react"
import cloneDeep from "lodash/cloneDeep"
import { Store } from "redux"
import { Router } from "next/router"

/**
 * import others
 */
import { initializeStore, StoreState } from "./store"

/**
 * main
 */
interface Props {
  Component: Component
  router: Router
  pageProps: unknown
}

const isServer = typeof window === "undefined"

function getOrCreateStore(initialState?: StoreState) {
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
    return initializeStore(initialState)
  }

  if (!window.__NEXT_REDUX_STORE__) {
    window.__NEXT_REDUX_STORE__ = initializeStore(initialState)
  }
  return window.__NEXT_REDUX_STORE__
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default (App: any) => {
  return class AppWithRedux extends Component<Props> {
    reduxStore: Store

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static async getInitialProps(appContext: any) {
      const reduxStore = getOrCreateStore()
      const newAppContext = cloneDeep(appContext)

      newAppContext.ctx.reduxStore = reduxStore

      let appProps = {}
      if (typeof App.getInitialProps === "function") {
        appProps = await App.getInitialProps(appContext)
      }

      return {
        ...appProps,
        initialReduxState: reduxStore.getState(),
      }
    }

    constructor(props: Props) {
      super(props)
      this.reduxStore = getOrCreateStore()
    }

    render() {
      const { Component: thisComponent, router, pageProps } = this.props

      return <App Component={thisComponent} router={router} pageProps={pageProps} reduxStore={this.reduxStore} />
    }
  }
}
