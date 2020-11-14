// import node_modules
import { IResolvers } from "apollo-server-fastify"

// import controllers
import { sampleController } from "@controllers/sampleController"

// main
export const resolvers: IResolvers = {
  Query: {
    sample: sampleController,
  },
}
