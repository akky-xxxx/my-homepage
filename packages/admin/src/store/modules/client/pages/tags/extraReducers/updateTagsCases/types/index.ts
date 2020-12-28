// import node_modules
import { EmptyObject } from "shared-items"

// main
export type ActionPayload = EmptyObject

type Tag = {
  tagId: string
  isRelease?: boolean
  tagName?: string
}

export type ActionArgs = {
  tags: Tag[]
}
