// import node_modules
import React, { FC, useEffect, useState, Fragment } from "react"
import { createPortal } from "react-dom"

// main
export const RootPortal: FC = (props) => {
  const { children } = props
  const [root, setRoot] = useState<HTMLElement | null>(null)

  useEffect(() => {
    if (document.body) {
      setRoot(document.body)
    }
  }, [])

  if (!root) return null

  return createPortal(<Fragment>{children}</Fragment>, root)
}
