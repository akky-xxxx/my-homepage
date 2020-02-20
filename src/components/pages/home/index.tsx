/**
 * import node_modules
 */
import React from "react"
import { NextPage } from "next"

/**
 * import components
 */
import ContentWrapper from "../../molecules/contentWrapper"
import CustomHead from "../../molecules/customHead"
import PageAbove from "../../molecules/pageAbove"
import MainContentWrapper from "../../molecules/mainContentWrapper"

/**
 * main
 */
const Home: NextPage = () => {
  return (
    <ContentWrapper>
      <CustomHead title="Home" />
      <PageAbove title="Home" />
      <MainContentWrapper />
    </ContentWrapper>
  )
}

export default Home
