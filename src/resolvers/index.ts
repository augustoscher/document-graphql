import Document from '../models/document'

export const resolvers = {
  Document: {
    __resolveReference: async ({ id }) => {
      return await Document.findById(id)
    }
  },
  Query: {
    documents: async () => {
      return await Document.find({})
    },
    document: async (_, { id }) => {
      return await Document.findById(id)
    }
  },
  Mutation: {
    createDocument: async (_, { document }) => {
      const newDocument = new Document(document)
      return await newDocument.save()
    },
    updateDocument: async (_, { id, document }) => {
      return await Document.findByIdAndUpdate(id, document, {
        new: true
      })
    },
    deleteDocument: async (_, { id }) => {
      return await Document.findByIdAndRemove(id)
    }
  }
}
