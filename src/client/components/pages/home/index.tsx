/**
 * import node_modules
 */
import React from "react"
import { NextPage } from "next"
import styled from "styled-components"

/**
 * import components
 */
import CustomHead from "../../molecules/customHead"
import PageAbove from "../../molecules/pageAbove"
import MainContentWrapper from "../../molecules/mainContentWrapper"

/**
 * main
 */
const Home: NextPage = () => {
  return (
    <Wrapper>
      <CustomHead title="Home" />
      <PageAbove title="Home" />
      <MainContentWrapper />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  flex-grow: 1;
  flex-shrink: 0;
  position: relative;
  width: 100vw;
`

export default Home
