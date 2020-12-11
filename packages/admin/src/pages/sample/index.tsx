// import
import React from "react"

// import components
import { Sample } from "@@/components/templates/Sample"

// import others
import { useSampleHooks } from "@@/pageHooks/useSampleHooks"

// main
const HomeHoc = () => {
  const props = useSampleHooks()
  return <Sample {...props} />
}

export default HomeHoc
