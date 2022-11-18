import { gql } from 'apollo-server'

export const typeDefs = gql`
  extend schema
    @link(
      url: "https://specs.apollo.dev/federation/v2.0"
      import: ["@key", "@shareable"]
    )

  type Document @key(fields: "documentId") {
    id: ID!
    documentId: String!
    title: String!
    artifact: String!
    body: String
    meritDecision: Boolean
    mandatoryPrecedent: Boolean
    readingTime: Int
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
    documentId: String!
    title: String!
    artifact: String!
    body: String
    meritDecision: Boolean
    mandatoryPrecedent: Boolean
    readingTime: Int
  }
`
