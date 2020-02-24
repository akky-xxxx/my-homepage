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
import HorizonCardWrapper from "./components/horizonCardWrapper"
import MonthlyCard from "./components/monthlyCard"
import PrefCard from "./components/prefCard"
import TagCard from "./components/tagCard"

/**
 * main
 */
const Home: NextPage = () => {
  const startMonth = 72
  const endMonth = 1
  const isIgnoreBlank = true

  return (
    <ContentWrapper>
      <CustomHead title="Home" />
      <PageAbove title="Home" />
      <MainContentWrapper>
        <HorizonCardWrapper>
          <MonthlyCard startMonth={startMonth} endMonth={endMonth} isIgnoreBlank={isIgnoreBlank} />
          <PrefCard startMonth={startMonth} endMonth={endMonth} />
        </HorizonCardWrapper>

        <TagCard startMonth={startMonth} endMonth={endMonth} />
      </MainContentWrapper>
    </ContentWrapper>
  )
}

export default Home
