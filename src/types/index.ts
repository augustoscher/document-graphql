import { gql } from 'apollo-server'

export const typeDefs = gql`
  type Document {
    id: ID!
    title: String!
    artifact: String!
    body: String
    createdAt: String
  }

  type Query {
    documents: [Document]
    document(id: ID!): Document
  }

  type Mutation {
    createDocument(document: DocumentInput): Document
    updateDocument(id: String, document: DocumentInput): Document
    deleteDocument(id: ID): Document
  }
  input DocumentInput {
    title: String!
    artifact: String!
    body: String
  }
`
