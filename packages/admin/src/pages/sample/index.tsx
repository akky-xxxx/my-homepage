// import
import React from "react"

// import components
import { Sample } from "@@/components/templates/Sample"

// import others
import { useSampleHooks } from "@@/pageHooks/useSampleHooks"
import { wrapper, actions } from "@@/store"

// main
const {
  sample: { changeText },
} = actions
const HomeHoc = () => {
  const props = useSampleHooks()
  return <Sample {...props} />
}

export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    const {
      store: { dispatch },
    } = context

    await dispatch(changeText({ newText: "getting at getServerSideProps" }))
  },
)

export default HomeHoc
