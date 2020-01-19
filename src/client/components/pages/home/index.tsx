/**
 * import node_modules
 */
import React from "react"
import { NextPage } from "next"

/**
 * import components
 */
import CustomHead from "../../molecules/customHead"

/**
 * main
 */
const Home: NextPage = () => {
  return (
    <div>
      <CustomHead title="Home" />
      Home
    </div>
  )
}

export default Home
