// import node_modules
import React from "react"
import Link from "next/link"

// import others
import { wrapper, actions } from "@@/store"

// main
const {
  server: {
    app: {
      layout: { changeTitle },
    },
  },
} = actions
const Home = () => (
  <div>
    <h1>home</h1>
    <div>
      <Link href="/sample">サンプル</Link>
    </div>
  </div>
)

export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    const {
      store: { dispatch },
    } = context
    await dispatch(changeTitle({ newTitle: "管理画面" }))
  },
)

export default Home
