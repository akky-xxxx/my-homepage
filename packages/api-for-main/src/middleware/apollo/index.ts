// import node_modules
import { ApolloServer } from "apollo-server-fastify"

// import others
import { resolvers } from "@root/controllers"
import { typeDefs } from "@middleware/apollo/typeDefs"
import { mocks } from "@middleware/apollo/mocks"

// main
const apolloServer = new ApolloServer({
  resolvers,
  typeDefs,
  mocks,
})

const apollo = apolloServer.createHandler()

export { apollo }
