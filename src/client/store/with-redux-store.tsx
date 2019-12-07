/* eslint-disable no-underscore-dangle */
/**
 * import node_modules
 */
import React from "react"
import cloneDeep from "lodash/cloneDeep"

/**
 * import others
 */
import { initializeStore, StoreState } from "./store"

/**
 * main
 */
declare global {
  interface Window {
    __NEXT_REDUX_STORE__: null | Function
  }
}

const isServer = typeof window === "undefined"

function getOrCreateStore(initialState?: StoreState) {
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
    return initializeStore(initialState)
  }

  if (!window.__NEXT_REDUX_STORE__) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    window.__NEXT_REDUX_STORE__ = initializeStore(initialState)
  }
  return window.__NEXT_REDUX_STORE__
}

export default (App: any) => {
  return class AppWithRedux extends React.Component {
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
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        initialReduxState: reduxStore.getState(),
      }
    }

    constructor(props: any) {
      super(props)
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      this.reduxStore = getOrCreateStore(props.initialReduxState)
    }

    render() {
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      // eslint-disable-next-line react/jsx-props-no-spreading
      return <App {...this.props} reduxStore={this.reduxStore} />
    }
  }
}
