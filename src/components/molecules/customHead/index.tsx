/**
 * import node_modules
 */
import React, { FC, memo } from "react"
import NextHead from "next/head"

/**
 * import others
 */
import { IsNoReRender } from "../../../shared/types/common"

/**
 * main
 */
interface CustomHeadProps {
  title: string
}

const CustomHead: FC<CustomHeadProps> = (props) => {
  const { title } = props

  return (
    <NextHead>
      <title>Homepage - {title}</title>
      <meta name="description" content={`${title.toLowerCase()} page`} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0" key="viewport" />
    </NextHead>
  )
}

const isNoReRender: IsNoReRender<CustomHeadProps> = (beforeProps, afterProps) => beforeProps.title === afterProps.title

export default memo(CustomHead, isNoReRender)
