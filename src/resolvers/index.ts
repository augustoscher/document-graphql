import Document from '../models/document'

export const resolvers = {
  Query: {
    movies: async () => {
      return await Document.find({})
    },
    movie: async (_, { id }) => {
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
