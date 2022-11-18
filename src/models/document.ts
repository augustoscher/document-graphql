import mongoose from 'mongoose'

const documentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  documentId: {
    type: Number,
    required: true
  },
  artifact: {
    type: String,
    required: true,
    enum: ['JURISPRUDENCIA', 'PECA', 'DOUTRINA', 'ARTIGO', 'NOTICIA', 'MODELO']
  },
  body: {
    type: String
  },
  meritDecision: {
    type: Boolean
  },
  mandatoryPrecedent: {
    type: Boolean
  },
  readingTime: {
    type: Number
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

export default mongoose.model('document', documentSchema, 'document')
