// import node_modules
import { Layout as SharedLayout } from "shared-items/dist/client"
import React, { FC } from "react"

// import others
import { useLayout } from "@@/components/layouts/Layout/modules/useLayout"

// main
export const Layout: FC = (props) => {
  const { children } = props
  const useProps = useLayout()

  return <SharedLayout {...useProps}>{children}</SharedLayout>
}
