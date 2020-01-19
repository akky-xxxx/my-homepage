/**
 * import node_modules
 */
import React, { FC } from "react"
import NextHead from "next/head"

/**
 * main
 */
interface CustomHeadProps {
  title: string
}

const CustomHead: FC<CustomHeadProps> = props => {
  const { title } = props

  return (
    <NextHead>
      <title>Portfolio - {title}</title>
      <meta name="description" content={`${title.toLowerCase()} page`} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0" key="viewport" />
    </NextHead>
  )
}

export default CustomHead
