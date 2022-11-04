const {
  NODE_ENV = 'development',
  MONGODB_URL = 'mongodb://db:27017/graphql',
  MONGO_USER = 'document-graphql',
  MONGO_PASSWORD = 'document-graphql',
  PORT = 4002
} = process.env

export { NODE_ENV, MONGODB_URL, MONGO_USER, MONGO_PASSWORD, PORT }
