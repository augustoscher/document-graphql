import { ApolloServer } from 'apollo-server'
import { buildSubgraphSchema } from '@apollo/subgraph'

import { PORT } from './config/constants'
import { typeDefs } from './types'
import { resolvers } from './resolvers'
import { connectDatabase } from './config/database'

const server = new ApolloServer({
  schema: buildSubgraphSchema({ typeDefs, resolvers })
})

connectDatabase()

server
  .listen({ port: PORT })
  .then(({ url }) => {
    console.log(`Document graphql ready at ${url}`)
  })
  .catch((err) => {
    console.error(err)
  })
