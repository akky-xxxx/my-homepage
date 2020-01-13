/**
 * import node_modules
 */
import { Action } from "redux"

/**
 * import others
 */
import PREF_MAP from "../const/prefMap"

/**
 * main
 */
export type PrefCode = keyof typeof PREF_MAP

export type PageId = "home" | "photoGallery"

export interface MenuItem {
  id: PageId
  href: string
  linkLabel: string
}

export type HandleAction = () => Action
