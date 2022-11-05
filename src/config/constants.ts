const {
  NODE_ENV = process.env.NODE_ENV || 'development',
  MONGODB_URL = process.env.MONGO_URL || 'mongodb://db:27017/graphql',
  MONGO_USER = process.env.MONGO_USER || 'document-graphql',
  MONGO_PASSWORD = process.env.MONGO_PASSWORD || 'document-graphql',
  PORT = process.env.PORT || 4002
} = process.env

export { NODE_ENV, MONGODB_URL, MONGO_USER, MONGO_PASSWORD, PORT }
