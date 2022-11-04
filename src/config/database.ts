import mongoose from 'mongoose'

import { MONGODB_URL, MONGO_USER, MONGO_PASSWORD, NODE_ENV } from './constants'

const defaultConfig = {
  user: MONGO_USER,
  pass: MONGO_PASSWORD,
  useNewUrlParser: true,
  useUnifiedTopology: true
}

const devConfig = {
  ...defaultConfig,
  authSource: 'admin'
}

export const connectDatabase = () => {
  mongoose
    .connect(
      MONGODB_URL,
      NODE_ENV === 'development' ? devConfig : defaultConfig
    )
    .then(() => console.log('Database connected'))
    .catch((error) => console.log('Databased failed: ', error))
}
