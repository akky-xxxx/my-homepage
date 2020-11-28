// import node_modules
import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client"

// main
const cache = new InMemoryCache()
const link = createHttpLink({
  uri: `${process.env.API_SERVER}/graphql`,
})

export const apolloClient = new ApolloClient({
  cache,
  link,
})
