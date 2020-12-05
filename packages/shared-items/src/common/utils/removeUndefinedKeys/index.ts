// import
import { AnyObject } from "../../types"

// main
export const removeUndefinedKeys = (obj: AnyObject) =>
  Object.fromEntries(
    Object.entries(obj).filter(([, value]) => value !== undefined),
  )
