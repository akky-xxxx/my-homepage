// import node_modules
import React from "react"
import { Meta, Story } from "@storybook/react"

// import components
import { Pagination, PaginationProps } from "./index"

// main
const config: Meta<PaginationProps> = {
  title: "molecules/Pagination",
  component: Pagination,
  argTypes: {
    handleClickPagination: {
      action: "handleClickPagination",
    },
  },
}
export default config

const Template: Story<PaginationProps> = (props) => <Pagination {...props} />
export const FirstPageOf10p = Template.bind({})
FirstPageOf10p.args = {
  maxPages: 10,
  currentPage: 1,
}

export const SecondPageOf10p = Template.bind({})
SecondPageOf10p.args = {
  maxPages: 10,
  currentPage: 2,
}

export const CenterPageOf10p = Template.bind({})
CenterPageOf10p.args = {
  maxPages: 10,
  currentPage: 5,
}

export const PrevPageOfLast10p = Template.bind({})
PrevPageOfLast10p.args = {
  maxPages: 10,
  currentPage: 9,
}

export const LastPageOf10p = Template.bind({})
LastPageOf10p.args = {
  maxPages: 10,
  currentPage: 10,
}

export const PageOf1p = Template.bind({})
PageOf1p.args = {
  maxPages: 1,
  currentPage: 1,
}

export const FirstPageOf2p = Template.bind({})
FirstPageOf2p.args = {
  maxPages: 2,
  currentPage: 1,
}

export const LastPageOf2p = Template.bind({})
LastPageOf2p.args = {
  maxPages: 2,
  currentPage: 2,
}

export const FirstPageOf3p = Template.bind({})
FirstPageOf3p.args = {
  maxPages: 3,
  currentPage: 1,
}

export const CenterPageOf3p = Template.bind({})
CenterPageOf3p.args = {
  maxPages: 3,
  currentPage: 2,
}

export const LastPageOf3p = Template.bind({})
LastPageOf3p.args = {
  maxPages: 3,
  currentPage: 3,
}
