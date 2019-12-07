/**
 * import node_modules
 */
import { Store } from "redux"
import { NextPageContext } from "next"

/**
 * import others
 */
import { State } from "../store/modules"

/**
 * main
 */
declare module "next" {
  interface NextPageContext {
    reduxStore: Store<State>
  }
}
