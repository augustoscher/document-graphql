import { ApolloServer } from 'apollo-server'
import { buildSubgraphSchema } from '@apollo/subgraph'

import { typeDefs } from './types'
import { resolvers } from './resolvers'

const port = process.env.PORT || 4001

const server = new ApolloServer({
  schema: buildSubgraphSchema({ typeDefs, resolvers })
})

server
  .listen({ port })
  .then(({ url }) => {
    console.log(`Document graphql ready at ${url}`)
  })
  .catch((err) => {
    console.error(err)
  })
