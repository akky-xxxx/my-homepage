/**
 * import node_modules
 */
import React from "react"
import { NextPage } from "next"

/**
 * import components
 */
import CustomHead from "../../molecules/customHead"
import PageAbove from "../../molecules/pageAbove"
import MainContent from "../../molecules/mainContent"

/**
 * main
 */
const Home: NextPage = () => {
  return (
    <div>
      <CustomHead title="Home" />
      <PageAbove title="Home" />
      <MainContent />
    </div>
  )
}

export default Home
