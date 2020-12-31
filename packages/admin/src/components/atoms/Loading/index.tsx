// import node_modules
import React, { memo, FC } from "react"
import { RootPortal, LoadingLayer } from "shared-items/dist/client"

// main
type LoadingProps = {
  isShow: boolean
}
export const Loading: FC<LoadingProps> = memo((props) => {
  const { isShow } = props

  return (
    <RootPortal>
      <LoadingLayer isShow={isShow} />
    </RootPortal>
  )
})
