// import node_modules
import { gql } from "apollo-server-fastify"

// main
export const typeDefs = gql`
  # query
  type Query {
    sample(data: SampleArgs): SampleReturn
  }

  # args
  input SampleArgs {
    num: Int
  }

  # returns
  type SampleReturn {
    calculated: Int
  }
`
